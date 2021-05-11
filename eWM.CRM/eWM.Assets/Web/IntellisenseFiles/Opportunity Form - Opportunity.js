/// <reference path="Xrm.js" />

var EntityLogicalName = "opportunity";
var Form_a837e4a7_01b8_4f82_a475_be9abd67e667_Properties = {
budgetamount: "budgetamount"
,currentsituation: "currentsituation"
,customerneed: "customerneed"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,estimatedclosedate: "estimatedclosedate"
,estimatedvalue: "estimatedvalue"
,freightamount: "freightamount"
,isrevenuesystemcalculated: "isrevenuesystemcalculated"
,name: "name"
,ownerid: "ownerid"
,parentaccountid: "parentaccountid"
,parentcontactid: "parentcontactid"
,pricelevelid: "pricelevelid"
,proposedsolution: "proposedsolution"
,purchaseprocess: "purchaseprocess"
,purchasetimeframe: "purchasetimeframe"
,statuscode: "statuscode"
,totalamount: "totalamount"
,totalamountlessfreight: "totalamountlessfreight"
,totallineitemamount: "totallineitemamount"
,totaltax: "totaltax"
,transactioncurrencyid: "transactioncurrencyid"
};

var Form_a837e4a7_01b8_4f82_a475_be9abd67e667_Controls = {
budgetamount: "budgetamount"
,Competitors: "Competitors"
,currentsituation: "currentsituation"
,customerneed: "customerneed"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,DynamicPropertiesList_LinkControl: "DynamicPropertiesList_LinkControl"
,freightamount: "freightamount"
,header_estimatedclosedate: "header_estimatedclosedate"
,header_estimatedvalue: "header_estimatedvalue"
,header_ownerid: "header_ownerid"
,header_statuscode: "header_statuscode"
,isrevenuesystemcalculated: "isrevenuesystemcalculated"
,name: "name"
,notescontrol: "notescontrol"
,opportunityproductsGrid: "opportunityproductsGrid"
,parentaccountid: "parentaccountid"
,parentcontactid: "parentcontactid"
,pricelevelid: "pricelevelid"
,ProductSuggestions_LinkControl: "ProductSuggestions_LinkControl"
,proposedsolution: "proposedsolution"
,purchaseprocess: "purchaseprocess"
,purchasetimeframe: "purchasetimeframe"
,Pursuit_Team: "Pursuit_Team"
,quote: "quote"
,Stakeholders: "Stakeholders"
,totalamount: "totalamount"
,totalamountlessfreight: "totalamountlessfreight"
,totallineitemamount: "totallineitemamount"
,totaltax: "totaltax"
,transactioncurrencyid: "transactioncurrencyid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "3", "etc": "3", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "opportunity",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "budgetamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "budgetamount" }] }, 
{ "Name": "currentsituation", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "currentsituation" }] }, 
{ "Name": "customerneed", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "customerneed" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "discountamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discountamount" }] }, 
{ "Name": "discountpercentage", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discountpercentage" }] }, 
{ "Name": "estimatedclosedate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_estimatedclosedate" }] }, 
{ "Name": "estimatedvalue", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : -1000000000000, "Precision" : 2, "Controls": [{ "Name": "header_estimatedvalue" }] }, 
{ "Name": "freightamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "freightamount" }] }, 
{ "Name": "isrevenuesystemcalculated", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isrevenuesystemcalculated" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "parentaccountid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "parentaccountid" }] }, 
{ "Name": "parentcontactid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "parentcontactid" }] }, 
{ "Name": "pricelevelid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "pricelevelid" }] }, 
{ "Name": "proposedsolution", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "proposedsolution" }] }, 
{ "Name": "purchaseprocess", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Individual", "value": 0 }, { "text" : "Committee", "value": 1 }, { "text" : "Unknown", "value": 2 }], "SelectedOption" : { "option" : "Individual", "value": 0 }, "Text": "Individual", "Controls": [{ "Name": "purchaseprocess" }] }, 
{ "Name": "purchasetimeframe", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Immediate", "value": 0 }, { "text" : "This Quarter", "value": 1 }, { "text" : "Next Quarter", "value": 2 }, { "text" : "This Year", "value": 3 }, { "text" : "Unknown", "value": 4 }], "SelectedOption" : { "option" : "Immediate", "value": 0 }, "Text": "Immediate", "Controls": [{ "Name": "purchasetimeframe" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "In Progress", "value": 1 }, { "text" : "On Hold", "value": 2 }, { "text" : "Won", "value": 3 }, { "text" : "Canceled", "value": 4 }, { "text" : "Out-Sold", "value": 5 }], "SelectedOption" : { "option" : "In Progress", "value": 1 }, "Text": "In Progress", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "totalamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totalamount" }] }, 
{ "Name": "totalamountlessfreight", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totalamountlessfreight" }] }, 
{ "Name": "totallineitemamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totallineitemamount" }] }, 
{ "Name": "totaltax", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totaltax" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }]
, "AttributesLength": 24, 
"Controls": [
{ "Name": "budgetamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Budget Amount", "Attribute": "budgetamount" }, 
{ "Name": "currentsituation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Current Situation", "Attribute": "currentsituation" }, 
{ "Name": "customerneed", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer Need", "Attribute": "customerneed" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "discountamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(-) Discount", "Attribute": "discountamount" }, 
{ "Name": "discountpercentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(-) Discount (%)", "Attribute": "discountpercentage" }, 
{ "Name": "freightamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(+) Freight Amount", "Attribute": "freightamount" }, 
{ "Name": "header_estimatedclosedate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Est. Close Date", "Attribute": "estimatedclosedate" }, 
{ "Name": "header_estimatedvalue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Est. Revenue", "Attribute": "estimatedvalue" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }, 
{ "Name": "isrevenuesystemcalculated", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Revenue", "Attribute": "isrevenuesystemcalculated" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Topic", "Attribute": "name" }, 
{ "Name": "parentaccountid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Account", "Attribute": "parentaccountid" }, 
{ "Name": "parentcontactid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contact", "Attribute": "parentcontactid" }, 
{ "Name": "pricelevelid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Price List", "Attribute": "pricelevelid" }, 
{ "Name": "proposedsolution", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Proposed Solution", "Attribute": "proposedsolution" }, 
{ "Name": "purchaseprocess", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Purchase Process", "Attribute": "purchaseprocess" }, 
{ "Name": "purchasetimeframe", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Purchase Timeframe", "Attribute": "purchasetimeframe" }, 
{ "Name": "totalamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Amount", "Attribute": "totalamount" }, 
{ "Name": "totalamountlessfreight", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Pre-Freight Amount", "Attribute": "totalamountlessfreight" }, 
{ "Name": "totallineitemamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Detail Amount", "Attribute": "totallineitemamount" }, 
{ "Name": "totaltax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(+) Total Tax", "Attribute": "totaltax" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }], 
"ControlsLength": 24, 
"Navigation": [
{"Id": "navActivities", "Key": "navActivities", "Label": "", "Visible": true }, 
{"Id": "navOrders", "Key": "navOrders", "Label": "", "Visible": true }, 
{"Id": "navRelationship", "Key": "navRelationship", "Label": "", "Visible": true }, 
{"Id": "navInvoices", "Key": "navInvoices", "Label": "", "Visible": true }, 
{"Id": "navComp", "Key": "navComp", "Label": "", "Visible": true }, 
{"Id": "navDocument", "Key": "navDocument", "Label": "", "Visible": true }, 
{"Id": "navAsyncOperations", "Key": "navAsyncOperations", "Label": "", "Visible": true }, 
{"Id": "navConnections", "Key": "navConnections", "Label": "", "Visible": true }, 
{"Id": "navAudit", "Key": "navAudit", "Label": "", "Visible": true }, 
{"Id": "navProcessSessions", "Key": "navProcessSessions", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "Summary", "Name": "Summary", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Opportunity Information", "Name": "opportunity_information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "parentcontactid" }, 
{ "Name": "parentaccountid" }, 
{ "Name": "purchasetimeframe" }, 
{ "Name": "transactioncurrencyid" }, 
{ "Name": "budgetamount" }, 
{ "Name": "purchaseprocess" }, 
{ "Name": "description" }]}, 
{ "Label": "Opportunity Details", "Name": "Opportunity_details", "Visible": true, "Controls": [
{ "Name": "currentsituation" }, 
{ "Name": "customerneed" }, 
{ "Name": "proposedsolution" }]}, 
{ "Label": "NOTES PANE", "Name": "Notes_pane", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "SOCIAL PANE", "Name": "Social_pane", "Visible": true, "Controls": [
{ "Name": "Stakeholders" }, 
{ "Name": "Pursuit_Team" }, 
{ "Name": "Competitors" }]}]}, 
{ "Label": "Product Line Items", "Name": "Product_Line_Items", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Opportunity Products", "Name": "opportunityproducts", "Visible": true, "Controls": [
{ "Name": "pricelevelid" }, 
{ "Name": "isrevenuesystemcalculated" }, 
{ "Name": "opportunityproductsGrid" }]}, 
{ "Label": "", "Name": "suggestionsection", "Visible": true, "Controls": [
{ "Name": "ProductSuggestions_LinkControl" }]}, 
{ "Label": "", "Name": "DynamicProperties", "Visible": true, "Controls": [
{ "Name": "DynamicPropertiesList_LinkControl" }]}, 
{ "Label": "Product Line Item Totals", "Name": "totals", "Visible": true, "Controls": [
{ "Name": "totallineitemamount" }, 
{ "Name": "discountpercentage" }, 
{ "Name": "discountamount" }, 
{ "Name": "totalamountlessfreight" }, 
{ "Name": "freightamount" }, 
{ "Name": "totaltax" }, 
{ "Name": "totalamount" }]}]}, 
{ "Label": "Quotes", "Name": "QUOTES", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Quotes", "Name": "opportunityquotes", "Visible": true, "Controls": [
{ "Name": "quote" }]}]}]
};

var Xrm = new _xrm(pageData);
