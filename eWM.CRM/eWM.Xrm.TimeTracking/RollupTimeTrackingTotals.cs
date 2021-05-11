#region using statements
using System;
using System.ServiceModel;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;
using eWM.Xrm.Common;
#endregion
namespace eWM.Xrm.TimeTracking
{
    public class RollupTimeTrackingTotals : IPlugin
    {
        private const string PLUGIN_NAME = "RollupTimeTrackingTotals";

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
            if (context.Depth > 1)
                return;

            //log
            tracingService.Trace("Start logging");
            tracingService.Trace("Context Message: " + context.MessageName.ToLower());

            try
            {
                var caseid = Guid.Empty;
                tracingService.Trace("In Update/Create Context");

                if (context.PrimaryEntityName != Constants.CASE_ENTITY_NAME)
                    return;

                
                #region case totals
                // Obtain the target entity from the input parmameters.
                Entity entity = (Entity)context.InputParameters["Target"];
                caseid = entity.Id;
                ColumnSet cols = new ColumnSet(
                    new String[] { Constants.CASE_TOTALMINUTES_FIELD, Constants.CASE_TOTALTIME_FIELD });
                Entity retrievedCase = (Entity)service.Retrieve(Constants.CASE_ENTITY_NAME, caseid, cols);
                tracingService.Trace("Retrieved Case");
                tracingService.Trace("Before Case Resolved = :" + entity.LogicalName.ToString());

                if (entity.LogicalName == "incidentresolution")
                {
                    tracingService.Trace("Case Resolved");
                    return;
                }
                    
                // Retrieve minutes on case
                var casetotalminutes = retrievedCase[Constants.CASE_TOTALMINUTES_FIELD];
                tracingService.Trace("Case Total Minutes = :" + casetotalminutes.ToString());
                
                var tm = int.Parse(casetotalminutes.ToString());
                tracingService.Trace("Totals Completed");

                var totaltime = MinutesToStr(tm);
                tracingService.Trace("Minutes formatted");

                retrievedCase[Constants.CASE_TOTALTIME_FIELD] = totaltime;
                tracingService.Trace("Field Updated");


                // Update the incident record.
                //service.Update(retrievedCase);
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

        private string MinutesToStr(int minutesPassed)
        {
            var sign = string.Empty;
            if (minutesPassed < 0)
            {
                sign = "-";
            }
            var hours = LeftPad((int)Math.Floor(System.Math.Abs((double)minutesPassed / 60)));
            var minutes = LeftPad(Math.Abs(minutesPassed) % 60);

            return sign + hours + "hrs " + minutes + "min";
        }

        private string LeftPad(int number)
        {
            return ((number < 10 && number >= 0) ? "0" : "") + number;
        }

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
