/// <reference path="Xrm.js" />

var EntityLogicalName = "channelaccessprofilerule";
var Form_7fae5597_e724_4e51_bb50_991a8a771aba_Properties = {
description: "description"
,name: "name"
,ownerid: "ownerid"
,statuscode: "statuscode"
};

var Form_7fae5597_e724_4e51_bb50_991a8a771aba_Controls = {
description: "description"
,header_statuscode: "header_statuscode"
,name: "name"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,ProfileRuleItems: "ProfileRuleItems"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9400", "etc": "9400", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "channelaccessprofilerule",
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
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Draft", "value": 1 }, { "text" : "Active", "value": 2 }], "SelectedOption" : { "option" : "Draft", "value": 1 }, "Text": "Draft", "Controls": [{ "Name": "header_statuscode" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Profile Rule Set Information", "Name": "profile rule set information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "description" }, 
{ "Name": "ProfileRuleItems" }]}, 
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
