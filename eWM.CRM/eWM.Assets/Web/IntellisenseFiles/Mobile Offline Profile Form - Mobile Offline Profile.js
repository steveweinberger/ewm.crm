/// <reference path="Xrm.js" />

var EntityLogicalName = "mobileofflineprofile";
var Form_03ec23f9_07df_47da_a473_dbe303e4cc78_Properties = {
description: "description"
,name: "name"
};

var Form_03ec23f9_07df_47da_a473_dbe303e4cc78_Controls = {
description: "description"
,name: "name"
,profileitemgrid: "profileitemgrid"
,SystemUserGrid: "SystemUserGrid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9866", "etc": "9866", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "mobileofflineprofile",
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
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 255, "Controls": [{ "Name": "name" }] }]
, "AttributesLength": 2, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }], 
"ControlsLength": 2, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General Information", "Name": "GENERALINFORMATION_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "GENERAL INFORMATION", "Name": "property_bag_properties_1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "description" }]}, 
{ "Label": "", "Name": "MOBILE OFFLINE PROFILE ITEMS", "Visible": true, "Controls": [
{ "Name": "profileitemgrid" }]}, 
{ "Label": "", "Name": "profile_users", "Visible": true, "Controls": [
{ "Name": "SystemUserGrid" }]}]}]
};

var Xrm = new _xrm(pageData);
