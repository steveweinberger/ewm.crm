#region using statements
using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
#endregion

namespace EWM.Xrm.SharePoint
{
    /// Name: CopyFile.cs
    /// Use: Object that is used to create and store activities
    /// Created By: Syed Ali
    /// Date Created: 5/4/2017
    public class CopyFile : CodeActivity
    {
        [Input("Document Location")]
        [ReferenceTarget(SharePointDocumentLocation.EntityLogicalName)]
        public InArgument<EntityReference> DocumentLocationRecord { get; set; }

        [Input("Template Library")]
        public InArgument<string> TemplateFolder { get; set; }

        [Input("Template Name")]
        public InArgument<string> TemplateName { get; set; }

        [Input("Destination File Name")]
        public InArgument<string> DestinationFileName { get; set; }

        [Output("Destination Url")]
        public OutArgument<string> DestinationUrl { get; set; }

        /// <summary>
        /// Execute
        /// </summary>
        /// <param name="context"></param>
        protected override void Execute(CodeActivityContext context)
        {
            // Create the tracing service
            var tracingService = context.GetExtension<ITracingService>();

            if (tracingService == null)
                throw new InvalidPluginExecutionException("Error. No TracingService Found.");

            tracingService.Trace("Entered CopyFile.Execute(), Activity Instance Id: {0}, Workflow Instance Id: {1}",
                context.ActivityInstanceId,
                context.WorkflowInstanceId);

            // Create the context
            var ctx = context.GetExtension<IWorkflowContext>();
        }
    }
}
