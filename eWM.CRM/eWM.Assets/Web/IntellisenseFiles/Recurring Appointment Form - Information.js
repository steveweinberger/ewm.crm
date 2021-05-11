/// <reference path="Xrm.js" />

var EntityLogicalName = "recurringappointmentmaster";
var Form_4a8cda55_024e_419c_bbe1_9540e0b8e297_Properties = {
category: "category"
,description: "description"
,location: "location"
,optionalattendees: "optionalattendees"
,organizer: "organizer"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,requiredattendees: "requiredattendees"
,statuscode: "statuscode"
,subcategory: "subcategory"
,subject: "subject"
};

var Form_4a8cda55_024e_419c_bbe1_9540e0b8e297_Controls = {
category: "category"
,description: "description"
,location: "location"
,notescontrol: "notescontrol"
,optionalattendees: "optionalattendees"
,organizer: "organizer"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,requiredattendees: "requiredattendees"
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
"QueryStringParameters": { "_gridType": "4251", "etc": "4251", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "recurringappointmentmaster",
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
{ "Label": "Appointment", "Name": "appointment", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General Information", "Name": "general information", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "requiredattendees" }, 
{ "Name": "optionalattendees" }, 
{ "Name": "location" }, 
{ "Name": "statuscode" }, 
{ "Name": "prioritycode" }]}, 
{ "Label": "Appointment Description", "Name": "appointment description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}, 
{ "Label": "Details", "Name": "{A0A52124-8019-4a51-9DAE-D85CD6227FFF}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Appointment Details", "Name": "{6DAA79FB-7C18-428f-9219-7A146BAC5AE8}", "Visible": true, "Controls": [
{ "Name": "regardingobjectid" }, 
{ "Name": "ownerid" }, 
{ "Name": "organizer" }, 
{ "Name": "category" }, 
{ "Name": "subcategory" }]}]}]
};

var Xrm = new _xrm(pageData);
