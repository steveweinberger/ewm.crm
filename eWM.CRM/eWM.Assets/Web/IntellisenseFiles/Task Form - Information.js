/// <reference path="Xrm.js" />

var EntityLogicalName = "task";
var Form_b62ce022_cc0f_4c8c_bb29_21948f70dc74_Properties = {
actualdurationminutes: "actualdurationminutes"
,category: "category"
,description: "description"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,scheduledend: "scheduledend"
,subcategory: "subcategory"
,subject: "subject"
};

var Form_b62ce022_cc0f_4c8c_bb29_21948f70dc74_Controls = {
actualdurationminutes: "actualdurationminutes"
,category: "category"
,description: "description"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,scheduledend: "scheduledend"
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
"QueryStringParameters": { "_gridType": "4212", "etc": "4212", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "task",
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
{ "Label": "Task", "Name": "task", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Task Description", "Name": "task description", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "description" }]}, 
{ "Label": "Task Details", "Name": "task details", "Visible": true, "Controls": [
{ "Name": "regardingobjectid" }, 
{ "Name": "ownerid" }, 
{ "Name": "actualdurationminutes" }, 
{ "Name": "prioritycode" }, 
{ "Name": "scheduledend" }, 
{ "Name": "category" }, 
{ "Name": "subcategory" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
