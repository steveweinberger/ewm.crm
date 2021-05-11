using System;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Linq;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;

namespace eWM.AutoNumber
{
    public partial class AutoNumber : AutoNumberBasePlugin
    {
        public AutoNumber(string unsecureConfig, string secureConfig) : base(unsecureConfig, secureConfig)
        {
            // Register for any specific events by instantiating a new instance of the 'PluginEvent' class and registering it
            base.RegisteredEvents.Add(new PluginEvent()
            {
                Stage = eStage.PostOperation,
                MessageName = "Create",
                EntityName = "incident",
                PluginAction = ExecutePluginLogic
            });
            base.RegisteredEvents.Add(new PluginEvent()
            {
                Stage = eStage.PreOperation,
                MessageName = "Update",
                EntityName = "cog_cogbasicsetting",
                PluginAction = ExecutePluginLogic
            });
        }
        public void ExecutePluginLogic(IServiceProvider serviceProvider)
        {
            // Use a 'using' statement to dispose of the service context properly
            // To use a specific early bound entity replace the 'Entity' below with the appropriate class type
            using (var localContext = new LocalPluginContext<Entity>(serviceProvider))
            {
                // Todo: Place your logic here for the plugin
                var secureConfig = this.SecureConfig;

                var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
                var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
                if (context.Depth > 2)
                    return;
                var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                var crmService = serviceFactory.CreateOrganizationService(context.UserId);

                if ( context.InputParameters.Contains( "Target" ) )
                {
                    try
                    {
                        var entity = ( Entity ) context.InputParameters[ "Target" ];

                        var anc = new AutoNumberLogic( crmService, entity );

                        switch ( entity.LogicalName )
                        {
                            case "cog_cogbasicsetting":
                                anc.SetAutoNumber( );
                                break;
                            default:
                                anc.TriggerAutoNumber( );
                                break;
                        }
                        //if (entity.LogicalName == "cog_cogbsetting")
                        //    anc.SetAutoNumber();
                        //else
                        //    anc.TriggerAutoNumber();
                    }
                    catch ( FaultException < OrganizationServiceFault > ex )
                    {
                        throw new InvalidPluginExecutionException( "An error occurred: " + ex );
                    }
                    catch ( Exception ex )
                    {
                        tracingService.Trace( "Error Plugin: {0}", ex.ToString( ) );
                        throw;
                    }
                }
            }
        }
    }
}
