/// <reference path="Xrm.js" />

var EntityLogicalName = "productassociation";
var Form_5bb0727c_fa81_443f_afdb_d8113c777a04_Properties = {
associatedproduct: "associatedproduct"
,productid: "productid"
,productisrequired: "productisrequired"
,quantity: "quantity"
,uomid: "uomid"
};

var Form_5bb0727c_fa81_443f_afdb_d8113c777a04_Controls = {
associatedproduct: "associatedproduct"
,product_association_dynamic_properties: "product_association_dynamic_properties"
,productid: "productid"
,productisrequired: "productisrequired"
,quantity: "quantity"
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
"QueryStringParameters": { "_gridType": "1025", "etc": "1025", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "productassociation",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "associatedproduct", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "associatedproduct" }] }, 
{ "Name": "productid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "productid" }] }, 
{ "Name": "productisrequired", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Optional", "value": 0 }, { "text" : "Required", "value": 1 }], "SelectedOption" : { "option" : "Optional", "value": 0 }, "Text": "Optional", "Controls": [{ "Name": "productisrequired" }] }, 
{ "Name": "quantity", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0, "Precision" : 5, "Controls": [{ "Name": "quantity" }] }, 
{ "Name": "uomid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "uomid" }] }]
, "AttributesLength": 5, 
"Controls": [
{ "Name": "associatedproduct", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product", "Attribute": "associatedproduct" }, 
{ "Name": "productid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Bundle", "Attribute": "productid" }, 
{ "Name": "productisrequired", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Required", "Attribute": "productisrequired" }, 
{ "Name": "quantity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Quantity", "Attribute": "quantity" }, 
{ "Name": "uomid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Units", "Attribute": "uomid" }], 
"ControlsLength": 5, 
"Navigation": [
], 
"Tabs": [
{ "Label": "GENERAL", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "null", "Visible": true, "Controls": [
{ "Name": "productid" }, 
{ "Name": "associatedproduct" }, 
{ "Name": "quantity" }, 
{ "Name": "productisrequired" }, 
{ "Name": "uomid" }]}]}, 
{ "Label": "PRODUCT PROPERTIES", "Name": "product_association_dynamic_properties", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "product_association_dynamic_properties_section", "Visible": true, "Controls": [
{ "Name": "product_association_dynamic_properties" }]}]}]
};

var Xrm = new _xrm(pageData);
