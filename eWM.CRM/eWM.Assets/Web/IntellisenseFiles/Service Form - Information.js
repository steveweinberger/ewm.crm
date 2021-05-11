/// <reference path="Xrm.js" />

var EntityLogicalName = "service";
var Form_937506e1_fe3c_4af3_bb2a_aeb595f8ac1d_Properties = {
description: "description"
,duration: "duration"
,initialstatuscode: "initialstatuscode"
,name: "name"
};

var Form_937506e1_fe3c_4af3_bb2a_aeb595f8ac1d_Controls = {
description: "description"
,displayanchoroffset: "displayanchoroffset"
,displaygranularity: "displaygranularity"
,duration: "duration"
,IFRAME_RuleTree: "IFRAME_RuleTree"
,initialstatuscode: "initialstatuscode"
,name: "name"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4001", "etc": "4001", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "service",
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
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Service Information", "Name": "service information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "initialstatuscode" }, 
{ "Name": "description" }]}, 
{ "Label": "Scheduling", "Name": "scheduling", "Visible": true, "Controls": [
{ "Name": "duration" }, 
{ "Name": "displaygranularity" }, 
{ "Name": "displayanchoroffset" }]}]}, 
{ "Label": "Required Resources", "Name": "required resources", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Resources", "Name": "resources", "Visible": true, "Controls": [
{ "Name": "IFRAME_RuleTree" }]}]}]
};

var Xrm = new _xrm(pageData);
