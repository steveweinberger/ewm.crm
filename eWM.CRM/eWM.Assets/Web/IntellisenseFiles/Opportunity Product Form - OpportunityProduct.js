/// <reference path="Xrm.js" />

var EntityLogicalName = "opportunityproduct";
var Form_6e9a1c27_c09c_461b_8542_9ffef891f7ab_Properties = {
baseamount: "baseamount"
,extendedamount: "extendedamount"
,ispriceoverridden: "ispriceoverridden"
,isproductoverridden: "isproductoverridden"
,manualdiscountamount: "manualdiscountamount"
,priceperunit: "priceperunit"
,productdescription: "productdescription"
,productid: "productid"
,quantity: "quantity"
,tax: "tax"
,uomid: "uomid"
,volumediscountamount: "volumediscountamount"
};

var Form_6e9a1c27_c09c_461b_8542_9ffef891f7ab_Controls = {
baseamount: "baseamount"
,extendedamount: "extendedamount"
,ispriceoverridden: "ispriceoverridden"
,isproductoverridden: "isproductoverridden"
,manualdiscountamount: "manualdiscountamount"
,priceperunit: "priceperunit"
,productdescription: "productdescription"
,productid: "productid"
,quantity: "quantity"
,tax: "tax"
,uomid: "uomid"
,volumediscountamount: "volumediscountamount"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1083", "etc": "1083", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "opportunityproduct",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "baseamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "baseamount" }] }, 
{ "Name": "extendedamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "extendedamount" }] }, 
{ "Name": "ispriceoverridden", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "ispriceoverridden" }] }, 
{ "Name": "isproductoverridden", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isproductoverridden" }] }, 
{ "Name": "manualdiscountamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "manualdiscountamount" }] }, 
{ "Name": "priceperunit", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "priceperunit" }] }, 
{ "Name": "productdescription", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "productdescription" }] }, 
{ "Name": "productid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "productid" }] }, 
{ "Name": "quantity", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 5, "Controls": [{ "Name": "quantity" }] }, 
{ "Name": "tax", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : -100000000000000, "Precision" : 2, "Controls": [{ "Name": "tax" }] }, 
{ "Name": "uomid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "uomid" }] }, 
{ "Name": "volumediscountamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 922337203685477, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "volumediscountamount" }] }]
, "AttributesLength": 12, 
"Controls": [
{ "Name": "baseamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Amount", "Attribute": "baseamount" }, 
{ "Name": "extendedamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Extended Amount", "Attribute": "extendedamount" }, 
{ "Name": "ispriceoverridden", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Pricing", "Attribute": "ispriceoverridden" }, 
{ "Name": "isproductoverridden", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Select Product", "Attribute": "isproductoverridden" }, 
{ "Name": "manualdiscountamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Manual Discount", "Attribute": "manualdiscountamount" }, 
{ "Name": "priceperunit", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Price Per Unit", "Attribute": "priceperunit" }, 
{ "Name": "productdescription", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Write-In Product", "Attribute": "productdescription" }, 
{ "Name": "productid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Existing Product", "Attribute": "productid" }, 
{ "Name": "quantity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Quantity", "Attribute": "quantity" }, 
{ "Name": "tax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Tax", "Attribute": "tax" }, 
{ "Name": "uomid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Unit", "Attribute": "uomid" }, 
{ "Name": "volumediscountamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Volume Discount", "Attribute": "volumediscountamount" }], 
"ControlsLength": 12, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Opportunity Product Information", "Name": "opportunity product information", "Visible": true, "Controls": [
{ "Name": "isproductoverridden" }, 
{ "Name": "productdescription" }, 
{ "Name": "productid" }, 
{ "Name": "uomid" }]}, 
{ "Label": "Pricing", "Name": "pricing", "Visible": true, "Controls": [
{ "Name": "ispriceoverridden" }, 
{ "Name": "priceperunit" }, 
{ "Name": "volumediscountamount" }, 
{ "Name": "quantity" }, 
{ "Name": "baseamount" }, 
{ "Name": "manualdiscountamount" }, 
{ "Name": "tax" }, 
{ "Name": "extendedamount" }]}]}]
};

var Xrm = new _xrm(pageData);
