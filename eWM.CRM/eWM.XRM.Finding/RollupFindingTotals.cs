#region using statements
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using eWM.Xrm.Common;
using Microsoft.Crm.Sdk.Messages;
#endregion
namespace eWM.XRM.Finding
{
    public class RollupFindingTotals : IPlugin
    {
        private const string PLUGIN_NAME = "RollupFindingTotals";

        #region Execute
        /// <summary>
        /// Execute
        /// </summary>
        /// <param name="serviceProvider"></param>
        public void Execute(IServiceProvider serviceProvider)
        {
            if (serviceProvider == null)
            {
                throw new ArgumentNullException("serviceProvider");
            }

            // Get execution context, tracing, and Org Service factory from the svc provider then use the factory to generate the Organization Service.
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory ServiceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = ServiceFactory.CreateOrganizationService(null);
            ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            //create the service context
            OrganizationServiceContext serviceContext = new OrganizationServiceContext(service);

            //log
            tracingService.Trace("Start logging");
            tracingService.Trace("Context Message: " + context.MessageName.ToLower());

            try
            {
                var detailclaimid = Guid.Empty;
                var isdeletecontext = false;
                if (context.MessageName.ToLower() == Constants.CONTEXT_CREATE || context.MessageName.ToLower() == Constants.CONTEXT_UPDATE)
                {
                    tracingService.Trace("In Update/Create Context");
                    if (context.PrimaryEntityName == Constants.FINDING_ENTITY_NAME)
                    {
                        if (context.PostEntityImages[Constants.POSTIMAGE_ALIAS_NAME] == null) { throw new InvalidPluginExecutionException("The plugin needs a post image registered with alias '" + Constants.POSTIMAGE_ALIAS_NAME + "'."); }
                        detailclaimid = ((EntityReference)(context.PostEntityImages[Constants.POSTIMAGE_ALIAS_NAME][Constants.FINDING_DETAILCLAIMID_FIELD])).Id;
                    }
                    else if (context.PrimaryEntityName == Constants.RECOVERY_ENTITY_NAME)
                    {
                        if (context.PostEntityImages[Constants.POSTIMAGE_ALIAS_NAME] == null) { throw new InvalidPluginExecutionException("The plugin needs a post image registered with alias '" + Constants.POSTIMAGE_ALIAS_NAME + "'."); }
                        detailclaimid = ((EntityReference)(context.PostEntityImages[Constants.POSTIMAGE_ALIAS_NAME][Constants.RECOVERY_DETAILCLAIM_FIELD])).Id;
                    }

                }
                else if (context.InputParameters["Target"] is EntityReference)
                {
                    tracingService.Trace("In Delete Context");
                    if (context.PreEntityImages[Constants.PREIMAGE_ALIAS_NAME] == null) { throw new InvalidPluginExecutionException("The plugin needs a pre image registered with alias '" + Constants.PREIMAGE_ALIAS_NAME + "'."); }
                    if (context.PreEntityImages[Constants.PREIMAGE_ALIAS_NAME].Contains(Constants.FINDING_DETAILCLAIMID_FIELD))
                    {
                        detailclaimid = ((EntityReference)context.PreEntityImages[Constants.PREIMAGE_ALIAS_NAME][Constants.FINDING_DETAILCLAIMID_FIELD]).Id;
                    }
                    else if (context.PreEntityImages[Constants.PREIMAGE_ALIAS_NAME].Contains(Constants.RECOVERY_DETAILCLAIM_FIELD))
                    {
                        detailclaimid = ((EntityReference)context.PreEntityImages[Constants.PREIMAGE_ALIAS_NAME][Constants.RECOVERY_DETAILCLAIM_FIELD]).Id;
                    }
                    tracingService.Trace("Detailclaimid initialized");
                    isdeletecontext = true;
                }

                tracingService.Trace("DetailclaimId :" + detailclaimid.ToString());

                if (detailclaimid == Guid.Empty)
                {
                    tracingService.Trace("DetailClaimId cannot be initialized");
                    return;
                }

                #region detail claim totals
                //Manually calculate rollup fields on detail claim entity record
                //Request
                tracingService.Trace("Detail Claim - Calculate Rollup Fields");
                CalculateRollupFieldRequest findingtotalscorrectquantityrequest = new CalculateRollupFieldRequest { Target = new EntityReference(Constants.DETAILCLAIM_ENTITY_NAME, detailclaimid), FieldName = Constants.DETAILCLAIM_TOTALCORRECTQUANTITY_FIELD };
                CalculateRollupFieldRequest findingtotalscorrectamountrequest = new CalculateRollupFieldRequest { Target = new EntityReference(Constants.DETAILCLAIM_ENTITY_NAME, detailclaimid), FieldName = Constants.DETAILCLAIM_TOTALCORRECTAMOUNT_FIELD };
                CalculateRollupFieldRequest findinttotalsexceptionamountrequest = new CalculateRollupFieldRequest { Target = new EntityReference(Constants.DETAILCLAIM_ENTITY_NAME, detailclaimid), FieldName = Constants.DETAILCLAIM_TOTALEXCEPTIONAMOUNT_FIELD };
                //Response
                CalculateRollupFieldResponse findingtotalscorrectquantityresponse = (CalculateRollupFieldResponse)service.Execute(findingtotalscorrectquantityrequest);
                CalculateRollupFieldResponse findingtotalscorrectamountresponse = (CalculateRollupFieldResponse)service.Execute(findingtotalscorrectamountrequest);
                CalculateRollupFieldResponse findinttotalsexceptionamountresponse = (CalculateRollupFieldResponse)service.Execute(findinttotalsexceptionamountrequest);
                tracingService.Trace("Detail Claim - Calculation Complete");

                tracingService.Trace("Compute Recovery Amount");
                CrmHelper crmHelper = new CrmHelper();
                crmHelper.CalculateRecovery(serviceContext, service, tracingService, detailclaimid);
                #endregion

                #region header claim totals
                //Rollup totals to header claim entity 
                var detailclaim = service.Retrieve(Constants.DETAILCLAIM_ENTITY_NAME, detailclaimid, new ColumnSet(Constants.DETAILCLAIM_SAKCLAIMID_FIELD));
                if (!detailclaim.Contains(Constants.DETAILCLAIM_SAKCLAIMID_FIELD))
                {
                    tracingService.Trace("Detail Claim - Id " + detailclaimid + " doesn't have associated header claim. Exiting code!");
                    return;
                }

                tracingService.Trace("Detail Claim - Header Claim Exists.");
                var claimid = ((EntityReference)detailclaim[Constants.DETAILCLAIM_SAKCLAIMID_FIELD]).Id;

                var findingtotalcorrectquantity = GetTotals(service, tracingService, Constants.DETAILCLAIM_ENTITY_NAME, Constants.DETAILCLAIM_TOTALCORRECTQUANTITY_FIELD, Constants.DETAILCLAIM_SAKCLAIMID_FIELD, claimid, isdeletecontext ? Constants.DETAILCLAIM_ID_FIELD : "", isdeletecontext ? detailclaimid.ToString() : "", false);
                var findingtotalcorrectamount = GetTotals(service, tracingService, Constants.DETAILCLAIM_ENTITY_NAME, Constants.DETAILCLAIM_TOTALCORRECTAMOUNT_FIELD, Constants.DETAILCLAIM_SAKCLAIMID_FIELD, claimid, isdeletecontext ? Constants.DETAILCLAIM_ID_FIELD : "", isdeletecontext ? detailclaimid.ToString() : "");
                var findingtotalexceptionamount = GetTotals(service, tracingService, Constants.DETAILCLAIM_ENTITY_NAME, Constants.DETAILCLAIM_TOTALEXCEPTIONAMOUNT_FIELD, Constants.DETAILCLAIM_SAKCLAIMID_FIELD, claimid, isdeletecontext ? Constants.DETAILCLAIM_ID_FIELD : "", isdeletecontext ? detailclaimid.ToString() : "");

                var recoverytotalrecoveredamount = GetTotals(service, tracingService, Constants.DETAILCLAIM_ENTITY_NAME, Constants.DETAILCLAIM_TOTALRECOVEREDAMOUNT_FIELD, Constants.DETAILCLAIM_SAKCLAIMID_FIELD, claimid);
                var recoverytotalremainingrecoveryamount = GetTotals(service, tracingService, Constants.DETAILCLAIM_ENTITY_NAME, Constants.DETAILCLAIM_TOTALREMAININGRECOVERYAMOUNT_FIELD, Constants.DETAILCLAIM_SAKCLAIMID_FIELD, claimid);
                var recoverytotalidentifiedrecoveryamount = GetTotals(service, tracingService, Constants.DETAILCLAIM_ENTITY_NAME, Constants.DETAILCLAIM_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD, Constants.DETAILCLAIM_SAKCLAIMID_FIELD, claimid);


                tracingService.Trace("Totals Completed");
                //throw new InvalidPluginExecutionException("Debugging");
                var headerclaim = new Entity(Constants.CLAIM_ENTITY_NAME);
                headerclaim.Id = claimid;

                //findings
                headerclaim[Constants.CLAIM_TOTALCORRECTQUANTITY_FIELD] = findingtotalcorrectquantity;
                headerclaim[Constants.CLAIM_TOTALCORRECTAMOUNT_FIELD] = new Money(findingtotalcorrectamount);
                headerclaim[Constants.CLAIM_TOTALEXCEPTIONAMOUNT_FIELD] = new Money(findingtotalexceptionamount);

                //recoveries
                headerclaim[Constants.CLAIM_TOTALRECOVEREDAMOUNT_FIELD] = new Money(recoverytotalrecoveredamount);
                headerclaim[Constants.CLAIM_TOTALREMAININGRECOVERYAMOUNT_FIELD] = new Money(recoverytotalremainingrecoveryamount);
                headerclaim[Constants.CLAIM_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD] = new Money(recoverytotalidentifiedrecoveryamount);

                service.Update(headerclaim);
                tracingService.Trace("Claim - Header claim totals updated.");
                #endregion

                #region case provider
                var caseproviderid = Guid.Empty;
                var claim = service.Retrieve(Constants.CLAIM_ENTITY_NAME, claimid, new ColumnSet(Constants.CLAIM_CASEPROVIDERID_FIELD));
                if (!claim.Contains(Constants.CLAIM_CASEPROVIDERID_FIELD))
                {
                    tracingService.Trace("Claim - Id " + claimid + " doesn't have associated case provider. Exiting code!");
                    return;
                }
                else
                    caseproviderid = ((EntityReference)claim[Constants.CLAIM_CASEPROVIDERID_FIELD]).Id;

                tracingService.Trace("Case Provider - Recovery Amount Calculation");
                CalculateRollupFieldRequest totalidentifiedrecoveryamount = new CalculateRollupFieldRequest { Target = new EntityReference(Constants.CASEPROVIDER_ENTITY_NAME, caseproviderid), FieldName = Constants.CASEPROVIDER_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD };
                CalculateRollupFieldRequest totalrecoveredamount = new CalculateRollupFieldRequest { Target = new EntityReference(Constants.CASEPROVIDER_ENTITY_NAME, caseproviderid), FieldName = Constants.CASEPROVIDER_TOTALRECOVEREDAMOUNT_FIELD };
                CalculateRollupFieldRequest totalremainingrecoveryamount = new CalculateRollupFieldRequest { Target = new EntityReference(Constants.CASEPROVIDER_ENTITY_NAME, caseproviderid), FieldName = Constants.CASEPROVIDER_TOTALREMAININGRECOVERYAMOUNT_FIELD };
                ////Response
                CalculateRollupFieldResponse totalidentifiedrecoveryamountresponse = (CalculateRollupFieldResponse)service.Execute(totalidentifiedrecoveryamount);
                CalculateRollupFieldResponse totalrecoveredamountresponse = (CalculateRollupFieldResponse)service.Execute(totalrecoveredamount);
                CalculateRollupFieldResponse totalremainingrecoveryamountresponse = (CalculateRollupFieldResponse)service.Execute(totalremainingrecoveryamount);
                tracingService.Trace("Case Provider - Recovery Amount Calculation Complete");
                #endregion

                #region case
                var caseid = Guid.Empty;
                var caseprovider = service.Retrieve(Constants.CASEPROVIDER_ENTITY_NAME, caseproviderid, new ColumnSet(true));
                if (!caseprovider.Contains(Constants.CASEPROVIDER_CASEID_FIELD))
                {
                    tracingService.Trace("CaseProvider with Id " + caseproviderid + " doesn't have associated case. Exiting code!");
                    return;
                }
                else
                    caseid = ((EntityReference)caseprovider[Constants.CASEPROVIDER_CASEID_FIELD]).Id;

                tracingService.Trace("Calculate case total recovery totals");
                var casetotalidentifiedrecoveryamount = GetTotals(service, tracingService, Constants.CASEPROVIDER_ENTITY_NAME, Constants.CASEPROVIDER_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD, Constants.CASEPROVIDER_CASEID_FIELD, caseid);
                var casetotalrecoveredamount = GetTotals(service, tracingService, Constants.CASEPROVIDER_ENTITY_NAME, Constants.CASEPROVIDER_TOTALRECOVEREDAMOUNT_FIELD, Constants.CASEPROVIDER_CASEID_FIELD, caseid);
                var casetotalremainingrecoveryamount = GetTotals(service, tracingService, Constants.CASEPROVIDER_ENTITY_NAME, Constants.CASEPROVIDER_TOTALREMAININGRECOVERYAMOUNT_FIELD, Constants.CASEPROVIDER_CASEID_FIELD, caseid);

                tracingService.Trace("Case total recoveries calculated");

                //update case
                tracingService.Trace("Update Case");
                var caseentity = new Entity(Constants.CASE_ENTITY_NAME);
                caseentity.Id = caseid;
                caseentity[Constants.CASE_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD] = new Money(casetotalidentifiedrecoveryamount);
                caseentity[Constants.CASE_TOTALRECOVEREDAMOUNT_FIELD] = new Money(casetotalrecoveredamount);
                caseentity[Constants.CASE_TOTALREMAININGRECOVERYAMOUNT_FIELD] = new Money(casetotalremainingrecoveryamount);
                service.Update(caseentity);
                tracingService.Trace("Case Updated");
                #endregion
            }
            catch (InvalidPluginExecutionException ex)
            {
                tracingService.Trace("Error in pluing " + PLUGIN_NAME + ". " + ex.Message);
                throw;
            }
        }
        #endregion

