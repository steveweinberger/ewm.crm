/// <reference path="Xrm.js" />

var EntityLogicalName = "knowledgebaserecord";
var Form_34b5f49e_c837_4865_be84_20ecc903cb6a_Properties = {
privateurl: "privateurl"
,publicurl: "publicurl"
,title: "title"
,uniqueid: "uniqueid"
};

var Form_34b5f49e_c837_4865_be84_20ecc903cb6a_Controls = {
associatedcases: "associatedcases"
,header_id: "header_id"
,notescontrol: "notescontrol"
,privateurl: "privateurl"
,publicurl: "publicurl"
,title: "title"
,uniqueid: "uniqueid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9930", "etc": "9930", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "knowledgebaserecord",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "privateurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "privateurl" }] }, 
{ "Name": "publicurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "publicurl" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 4000, "Controls": [{ "Name": "title" }] }, 
{ "Name": "uniqueid", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "header_id" }, { "Name": "uniqueid" }] }]
, "AttributesLength": 4, 
"Controls": [
, 
{ "Name": "header_id", "Type": "standard", "Disabled": false, "Visible": true, "Label": "ID", "Attribute": "uniqueid" }, 
{ "Name": "privateurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Private URL", "Attribute": "privateurl" }, 
{ "Name": "publicurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Public URL", "Attribute": "publicurl" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Article Title", "Attribute": "title" }, 
{ "Name": "uniqueid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "ID", "Attribute": "uniqueid" }], 
"ControlsLength": 5, 
"Navigation": [
{"Id": "navCases", "Key": "navCases", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "null", "Visible": true, "Controls": [
{ "Name": "uniqueid" }, 
{ "Name": "title" }, 
{ "Name": "privateurl" }, 
{ "Name": "publicurl" }, 
{ "Name": "associatedcases" }]}, 
{ "Label": "Notes", "Name": "null", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
