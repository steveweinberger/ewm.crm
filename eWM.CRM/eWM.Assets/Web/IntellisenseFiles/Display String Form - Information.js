/// <reference path="Xrm.js" />

var EntityLogicalName = "displaystring";
var Form_b17b56fb_b62a_434c_9f7b_8badd4bb979c_Properties = {
customcomment: "customcomment"
,customdisplaystring: "customdisplaystring"
};

var Form_b17b56fb_b62a_434c_9f7b_8badd4bb979c_Controls = {
customcomment: "customcomment"
,customdisplaystring: "customdisplaystring"
,systemstring: "systemstring"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4102", "etc": "4102", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "displaystring",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "customcomment", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "customcomment" }] }, 
{ "Name": "customdisplaystring", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 750, "Controls": [{ "Name": "customdisplaystring" }] }]
, "AttributesLength": 2, 
"Controls": [
{ "Name": "customcomment", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Comment", "Attribute": "customcomment" }, 
{ "Name": "customdisplaystring", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Custom Display String", "Attribute": "customdisplaystring" }], 
"ControlsLength": 2, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Information", "Name": "information", "Visible": true, "Controls": [
{ "Name": "systemstring" }, 
{ "Name": "customdisplaystring" }, 
{ "Name": "customcomment" }]}]}]
};

var Xrm = new _xrm(pageData);
