/// <reference path="Xrm.js" />

var EntityLogicalName = "documentindex";
var Form_269b901c_4afb_46c5_904f_d2dde0556e4b_Properties = {
number: "number"
,title: "title"
};

var Form_269b901c_4afb_46c5_904f_d2dde0556e4b_Controls = {
number: "number"
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
"QueryStringParameters": { "_gridType": "126", "etc": "126", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "documentindex",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "number", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "number" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "title" }] }]
, "AttributesLength": 2, 
"Controls": [
{ "Name": "number", "Type": "standard", "Disabled": false, "Visible": true, "Label": "number", "Attribute": "number" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Title", "Attribute": "title" }], 
"ControlsLength": 2, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Document Index", "Name": "document index", "Visible": true, "Controls": [
{ "Name": "title" }, 
{ "Name": "number" }]}]}]
};

var Xrm = new _xrm(pageData);
