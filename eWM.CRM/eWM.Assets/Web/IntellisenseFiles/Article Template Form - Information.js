/// <reference path="Xrm.js" />

var EntityLogicalName = "kbarticletemplate";
var Form_4fddc7f5_7992_4e7c_a4c8_15ccb4ad9551_Properties = {
description: "description"
,languagecode: "languagecode"
,title: "title"
};

var Form_4fddc7f5_7992_4e7c_a4c8_15ccb4ad9551_Controls = {
description: "description"
,languagecode: "languagecode"
,title: "title"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1016", "etc": "1016", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "kbarticletemplate",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "languagecode", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "languagecode" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "title" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "languagecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Language", "Attribute": "languagecode" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Title", "Attribute": "title" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Title", "Name": "title", "Visible": true, "Controls": [
{ "Name": "title" }, 
{ "Name": "description" }, 
{ "Name": "languagecode" }]}]}]
};

var Xrm = new _xrm(pageData);
