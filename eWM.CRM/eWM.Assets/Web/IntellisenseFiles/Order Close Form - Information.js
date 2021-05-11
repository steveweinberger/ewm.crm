/// <reference path="Xrm.js" />

var EntityLogicalName = "orderclose";
var Form_d654f5c8_9476_4f67_8fdf_284696e5c712_Properties = {
actualend: "actualend"
,description: "description"
,subject: "subject"
};

var Form_d654f5c8_9476_4f67_8fdf_284696e5c712_Controls = {
actualend: "actualend"
,description: "description"
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
"QueryStringParameters": { "_gridType": "4209", "etc": "4209", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "orderclose",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actualend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "actualend" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "actualend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Closed Date", "Attribute": "actualend" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Resolution", "Name": "resolution", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Information", "Name": "information", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "actualend" }, 
{ "Name": "description" }]}]}]
};

var Xrm = new _xrm(pageData);