        #region GetTotals
        /// <summary>
        /// GetTotals
        /// </summary>
        /// <param name="service"></param>
        /// <param name="tracingService"></param>
        /// <param name="entity"></param>
        /// <param name="totalsfieldname"></param>
        /// <param name="parentidname"></param>
        /// <param name="parentid"></param>
        /// <param name="entityidfield"></param>
        /// <param name="entityid"></param>
        /// <param name="isMoney"></param>
        /// <returns></returns>
        private decimal GetTotals(IOrganizationService service, ITracingService tracingService, string entity, string totalsfieldname, string parentidname, Guid parentid, string entityidfield = "", string entityid = "", bool isMoney = true)
        {
            var total = 0.0m;
            string query = String.Format(@"<fetch distinct='false' mapping='logical' aggregate='true'> 
                        <entity name='" + entity + @"'>
                            <attribute name='" + totalsfieldname + @"' alias='Totals' aggregate='sum'/> 
                                 <filter type='and'>
                                    <condition attribute='" + parentidname + "' operator='eq' value='" + parentid + "' />");

            query += "</filter></entity></fetch>";

            tracingService.Trace(query);

            EntityCollection totals = service.RetrieveMultiple(new FetchExpression(query));
            if (totals != null && totals.Entities != null && totals.Entities.Count > 0)
                if (totals.Entities[0].Contains("Totals"))
                {
                    if (isMoney)
                        try { total = ((Money)((AliasedValue)totals.Entities[0]["Totals"]).Value).Value; } catch (Exception) { }
                    else
                        try { total = Convert.ToDecimal(((AliasedValue)totals.Entities[0]["Totals"]).Value); } catch (Exception) { }
                }

            tracingService.Trace("Total :" + total.ToString());
            return total;
        }
        #endregion
    }
}
