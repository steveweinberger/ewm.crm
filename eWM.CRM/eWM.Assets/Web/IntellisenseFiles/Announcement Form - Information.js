/// <reference path="Xrm.js" />

var EntityLogicalName = "businessunitnewsarticle";
var Form_90e5f500_32fa_4e7d_b2fc_11319e4065b2_Properties = {
activeuntil: "activeuntil"
,articletitle: "articletitle"
,articleurl: "articleurl"
,newsarticle: "newsarticle"
};

var Form_90e5f500_32fa_4e7d_b2fc_11319e4065b2_Controls = {
activeuntil: "activeuntil"
,articletitle: "articletitle"
,articleurl: "articleurl"
,newsarticle: "newsarticle"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "132", "etc": "132", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "businessunitnewsarticle",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "activeuntil", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "activeuntil" }] }, 
{ "Name": "articletitle", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "articletitle" }] }, 
{ "Name": "articleurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "articleurl" }] }, 
{ "Name": "newsarticle", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 1073741823, "Controls": [{ "Name": "newsarticle" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "activeuntil", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Expiration Date", "Attribute": "activeuntil" }, 
{ "Name": "articletitle", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Title", "Attribute": "articletitle" }, 
{ "Name": "articleurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "More Information URL", "Attribute": "articleurl" }, 
{ "Name": "newsarticle", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Body", "Attribute": "newsarticle" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Announcement", "Name": "announcement", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Announcement Information", "Name": "announcement information", "Visible": true, "Controls": [
{ "Name": "articletitle" }, 
{ "Name": "newsarticle" }]}, 
{ "Label": "Additional Settings", "Name": "additional settings", "Visible": true, "Controls": [
{ "Name": "articleurl" }, 
{ "Name": "activeuntil" }]}]}]
};

var Xrm = new _xrm(pageData);
