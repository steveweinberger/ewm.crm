/// <reference path="Xrm.js" />

var EntityLogicalName = "recurringappointmentmaster";
var Form_3e168a0b_1d6e_4073_9a03_31fa33cb6a9b_Properties = {
description: "description"
,location: "location"
,optionalattendees: "optionalattendees"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,requiredattendees: "requiredattendees"
,statecode: "statecode"
,subject: "subject"
};

var Form_3e168a0b_1d6e_4073_9a03_31fa33cb6a9b_Controls = {
description: "description"
,header_ownerid: "header_ownerid"
,header_prioritycode: "header_prioritycode"
,header_statecode: "header_statecode"
,location: "location"
,optionalattendees: "optionalattendees"
,regardingobjectid: "regardingobjectid"
,requiredattendees: "requiredattendees"
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
{ "Label": "Recurring Appointment", "Name": "SUMMARY_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "general information", "Visible": true, "Controls": [
{ "Name": "requiredattendees" }, 
{ "Name": "optionalattendees" }, 
{ "Name": "subject" }, 
{ "Name": "location" }, 
{ "Name": "regardingobjectid" }]}, 
{ "Label": "Description", "Name": "appointment description", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "Section", "Name": "tab_2_section_2", "Visible": true, "Controls": [
]}]}]
};

var Xrm = new _xrm(pageData);
