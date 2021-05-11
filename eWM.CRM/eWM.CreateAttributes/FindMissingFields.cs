using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Crm.Sdk.Messages;

namespace CreateAttributes
{
    public class FindMissingFields
    {
        /******
            XrmToolBox - Code Now - Find and remove invalid attributes -> bettercrm.blog/.../query-builder-error-when-exporting-solution-in-dynamics-365
            Add These to the Using box on the right

            using System;
            using Microsoft.Xrm.Sdk;
            using Microsoft.Xrm.Sdk.Query;
            using Microsoft.Xrm.Sdk.Messages;
            using Microsoft.Crm.Sdk.Messages;
        *******/

        public void CodeNow(IOrganizationService service, string solutionName)
        {
            string SOLUTION_NAME = solutionName;

            LogMessage("------------- Start -----------------");
            LogMessage("Solution " + SOLUTION_NAME);

            var solutionComponentQuery = new QueryExpression("solutioncomponent");
            solutionComponentQuery.Distinct = true;
            solutionComponentQuery.ColumnSet.AddColumns("objectid", "componenttype", "solutioncomponentid");
            var solutioncomponentSolutionLink = solutionComponentQuery.AddLink("solution", "solutionid", "solutionid");
            solutioncomponentSolutionLink.EntityAlias = "aa";
            solutioncomponentSolutionLink.LinkCriteria.AddCondition("uniquename", ConditionOperator.Equal, SOLUTION_NAME);

            var results = service.RetrieveMultiple(solutionComponentQuery);
            foreach (var item in results.Entities)
            {

                var componentType = item.GetAttributeValue<OptionSetValue>("componenttype").Value;
                //LogMessage("Checking Component " + componentType);
                if (componentType == 2)
                {
                    //LogMessage("Checking Attribute");
                    var attributeRequest = new RetrieveAttributeRequest
                    {
                        MetadataId = item.GetAttributeValue<Guid>("objectid")
                    };

                    try
                    {
                        var result = (RetrieveAttributeResponse)service.Execute(attributeRequest);
                        LogMessage("Attribute " + result.AttributeMetadata.LogicalName + " is valid");
                    }
                    catch
                    {
                        // //attribute is missing, remove it from solution
                        LogMessage("Attribute {" + attributeRequest.MetadataId + "} is missing. Removing from the solution.");

                        var removeRequest = new RemoveSolutionComponentRequest
                        {
                            SolutionUniqueName = SOLUTION_NAME,
                            ComponentId = attributeRequest.MetadataId,
                            ComponentType = componentType
                        };
                        service.Execute(removeRequest);
                    }
                }
            }
            LogMessage("----------------------DONE-------------------");
        }

        private void LogMessage(string newMessage)
        {
            Console.WriteLine(newMessage);
        }
    }
}
