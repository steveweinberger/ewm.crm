/// <reference path="Xrm.js" />

var EntityLogicalName = "sharepointsite";
var Form_ba6522af_e71b_df11_aa01_00155d2a9006_Properties = {
absoluteurl: "absoluteurl"
,description: "description"
,isgridpresent: "isgridpresent"
,ispowerbisite: "ispowerbisite"
,lastvalidated: "lastvalidated"
,name: "name"
,ownerid: "ownerid"
,parentsite: "parentsite"
,relativeurl: "relativeurl"
,statecode: "statecode"
,validationstatus: "validationstatus"
,validationstatuserrorcode: "validationstatuserrorcode"
};

var Form_ba6522af_e71b_df11_aa01_00155d2a9006_Controls = {
absoluteurl: "absoluteurl"
,description: "description"
,footer_statecode: "footer_statecode"
,isgridpresent: "isgridpresent"
,ispowerbisite: "ispowerbisite"
,lastvalidated: "lastvalidated"
,name: "name"
,ownerid: "ownerid"
,parentsite: "parentsite"
,relativeurl: "relativeurl"
,urloption: "urloption"
,validationstatus: "validationstatus"
,validationstatuserrorcode: "validationstatuserrorcode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9502", "etc": "9502", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "sharepointsite",
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
{"Id": "navSharePointSubSites", "Key": "navSharePointSubSites", "Label": "", "Visible": true }, 
{"Id": "navSubDocumentLocations", "Key": "navSubDocumentLocations", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section 1", "Name": "section 1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "ownerid" }, 
{ "Name": "description" }]}, 
{ "Label": "URL Options", "Name": "url option", "Visible": true, "Controls": [
{ "Name": "urloption" }, 
{ "Name": "absoluteurl" }, 
{ "Name": "parentsite" }, 
{ "Name": "relativeurl" }, 
{ "Name": "isgridpresent" }, 
{ "Name": "ispowerbisite" }]}, 
{ "Label": "URL Validation", "Name": "url validation", "Visible": true, "Controls": [
{ "Name": "validationstatus" }, 
{ "Name": "lastvalidated" }, 
{ "Name": "validationstatuserrorcode" }]}]}]
};

var Xrm = new _xrm(pageData);
