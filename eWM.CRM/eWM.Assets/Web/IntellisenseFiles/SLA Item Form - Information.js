/// <reference path="Xrm.js" />

var EntityLogicalName = "slaitem";
var Form_8c22f15d_28e1_4d84_a521_d254b6de9c6b_Properties = {
failureafter: "failureafter"
,name: "name"
,warnafter: "warnafter"
};

var Form_8c22f15d_28e1_4d84_a521_d254b6de9c6b_Controls = {
failureafter: "failureafter"
,name: "name"
,relatedcasefield: "relatedcasefield"
,warnafter: "warnafter"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9751", "etc": "9751", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "slaitem",
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
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "ruleidinformation", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "relatedcasefield" }]}, 
{ "Label": "Applicable When", "Name": "applicablewhen", "Visible": true, "Controls": [
]}, 
{ "Label": "Success Criteria", "Name": "successcriteria", "Visible": true, "Controls": [
]}, 
{ "Label": "Success Actions", "Name": "slaitemsucessaction", "Visible": true, "Controls": [
]}, 
{ "Label": "SLA Item Failure", "Name": "slaitemfailure", "Visible": true, "Controls": [
{ "Name": "failureafter" }]}, 
{ "Label": "Failure Actions", "Name": "slaitemfailureaction", "Visible": true, "Controls": [
]}, 
{ "Label": "SLA Item Warning", "Name": "slaitemwarning", "Visible": true, "Controls": [
{ "Name": "warnafter" }]}, 
{ "Label": "Warning Actions", "Name": "slaitemwarningAction", "Visible": true, "Controls": [
]}]}]
};

var Xrm = new _xrm(pageData);
