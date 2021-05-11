/// <reference path="Xrm.js" />

var EntityLogicalName = "activitymimeattachment";
var Form_54149ee6_7e66_4e93_bde8_b53b9f1a9c45_Properties = {
filename: "filename"
,filesize: "filesize"
};

var Form_54149ee6_7e66_4e93_bde8_b53b9f1a9c45_Controls = {
filename: "filename"
,filesize: "filesize"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1001", "etc": "1001", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "activitymimeattachment",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "filename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 255, "Controls": [{ "Name": "filename" }] }, 
{ "Name": "filesize", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "filesize" }] }]
, "AttributesLength": 2, 
"Controls": [
{ "Name": "filename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "File Name", "Attribute": "filename" }, 
{ "Name": "filesize", "Type": "standard", "Disabled": false, "Visible": true, "Label": "File Size (Bytes)", "Attribute": "filesize" }], 
"ControlsLength": 2, 
"Navigation": [
], 
"Tabs": [
{ "Label": "File Information", "Name": "test", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "File Information", "Name": "test", "Visible": true, "Controls": [
{ "Name": "filename" }, 
{ "Name": "filesize" }]}]}]
};

var Xrm = new _xrm(pageData);
