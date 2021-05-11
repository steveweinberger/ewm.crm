/// <reference path="Xrm.js" />

var EntityLogicalName = "discounttype";
var Form_980c88c8_4d1b_4ba2_960a_35ca1d9639da_Properties = {
description: "description"
,isamounttype: "isamounttype"
,name: "name"
,statecode: "statecode"
,transactioncurrencyid: "transactioncurrencyid"
};

var Form_980c88c8_4d1b_4ba2_960a_35ca1d9639da_Controls = {
description: "description"
,footer_statecode: "footer_statecode"
,isamounttype: "isamounttype"
,name: "name"
,transactioncurrencyid: "transactioncurrencyid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1080", "etc": "1080", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "discounttype",
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
{ "Name": "isamounttype", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isamounttype" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }]
, "AttributesLength": 5, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "isamounttype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Type", "Attribute": "isamounttype" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }], 
"ControlsLength": 5, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Discount Type Information", "Name": "discount type information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "isamounttype" }, 
{ "Name": "transactioncurrencyid" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}]
};

var Xrm = new _xrm(pageData);
