#region Using Statements
using System;
using System.ServiceModel;
using System.ServiceModel.Description;
using System.Diagnostics;
using System.Xml.Linq;
using System.IO;
using System.Collections.Generic;
using System.Xml;
using System.Threading;

// These namespaces are found in the Microsoft.Xrm.Sdk.dll assembly
// found in the SDK\bin folder.
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Discovery;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;

// This namespace is found in Microsoft.Crm.Sdk.Proxy.dll assembly
// found in the SDK\bin folder.
using Microsoft.Crm.Sdk.Messages;
#endregion

namespace CreateAttributes
{
    class FindingsData
    {
        #region Class Level Members
        /// <summary>
        /// Stores the organization service proxy.
        /// </summary>

        private OrganizationServiceProxy _serviceProxy;
        private const String _customFindingCategoryEntityName = "cog_findingcategorycode";
        //System.String ManagedSolutionLocation = @".\\UpsertSample_1_0_0_0_managed.zip";

        #endregion Class Level Members

        #region FillFindingCategoryTable
        /// <summary>
        /// Procedure: FillFindingCategoryTable
        /// Handles: 
        /// Created By: Steve Weinberger
        /// Created Date: 09/07/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        public void FillFindingCategoryTable()
        {
            //string serverName = "http://azdev81npi04:5555/WorkflowManager";
            //Uri organizationUri = new Uri(string.Format("{0}/XRMServices/2011/Organization.svc", serverName));
            //Uri homeRealmUri = null;
            //ClientCredentials credentials = new ClientCredentials();
            //PublicFunctions pf = new PublicFunctions();
            ////  use UserName object for CRM Online
            ////credentials.UserName.UserName = "steve.weinberger@cognosante.com";
            ////credentials.UserName.Password = "Ramstein25530";

            ////  use default for OnPrem...
            //credentials.Windows.ClientCredential = System.Net.CredentialCache.DefaultNetworkCredentials;

            //IOrganizationService service = new OrganizationServiceProxy(organizationUri, homeRealmUri, credentials, null);

            // Obtain the target organization's Web address and client logon 
            // credentials from the user.
            ServerConnection serverConnect = new ServerConnection();
            ServerConnection.Configuration config = serverConnect.GetServerConfiguration();

            FindingsData app = new FindingsData();
            app.Run(config, true);
        }
        #endregion

        
        /// <summary>
        /// Imports the UpsertSample solution if it is not already installed.
        /// Inserts the new records from newsampleproduct.xml to sample_product entity using Upsert.
        /// Updates records in sample_product with data from updatedsampleproduct.xml using Upsert.
        /// Optionally allows the user view the records in browser.
        /// Optionally deletes the UpsertSsample solution.
        /// </summary>
        /// <param name="serverConfig">Contains server connection information.</param>
        /// <param name="promptForDelete">When True, the user will be prompted to delete all
        /// created entities.</param>
        public void Run(ServerConnection.Configuration serverConfig, bool promptForDelete)
        {
            try
            {
                // Connect to the Organization service. 
                // The using statement assures that the service proxy will be properly disposed.
                using (_serviceProxy = new OrganizationServiceProxy(serverConfig.OrganizationUri, serverConfig.HomeRealmUri, serverConfig.Credentials, serverConfig.DeviceCredentials))
                {

                    // This statement is required to enable early-bound type support.
                    _serviceProxy.EnableProxyTypes();

                    // Imports the UpsertSample solution if it is not already installed.
                    //ImportUpsertSampleSolution();

                    // Waits for the alternate key to be active.
                    WaitForEntityAndKeysToBeActive(_serviceProxy, _customFindingCategoryEntityName.ToLower());

                    // Processes the data in newsampleproduct.xml 
                    // to represent new products. Creates 13 records in sample_product entity.
                    // RecordCreated property returns true to indicate the records were created.

                    ProcessUpsert(".\\newsampleproduct.xml");
                }
            }

            // Catch any service fault exceptions that Microsoft Dynamics CRM throws.
            catch (FaultException<Microsoft.Xrm.Sdk.OrganizationServiceFault>)
            {
                // You can handle an exception here or pass it back to the calling method.
                throw;
            }
        }
        public void ProcessUpsert(String Filename)
        {
            Console.WriteLine("Executing upsert operation.....");
            XmlTextReader tr = new XmlTextReader(Filename);
            XmlDocument xdoc = new XmlDocument();
            xdoc.Load(tr);
            XmlNodeList xnlNodes = xdoc.DocumentElement.SelectNodes("/findingcategorycodes/findingcategorycode");

            foreach (XmlNode xndNode in xnlNodes)
            {                
                String findingcategoryName = xndNode.SelectSingleNode("Name").InnerText;
                String findingcategoryCode = xndNode.SelectSingleNode("Code").InnerText;
                String findingcategoryCategory = xndNode.SelectSingleNode("Description").InnerText;

                //use alternate key for findingcategory
                Entity findingcategoryToCreate = new Entity("cog_findingcategorycode", "cog_findingcategorycode", findingcategoryCode);

                findingcategoryToCreate["sample_name"] = findingcategoryName;
                findingcategoryToCreate["sample_category"] = findingcategoryCategory;
                findingcategoryToCreate["sample_make"] = findingcategoryCode;
                UpsertRequest request = new UpsertRequest()
                {
                    Target = findingcategoryToCreate
                };

                try
                {
                    // Execute UpsertRequest and obtain UpsertResponse. 
                    UpsertResponse response = (UpsertResponse)_serviceProxy.Execute(request);
                    if (response.RecordCreated)
                        Console.WriteLine("New record {0} is created!", findingcategoryName);
                    else
                        Console.WriteLine("Existing record {0} is updated!", findingcategoryName);
                }

                // Catch any service fault exceptions that Microsoft Dynamics CRM throws.
                catch (FaultException<Microsoft.Xrm.Sdk.OrganizationServiceFault>)
                {
                    throw;
                }

            }

            //// Prompts to view the sample_findingcategory entity records.
            //// If you choose "y", IE will be launched to display the new or updated records.
            //if (PromptForView())
            //{
            //    ViewEntityListInBrowser();
            //}

        }

