/// <reference path="Xrm.js" />

var EntityLogicalName = "customerrelationship";
var Form_31046aeb_9160_4d0f_8660_dd29194420a0_Properties = {
customerid: "customerid"
,customerroledescription: "customerroledescription"
,customerroleid: "customerroleid"
,partnerid: "partnerid"
,partnerroledescription: "partnerroledescription"
,partnerroleid: "partnerroleid"
};

var Form_31046aeb_9160_4d0f_8660_dd29194420a0_Controls = {
customerid: "customerid"
,customerroledescription: "customerroledescription"
,customerroleid: "customerroleid"
,partnerid: "partnerid"
,partnerroledescription: "partnerroledescription"
,partnerroleid: "partnerroleid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4502", "etc": "4502", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "customerrelationship",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "customerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerid" }] }, 
{ "Name": "customerroledescription", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "customerroledescription" }] }, 
{ "Name": "customerroleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerroleid" }] }, 
{ "Name": "partnerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "partnerid" }] }, 
{ "Name": "partnerroledescription", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "partnerroledescription" }] }, 
{ "Name": "partnerroleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "partnerroleid" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Party 1", "Attribute": "customerid" }, 
{ "Name": "customerroledescription", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description 1", "Attribute": "customerroledescription" }, 
{ "Name": "customerroleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Role 1", "Attribute": "customerroleid" }, 
{ "Name": "partnerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Party 2", "Attribute": "partnerid" }, 
{ "Name": "partnerroledescription", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description 2", "Attribute": "partnerroledescription" }, 
{ "Name": "partnerroleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Role 2", "Attribute": "partnerroleid" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Information", "Name": "information", "Visible": true, "Controls": [
{ "Name": "customerid" }, 
{ "Name": "partnerid" }, 
{ "Name": "customerroleid" }, 
{ "Name": "partnerroleid" }, 
{ "Name": "customerroledescription" }, 
{ "Name": "partnerroledescription" }]}]}]
};

var Xrm = new _xrm(pageData);
