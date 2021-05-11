/// <reference path="Xrm.js" />

var EntityLogicalName = "opportunity";
var Form_a2a56263_ec37_4991_a3b0_e7b37a71d818_Properties = {
campaignid: "campaignid"
,closeprobability: "closeprobability"
,customerid: "customerid"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,estimatedclosedate: "estimatedclosedate"
,estimatedvalue: "estimatedvalue"
,freightamount: "freightamount"
,isrevenuesystemcalculated: "isrevenuesystemcalculated"
,name: "name"
,opportunityratingcode: "opportunityratingcode"
,originatingleadid: "originatingleadid"
,ownerid: "ownerid"
,pricelevelid: "pricelevelid"
,statuscode: "statuscode"
,totalamount: "totalamount"
,totalamountlessfreight: "totalamountlessfreight"
,totallineitemamount: "totallineitemamount"
,totaltax: "totaltax"
,transactioncurrencyid: "transactioncurrencyid"
};

var Form_a2a56263_ec37_4991_a3b0_e7b37a71d818_Controls = {
campaignid: "campaignid"
,closeprobability: "closeprobability"
,customerid: "customerid"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,estimatedclosedate: "estimatedclosedate"
,estimatedvalue: "estimatedvalue"
,freightamount: "freightamount"
,header_customerid: "header_customerid"
,header_estimatedclosedate: "header_estimatedclosedate"
,header_estimatedvalue: "header_estimatedvalue"
,isrevenuesystemcalculated: "isrevenuesystemcalculated"
,name: "name"
,notescontrol: "notescontrol"
,opportunityactivitiesgrid: "opportunityactivitiesgrid"
,opportunityproductsGrid: "opportunityproductsGrid"
,opportunityQuotesGrid: "opportunityQuotesGrid"
,opportunityratingcode: "opportunityratingcode"
,originatingleadid: "originatingleadid"
,ownerid: "ownerid"
,pricelevelid: "pricelevelid"
,statuscode: "statuscode"
,totalamount: "totalamount"
,totalamountlessfreight: "totalamountlessfreight"
,totallineitemamount: "totallineitemamount"
,totaltax: "totaltax"
,transactioncurrencyid: "transactioncurrencyid"
,WebResource_RecordWall: "WebResource_RecordWall"
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
{ "Name": "campaignid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "campaignid" }] }, 
{ "Name": "closeprobability", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "closeprobability" }] }, 
{ "Name": "customerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerid" }, { "Name": "header_customerid" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "discountamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discountamount" }] }, 
{ "Name": "discountpercentage", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discountpercentage" }] }, 
{ "Name": "estimatedclosedate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "estimatedclosedate" }, { "Name": "header_estimatedclosedate" }] }, 
{ "Name": "estimatedvalue", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : -1000000000000, "Precision" : 2, "Controls": [{ "Name": "estimatedvalue" }, { "Name": "header_estimatedvalue" }] }, 
{ "Name": "freightamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "freightamount" }] }, 
{ "Name": "isrevenuesystemcalculated", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isrevenuesystemcalculated" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "name" }] }, 
{ "Name": "opportunityratingcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Hot", "value": 1 }, { "text" : "Warm", "value": 2 }, { "text" : "Cold", "value": 3 }], "SelectedOption" : { "option" : "Hot", "value": 1 }, "Text": "Hot", "Controls": [{ "Name": "opportunityratingcode" }] }, 
{ "Name": "originatingleadid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "originatingleadid" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "pricelevelid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "pricelevelid" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "In Progress", "value": 1 }, { "text" : "On Hold", "value": 2 }, { "text" : "Won", "value": 3 }, { "text" : "Canceled", "value": 4 }, { "text" : "Out-Sold", "value": 5 }], "SelectedOption" : { "option" : "In Progress", "value": 1 }, "Text": "In Progress", "Controls": [{ "Name": "statuscode" }] }, 
{ "Name": "totalamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totalamount" }] }, 
{ "Name": "totalamountlessfreight", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totalamountlessfreight" }] }, 
{ "Name": "totallineitemamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totallineitemamount" }] }, 
{ "Name": "totaltax", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totaltax" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }]
, "AttributesLength": 21, 
"Controls": [
{ "Name": "campaignid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Source Campaign", "Attribute": "campaignid" }, 
{ "Name": "closeprobability", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Probability (%)", "Attribute": "closeprobability" }, 
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Potential Customer", "Attribute": "customerid" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "discountamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(-) Discount", "Attribute": "discountamount" }, 
{ "Name": "discountpercentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(-) Discount (%)", "Attribute": "discountpercentage" }, 
{ "Name": "estimatedclosedate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Est. Close Date", "Attribute": "estimatedclosedate" }, 
{ "Name": "estimatedvalue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Est. Revenue", "Attribute": "estimatedvalue" }, 
{ "Name": "freightamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Freight Amount", "Attribute": "freightamount" }, 
{ "Name": "header_customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Potential Customer", "Attribute": "customerid" }, 
{ "Name": "header_estimatedclosedate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Est. Close Date", "Attribute": "estimatedclosedate" }, 
{ "Name": "header_estimatedvalue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Est. Revenue", "Attribute": "estimatedvalue" }, 
{ "Name": "isrevenuesystemcalculated", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Revenue", "Attribute": "isrevenuesystemcalculated" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Topic", "Attribute": "name" }, 
{ "Name": "opportunityratingcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rating", "Attribute": "opportunityratingcode" }, 
{ "Name": "originatingleadid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Originating Lead", "Attribute": "originatingleadid" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "pricelevelid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Price List", "Attribute": "pricelevelid" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "totalamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Amount", "Attribute": "totalamount" }, 
{ "Name": "totalamountlessfreight", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Pre-Freight Amount", "Attribute": "totalamountlessfreight" }, 
{ "Name": "totallineitemamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Detail Amount", "Attribute": "totallineitemamount" }, 
{ "Name": "totaltax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Tax", "Attribute": "totaltax" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }], 
"ControlsLength": 24, 
"Navigation": [
{"Id": "navRelationship", "Key": "navRelationship", "Label": "", "Visible": true }, 
{"Id": "navActivities", "Key": "navActivities", "Label": "", "Visible": true }, 
{"Id": "navActivityHistory", "Key": "navActivityHistory", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "What's New", "Name": "tab_recordwall", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_recordwall_section_1", "Visible": true, "Controls": [
{ "Name": "WebResource_RecordWall" }]}]}, 
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Opportunity Information", "Name": "opportunity information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "customerid" }, 
{ "Name": "description" }]}, 
{ "Label": "Forecast Information", "Name": "forecast information", "Visible": true, "Controls": [
{ "Name": "isrevenuesystemcalculated" }, 
{ "Name": "estimatedvalue" }, 
{ "Name": "closeprobability" }, 
{ "Name": "estimatedclosedate" }, 
{ "Name": "opportunityratingcode" }, 
{ "Name": "transactioncurrencyid" }]}]}, 
{ "Label": "Line Items", "Name": "Product Line Item Details", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Opportunity Products", "Name": "opportunityproducts", "Visible": true, "Controls": [
{ "Name": "pricelevelid" }]}, 
{ "Label": "Products", "Name": "products", "Visible": true, "Controls": [
{ "Name": "opportunityproductsGrid" }]}, 
{ "Label": "Product Line Item Totals", "Name": "totals", "Visible": true, "Controls": [
{ "Name": "discountpercentage" }, 
{ "Name": "totallineitemamount" }, 
{ "Name": "discountamount" }, 
{ "Name": "totalamountlessfreight" }, 
{ "Name": "freightamount" }, 
{ "Name": "totaltax" }, 
{ "Name": "totalamount" }]}]}, 
{ "Label": "Notes & Activities", "Name": "notes and activities", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Activities", "Name": "activities", "Visible": true, "Controls": [
{ "Name": "opportunityactivitiesgrid" }]}, 
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}, 
{ "Label": "Quotes", "Name": "Opportunity Quotes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Quotes", "Name": "opportunityquotes", "Visible": true, "Controls": [
{ "Name": "opportunityQuotesGrid" }]}]}, 
{ "Label": "Preferences", "Name": "administration", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Internal Information", "Name": "internal information", "Visible": true, "Controls": [
{ "Name": "ownerid" }, 
{ "Name": "originatingleadid" }, 
{ "Name": "statuscode" }, 
{ "Name": "campaignid" }]}]}]
};

var Xrm = new _xrm(pageData);
