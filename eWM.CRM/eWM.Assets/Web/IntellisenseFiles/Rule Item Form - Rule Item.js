/// <reference path="Xrm.js" />

var EntityLogicalName = "routingruleitem";
var Form_7e1662d3_f99c_4803_8274_c1f79a943991_Properties = {
assignobjectid: "assignobjectid"
,description: "description"
,name: "name"
,routedqueueid: "routedqueueid"
};

var Form_7e1662d3_f99c_4803_8274_c1f79a943991_Controls = {
assignobjectid: "assignobjectid"
,description: "description"
,name: "name"
,notescontrol: "notescontrol"
,routedqueueid: "routedqueueid"
,routeoption: "routeoption"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "8199", "etc": "8199", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "routingruleitem",
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
{ "Label": "Rule Item Information", "Name": "rule item information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "description" }]}]}, 
{ "Label": "Rule Criteria", "Name": "RuleCriteria", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "If Conditions", "Name": "ConditionControl", "Visible": true, "Controls": [
]}, 
{ "Label": "Then Conditions", "Name": "rule then conditions", "Visible": true, "Controls": [
{ "Name": "routeoption" }, 
{ "Name": "routedqueueid" }, 
{ "Name": "assignobjectid" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
