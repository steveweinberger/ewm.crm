using System.Activities;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using Microsoft.Xrm.Sdk.Query;

namespace EWM.Xrm.SharePoint
{
    public sealed class CreateDocumentLocation : CodeActivity
    {
        /// <summary>
        /// A reference to the site that you want to create a folder in. 
        /// You could store a look up to a site for each customer and populate this 
        /// parameter from the related account. 
        /// </summary>
        [Input("Site")]
        [ReferenceTarget("sharepointsite")]
        [RequiredArgument]
        public InArgument<EntityReference> Site { get; set; }

        /// <summary>
        /// The ‘Dynamic Record Url’ for the record that you 
        /// want the SharePoint document location to be related to. 
        /// This uses my Polymorphic input parameter technique. You simply need to pass 
        /// the Record Url (Dynamic) for the record that you wish to create the folder for. 
        /// </summary>
        [Input("Record Dynamic Url")]
        [RequiredArgument]
        public InArgument<string> RecordUrl { get; set; }

        /// <summary>
        /// The name of the document location to create the folder 
        /// underneath. In the out of the box integration this is the entity 
        /// logical name (e.g. account) 
        /// </summary>
        [Input("Document Library Name")]
        [RequiredArgument]
        public InArgument<string> DocumentLibraryName { get; set; }

        /// <summary>
        /// The name of the folder to create. You could use the 
        /// client name, client ID etc. – but it will automatically have the GUID 
        /// appended to it to ensure uniqueness just like the out of the box integration
        /// </summary>
        [Input("Record Folder Name")]
        [RequiredArgument]
        public InArgument<string> RecordFolderName { get; set; }
        
        [Output("Document Location Created")]
        [ReferenceTarget("sharepointdocumentlocation")]
        public OutArgument<EntityReference> DocumentLocation { get; set; }

        [Output("Document Folder Created")]
        public OutArgument<string> DocumentFolder { get; set; }


        /// <summary>
        /// Executes the workflow activity.
        /// </summary>
        /// <param name="executionContext">The execution context.</param>
        protected override void Execute(CodeActivityContext executionContext)
        {
            // Create the tracing service
            ITracingService tracingService = executionContext.GetExtension<ITracingService>();

            if (tracingService == null)
            {
                throw new InvalidPluginExecutionException("Failed to retrieve tracing service.");
            }

            tracingService.Trace("Entered CreateDocumentLocation.Execute(), Activity Instance Id: {0}, Workflow Instance Id: {1}",
                executionContext.ActivityInstanceId,
                executionContext.WorkflowInstanceId);


            // Create the context
            IWorkflowContext context = executionContext.GetExtension<IWorkflowContext>();

            if (context == null)
            {
                throw new InvalidPluginExecutionException("Failed to retrieve workflow context.");
            }

            tracingService.Trace("CreateDocumentLocation.Execute(), Correlation Id: {0}, Initiating User: {1}",
                context.CorrelationId,
                context.InitiatingUserId);

            IOrganizationServiceFactory serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
            IOrganizationService privService = serviceFactory.CreateOrganizationService(null);

            try
            {
                var url = RecordUrl.Get<string>(executionContext);
                var recordRef = new DynamicUrlParser(url).ToEntityReference(privService);                                

                string config = GetSecureConfigValue(privService, "PrivSharePointUser");
                string[] user = config.Split(';');

                // Create a new sharepoint service using the given priv sharepoint user credentials
                SPService spService = new SPService(user[0], user[1]);
                var docLocation = new DocumentLocationHelper(privService, spService);

                // Get the site passed into the workflow activity
                var siteId = Site.Get(executionContext);
                var site = (SharePointSite)service.Retrieve(SharePointSite.EntityLogicalName, siteId.Id, new ColumnSet("sharepointsiteid", "absoluteurl"));

                if (site != null)
                {                   
                    if (DocumentLibraryName.Get(executionContext) == "opportunity") {

                        // Create the Program (Opportunity) folder under the Cedant (Account) record
                        var programName = RecordFolderName.Get<string>(executionContext);
                        var programId = recordRef.Id;
                        var program = (Opportunity)service.Retrieve(Opportunity.EntityLogicalName, programId, new ColumnSet("opportunityid", "parentaccountid"));


                        if (program.Contains("parentaccountid")) {
                            var cedantId = program.ParentAccountId.Id;
                            var cedantName = program.ParentAccountId.Name;

                            var newLocation = docLocation.CreateChildDocumentLocation(site, cedantId, cedantName, programId, programName);

                            DocumentLocation.Set(executionContext, newLocation.ToEntityReference());
                            DocumentFolder.Set(executionContext, newLocation.AbsoluteURL);
                        }                        
                    } else {
                        // Set the name of the folder
                        recordRef.Name = RecordFolderName.Get<string>(executionContext);
                        var newLocation = docLocation.CreateDocumentLocation(site, DocumentLibraryName.Get(executionContext), recordRef, tracingService);

                        DocumentLocation.Set(executionContext, newLocation.ToEntityReference());
                        DocumentFolder.Set(executionContext, newLocation.AbsoluteURL);
                    }                    
                }
                else
                    DocumentLocation.Set(executionContext, null);
            }
            catch (FaultException<OrganizationServiceFault> e)
            {
                tracingService.Trace("Exception: {0}", e.ToString());

                // Handle the exception.
                throw;
            }
        }


        /// <summary>
        /// Get a config value - using your chosen technique!
        /// </summary>
        /// <param name="privService"></param>
        /// <param name="configName"></param>
        /// <returns></returns>
        private static string GetSecureConfigValue(IOrganizationService privService, string configName)
        {

            // TODO: Add your chosen method of storing secure config!
            switch (configName)
            {
                case "PrivSharePointUser":
                    // Username and password separated by ;
                    //return "username;password";
                    return "steve.weinberger@cognosante.com;YOURPASSWORD;";

                default:
                    return null;
            }
        }
    }
}
