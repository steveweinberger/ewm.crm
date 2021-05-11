/// <reference path="Xrm.js" />

var EntityLogicalName = "transactioncurrency";
var Form_b56b6d35_1e69_436b_ba86_78127d36e8aa_Properties = {
currencyname: "currencyname"
,currencyprecision: "currencyprecision"
,currencysymbol: "currencysymbol"
,exchangerate: "exchangerate"
,isocurrencycode: "isocurrencycode"
};

var Form_b56b6d35_1e69_436b_ba86_78127d36e8aa_Controls = {
currencyname: "currencyname"
,currencyprecision: "currencyprecision"
,currencysymbol: "currencysymbol"
,currencytype: "currencytype"
,exchangerate: "exchangerate"
,isocurrencycode: "isocurrencycode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9105", "etc": "9105", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "transactioncurrency",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "currencyname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "currencyname" }] }, 
{ "Name": "currencyprecision", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 4, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "currencyprecision" }] }, 
{ "Name": "currencysymbol", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 10, "Controls": [{ "Name": "currencysymbol" }] }, 
{ "Name": "exchangerate", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0.0000000001, "Precision" : 10, "Controls": [{ "Name": "exchangerate" }] }, 
{ "Name": "isocurrencycode", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 5, "Controls": [{ "Name": "isocurrencycode" }] }]
, "AttributesLength": 5, 
"Controls": [
{ "Name": "currencyname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency Name", "Attribute": "currencyname" }, 
{ "Name": "currencyprecision", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency Precision", "Attribute": "currencyprecision" }, 
{ "Name": "currencysymbol", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency Symbol", "Attribute": "currencysymbol" }, 
{ "Name": "exchangerate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Exchange Rate", "Attribute": "exchangerate" }, 
{ "Name": "isocurrencycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency Code", "Attribute": "isocurrencycode" }], 
"ControlsLength": 5, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Transaction Currency Information", "Name": "Transaction currency information", "Visible": true, "Controls": [
{ "Name": "currencytype" }, 
{ "Name": "isocurrencycode" }, 
{ "Name": "currencyprecision" }, 
{ "Name": "currencyname" }, 
{ "Name": "currencysymbol" }]}, 
{ "Label": "Currency Conversion", "Name": "Currency conversion", "Visible": true, "Controls": [
{ "Name": "exchangerate" }]}]}]
};

var Xrm = new _xrm(pageData);
