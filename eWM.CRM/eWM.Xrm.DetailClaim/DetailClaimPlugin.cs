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

namespace eWM.Plugins.DetailClaim
{
    class DetailClaimPlugin : IPlugin
    {
        ITracingService tracingService;

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
            tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            //create the service context
            OrganizationServiceContext serviceContext = new OrganizationServiceContext(service);

            //log
            tracingService.Trace("Start logging");

            if (context.PrimaryEntityName != Constants.DETAILCLAIM_ENTITY_NAME)
                return;



        }

        private int GetTotals(IOrganizationService service, string entity, string totalsfieldname, string parentidname, Guid parentid, Guid wotypeid)
        {
            var total = 0;
            string query = String.Format(@"<fetch distinct='false' mapping='logical' aggregate='true'> 
                        <entity name='" + entity + @"'>
                            <attribute name='" + totalsfieldname + @"' alias='Totals' aggregate='sum'/> 
                                 <filter type='and'>
                                    <condition attribute='" + parentidname + "' operator='eq' value='" + parentid + "' />");

            if (wotypeid != Guid.Empty)
                query += "<condition attribute='msdyn_workordertype' operator='eq' value='" + wotypeid + "' />";

            query += "</filter></entity></fetch>";

            tracingService.Trace(query);

            EntityCollection totals = service.RetrieveMultiple(new FetchExpression(query));
            if (totals != null && totals.Entities != null && totals.Entities.Count > 0)
                if (totals.Entities[0].Contains("Totals"))
                    total = Convert.ToInt32(((AliasedValue)totals.Entities[0]["Totals"]).Value);

            tracingService.Trace("Total :" + total.ToString());
            return total;
        }
    }
}
