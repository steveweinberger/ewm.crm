/// <reference path="Xrm.js" />

var EntityLogicalName = "productsubstitute";
var Form_256a9921_9916_48e5_b3c1_7874512f8aed_Properties = {
direction: "direction"
,productid: "productid"
,salesrelationshiptype: "salesrelationshiptype"
,substitutedproductid: "substitutedproductid"
};

var Form_256a9921_9916_48e5_b3c1_7874512f8aed_Controls = {
direction: "direction"
,productid: "productid"
,salesrelationshiptype: "salesrelationshiptype"
,substitutedproductid: "substitutedproductid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1028", "etc": "1028", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "productsubstitute",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "direction", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Uni-Directional", "value": 0 }, { "text" : "Bi-Directional", "value": 1 }], "SelectedOption" : { "option" : "Uni-Directional", "value": 0 }, "Text": "Uni-Directional", "Controls": [{ "Name": "direction" }] }, 
{ "Name": "productid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "productid" }] }, 
{ "Name": "salesrelationshiptype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Up-sell", "value": 0 }, { "text" : "Cross-sell", "value": 1 }, { "text" : "Accessory", "value": 2 }, { "text" : "Substitute", "value": 3 }], "SelectedOption" : { "option" : "Up-sell", "value": 0 }, "Text": "Up-sell", "Controls": [{ "Name": "salesrelationshiptype" }] }, 
{ "Name": "substitutedproductid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "substitutedproductid" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "direction", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Direction", "Attribute": "direction" }, 
{ "Name": "productid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product", "Attribute": "productid" }, 
{ "Name": "salesrelationshiptype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Sales Relationship Type", "Attribute": "salesrelationshiptype" }, 
{ "Name": "substitutedproductid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Related Product", "Attribute": "substitutedproductid" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "null", "Visible": true, "Controls": [
{ "Name": "productid" }, 
{ "Name": "substitutedproductid" }, 
{ "Name": "salesrelationshiptype" }, 
{ "Name": "direction" }]}]}]
};

var Xrm = new _xrm(pageData);
