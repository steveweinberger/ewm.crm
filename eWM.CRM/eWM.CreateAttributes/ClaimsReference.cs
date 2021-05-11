#region Using Statements
using System;
using System.Linq;
using System.Xml.Linq;
using System.ServiceModel;
using System.ServiceModel.Description;

// These namespaces are found in the Microsoft.Xrm.Sdk.dll assembly
// found in the SDK\bin folder.
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Discovery;
using Microsoft.Xrm.Sdk.Messages;

// This namespace is found in Microsoft.Crm.Sdk.Proxy.dll assembly
// found in the SDK\bin folder.
using Microsoft.Crm.Sdk.Messages;
#endregion

namespace CreateAttributes
{
    class ClaimsReference
    { 
        #region CreateClaimsRefGlobalOptionSets
        /// <summary>
        /// Procedure: CreateClaimsRefGlobalOptionSets
        /// Handles: 
        /// Created By: Steve Weinberger
        /// Created Date: 06/07/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        public void CreateClaimsRefGlobalOptionSets()
        {
            string serverName = "http://azdev81npi04:5555/WorkflowManager";
            Uri organizationUri = new Uri(string.Format("{0}/XRMServices/2011/Organization.svc", serverName));
            Uri homeRealmUri = null;
            ClientCredentials credentials = new ClientCredentials();
            PublicFunctions pf = new PublicFunctions();
            //  use UserName object for CRM Online
            //credentials.UserName.UserName = "steve.weinberger@cognosante.com";
            //credentials.UserName.Password = "Ramstein35530";

            //  use default for OnPrem...
            credentials.Windows.ClientCredential = System.Net.CredentialCache.DefaultNetworkCredentials;

            IOrganizationService service = new OrganizationServiceProxy(organizationUri, homeRealmUri, credentials, null);

            #region Provider Option Sets
            //Claim Types
            pf.CreateGlobalOptionSet(service, "Claims", "cog_claimtype", "Claim Type", 1033, new string[] { 
            "Drug"
	        ,"EPSDT"
	        ,"Home Health"
	        ,"Inpatient"
	        ,"Claim Independent Attachments"
	        ,"Dental"
	        ,"Medical"
	        ,"Nursing Home"
	        ,"Outpatient"
	        ,"Capitation Payments"
	        ,"Screen"
	        ,"Imaged"
	        ,"Prior Authorization"
	        ,"Crossover"});
            #endregion

            
        }
        #endregion
    }
}
