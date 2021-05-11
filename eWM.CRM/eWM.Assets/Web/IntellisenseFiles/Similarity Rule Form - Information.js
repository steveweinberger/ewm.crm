/// <reference path="Xrm.js" />

var EntityLogicalName = "similarityrule";
var Form_e1703009_08dd_43b6_adb5_251724b98288_Properties = {
baseentitytypecode: "baseentitytypecode"
,description: "description"
,excludeinactiverecords: "excludeinactiverecords"
,matchingentitytypecode: "matchingentitytypecode"
,maxkeywords: "maxkeywords"
,name: "name"
,ngramsize: "ngramsize"
,statecode: "statecode"
};

var Form_e1703009_08dd_43b6_adb5_251724b98288_Controls = {
baseentitytypecode: "baseentitytypecode"
,description: "description"
,excludeinactiverecords: "excludeinactiverecords"
,matchingentitytypecode: "matchingentitytypecode"
,maxkeywords: "maxkeywords"
,name: "name"
,ngramsize: "ngramsize"
,ruleconditioncontrol: "ruleconditioncontrol"
,statecode: "statecode"
,textanalyticsentitymappings: "textanalyticsentitymappings"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9951", "etc": "9951", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "similarityrule",
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
{ "Label": "General", "Name": "rule", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section 1", "Name": "section 1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "statecode" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "Similarity Rule Criteria", "Name": "criteria", "Visible": true, "Controls": [
{ "Name": "baseentitytypecode" }, 
{ "Name": "matchingentitytypecode" }, 
{ "Name": "excludeinactiverecords" }]}, 
{ "Label": "You cannot customize the similarity rule criteria section.", "Name": "Rule Conditions", "Visible": true, "Controls": [
{ "Name": "ruleconditioncontrol" }]}, 
{ "Label": "These settings are used to determine the keywords or key phrases pulled from source records using text analytics to match with target records using text search. This helps to achieve similarity between source and target records.", "Name": "Text Match Settings", "Visible": true, "Controls": [
{ "Name": "ngramsize" }, 
{ "Name": "maxkeywords" }]}]}, 
{ "Label": "TKeyword or Key Phrase Determination Fields", "Name": "{98e70b83-44b7-4fdd-bf34-d6825a302d4f}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "{3537b443-1439-43a9-8bea-a7c87356a851}", "Visible": true, "Controls": [
{ "Name": "textanalyticsentitymappings" }]}]}]
};

var Xrm = new _xrm(pageData);
