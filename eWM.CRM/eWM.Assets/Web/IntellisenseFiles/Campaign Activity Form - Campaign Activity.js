/// <reference path="Xrm.js" />

var EntityLogicalName = "campaignactivity";
var Form_30b5a041_afe1_4ced_91c5_86c7554df10c_Properties = {
actualcost: "actualcost"
,actualend: "actualend"
,actualstart: "actualstart"
,budgetedcost: "budgetedcost"
,channeltypecode: "channeltypecode"
,description: "description"
,excludeifcontactedinxdays: "excludeifcontactedinxdays"
,ownerid: "ownerid"
,partners: "partners"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,scheduledend: "scheduledend"
,scheduledstart: "scheduledstart"
,statuscode: "statuscode"
,subject: "subject"
,transactioncurrencyid: "transactioncurrencyid"
,typecode: "typecode"
};

var Form_30b5a041_afe1_4ced_91c5_86c7554df10c_Controls = {
actualcost: "actualcost"
,actualend: "actualend"
,actualstart: "actualstart"
,budgetedcost: "budgetedcost"
,channeltypecode: "channeltypecode"
,description: "description"
,excludeifcontactedinxdays: "excludeifcontactedinxdays"
,header_ownerid: "header_ownerid"
,header_prioritycode: "header_prioritycode"
,header_statuscode: "header_statuscode"
,marketing_lists_grid: "marketing_lists_grid"
,notescontrol: "notescontrol"
,partners: "partners"
,regardingobjectid: "regardingobjectid"
,scheduledend: "scheduledend"
,scheduledstart: "scheduledstart"
,statuscode: "statuscode"
,subject: "subject"
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
"QueryStringParameters": { "_gridType": "4402", "etc": "4402", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "campaignactivity",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actualcost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "actualcost" }] }, 
{ "Name": "actualend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "actualend" }] }, 
{ "Name": "actualstart", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "actualstart" }] }, 
{ "Name": "budgetedcost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "budgetedcost" }] }, 
{ "Name": "channeltypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Phone", "value": 1 }, { "text" : "Appointment", "value": 2 }, { "text" : "Letter", "value": 3 }, { "text" : "Letter via Mail Merge", "value": 4 }, { "text" : "Fax", "value": 5 }, { "text" : "Fax via Mail Merge", "value": 6 }, { "text" : "Email", "value": 7 }, { "text" : "Email via Mail Merge", "value": 8 }, { "text" : "Other", "value": 9 }], "SelectedOption" : { "option" : "Phone", "value": 1 }, "Text": "Phone", "Controls": [{ "Name": "channeltypecode" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "excludeifcontactedinxdays", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 9999, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "excludeifcontactedinxdays" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "partners", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "partners" }] }, 
{ "Name": "prioritycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Low", "value": 0 }, { "text" : "Normal", "value": 1 }, { "text" : "High", "value": 2 }], "SelectedOption" : { "option" : "Low", "value": 0 }, "Text": "Low", "Controls": [{ "Name": "header_prioritycode" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "scheduledend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "scheduledend" }] }, 
{ "Name": "scheduledstart", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "scheduledstart" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Proposed", "value": 1 }, { "text" : "In Progress", "value": 0 }, { "text" : "Closed", "value": 2 }, { "text" : "Canceled", "value": 3 }, { "text" : "Pending", "value": 4 }, { "text" : "System Aborted", "value": 5 }, { "text" : "Completed", "value": 6 }], "SelectedOption" : { "option" : "Proposed", "value": 1 }, "Text": "Proposed", "Controls": [{ "Name": "header_statuscode" }, { "Name": "statuscode" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "typecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Research", "value": 1 }, { "text" : "Content Preparation", "value": 2 }, { "text" : "Target Marketing List Creation", "value": 3 }, { "text" : "Lead Qualification", "value": 4 }, { "text" : "Content Distribution", "value": 5 }, { "text" : "Direct Initial Contact", "value": 6 }, { "text" : "Direct Follow-Up Contact", "value": 7 }, { "text" : "Reminder Distribution", "value": 8 }], "SelectedOption" : { "option" : "Research", "value": 1 }, "Text": "Research", "Controls": [{ "Name": "typecode" }] }]
, "AttributesLength": 17, 
"Controls": [
{ "Name": "actualcost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual Cost", "Attribute": "actualcost" }, 
{ "Name": "actualend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual End", "Attribute": "actualend" }, 
{ "Name": "actualstart", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual Start", "Attribute": "actualstart" }, 
{ "Name": "budgetedcost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Allocated Budget", "Attribute": "budgetedcost" }, 
{ "Name": "channeltypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Channel", "Attribute": "channeltypecode" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "excludeifcontactedinxdays", "Type": "standard", "Disabled": false, "Visible": true, "Label": "No. of Days", "Attribute": "excludeifcontactedinxdays" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_prioritycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Priority", "Attribute": "prioritycode" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Details", "Attribute": "statuscode" }, 
{ "Name": "partners", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Outsource Vendors", "Attribute": "partners" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Used in Campaign", "Attribute": "regardingobjectid" }, 
{ "Name": "scheduledend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Scheduled End", "Attribute": "scheduledend" }, 
{ "Name": "scheduledstart", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Scheduled Start", "Attribute": "scheduledstart" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "typecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Type", "Attribute": "typecode" }], 
"ControlsLength": 18, 
"Navigation": [
{"Id": "navTargetLists", "Key": "navTargetLists", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "Campaign Activity", "Name": "Campaign Activity", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "SUMMARY", "Name": "Summary", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "regardingobjectid" }, 
{ "Name": "typecode" }, 
{ "Name": "channeltypecode" }, 
{ "Name": "partners" }, 
{ "Name": "description" }, 
{ "Name": "scheduledstart" }, 
{ "Name": "scheduledend" }, 
{ "Name": "actualstart" }, 
{ "Name": "actualend" }, 
{ "Name": "statuscode" }]}, 
{ "Label": "FINANCIALS", "Name": "Financials", "Visible": true, "Controls": [
{ "Name": "transactioncurrencyid" }, 
{ "Name": "budgetedcost" }, 
{ "Name": "actualcost" }]}, 
{ "Label": "Anti-Spam Settings: Exclude members who are contacted within the set period", "Name": "Anti Spam", "Visible": true, "Controls": [
{ "Name": "excludeifcontactedinxdays" }]}, 
{ "Label": "MARKETING LISTS", "Name": "Marketing Lists", "Visible": true, "Controls": [
{ "Name": "marketing_lists_grid" }]}, 
{ "Label": "SOCIAL PANE", "Name": "Social Pane", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
