/// <reference path="Xrm.js" />

var EntityLogicalName = "appointment";
var Form_f5af0c79_97db_4c3f_8d7e_62b53d9062d4_Properties = {
category: "category"
,description: "description"
,isalldayevent: "isalldayevent"
,location: "location"
,optionalattendees: "optionalattendees"
,organizer: "organizer"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,requiredattendees: "requiredattendees"
,scheduleddurationminutes: "scheduleddurationminutes"
,scheduledend: "scheduledend"
,scheduledstart: "scheduledstart"
,statuscode: "statuscode"
,subcategory: "subcategory"
,subject: "subject"
};

var Form_f5af0c79_97db_4c3f_8d7e_62b53d9062d4_Controls = {
attachmentsGrid: "attachmentsGrid"
,category: "category"
,description: "description"
,isalldayevent: "isalldayevent"
,location: "location"
,notescontrol: "notescontrol"
,optionalattendees: "optionalattendees"
,organizer: "organizer"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,requiredattendees: "requiredattendees"
,scheduleddurationminutes: "scheduleddurationminutes"
,scheduledend: "scheduledend"
,scheduledstart: "scheduledstart"
,statuscode: "statuscode"
,subcategory: "subcategory"
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
{ "Name": "category", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "category" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "isalldayevent", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isalldayevent" }] }, 
{ "Name": "location", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "location" }] }, 
{ "Name": "optionalattendees", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "optionalattendees" }] }, 
{ "Name": "organizer", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "organizer" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "prioritycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Low", "value": 0 }, { "text" : "Normal", "value": 1 }, { "text" : "High", "value": 2 }], "SelectedOption" : { "option" : "Low", "value": 0 }, "Text": "Low", "Controls": [{ "Name": "prioritycode" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "requiredattendees", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "requiredattendees" }] }, 
{ "Name": "scheduleddurationminutes", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "scheduleddurationminutes" }] }, 
{ "Name": "scheduledend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "scheduledend" }] }, 
{ "Name": "scheduledstart", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "scheduledstart" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Free", "value": 1 }, { "text" : "Tentative", "value": 2 }, { "text" : "Completed", "value": 3 }, { "text" : "Canceled", "value": 4 }, { "text" : "Busy", "value": 5 }, { "text" : "Out of Office", "value": 6 }], "SelectedOption" : { "option" : "Free", "value": 1 }, "Text": "Free", "Controls": [{ "Name": "statuscode" }] }, 
{ "Name": "subcategory", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "subcategory" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }]
, "AttributesLength": 16, 
"Controls": [
, 
{ "Name": "category", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Category", "Attribute": "category" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "isalldayevent", "Type": "standard", "Disabled": false, "Visible": true, "Label": "All Day Event", "Attribute": "isalldayevent" }, 
{ "Name": "location", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Location", "Attribute": "location" }, 
{ "Name": "optionalattendees", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Optional", "Attribute": "optionalattendees" }, 
{ "Name": "organizer", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Organizer", "Attribute": "organizer" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "prioritycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Priority", "Attribute": "prioritycode" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "requiredattendees", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Required", "Attribute": "requiredattendees" }, 
{ "Name": "scheduleddurationminutes", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Duration", "Attribute": "scheduleddurationminutes" }, 
{ "Name": "scheduledend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Time", "Attribute": "scheduledend" }, 
{ "Name": "scheduledstart", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Start Time", "Attribute": "scheduledstart" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Show Time As", "Attribute": "statuscode" }, 
{ "Name": "subcategory", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Sub-Category", "Attribute": "subcategory" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }], 
"ControlsLength": 16, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Appointment", "Name": "appointment", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General Information", "Name": "general information", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "location" }, 
{ "Name": "regardingobjectid" }]}, 
{ "Label": "Scheduling Information", "Name": "scheduling information", "Visible": true, "Controls": [
{ "Name": "requiredattendees" }, 
{ "Name": "optionalattendees" }, 
{ "Name": "scheduledstart" }, 
{ "Name": "scheduleddurationminutes" }, 
{ "Name": "scheduledend" }, 
{ "Name": "isalldayevent" }, 
{ "Name": "statuscode" }, 
{ "Name": "prioritycode" }]}, 
{ "Label": "Appointment Description", "Name": "appointment description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}, 
{ "Label": "Attachments", "Name": "attachments", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Attachments", "Name": "attachments", "Visible": true, "Controls": [
{ "Name": "attachmentsGrid" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}, 
{ "Label": "Details", "Name": "{A0A52124-8019-4a51-9DAE-D85CD6227FFF}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Appointment Details", "Name": "{6DAA79FB-7C18-428f-9219-7A146BAC5AE8}", "Visible": true, "Controls": [
{ "Name": "ownerid" }, 
{ "Name": "organizer" }, 
{ "Name": "category" }, 
{ "Name": "subcategory" }]}]}]
};

var Xrm = new _xrm(pageData);
