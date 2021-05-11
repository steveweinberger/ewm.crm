/// <reference path="Xrm.js" />

var EntityLogicalName = "sla";
var Form_f3d9a146_4af1_41e0_86ff_209d44672c0a_Properties = {
allowpauseresume: "allowpauseresume"
,applicablefrompicklist: "applicablefrompicklist"
,businesshoursid: "businesshoursid"
,description: "description"
,name: "name"
,ownerid: "ownerid"
,slatype: "slatype"
,statuscode: "statuscode"
};

var Form_f3d9a146_4af1_41e0_86ff_209d44672c0a_Controls = {
AllowPauseResume: "AllowPauseResume"
,applicablefrompicklist: "applicablefrompicklist"
,businesshoursid: "businesshoursid"
,description: "description"
,header_ownerid: "header_ownerid"
,header_statuscode: "header_statuscode"
,name: "name"
,notescontrol: "notescontrol"
,SLADetails: "SLADetails"
,SLAType: "SLAType"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9750", "etc": "9750", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "sla",
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
{"Id": "navEntitlements", "Key": "navEntitlements", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "applicablefrompicklist" }, 
{ "Name": "businesshoursid" }, 
{ "Name": "SLAType" }, 
{ "Name": "AllowPauseResume" }, 
{ "Name": "description" }]}, 
{ "Label": "SLA Details", "Name": "sladetails", "Visible": true, "Controls": [
{ "Name": "SLADetails" }]}, 
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
