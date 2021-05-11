using System;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Client;
using eWM.Xrm.Common;

namespace eWM.Plugins.Case
{
    public class CasePlugin : IPlugin
    {
        private const string PLUGIN_NAME = "CasePlugin";
        private Entity Case;
        private IOrganizationService _OrgService;

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

            _OrgService = service;

            if (context.PrimaryEntityName != Constants.CASE_ENTITY_NAME)
                return;

            // Obtain the target entity from the input parmameters.
            Entity entity = (Entity)context.InputParameters["Target"];
            if (context.Depth > 1) { return; }
            //log
            tracingService.Trace("Start logging");
            tracingService.Trace("Context Message: " + context.MessageName.ToLower());

            try
            {
                tracingService.Trace("In Update/Create Context");

                if (context.PrimaryEntityName != Constants.CASE_ENTITY_NAME)
                    return;

                // Create CustomerId Default
                #region Case -CustomerID 
                //Specify the field values
                //Set customerid with an existing contact guid 
                string fullName = "System User";
                QueryExpression queryContacts = new QueryExpression("contact");
                queryContacts.ColumnSet = new ColumnSet(true);
                FilterExpression queryFilter = new FilterExpression(LogicalOperator.And);
                queryFilter.AddCondition("fullname", ConditionOperator.Equal, fullName);
                queryContacts.Criteria = queryFilter;
                EntityCollection collectionContacts = service.RetrieveMultiple(queryContacts);
                Guid contactId = Guid.Empty;
                tracingService.Trace("Retrieving Contact");
                if (collectionContacts.Entities.Count == 1)
                {
                    contactId = collectionContacts.Entities[0].Id;
                }
                tracingService.Trace("System User ContactId = " + contactId.ToString());

                //Check to see if the customer id is already set to System User
                
                Entity caseToContact = service.Retrieve(Constants.CASE_ENTITY_NAME, entity.Id, new ColumnSet(true));
                tracingService.Trace("caseContact = " + caseToContact.Attributes[Constants.CASE_CUSTOMERID_FIELD].ToString());
                var owningUnit = (EntityReference)(caseToContact.Attributes[Constants.CASE_CUSTOMERID_FIELD]);
                tracingService.Trace("owningUnit = " + owningUnit);
                var caseContact = owningUnit.Id;
                tracingService.Trace("caseContact = " + caseContact);
                tracingService.Trace("ContactId = " + contactId.ToString());

                if (caseContact.ToString() != contactId.ToString())
                {
                    tracingService.Trace("System User not defined");
                    Entity caseToUpdate = new Entity("incident");
                    caseToUpdate.Id = entity.Id;
                    caseToUpdate["customerid"] = new EntityReference("contact", contactId);
                    tracingService.Trace("Before Update");
                    service.Update(caseToUpdate);
                    tracingService.Trace("Case updated");
                }
            }
            catch (InvalidPluginExecutionException ex)
            {
                tracingService.Trace("Error in plugin " + PLUGIN_NAME + ". " + ex.Message);
                throw;
            }
            #endregion

            #region case totals
            //// Obtain the target entity from the input parmameters.
            //Entity entity = (Entity)context.InputParameters["Target"];
            //caseid = entity.Id;
            //var caseUser = "System User";
            //ColumnSet cols = new ColumnSet(
            //   new String[] { Constants.CASE_CUSTOMERID_FIELD });
            //Entity retrievedCase = (Entity)service.Retrieve(Constants.CASE_ENTITY_NAME, caseid, cols);
            //tracingService.Trace("Retrieved Case");
            //tracingService.Trace("Before Case Resolved = " + entity.LogicalName.ToString());

            //tracingService.Trace("Have Case");
            //tracingService.Trace("Before update = " + entity[Constants.CASE_CUSTOMERID_FIELD].ToString());
            //if (entity.LogicalName == "incidentresolution")
            //{
            //    tracingService.Trace("Case Resolved");
            //    return;
            //}

