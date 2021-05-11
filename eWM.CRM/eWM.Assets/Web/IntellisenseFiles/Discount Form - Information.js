/// <reference path="Xrm.js" />

var EntityLogicalName = "discount";
var Form_759584de_3297_493b_a2d9_c354f7a2d8f3_Properties = {
amount: "amount"
,highquantity: "highquantity"
,lowquantity: "lowquantity"
,percentage: "percentage"
};

var Form_759584de_3297_493b_a2d9_c354f7a2d8f3_Controls = {
amount: "amount"
,highquantity: "highquantity"
,lowquantity: "lowquantity"
,percentage: "percentage"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1013", "etc": "1013", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "discount",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "amount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 4, "Controls": [{ "Name": "amount" }] }, 
{ "Name": "highquantity", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0.00001, "Precision" : 5, "Controls": [{ "Name": "highquantity" }] }, 
{ "Name": "lowquantity", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0.00001, "Precision" : 5, "Controls": [{ "Name": "lowquantity" }] }, 
{ "Name": "percentage", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 5, "Controls": [{ "Name": "percentage" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "amount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Amount", "Attribute": "amount" }, 
{ "Name": "highquantity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Quantity", "Attribute": "highquantity" }, 
{ "Name": "lowquantity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Begin Quantity", "Attribute": "lowquantity" }, 
{ "Name": "percentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Percentage", "Attribute": "percentage" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Discount Information", "Name": "discount information", "Visible": true, "Controls": [
{ "Name": "lowquantity" }, 
{ "Name": "highquantity" }, 
{ "Name": "amount" }, 
{ "Name": "percentage" }]}]}]
};

var Xrm = new _xrm(pageData);
