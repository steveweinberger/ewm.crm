/// <reference path="Xrm.js" />

var EntityLogicalName = "salesliterature";
var Form_5a95c8b2_6af1_4332_83ae_ea8ddf9c9c9c_Properties = {
description: "description"
,employeecontactid: "employeecontactid"
,expirationdate: "expirationdate"
,literaturetypecode: "literaturetypecode"
,name: "name"
,subjectid: "subjectid"
};

var Form_5a95c8b2_6af1_4332_83ae_ea8ddf9c9c9c_Controls = {
Competitors: "Competitors"
,description: "description"
,header_employeecontactid: "header_employeecontactid"
,header_expirationdate: "header_expirationdate"
,literaturetypecode: "literaturetypecode"
,name: "name"
,Products: "Products"
,SalesAttachments: "SalesAttachments"
,subjectid: "subjectid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1038", "etc": "1038", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "salesliterature",
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
{"Id": "navDoc", "Key": "navDoc", "Label": "", "Visible": true }, 
{"Id": "navComp", "Key": "navComp", "Label": "", "Visible": true }, 
{"Id": "navProducts", "Key": "navProducts", "Label": "", "Visible": true }, 
{"Id": "navDocument", "Key": "navDocument", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "", "Name": "general_information", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "INFORMATION", "Name": "sales literature information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "subjectid" }, 
{ "Name": "literaturetypecode" }, 
{ "Name": "description" }]}, 
{ "Label": "", "Name": "sales_attachments", "Visible": true, "Controls": [
{ "Name": "SalesAttachments" }]}, 
{ "Label": "", "Name": "related", "Visible": true, "Controls": [
{ "Name": "Products" }, 
{ "Name": "Competitors" }]}]}]
};

var Xrm = new _xrm(pageData);
