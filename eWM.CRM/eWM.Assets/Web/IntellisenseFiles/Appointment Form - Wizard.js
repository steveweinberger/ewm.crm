/// <reference path="Xrm.js" />

var EntityLogicalName = "appointment";
var Form_3a7d8836_e2d7_4bc3_919b_cc86a8d9688a_Properties = {
description: "description"
,isalldayevent: "isalldayevent"
,location: "location"
,optionalattendees: "optionalattendees"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,requiredattendees: "requiredattendees"
,scheduleddurationminutes: "scheduleddurationminutes"
,scheduledend: "scheduledend"
,scheduledstart: "scheduledstart"
,statuscode: "statuscode"
,subject: "subject"
};

var Form_3a7d8836_e2d7_4bc3_919b_cc86a8d9688a_Controls = {
attachmentsGrid: "attachmentsGrid"
,description: "description"
,header_ownerid: "header_ownerid"
,header_prioritycode: "header_prioritycode"
,isalldayevent: "isalldayevent"
,location: "location"
,optionalattendees: "optionalattendees"
,regardingobjectid: "regardingobjectid"
,requiredattendees: "requiredattendees"
,scheduleddurationminutes: "scheduleddurationminutes"
,scheduledend: "scheduledend"
,scheduledstart: "scheduledstart"
,statuscode: "statuscode"
,subject: "subject"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4201", "etc": "4201", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "appointment",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "isalldayevent", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isalldayevent" }] }, 
{ "Name": "location", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "location" }] }, 
{ "Name": "optionalattendees", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "optionalattendees" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "prioritycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Low", "value": 0 }, { "text" : "Normal", "value": 1 }, { "text" : "High", "value": 2 }], "SelectedOption" : { "option" : "Low", "value": 0 }, "Text": "Low", "Controls": [{ "Name": "header_prioritycode" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "requiredattendees", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "requiredattendees" }] }, 
{ "Name": "scheduleddurationminutes", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "scheduleddurationminutes" }] }, 
{ "Name": "scheduledend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "scheduledend" }] }, 
{ "Name": "scheduledstart", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "scheduledstart" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Free", "value": 1 }, { "text" : "Tentative", "value": 2 }, { "text" : "Completed", "value": 3 }, { "text" : "Canceled", "value": 4 }, { "text" : "Busy", "value": 5 }, { "text" : "Out of Office", "value": 6 }], "SelectedOption" : { "option" : "Free", "value": 1 }, "Text": "Free", "Controls": [{ "Name": "statuscode" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }]
, "AttributesLength": 13, 
"Controls": [
, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_prioritycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Priority", "Attribute": "prioritycode" }, 
{ "Name": "isalldayevent", "Type": "standard", "Disabled": false, "Visible": true, "Label": "All Day Event", "Attribute": "isalldayevent" }, 
{ "Name": "location", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Location", "Attribute": "location" }, 
{ "Name": "optionalattendees", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Optional Attendees", "Attribute": "optionalattendees" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "requiredattendees", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Required Attendees", "Attribute": "requiredattendees" }, 
{ "Name": "scheduleddurationminutes", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Duration", "Attribute": "scheduleddurationminutes" }, 
{ "Name": "scheduledend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Time", "Attribute": "scheduledend" }, 
{ "Name": "scheduledstart", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Start Time", "Attribute": "scheduledstart" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }], 
"ControlsLength": 13, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "appointment", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "Hidden Section", "Visible": true, "Controls": [
{ "Name": "requiredattendees" }, 
{ "Name": "optionalattendees" }, 
{ "Name": "regardingobjectid" }, 
{ "Name": "statuscode" }]}, 
{ "Label": "", "Name": "general information", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "location" }]}, 
{ "Label": "Attachments", "Name": "attachments", "Visible": true, "Controls": [
{ "Name": "attachmentsGrid" }]}, 
{ "Label": "", "Name": "scheduling information", "Visible": true, "Controls": [
{ "Name": "scheduledstart" }, 
{ "Name": "isalldayevent" }, 
{ "Name": "scheduledend" }, 
{ "Name": "scheduleddurationminutes" }]}, 
{ "Label": "Description", "Name": "appointment description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}]
};

var Xrm = new _xrm(pageData);
