/// <reference path="Xrm.js" />

var EntityLogicalName = "productpricelevel";
var Form_8325530a_a6a6_4275_9374_a65bef5ef92c_Properties = {
amount: "amount"
,discounttypeid: "discounttypeid"
,percentage: "percentage"
,pricelevelid: "pricelevelid"
,pricingmethodcode: "pricingmethodcode"
,productid: "productid"
,quantitysellingcode: "quantitysellingcode"
,roundingoptionamount: "roundingoptionamount"
,roundingoptioncode: "roundingoptioncode"
,roundingpolicycode: "roundingpolicycode"
,transactioncurrencyid: "transactioncurrencyid"
,uomid: "uomid"
};

var Form_8325530a_a6a6_4275_9374_a65bef5ef92c_Controls = {
amount: "amount"
,discounttypeid: "discounttypeid"
,percentage: "percentage"
,pricelevelid: "pricelevelid"
,pricingmethodcode: "pricingmethodcode"
,productid: "productid"
,quantitysellingcode: "quantitysellingcode"
,roundingoptionamount: "roundingoptionamount"
,roundingoptioncode: "roundingoptioncode"
,roundingpolicycode: "roundingpolicycode"
,transactioncurrencyid: "transactioncurrencyid"
,uomid: "uomid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1026", "etc": "1026", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "productpricelevel",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "amount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "amount" }] }, 
{ "Name": "discounttypeid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "discounttypeid" }] }, 
{ "Name": "percentage", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "percentage" }] }, 
{ "Name": "pricelevelid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "pricelevelid" }] }, 
{ "Name": "pricingmethodcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Currency Amount", "value": 1 }, { "text" : "Percent of List", "value": 2 }, { "text" : "Percent Markup - Current Cost", "value": 3 }, { "text" : "Percent Margin - Current Cost", "value": 4 }, { "text" : "Percent Markup - Standard Cost", "value": 5 }, { "text" : "Percent Margin - Standard Cost", "value": 6 }], "SelectedOption" : { "option" : "Currency Amount", "value": 1 }, "Text": "Currency Amount", "Controls": [{ "Name": "pricingmethodcode" }] }, 
{ "Name": "productid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "productid" }] }, 
{ "Name": "quantitysellingcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "No Control", "value": 1 }, { "text" : "Whole", "value": 2 }, { "text" : "Whole and Fractional", "value": 3 }], "SelectedOption" : { "option" : "No Control", "value": 1 }, "Text": "No Control", "Controls": [{ "Name": "quantitysellingcode" }] }, 
{ "Name": "roundingoptionamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : -100000000000000, "Precision" : 2, "Controls": [{ "Name": "roundingoptionamount" }] }, 
{ "Name": "roundingoptioncode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Ends in", "value": 1 }, { "text" : "Multiple of", "value": 2 }], "SelectedOption" : { "option" : "Ends in", "value": 1 }, "Text": "Ends in", "Controls": [{ "Name": "roundingoptioncode" }] }, 
{ "Name": "roundingpolicycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "None", "value": 1 }, { "text" : "Up", "value": 2 }, { "text" : "Down", "value": 3 }, { "text" : "To Nearest", "value": 4 }], "SelectedOption" : { "option" : "None", "value": 1 }, "Text": "None", "Controls": [{ "Name": "roundingpolicycode" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "uomid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "uomid" }] }]
, "AttributesLength": 12, 
"Controls": [
{ "Name": "amount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Amount", "Attribute": "amount" }, 
{ "Name": "discounttypeid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Discount List", "Attribute": "discounttypeid" }, 
{ "Name": "percentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Percentage", "Attribute": "percentage" }, 
{ "Name": "pricelevelid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Price List", "Attribute": "pricelevelid" }, 
{ "Name": "pricingmethodcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Pricing Method", "Attribute": "pricingmethodcode" }, 
{ "Name": "productid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product", "Attribute": "productid" }, 
{ "Name": "quantitysellingcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Quantity Selling Option", "Attribute": "quantitysellingcode" }, 
{ "Name": "roundingoptionamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rounding Amount", "Attribute": "roundingoptionamount" }, 
{ "Name": "roundingoptioncode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rounding Option", "Attribute": "roundingoptioncode" }, 
{ "Name": "roundingpolicycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rounding Policy", "Attribute": "roundingpolicycode" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "uomid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Unit", "Attribute": "uomid" }], 
"ControlsLength": 12, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Price List Item Information", "Name": "price list item information", "Visible": true, "Controls": [
{ "Name": "pricelevelid" }, 
{ "Name": "productid" }, 
{ "Name": "uomid" }]}, 
{ "Label": "", "Name": "Currency", "Visible": true, "Controls": [
{ "Name": "transactioncurrencyid" }, 
{ "Name": "discounttypeid" }, 
{ "Name": "quantitysellingcode" }]}]}, 
{ "Label": "Pricing information", "Name": "Pricing information", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Pricing", "Name": "pricing", "Visible": true, "Controls": [
{ "Name": "pricingmethodcode" }, 
{ "Name": "amount" }, 
{ "Name": "percentage" }]}, 
{ "Label": "Rounding", "Name": "rounding", "Visible": true, "Controls": [
{ "Name": "roundingpolicycode" }, 
{ "Name": "roundingoptioncode" }, 
{ "Name": "roundingoptionamount" }]}]}]
};

var Xrm = new _xrm(pageData);
