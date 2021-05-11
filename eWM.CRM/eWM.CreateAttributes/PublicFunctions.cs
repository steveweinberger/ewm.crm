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
    public class PublicFunctions
    {
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
        public void CreateGlobalOptionSet(IOrganizationService service, string solutionName, string schema, string label, int lang, string[] optionLabels)
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

        #region InsertGlobalOptionSet
        /// <summary>
        /// Procedure: InsertGlobalOptionSet
        /// Handles: Inserts Values to existing optionset
        /// Created By: Steve Weinberger
        /// Created Date: 06/07/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        public void InsertGlobalOptionSet(IOrganizationService service, string solutionName, string schema, string label, int lang, string[] optionLabels)
        {
            string globalOptionSetName = schema;
            int _insertedOptionValue;

            OptionMetadataCollection options = new OptionMetadataCollection();

            foreach (string o in optionLabels)
            {
                InsertOptionValueRequest req = new InsertOptionValueRequest()
                {
                    SolutionUniqueName = solutionName,
                    OptionSetName = globalOptionSetName,
                    Label = new Label(o, lang)
                };
                //InsertOptionValueResponse res = (InsertOptionValueResponse)service.Execute(req);

                _insertedOptionValue = ((InsertOptionValueResponse)service.Execute(req)).NewOptionValue;


                Console.WriteLine("Created {0} with the value of {1}.",
                    req.Label.LocalizedLabels[0].Label,
                    _insertedOptionValue);
            }

            //Publish the OptionSet
            PublishXmlRequest pxReq2 = new PublishXmlRequest { ParameterXml = String.Format("<importexportxml><optionsets><optionset>{0}</optionset></optionsets></importexportxml>", globalOptionSetName) };
            service.Execute(pxReq2);
            Console.WriteLine("Global OptionSet inserted: {0}", schema);
        }
        #endregion

        public BooleanAttributeMetadata CreateBoolean(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
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

        public DateTimeAttributeMetadata CreateDate(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
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

        public DateTimeAttributeMetadata CreateDateTime(string schema, string label, int lang, AttributeRequiredLevel requiredLevel)
        {
            DateTimeAttributeMetadata dtAttribute = new DateTimeAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                Format = DateTimeFormat.DateAndTime,
                ImeMode = ImeMode.Disabled
            };
            return dtAttribute;
        }

        public DecimalAttributeMetadata CreateDecimal(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, decimal maxValue, decimal minValue, int precisionSize)
        {
            DecimalAttributeMetadata decimalAttribute = new DecimalAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                MaxValue = maxValue, //100,
                MinValue = minValue, //0,
                Precision = precisionSize //1
            };
            return decimalAttribute;
        }

        public DecimalAttributeMetadata CreateQuantityDecimal(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, decimal maxValue, decimal minValue, int precisionSize)
        {
            DecimalAttributeMetadata decimalAttribute = new DecimalAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                MaxValue = maxValue, //100,
                MinValue = minValue, //0,
                Precision = precisionSize //3
            };
            return decimalAttribute;
        }

        public MoneyAttributeMetadata CreateMoney(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, double maxValue, double minValue, int precisionSize)
        {
            MoneyAttributeMetadata moneyAttribute = new MoneyAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                MaxValue = maxValue,
                MinValue = minValue,
                Precision = precisionSize,
                PrecisionSource = 1,
                ImeMode = ImeMode.Disabled
            };
            return moneyAttribute;
        }

        public IntegerAttributeMetadata CreateInteger(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, int size)
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
                MaxValue = size,
                MinValue = 0
            };
            return integerAttribute;
        }

        public IntegerAttributeMetadata CreateSmallInteger(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, int size)
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
                MaxValue = size,
                MinValue = 0
            };
            return integerAttribute;
        }

        public StringAttributeMetadata CreateString(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, int size)
        {
            StringAttributeMetadata stringAttribute = new StringAttributeMetadata
            {
                // Set base properties
                SchemaName = schema,
                DisplayName = new Label(label, lang),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel),
                Description = new Label(label, lang),
                // Set extended properties
                MaxLength = size
            };
            return stringAttribute;
        }

        public MemoAttributeMetadata CreateMemo(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, int size)
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
                MaxLength = size
            };
            return memoAttribute;
        }
        
        public PicklistAttributeMetadata CreateOptionSet(string schema, string label, int lang, AttributeRequiredLevel requiredLevel, string[] optionLabels)
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

        public PicklistAttributeMetadata CreateOptionSetFromGlobal(string schema, string label, int lang, string globalOptionset, AttributeRequiredLevel requiredLevel)
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
    }
}