            //Entity recordToUpdate = service.Retrieve("contact", contactId, new ColumnSet(true));
            //recordToUpdate[Constants.CASE_CUSTOMERID_FIELD] = new EntityReference("incident", caseid);
            //service.Update(recordToUpdate);

            //if (entity[Constants.CASE_CUSTOMERID_FIELD] != null ||
            //    entity[Constants.CASE_CUSTOMERID_FIELD].ToString() != caseUser)
            //{
            //    tracingService.Trace("Into CustomerId If");
            //    if (entity[Constants.CASE_CUSTOMERID_FIELD].ToString() != caseUser)
            //    {
            //        tracingService.Trace("Customer ID <> System User");
            //        entity[Constants.CASE_CUSTOMERID_FIELD] = caseUser;
            //    }

            //    tracingService.Trace("Case CustomerId =: " + entity[Constants.CASE_CUSTOMERID_FIELD]);
            //    retrievedCase[Constants.CASE_CUSTOMERID_FIELD] = entity[Constants.CASE_CUSTOMERID_FIELD];
            //    tracingService.Trace("Retrieved Case CustomerId =: " + retrievedCase[Constants.CASE_CUSTOMERID_FIELD]);
            //    tracingService.Trace("Field Updated");

            //    // Update the incident record.
            //    service.Update(retrievedCase);
            //    tracingService.Trace("Case Updated");
            //}

            #endregion

            // Create Provider-Case relationship - No longer using
            #region CaseProvider -CustomerID - no longer using
            //if (entity.Contains(Constants.CASE_CUSTOMERID_FIELD))
            //{
            //    var providerref = (EntityReference)entity[Constants.CASE_CUSTOMERID_FIELD];
            //    tracingService.Trace("Provider Exists!");

            //    if (providerref.LogicalName == Constants.ACCOUNT_ENTITY_NAME)
            //        return; // only applicable for contacts

            //    //var caseprovider = (from c in serviceContext.CreateQuery(Constants.CASEPROVIDER_ENTITY_NAME)
            //    //                    where c[Constants.CASEPROVIDER_CASEID_FIELD].Equals(context.PrimaryEntityId)
            //    //                    && c[Constants.CASEPROVIDER_CONTACTID_FIELD].Equals(providerref.Id)
            //    //                    select c).FirstOrDefault();

            //    CrmHelper crmHelper = new CrmHelper();
            //    var transactionid = crmHelper.GetTransactionId(serviceContext, "USD");
            //    tracingService.Trace("Transaction Id: " + transactionid);

            //    // Initialize Contact Name
            //    var contact = service.Retrieve(Constants.CONTACT_ENTITY_NAME, providerref.Id, new ColumnSet(Constants.CONTACT_FULLNAME_FIELD));

            //    if (caseprovider == null) // create relationship
            //    {
            //        tracingService.Trace("Provider is not associated as related provider. Create association!");
            //        //service.Associate(Constants.CONTACT_ENTITY_NAME, providerref.Id, new Relationship(Constants.CASE_CONTACT_RELATIONSHIP_NAME), new EntityReferenceCollection() { entity.ToEntityReference() });
            //        var cp = new Entity(Constants.CASEPROVIDER_ENTITY_NAME);
            //        cp[Constants.CASEPROVIDER_CASEID_FIELD] = new EntityReference(context.PrimaryEntityName, context.PrimaryEntityId);
            //        cp[Constants.CASEPROVIDER_CONTACTID_FIELD] = new EntityReference(Constants.CONTACT_ENTITY_NAME, providerref.Id);
            //        cp[Constants.CASEPROVIDER_NAME_FIELD] = contact.Contains(Constants.CONTACT_FULLNAME_FIELD) ? contact[Constants.CONTACT_FULLNAME_FIELD].ToString() : "New Case Provider";
            //        if (transactionid != Guid.Empty)
            //            cp[Constants.CASEPROVIDER_TRANSACTIONCURRENCYID_FIELD] = new EntityReference(Constants.TRANSACTIONCURRENCY_ENTITY_NAME, transactionid);
            //        service.Create(cp);
            //        tracingService.Trace("Provide Case associated");
            //    }
            //}
            #endregion
        }

    }
}
