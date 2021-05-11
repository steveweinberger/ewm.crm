/// <reference path="Xrm.js" />

var EntityLogicalName = "serviceappointment";
var Form_75ec0e60_421b_4e71_8f5d_d8de7e0aa04e_Properties = {
category: "category"
,customers: "customers"
,isalldayevent: "isalldayevent"
,location: "location"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,resources: "resources"
,scheduleddurationminutes: "scheduleddurationminutes"
,scheduledend: "scheduledend"
,scheduledstart: "scheduledstart"
,serviceid: "serviceid"
,siteid: "siteid"
,statecode: "statecode"
,statuscode: "statuscode"
,subcategory: "subcategory"
,subject: "subject"
};

var Form_75ec0e60_421b_4e71_8f5d_d8de7e0aa04e_Controls = {
category: "category"
,customers: "customers"
,footer_statecode: "footer_statecode"
,isalldayevent: "isalldayevent"
,location: "location"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,resources: "resources"
,scheduleddurationminutes: "scheduleddurationminutes"
,scheduledend: "scheduledend"
,scheduledstart: "scheduledstart"
,serviceid: "serviceid"
,siteid: "siteid"
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
"QueryStringParameters": { "_gridType": "4214", "etc": "4214", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "serviceappointment",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
]
, "AttributesLength": 0, 
"Controls": [
], 
"ControlsLength": 0, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Service Activity", "Name": "service", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General Information", "Name": "general information", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "serviceid" }, 
{ "Name": "siteid" }, 
{ "Name": "customers" }, 
{ "Name": "resources" }, 
{ "Name": "location" }, 
{ "Name": "statuscode" }]}, 
{ "Label": "Scheduling Information", "Name": "scheduling information", "Visible": true, "Controls": [
{ "Name": "scheduledstart" }, 
{ "Name": "scheduledend" }, 
{ "Name": "scheduleddurationminutes" }, 
{ "Name": "isalldayevent" }]}, 
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}, 
{ "Label": "Details", "Name": "details", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Appointment Details", "Name": "appointment details", "Visible": true, "Controls": [
{ "Name": "regardingobjectid" }, 
{ "Name": "ownerid" }, 
{ "Name": "prioritycode" }, 
{ "Name": "category" }, 
{ "Name": "subcategory" }]}]}]
};

var Xrm = new _xrm(pageData);
