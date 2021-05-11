/// <reference path="Xrm.js" />

var EntityLogicalName = "contracttemplate";
var Form_e6897fe2_1cc4_4e40_89af_8df02a27f8d9_Properties = {
abbreviation: "abbreviation"
,allotmenttypecode: "allotmenttypecode"
,name: "name"
};

var Form_e6897fe2_1cc4_4e40_89af_8df02a27f8d9_Controls = {
abbreviation: "abbreviation"
,allotmenttypecode: "allotmenttypecode"
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
"QueryStringParameters": { "_gridType": "2011", "etc": "2011", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "contracttemplate",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "abbreviation", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 20, "Controls": [{ "Name": "abbreviation" }] }, 
{ "Name": "allotmenttypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Number of Cases", "value": 1 }, { "text" : "Time", "value": 2 }, { "text" : "Coverage Dates", "value": 3 }], "SelectedOption" : { "option" : "Number of Cases", "value": 1 }, "Text": "Number of Cases", "Controls": [{ "Name": "allotmenttypecode" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "abbreviation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Abbreviation", "Attribute": "abbreviation" }, 
{ "Name": "allotmenttypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Allotment Type", "Attribute": "allotmenttypecode" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Contract Type Information", "Name": "contract type information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "abbreviation" }, 
{ "Name": "allotmenttypecode" }]}]}]
};

var Xrm = new _xrm(pageData);
