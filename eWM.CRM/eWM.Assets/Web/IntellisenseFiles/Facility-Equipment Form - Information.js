/// <reference path="Xrm.js" />

var EntityLogicalName = "equipment";
var Form_3a39389a_0914_4ca1_9756_eb87a883bfe6_Properties = {
businessunitid: "businessunitid"
,description: "description"
,emailaddress: "emailaddress"
,name: "name"
,siteid: "siteid"
,timezonecode: "timezonecode"
};

var Form_3a39389a_0914_4ca1_9756_eb87a883bfe6_Controls = {
businessunitid: "businessunitid"
,description: "description"
,emailaddress: "emailaddress"
,name: "name"
,siteid: "siteid"
,timezonecode: "timezonecode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4000", "etc": "4000", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "equipment",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "businessunitid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "businessunitid" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "emailaddress", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "emailaddress" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 160, "Controls": [{ "Name": "name" }] }, 
{ "Name": "siteid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "siteid" }] }, 
{ "Name": "timezonecode", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1500, "Min" : -1500, "Precision" : 0, "Controls": [{ "Name": "timezonecode" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "businessunitid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Business Unit", "Attribute": "businessunitid" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "emailaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Primary Email", "Attribute": "emailaddress" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "siteid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Site", "Attribute": "siteid" }, 
{ "Name": "timezonecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Time Zone", "Attribute": "timezonecode" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section 1", "Name": "section 1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "businessunitid" }, 
{ "Name": "siteid" }, 
{ "Name": "emailaddress" }, 
{ "Name": "timezonecode" }, 
{ "Name": "description" }]}]}]
};

var Xrm = new _xrm(pageData);
