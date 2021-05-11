using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;

namespace eWM.Xrm.Common
{
    public class CrmHelper
    {
        public CrmHelper()
        { }
        public Guid GetTransactionId(OrganizationServiceContext serviceContext, string currencycode)
        {
            var transactioncurrency = (from a in serviceContext.CreateQuery(Constants.TRANSACTIONCURRENCY_ENTITY_NAME)
                                       where a[Constants.TRANSACTIONCURRENCY_ISOCURRENCYCODE_FIELD].Equals(currencycode)
                                       select a).FirstOrDefault();

            if (transactioncurrency != null)
                return transactioncurrency.Id;

            return Guid.Empty;
        }

        public void CalculateRecovery(OrganizationServiceContext serviceContext, IOrganizationService service, ITracingService tracingService, Guid detailclaimid)
        {
            var detailclaim = service.Retrieve(Constants.DETAILCLAIM_ENTITY_NAME, detailclaimid, new ColumnSet(true));

            var totalidentifiedrecoveryamount = 0m;

            if (detailclaim.Contains(Constants.DETAILCLAIM_TOTALEXCEPTIONAMOUNT_FIELD))
                totalidentifiedrecoveryamount = ((Money)detailclaim[Constants.DETAILCLAIM_TOTALEXCEPTIONAMOUNT_FIELD]).Value;
            tracingService.Trace("Total Identified Recovery Amount: " + totalidentifiedrecoveryamount);

            var totalrecoveredamount = GetTotals(service, tracingService, Constants.RECOVERY_ENTITY_NAME, Constants.RECOVERY_PAIDAMOUNT_FIELD, Constants.RECOVERY_DETAILCLAIM_FIELD,detailclaimid);
            tracingService.Trace("Total Recovered Amount: " + totalrecoveredamount);

            var totalremainigamount = totalidentifiedrecoveryamount - totalrecoveredamount;
            tracingService.Trace("Total Remaining Amount: " + totalremainigamount);

            var dc = new Entity(Constants.DETAILCLAIM_ENTITY_NAME);
            dc.Id = detailclaimid;
            dc[Constants.DETAILCLAIM_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD] = new Money(totalidentifiedrecoveryamount);
            dc[Constants.DETAILCLAIM_TOTALRECOVEREDAMOUNT_FIELD] = new Money(totalrecoveredamount);
            dc[Constants.DETAILCLAIM_TOTALREMAININGRECOVERYAMOUNT_FIELD] = new Money(totalremainigamount);
            service.Update(dc);

            tracingService.Trace("Detail Claim Recovery Amount Updated");

            #region HeaderClaim
            tracingService.Trace("Calculate Header Claim Total Recoveries");
            
           #endregion
        }

        private decimal GetTotals(IOrganizationService service, ITracingService tracingService, string entity, string totalsfieldname, string parentidname, Guid parentid, string entityidfield = "", string entityid = "", bool isMoney = true)
        {
            var total = 0.0m;
            string query = String.Format(@"<fetch distinct='false' mapping='logical' aggregate='true'> 
                        <entity name='" + entity + @"'>
                            <attribute name='" + totalsfieldname + @"' alias='Totals' aggregate='sum'/> 
                                 <filter type='and'>
                                    <condition attribute='" + parentidname + "' operator='eq' value='" + parentid + "' />");

            //if (entityidfield != "" && entityid != "")
            //query += "<condition attribute='" + entityidfield + "' operator='ne' value='" + entityid + "' />";

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

            return total;
        }
    }
}
