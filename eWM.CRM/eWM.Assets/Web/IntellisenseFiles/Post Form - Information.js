/// <reference path="Xrm.js" />

var EntityLogicalName = "post";
var Form_6fa5ed8e_81a9_11e0_a0f5_1cc1de634cfe_Properties = {
regardingobjectid: "regardingobjectid"
,source: "source"
,text: "text"
};

var Form_6fa5ed8e_81a9_11e0_a0f5_1cc1de634cfe_Controls = {
regardingobjectid: "regardingobjectid"
,source: "source"
,text: "text"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "8000", "etc": "8000", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "post",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "source", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Auto Post", "value": 1 }, { "text" : "Manual Post", "value": 2 }], "SelectedOption" : { "option" : "Auto Post", "value": 1 }, "Text": "Auto Post", "Controls": [{ "Name": "source" }] }, 
{ "Name": "text", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "text" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "source", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Source", "Attribute": "source" }, 
{ "Name": "text", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Text", "Attribute": "text" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "Post information", "Visible": true, "Controls": [
{ "Name": "text" }, 
{ "Name": "source" }, 
{ "Name": "regardingobjectid" }]}]}]
};

var Xrm = new _xrm(pageData);
