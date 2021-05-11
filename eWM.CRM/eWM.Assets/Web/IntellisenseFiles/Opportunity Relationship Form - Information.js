/// <reference path="Xrm.js" />

var EntityLogicalName = "customeropportunityrole";
var Form_839cf3d2_d7d0_43ce_a9c6_05afe0f9e816_Properties = {
customerid: "customerid"
,description: "description"
,opportunityid: "opportunityid"
,opportunityroleid: "opportunityroleid"
};

var Form_839cf3d2_d7d0_43ce_a9c6_05afe0f9e816_Controls = {
customerid: "customerid"
,description: "description"
,opportunityid: "opportunityid"
,opportunityroleid: "opportunityroleid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4503", "etc": "4503", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "customeropportunityrole",
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
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "description" }] }, 
{ "Name": "opportunityid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "opportunityid" }] }, 
{ "Name": "opportunityroleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "opportunityroleid" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customerid" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "opportunityid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Opportunity", "Attribute": "opportunityid" }, 
{ "Name": "opportunityroleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer Role", "Attribute": "opportunityroleid" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Opportunity Relationship Information", "Name": "Opportunity Relationship Information", "Visible": true, "Controls": [
{ "Name": "opportunityid" }, 
{ "Name": "customerid" }, 
{ "Name": "opportunityroleid" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}]
};

var Xrm = new _xrm(pageData);
