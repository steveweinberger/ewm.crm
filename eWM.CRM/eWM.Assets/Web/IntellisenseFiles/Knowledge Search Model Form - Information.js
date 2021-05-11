/// <reference path="Xrm.js" />

var EntityLogicalName = "knowledgesearchmodel";
var Form_8ef9ead2_d1e0_45f6_aa47_c6e762d969cf_Properties = {
description: "description"
,maxkeywords: "maxkeywords"
,name: "name"
,sourceentity: "sourceentity"
};

var Form_8ef9ead2_d1e0_45f6_aa47_c6e762d969cf_Controls = {
description: "description"
,maxkeywords: "maxkeywords"
,name: "name"
,sourceentity: "sourceentity"
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
"QueryStringParameters": { "_gridType": "9947", "etc": "9947", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "knowledgesearchmodel",
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
{ "Name": "maxkeywords", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "maxkeywords" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 160, "Controls": [{ "Name": "name" }] }, 
{ "Name": "sourceentity", "Value": null, "Type" : "string", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "sourceentity" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "maxkeywords", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Maximum Number of Key Phrases", "Attribute": "maxkeywords" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "sourceentity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Source Entity", "Attribute": "sourceentity" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Details", "Name": "{5b6ae5e5-8f54-4363-b906-48722f438b65}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "CONFIGURATION INFORMATION", "Name": "null", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "sourceentity" }, 
{ "Name": "maxkeywords" }, 
{ "Name": "description" }]}]}, 
{ "Label": "Keyword or Key Phrase Determination Fields", "Name": "{6a04c119-906c-4d8d-84d6-a470e79cbfcc}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "{87c466a2-37f3-4cde-a484-c6c75eff544d}", "Visible": true, "Controls": [
{ "Name": "textanalyticsentitymappings" }]}]}]
};

var Xrm = new _xrm(pageData);
