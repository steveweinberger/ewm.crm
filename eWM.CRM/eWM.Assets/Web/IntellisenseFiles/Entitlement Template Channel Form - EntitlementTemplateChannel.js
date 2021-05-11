/// <reference path="Xrm.js" />

var EntityLogicalName = "entitlementtemplatechannel";
var Form_a19d9bf3_89fa_4ecd_a326_7badf79dcffd_Properties = {
channel: "channel"
,name: "name"
,totalterms: "totalterms"
};

var Form_a19d9bf3_89fa_4ecd_a326_7badf79dcffd_Controls = {
channel: "channel"
,name: "name"
,totalterms: "totalterms"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9703", "etc": "9703", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "entitlementtemplatechannel",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "channel", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Phone", "value": 1 }, { "text" : "Email", "value": 2 }, { "text" : "Web", "value": 3 }, { "text" : "Facebook", "value": 2483 }, { "text" : "Twitter", "value": 3986 }], "SelectedOption" : { "option" : "Phone", "value": 1 }, "Text": "Phone", "Controls": [{ "Name": "channel" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "totalterms", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "totalterms" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "channel", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "channel" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entitlement Channel Name", "Attribute": "name" }, 
{ "Name": "totalterms", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Terms", "Attribute": "totalterms" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "entitlementtemplatechannelinformation", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "channel" }, 
{ "Name": "totalterms" }]}]}]
};

var Xrm = new _xrm(pageData);
