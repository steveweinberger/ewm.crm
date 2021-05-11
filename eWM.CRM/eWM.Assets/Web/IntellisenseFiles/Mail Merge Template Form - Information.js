/// <reference path="Xrm.js" />

var EntityLogicalName = "mailmergetemplate";
var Form_e6f97ca0_2eff_4f69_8c04_210090d3c323_Properties = {
description: "description"
,ispersonal: "ispersonal"
,languagecode: "languagecode"
,name: "name"
,ownerid: "ownerid"
,templatetypecode: "templatetypecode"
};

var Form_e6f97ca0_2eff_4f69_8c04_210090d3c323_Controls = {
description: "description"
,ispersonal: "ispersonal"
,languagecode: "languagecode"
,name: "name"
,ownerid: "ownerid"
,templatetypecode: "templatetypecode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9106", "etc": "9106", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "mailmergetemplate",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "description" }] }, 
{ "Name": "ispersonal", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "ispersonal" }] }, 
{ "Name": "languagecode", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "languagecode" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 425, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "templatetypecode", "Value": null, "Type" : "string", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "templatetypecode" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "ispersonal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ownership", "Attribute": "ispersonal" }, 
{ "Name": "languagecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Template Language", "Attribute": "languagecode" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "templatetypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Associated Entity", "Attribute": "templatetypecode" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Details", "Name": "Details", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "description" }]}, 
{ "Label": "Categorization", "Name": "Categorization", "Visible": true, "Controls": [
{ "Name": "templatetypecode" }]}, 
{ "Label": "Ownership", "Name": "Ownership", "Visible": true, "Controls": [
{ "Name": "ispersonal" }, 
{ "Name": "ownerid" }]}, 
{ "Label": "Language", "Name": "Language", "Visible": true, "Controls": [
{ "Name": "languagecode" }]}]}]
};

var Xrm = new _xrm(pageData);
