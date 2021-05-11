#region Using Statements
using System;
using System.Collections.Generic;
using System.ServiceModel.Description;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Client;
#endregion

/// Name: Program.cs
/// Use: Entry point for application
/// Created By: Will Wilson
/// Date Created: 01/1/2016
namespace CreateAttributes
{
    class Program
    {
        #region Main
        /// <summary>
        /// Procedure: Main
        /// Handles: Entry point for application
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: Steve Weinberger
        /// Changes Date: 06/07/2016
        /// Changes Made: Added to TFS and added EWM global option sets
        /// </summary>
        static void Main()
        {
            try
            {
                //online version
                string serverName = "https://workflow.crm.dynamics.com/";

                //on prem version
                //string serverName = "https://pidemo.crm.dynamics.com";

                Uri organizationUri = new Uri(string.Format("{0}/XRMServices/2011/Organization.svc", serverName));
                Uri homeRealmUri = null;
                ClientCredentials credentials = new ClientCredentials();

                //  use UserName object for CRM Online
                credentials.UserName.UserName = "svc-engage_chatbot@cognosante.com";
                credentials.UserName.Password = "7YDQ5gRDnIXmDWj5Ms9a";

                //  use default for OnPrem...
                //credentials.Windows.ClientCredential = System.Net.CredentialCache.DefaultNetworkCredentials;

                IOrganizationService service = new OrganizationServiceProxy(organizationUri, homeRealmUri, credentials, null);

                string solutionName = string.Empty;
                Console.WriteLine("Please enter a Solution Name argument.");
                solutionName = Console.ReadLine();

                if (string.IsNullOrEmpty(solutionName))
                {
                    Console.WriteLine("Please enter a Solution Name argument.");
                    solutionName = Console.ReadLine();
                }
                else
                {
                    //for (int i = 0; i < args.Length; i++)
                    //{
                    //    System.Diagnostics.Debug.WriteLine("args[{0}] == {1}", i, args[i]);
                    //    solutionName = args[0];
                    //}
                    //EWMRelated ewm = new EWMRelated();
                    string entityName = string.Empty;
                    string attributeCreated = string.Empty;
                    switch (solutionName)
                    {
                        case "us29628":
                            MissouriRelated mr = new MissouriRelated();
                            mr.CreateMissouriGlobalOptionSets();
                            break;
                        case "eSanteWorkflowManagerBase":
                            #region base
                            ////Create Global OptionSets
                            //ewm.CreateEWMGlobalOptionSets();

                            ////Dump OptionSets to excel file
                            //DumpOptionSetInfo dosi = new DumpOptionSetInfo();
                            //dosi.WriteOptionSetToFile();

                            // Create storage for new attributes being created
                            //List<AttributeMetadata> addedAttributes = ewm.CreateClaimsAttributeList();

                            //entityName = "cog_detailclaim";
                            //foreach (AttributeMetadata anAttribute in addedAttributes)
                            //{
                            //    // Create the request.
                            //    CreateAttributeRequest createAttributeRequest = new CreateAttributeRequest
                            //    {
                            //        EntityName = entityName,
                            //        Attribute = anAttribute,
                            //        SolutionUniqueName = solutionName
                            //    };
                            //    // Execute the request.
                            //    service.Execute(createAttributeRequest);
                            //    Console.WriteLine("Created the attribute {0}.", anAttribute.SchemaName);
                            //}
                            #endregion
                            break;
                        case "Claims":
                            #region Detail Claim
                            ////Create Global OptionSets
                            //ewm.CreateEWMGlobalOptionSets();

                            ////Dump OptionSets to excel file
                            //DumpOptionSetInfo dosi = new DumpOptionSetInfo();
                            //dosi.WriteOptionSetToFile();

                            // Create storage for new attributes being created
                            //List<AttributeMetadata> addedClaimsAttributes = ewm.CreateClaimsAttributeList();
                            //entityName = "cog_detailclaim";
                            //attributeCreated = CreateAttribute("cog_detailclaim", addedClaimsAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedClaimEobAttributes = ewm.CreateClaimEobAttributeList();
                            //entityName = "cog_claimeob";
                            //attributeCreated = CreateAttribute("cog_claimeob", addedClaimEobAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedClaimRuleAttributes = ewm.CreateClaimRuleAttributeList();
                            //entityName = "cog_claimrule";
                            //attributeCreated = CreateAttribute("cog_claimrule", addedClaimRuleAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedClaimStatusCodeAttributes = ewm.CreateClaimStatusCodeAttributeList();
                            //entityName = "cog_claimstatuscode";
                            //attributeCreated = CreateAttribute("cog_claimstatuscode", addedClaimStatusCodeAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedClaimTypeCodeAttributes = ewm.CreateClaimTypeCodeAttributeList();
                            //attributeCreated = CreateAttribute("cog_claimtypecode", addedClaimTypeCodeAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedDiagnosisAttributes = ewm.CreateDiagnosisAttributeList();
                            //entityName = "cog_diagnosis";
                            //attributeCreated = CreateAttribute("cog_diagnosis", addedDiagnosisAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedDiagnosisTypeCodeAttributes = ewm.CreateDiagnosisTypeCodeAttributeList();
                            //entityName = "cog_diagnosistypecode";
                            //attributeCreated = CreateAttribute("cog_diagnosistypecode", addedDiagnosisTypeCodeAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedDrugAttributes = ewm.CreateDrugAttributeList();
                            //entityName = "cog_drug";
                            //attributeCreated = CreateAttribute("cog_drug", addedDrugAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedProcedureAttributes = ewm.CreateProcedureAttributeList();
                            //entityName = "cog_procedure";
                            //attributeCreated = CreateAttribute("cog_procedure", addedProcedureAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedSurgicalProcedureAttributes = ewm.CreateSurgicalProcedureAttributeList();
                            //entityName = "cog_surgicalprocedure";
                            //attributeCreated = CreateAttribute("cog_surgicalprocedure", addedSurgicalProcedureAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //List<AttributeMetadata> addedUBOccurrenceAttributes = ewm.CreateUBOccurrenceAttributeList();
                            //attributeCreated = CreateAttribute("cog_uboccurrence", addedUBOccurrenceAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);
                            #endregion

                            #region Header Claims
                            // Create storage for new attributes being created
                            //List<AttributeMetadata> addedHeaderClaimsAttributes = ewm.CreateHeaderClaimAttributeList();
                            //entityName = "cog_headerclaim";
                            //attributeCreated = CreateAttribute("cog_headerclaim", addedHeaderClaimsAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);
                            #endregion
                            break;

                        case "Findings":
                            #region Create Entities

                            //// Create storage for new attributes being created
                            //List<AttributeMetadata> addedFindingErrorAttributes = ewm.CreateFindingErrorAttributeList();
                            //entityName = "cog_findingerrorcode";
                            //attributeCreated = CreateAttribute("cog_findingerrorcode", addedFindingErrorAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);

                            //// Create storage for new attributes being created
                            //List<AttributeMetadata> addedFindingReferenceAttributes = ewm.CreateFindingReferenceAttributeList();
                            //entityName = "cog_findingreferencecode";
                            //attributeCreated = CreateAttribute("cog_findingreferencecode", addedFindingReferenceAttributes, solutionName, service);
                            //Console.WriteLine(attributeCreated);
                            #endregion

                            #region Create Findings Global Option Sets
                            //ewm = new EWMRelated();

                            //ewm.CreateFindingsGlobalOptionSets();
                            #endregion
                            break;
                        case "Workflow_10312017":
                            //FindMissingFields fm = new FindMissingFields();
                            //fm.CodeNow(service, solutionName);
                            //Dump OptionSets to excel file
                            DumpOptionSetInfo dosi = new DumpOptionSetInfo();
                            dosi.WriteOptionSetToFile(service, solutionName);
                            break;
                        default:
                            break;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            Console.WriteLine("process completed....");
            Console.ReadLine();
        }
        #endregion

        #region CreateAttribute
        private static string CreateAttribute(string entityName, List<AttributeMetadata> addedAttributes, string solutionName, IOrganizationService service)
        {
            string createAttribute = string.Empty;
            foreach (AttributeMetadata anAttribute in addedAttributes)
            {
                // Create the request.
                CreateAttributeRequest createAttributeRequest = new CreateAttributeRequest
                {
                    EntityName = entityName,
                    Attribute = anAttribute,
                    SolutionUniqueName = solutionName
                };
                // Execute the request.
                service.Execute(createAttributeRequest);
            }
            createAttribute = String.Format("Created the attributes for {0}.", entityName);
            return createAttribute;
        }
        #endregion

        #region HandleCerrsRoot
        /// <summary>
        /// Procedure: HandleCerrsRoot
        /// Handles: Added to handle the cerrsroot application
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: Steve Weinberger
        /// Changes Date: 06/07/2016
        /// Changes Made: 
        /// </summary>
        static void HandleCerrsRoot()
        {
            string serverName = "https://engage360dev.crm.dynamics.com";
            Uri organizationUri = new Uri(string.Format("{0}/XRMServices/2011/Organization.svc", serverName));
            Uri homeRealmUri = null;
            ClientCredentials credentials = new ClientCredentials();

            //  use UserName object for CRM Online
            //credentials.UserName.UserName = "me@cognosante.com";
            //credentials.UserName.Password = "";

            //  use default for OnPrem...
            credentials.Windows.ClientCredential = System.Net.CredentialCache.DefaultNetworkCredentials;

            IOrganizationService service = new OrganizationServiceProxy(organizationUri, homeRealmUri, credentials, null);
            string solutionName = string.Empty;

            //  create any global optionsets
            //
            //CreateGlobalOptionSet(IOrganizationService service, string solutionName, string schema, string label, int lang, string[] optionLabels)
            //CreateGlobalOptionSet(service, solutionName, "cog_providertypecode", "ERR Case Status", 1033, new string[] { "New", "In Queue", "In Process", "Resolved", "Non Issue", "Awaiting New RCNO File" });
            //CreateGlobalOptionSet(service, solutionName, "cog_providerspecialtycode", "Case Category", 1033, new string[] { "1095 Issues", "Plan and Issuer Concerns", "Case Category 1", "Case Category 2" });
            //CreateGlobalOptionSet(service, solutionName, "cog_provider", "Case SubCategory", 1033, new string[] { "Complex Research Needed","Consumer Re-Evaluation Requested","Mailing Address Correction Request","Mailing Address Update","Other","Others","Premium Payment","Re-Evaluation Requested","Reprint/Regeneration - No Data Changes" });
            //CreateGlobalOptionSet(service, solutionName, "cog_licentype", "Dispute Status", 1033, new string[] { "Unresolved","In Progress","Resolved" });
            //CreateGlobalOptionSet(service, solutionName, "cog_classificationtype", "Case Type", 1033, new string[] { "Item","Undetermined","Reprint","Reprint - Missing Info","Catastrophic Coverage","Missing 1095","Mail Address Update","Policy ID","Issuer Name","Policy Start/End Date","Covered Individual","Monthly Premium","Monthly APTC","Multiple","SLCSP","SADP"});
            //CreateGlobalOptionSet(service, solutionName, "cog_WorkItemType", "Work Item Type", 1033, new string[] { "Item 1","Item 2","Item 3" });
            //CreateGlobalOptionSet(service, solutionName, "cog_1095Tier", "1095 Tier", 1033, new string[] { "1095 Analyst - Tier 1 Team", "1095 Analyst - Tier 2 Team" , "1095 Analyst - Tier 3 Team" , "1095 Analyst - Tier 4 Team" });


            // Create storage for new attributes being created
            //List <AttributeMetadata> addedAttributes = CreateCaseAttributeList();

            //string entityName = "cog_case";
            //foreach (AttributeMetadata anAttribute in addedAttributes)
            //{
            //    // Create the request.
            //    CreateAttributeRequest createAttributeRequest = new CreateAttributeRequest
            //    {
            //        EntityName = entityName,
            //        Attribute = anAttribute,
            //        SolutionUniqueName = solutionName
            //    };
            //    // Execute the request.
            //    service.Execute(createAttributeRequest);
            //    Console.WriteLine("Created the attribute {0}.", anAttribute.SchemaName);
            //}
        }
        #endregion

        #region CreateCaseAttributeList
        /// <summary>
        /// Procedure: Main
        /// Handles: Main function that creates the list of attributes to add to the CRM Case entity
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static List<AttributeMetadata> CreateCaseAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            ////  Date fields
            atts.Add(CreateDateTime("cog_LastStatusChangeDate", "Date of Last Status Change", 1033, AttributeRequiredLevel.None));

            ////  memo fields
            //atts.Add(CreateMemo("cog_CaseNotes", "Case Notes", 1033, AttributeRequiredLevel.None));
            //atts.Add(CreateMemo("cog_ResolutionNotes", "Resolution Notes", 1033, AttributeRequiredLevel.None));
            //atts.Add(CreateMemo("cog_IssuerComments", "Issuer Comments", 1033, AttributeRequiredLevel.None));

            ////  string fields
            atts.Add(CreateString("cog_FFMAppID", "FFM Application ID", 1033, AttributeRequiredLevel.None));

            ////  boolean fields
            atts.Add(CreateBoolean("cog_HavePolicy1095", "Have Policy - 1095", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_HavePolicyPreaudit", "Have Policy - Preaudit", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_ElectedOfficial", "Elected Official", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_MediaInquiry", "Media Inquiry", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_CMSPriority", "CMS Priority", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_ConsumerReevaluationRequested", "Consumer Re-evaluation Requested", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_WhiteHouse", "White House", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_CMSCase", "CMS Case", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_ReturnedByCMS", "Returned By CMS", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_Manual1095Form", "Manual 1095 Form", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_EveningCallback", "Evening Callback", 1033, AttributeRequiredLevel.None));
            atts.Add(CreateBoolean("cog_IRSRequest", "IRS Request", 1033, AttributeRequiredLevel.None));


            ////  integer fields
            //atts.Add(CreateInteger("cog_TotalHandleTime", "Total Handle Time", 1033, AttributeRequiredLevel.None));
            //atts.Add(CreateInteger("cog_DaystoTarget", "Days to Target", 1033, AttributeRequiredLevel.None));

            //  optionsets from global
            //atts.Add(CreateOptionSetFromGlobal("cog_1095Tier", "1095 Tier", 1033, "cog_1095tier", AttributeRequiredLevel.None));
            //atts.Add(CreateOptionSetFromGlobal("cog_CaseCategory", "Case Category", 1033, "cog_casecategory", AttributeRequiredLevel.None));
            //atts.Add(CreateOptionSetFromGlobal("cog_CaseSubCategory", "Case SubCategory", 1033, "cog_casesubcategory", AttributeRequiredLevel.None));
            //atts.Add(CreateOptionSetFromGlobal("cog_CaseType", "Case Type", 1033, "cog_casetype", AttributeRequiredLevel.None));
            //atts.Add(CreateOptionSetFromGlobal("cog_DisputeStatus", "Dispute Status", 1033, "cog_disputestatus", AttributeRequiredLevel.None));
            //atts.Add(CreateOptionSetFromGlobal("cog_ERRCaseStatus", "ERR Case Status", 1033, "cog_errcasestatus", AttributeRequiredLevel.None));
            //atts.Add(CreateOptionSetFromGlobal("cog_WorkItemType", "Work Item Type", 1033, "cog_workitemtype", AttributeRequiredLevel.None));


            return atts;
        }
        #endregion

        #region CreateFunctions
        #region CreateBoolean
        /// <summary>
        /// Procedure: CreateBoolean
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static BooleanAttributeMetadata CreateBoolean(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
        {
            // Create a boolean attribute
            BooleanAttributeMetadata boolAttribute = new BooleanAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                OptionSet = new BooleanOptionSetMetadata(
                    new OptionMetadata(new Label("True", lang), 1),
                    new OptionMetadata(new Label("False", lang), 0)
                    )
            };
            return boolAttribute;
        }
        #endregion
        #region CreateDateTime
        /// <summary>
        /// Procedure: CreateDateTime
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static DateTimeAttributeMetadata CreateDateTime(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
        {
            DateTimeAttributeMetadata dtAttribute = new DateTimeAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                Format = DateTimeFormat.DateOnly,
                ImeMode = ImeMode.Disabled
            };
            return dtAttribute;
        }
        #endregion
        #region CreateDecimal
        /// <summary>
        /// Procedure: CreateDecimal
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static DecimalAttributeMetadata CreateDecimal(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
        {
            DecimalAttributeMetadata decimalAttribute = new DecimalAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                MaxValue = 100,
                MinValue = 0,
                Precision = 1
            };
            return decimalAttribute;
        }
        #endregion
        #region CreateInteger
        /// <summary>
        /// Procedure: CreateInteger
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static IntegerAttributeMetadata CreateInteger(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
        {
            IntegerAttributeMetadata integerAttribute = new IntegerAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                Format = IntegerFormat.None,
                MaxValue = 100,
                MinValue = 0
            };
            return integerAttribute;
        }
        #endregion
        #region CreateMemo
        /// <summary>
        /// Procedure: CreateMemo
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static MemoAttributeMetadata CreateMemo(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
        {
            MemoAttributeMetadata memoAttribute = new MemoAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                Format = StringFormat.TextArea,
                ImeMode = ImeMode.Disabled,
                MaxLength = 500
            };
            return memoAttribute;
        }
        #endregion
        #region CreateMoney
        /// <summary>
        /// Procedure: CreateMoney
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static MoneyAttributeMetadata CreateMoney(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
        {
            MoneyAttributeMetadata moneyAttribute = new MoneyAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                MaxValue = 1000.00,
                MinValue = 0.00,
                Precision = 1,
                PrecisionSource = 1,
                ImeMode = ImeMode.Disabled
            };
            return moneyAttribute;
        }
        #endregion
        #region CreateOptionSet
        /// <summary>
        /// Procedure: CreateOptionSet
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static PicklistAttributeMetadata CreateOptionSet(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, string[] optionLabels)
        {
            OptionMetadataCollection options = new OptionMetadataCollection();
            foreach (string o in optionLabels)
            {
                options.Add(new OptionMetadata(new Label(o, lang), null));
            }
            OptionSetMetadata optMetadata = new OptionSetMetadata(options)
            {
                IsGlobal = false,
                OptionSetType = OptionSetType.Picklist,
            };

            PicklistAttributeMetadata pickListAttribute =
                new PicklistAttributeMetadata
                {
                    // Set base properties
                    SchemaName = schema,
                    DisplayName = new Label(label, lang),
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                    //Description = new Label("Picklist Attribute", lang),
                    // Set extended properties
                    // Build local picklist options
                    OptionSet = optMetadata
                };
            return pickListAttribute;
        }
        #endregion
        #region CreateOptionSetFromGlobal
        /// <summary>
        /// Procedure: CreateOptionSetFromGlobal
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static PicklistAttributeMetadata CreateOptionSetFromGlobal(string schema, string label, int lang, string globalOptionset, AttributeRequiredLevel requiredLevel)
        {

            OptionSetMetadata optMetadata = new OptionSetMetadata()
            {
                IsGlobal = true,
                Name = globalOptionset
            };

            PicklistAttributeMetadata pickListAttribute =
                new PicklistAttributeMetadata
                {
                    // Set base properties
                    SchemaName = schema,
                    DisplayName = new Label(label, lang),
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                    //Description = new Label("Picklist Attribute", lang),
                    // Set extended properties
                    // Build local picklist options
                    OptionSet = optMetadata
                };
            return pickListAttribute;
        }
        #endregion
        #region CreateGlobalOptionSet
        /// <summary>
        /// Procedure: CreateGlobalOptionSet
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static void CreateGlobalOptionSet(IOrganizationService service, string solutionName, string schema, string label, int lang, string[] optionLabels)
        {
            OptionMetadataCollection options = new OptionMetadataCollection();
            foreach (string o in optionLabels)
            {
                options.Add(new OptionMetadata(new Label(o, lang), null));
            }
            CreateOptionSetRequest req = new CreateOptionSetRequest()
            {
                SolutionUniqueName = solutionName,
                OptionSet = new OptionSetMetadata(options)
                {
                    Name = schema,
                    DisplayName = new Label(label, lang),
                    IsGlobal = true,
                    OptionSetType = OptionSetType.Picklist,
                }
            };
            CreateOptionSetResponse res = (CreateOptionSetResponse)service.Execute(req);
            Console.WriteLine("Global OptionSet created: {0}", schema);
        }
        #endregion
        #region CreateString
        /// <summary>
        /// Procedure: CreateString
        /// Handles: 
        /// Created By: Will Wilson
        /// Created Date: 01/01/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        static StringAttributeMetadata CreateString(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
        {
            StringAttributeMetadata stringAttribute = new StringAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                MaxLength = 100
            };
            return stringAttribute;
        }
        #endregion
        #endregion
    }
}
