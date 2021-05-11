/// <reference path="Xrm.js" />

var EntityLogicalName = "campaign";
var Form_6356ff2a_bbbe_49fb_9da2_160b08865688_Properties = {
actualend: "actualend"
,actualstart: "actualstart"
,budgetedcost: "budgetedcost"
,codename: "codename"
,createdon: "createdon"
,description: "description"
,expectedresponse: "expectedresponse"
,expectedrevenue: "expectedrevenue"
,istemplate: "istemplate"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,objective: "objective"
,othercost: "othercost"
,ownerid: "ownerid"
,proposedend: "proposedend"
,proposedstart: "proposedstart"
,statuscode: "statuscode"
,totalactualcost: "totalactualcost"
,totalcampaignactivityactualcost: "totalcampaignactivityactualcost"
,transactioncurrencyid: "transactioncurrencyid"
,typecode: "typecode"
};

var Form_6356ff2a_bbbe_49fb_9da2_160b08865688_Controls = {
Activities: "Activities"
,actualend: "actualend"
,actualstart: "actualstart"
,budgetedcost: "budgetedcost"
,codename: "codename"
,createdon: "createdon"
,description: "description"
,expectedresponse: "expectedresponse"
,header_expectedrevenue: "header_expectedrevenue"
,header_istemplate: "header_istemplate"
,header_ownerid: "header_ownerid"
,header_statuscode: "header_statuscode"
,Leads: "Leads"
,Lists: "Lists"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,notescontrol: "notescontrol"
,objective: "objective"
,othercost: "othercost"
,ownerid: "ownerid"
,proposedend: "proposedend"
,proposedstart: "proposedstart"
,Responses: "Responses"
,totalactualcost: "totalactualcost"
,totalcampaignactivityactualcost: "totalcampaignactivityactualcost"
,transactioncurrencyid: "transactioncurrencyid"
,typecode: "typecode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4400", "etc": "4400", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "campaign",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actualend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "actualend" }] }, 
{ "Name": "actualstart", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "actualstart" }] }, 
{ "Name": "budgetedcost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "budgetedcost" }] }, 
{ "Name": "codename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 32, "Controls": [{ "Name": "codename" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "expectedresponse", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "expectedresponse" }] }, 
{ "Name": "expectedrevenue", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "header_expectedrevenue" }] }, 
{ "Name": "istemplate", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "header_istemplate" }] }, 
{ "Name": "modifiedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedby" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 128, "Controls": [{ "Name": "name" }] }, 
{ "Name": "objective", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "objective" }] }, 
{ "Name": "othercost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "othercost" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }, { "Name": "ownerid" }] }, 
{ "Name": "proposedend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "proposedend" }] }, 
{ "Name": "proposedstart", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "proposedstart" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Proposed", "value": 0 }, { "text" : "Ready To Launch", "value": 1 }, { "text" : "Launched", "value": 2 }, { "text" : "Completed", "value": 3 }, { "text" : "Canceled", "value": 4 }, { "text" : "Suspended", "value": 5 }, { "text" : "Inactive", "value": 6 }], "SelectedOption" : { "option" : "Proposed", "value": 0 }, "Text": "Proposed", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "totalactualcost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "totalactualcost" }] }, 
{ "Name": "totalcampaignactivityactualcost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "totalcampaignactivityactualcost" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "typecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Advertisement", "value": 1 }, { "text" : "Direct Marketing", "value": 2 }, { "text" : "Event", "value": 3 }, { "text" : "Co-branding", "value": 4 }, { "text" : "Other", "value": 5 }], "SelectedOption" : { "option" : "Advertisement", "value": 1 }, "Text": "Advertisement", "Controls": [{ "Name": "typecode" }] }]
, "AttributesLength": 22, 
"Controls": [
, 
{ "Name": "actualend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual End", "Attribute": "actualend" }, 
{ "Name": "actualstart", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual Start", "Attribute": "actualstart" }, 
{ "Name": "budgetedcost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Allocated Budget", "Attribute": "budgetedcost" }, 
{ "Name": "codename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Campaign Code", "Attribute": "codename" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "expectedresponse", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Expected Response(%)", "Attribute": "expectedresponse" }, 
{ "Name": "header_expectedrevenue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Estimated Revenue", "Attribute": "expectedrevenue" }, 
{ "Name": "header_istemplate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Template", "Attribute": "istemplate" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Details", "Attribute": "statuscode" }, 
{ "Name": "modifiedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified By", "Attribute": "modifiedby" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "objective", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Offer", "Attribute": "objective" }, 
{ "Name": "othercost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Misc. Cost", "Attribute": "othercost" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "proposedend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Proposed End", "Attribute": "proposedend" }, 
{ "Name": "proposedstart", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Proposed Start", "Attribute": "proposedstart" }, 
{ "Name": "totalactualcost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Cost", "Attribute": "totalactualcost" }, 
{ "Name": "totalcampaignactivityactualcost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Activity Cost", "Attribute": "totalcampaignactivityactualcost" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "typecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Campaign Type", "Attribute": "typecode" }], 
"ControlsLength": 23, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Summary", "Name": "SUMMARY", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "CAMPAIGN", "Name": "CAMPAIGN", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "codename" }, 
{ "Name": "transactioncurrencyid" }, 
{ "Name": "typecode" }, 
{ "Name": "expectedresponse" }]}, 
{ "Label": "SCHEDULES", "Name": "SCHEDULES", "Visible": true, "Controls": [
{ "Name": "proposedstart" }, 
{ "Name": "proposedend" }, 
{ "Name": "actualstart" }, 
{ "Name": "actualend" }]}, 
{ "Label": "OFFER", "Name": "OFFER", "Visible": true, "Controls": [
{ "Name": "objective" }]}, 
{ "Label": "RELATED PANE", "Name": "RELATED PANE", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "LISTS", "Name": "LISTS", "Visible": true, "Controls": [
{ "Name": "Lists" }]}, 
{ "Label": "LEADS", "Name": "LEADS", "Visible": true, "Controls": [
{ "Name": "Leads" }]}, 
{ "Label": "CAMPAIGN ACTIVITIES", "Name": "CAMPAIGN ACTIVITIES", "Visible": true, "Controls": [
{ "Name": "Activities" }]}]}, 
{ "Label": "Details", "Name": "DETAILS", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "FINANCIALS", "Name": "FINANCIALS", "Visible": true, "Controls": [
{ "Name": "totalcampaignactivityactualcost" }, 
{ "Name": "budgetedcost" }, 
{ "Name": "othercost" }, 
{ "Name": "totalactualcost" }]}, 
{ "Label": "ADMINISTRATION", "Name": "ADMINISTRATION", "Visible": true, "Controls": [
{ "Name": "ownerid" }, 
{ "Name": "createdon" }, 
{ "Name": "modifiedby" }, 
{ "Name": "modifiedon" }]}, 
{ "Label": "RESPONSES", "Name": "RESPONSES", "Visible": true, "Controls": [
{ "Name": "Responses" }]}, 
{ "Label": "DESCRIPTION", "Name": "DESCRIPTION", "Visible": true, "Controls": [
{ "Name": "description" }]}]}]
};

var Xrm = new _xrm(pageData);
