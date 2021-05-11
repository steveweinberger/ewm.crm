/// <reference path="Xrm.js" />

var EntityLogicalName = "position";
var Form_048291e0_6d27_4926_8c05_085985c23412_Properties = {
description: "description"
,name: "name"
,parentpositionid: "parentpositionid"
};

var Form_048291e0_6d27_4926_8c05_085985c23412_Controls = {
description: "description"
,Members: "Members"
,name: "name"
,parentpositionid: "parentpositionid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "50", "etc": "50", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "position",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "description" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "parentpositionid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "parentpositionid" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "parentpositionid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Parent Position", "Attribute": "parentpositionid" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "GENERAL", "Name": "General", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "parentpositionid" }]}, 
{ "Label": "DESCRIPTION", "Name": "Description", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "POSITION MEMBERS", "Name": "Users", "Visible": true, "Controls": [
{ "Name": "Members" }]}]}]
};

var Xrm = new _xrm(pageData);