        /// <summary>
        /// Alternate keys may not be active immediately after the UpsertSample 
        /// solution is installed.This method polls the metadata for the sample_product
        /// entity to delay execution of the rest of the sample until the alternate keys are ready.
        /// </summary>
        /// <param name="service">Specifies the service to connect to.</param>
        /// <param name="entityLogicalName">The entity logical name, i.e. sample_product.</param>
        private static void WaitForEntityAndKeysToBeActive(IOrganizationService service, string entityLogicalName)
        {
            EntityQueryExpression entityQuery = new EntityQueryExpression();
            entityQuery.Criteria = new MetadataFilterExpression(LogicalOperator.And)
            {
                Conditions = { { new MetadataConditionExpression("LogicalName", MetadataConditionOperator.Equals, entityLogicalName) } }
            };

            entityQuery.Properties = new MetadataPropertiesExpression("Keys");

            RetrieveMetadataChangesRequest metadataRequest = new RetrieveMetadataChangesRequest() { Query = entityQuery };

            bool allKeysReady = false;
            do
            {
                System.Threading.Thread.Sleep(5000);

                Console.WriteLine("Check for Entity...");
                RetrieveMetadataChangesResponse metadataResponse = (RetrieveMetadataChangesResponse)service.Execute(metadataRequest);

                if (metadataResponse.EntityMetadata.Count > 0)
                {
                    EntityKeyMetadata[] keys = metadataResponse.EntityMetadata[0].Keys;

                    allKeysReady = true;
                    if (keys.Length == 0)
                    {
                        Console.WriteLine("No Keys Found!!!");
                        allKeysReady = false;
                    }
                    else
                    {
                        foreach (var key in keys)
                        {
                            Console.WriteLine("  Key {0} status {1}", key.SchemaName, key.EntityKeyIndexStatus);
                            allKeysReady = allKeysReady && (key.EntityKeyIndexStatus == EntityKeyIndexStatus.Active);
                        }
                    }

                }
            } while (!allKeysReady);

            Console.WriteLine("Waiting 30 seconds for metadata caches to all synchronize...");
            System.Threading.Thread.Sleep(TimeSpan.FromSeconds(30));
        }
    }
}
