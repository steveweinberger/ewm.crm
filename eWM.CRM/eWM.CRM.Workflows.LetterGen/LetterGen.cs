using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Crm.Sdk.Messages;

namespace eWM.CRM.Workflows.LetterGen
{
    public class LetterGen : CodeActivity
    {
        [Input("SourceIncident")]
        [ReferenceTarget("incident")]
        public InArgument<EntityReference> SourceIncident { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            //Create the context
            IWorkflowContext context = executionContext.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

            // Get the target entity from the context
            Entity regIncident = (Entity)service.Retrieve("incident", context.PrimaryEntityId, new ColumnSet(new string[] { "title", "ownerid" }));
            string title = (string)regIncident.Attributes["title"];
            EntityReference ownerid = (EntityReference)regIncident.Attributes["ownerid"];

            Entity emailEntity = new Entity("email");

            Entity fromParty = new Entity("activityparty");
            fromParty.Attributes["partyid"] = new EntityReference("systemuser", context.InitiatingUserId);
            EntityCollection from = new EntityCollection();
            from.Entities.Add(fromParty);

            Entity toParty = new Entity("activityparty");
            toParty.Attributes["partyid"] = new EntityReference("systemuser", ownerid.Id);
            EntityCollection to = new EntityCollection();
            to.Entities.Add(toParty);

            EntityReference regarding = new EntityReference("incident", context.PrimaryEntityId);

            emailEntity["to"] = to;
            emailEntity["from"] = from;
            emailEntity["subject"] = "Case Summary of " + title;
            emailEntity["regardingobjectid"] = regarding;
            Guid EmailID = service.Create(emailEntity);

            EntityReference abc = SourceIncident.Get<EntityReference>(executionContext);
            AddAttachmentToEmailRecord(service, EmailID, SourceIncident.Get<EntityReference>(executionContext));
        }

        private void AddAttachmentToEmailRecord(IOrganizationService service, Guid SourceEmailID, EntityReference IncidentID)
        {
            //create email object
            Entity emailCreated = service.Retrieve("email", SourceEmailID, new ColumnSet(true));
            QueryExpression QueryNotes = new QueryExpression("annotation");
            QueryNotes.ColumnSet = new ColumnSet(new string[] { "subject", "mimetype", "filename", "documentbody" });
            QueryNotes.Criteria = new FilterExpression();
            QueryNotes.Criteria.FilterOperator = LogicalOperator.And;
            QueryNotes.Criteria.AddCondition(new ConditionExpression("objectid", ConditionOperator.Equal, IncidentID.Id));
            EntityCollection MimeCollection = service.RetrieveMultiple(QueryNotes);
            if (MimeCollection.Entities.Count > 0)
            { //we need to fetch first attachment
                Entity NotesAttachment = MimeCollection.Entities.First();
                //Create email attachment
                Entity EmailAttachment = new Entity("activitymimeattachment");
                if (NotesAttachment.Contains("subject"))
                    EmailAttachment["subject"] = NotesAttachment.GetAttributeValue<string>("subject");
                EmailAttachment["objectid"] = new EntityReference("email", emailCreated.Id);
                EmailAttachment["objecttypecode"] = "email";
                if (NotesAttachment.Contains("filename"))
                    EmailAttachment["filename"] = NotesAttachment.GetAttributeValue<string>("filename");
                if (NotesAttachment.Contains("documentbody"))
                    EmailAttachment["body"] = NotesAttachment.GetAttributeValue<string>("documentbody");
                if (NotesAttachment.Contains("mimetype"))
                    EmailAttachment["mimetype"] = NotesAttachment.GetAttributeValue<string>("mimetype");
                service.Create(EmailAttachment);
            }
            // Sending email
            SendEmailRequest SendEmail = new SendEmailRequest();
            SendEmail.EmailId = emailCreated.Id;
            SendEmail.TrackingToken = "";
            SendEmail.IssueSend = true;
            SendEmailResponse res = (SendEmailResponse)service.Execute(SendEmail);
        }
    }
}
