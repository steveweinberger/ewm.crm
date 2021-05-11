/// <reference path="Xrm.js" />

var EntityLogicalName = "contractdetail";
var Form_c718898a_26f8_4eb3_be12_e6787c660106_Properties = {
activeon: "activeon"
,allotmentsremaining: "allotmentsremaining"
,allotmentsused: "allotmentsused"
,customerid: "customerid"
,discount: "discount"
,discountpercentage: "discountpercentage"
,expireson: "expireson"
,initialquantity: "initialquantity"
,net: "net"
,price: "price"
,productid: "productid"
,productserialnumber: "productserialnumber"
,rate: "rate"
,serviceaddress: "serviceaddress"
,title: "title"
,totalallotments: "totalallotments"
,uomid: "uomid"
};

var Form_c718898a_26f8_4eb3_be12_e6787c660106_Controls = {
activeon: "activeon"
,allotmentsremaining: "allotmentsremaining"
,allotmentsused: "allotmentsused"
,customerid: "customerid"
,discount: "discount"
,discountpercentage: "discountpercentage"
,expireson: "expireson"
,initialquantity: "initialquantity"
,net: "net"
,notescontrol: "notescontrol"
,price: "price"
,productid: "productid"
,productserialnumber: "productserialnumber"
,rate: "rate"
,serviceaddress: "serviceaddress"
,title: "title"
,totalallotments: "totalallotments"
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
"QueryStringParameters": { "_gridType": "1011", "etc": "1011", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "contractdetail",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "activeon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "activeon" }] }, 
{ "Name": "allotmentsremaining", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "allotmentsremaining" }] }, 
{ "Name": "allotmentsused", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "allotmentsused" }] }, 
{ "Name": "customerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerid" }] }, 
{ "Name": "discount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discount" }] }, 
{ "Name": "discountpercentage", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100, "Min" : 0, "Precision" : 5, "Controls": [{ "Name": "discountpercentage" }] }, 
{ "Name": "expireson", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "expireson" }] }, 
{ "Name": "initialquantity", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "initialquantity" }] }, 
{ "Name": "net", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "net" }] }, 
{ "Name": "price", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "price" }] }, 
{ "Name": "productid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "productid" }] }, 
{ "Name": "productserialnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "productserialnumber" }] }, 
{ "Name": "rate", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "rate" }] }, 
{ "Name": "serviceaddress", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "serviceaddress" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "title" }] }, 
{ "Name": "totalallotments", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "totalallotments" }] }, 
{ "Name": "uomid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "uomid" }] }]
, "AttributesLength": 17, 
"Controls": [
{ "Name": "activeon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Start Date", "Attribute": "activeon" }, 
{ "Name": "allotmentsremaining", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Allotments Remaining", "Attribute": "allotmentsremaining" }, 
{ "Name": "allotmentsused", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Allotments Used", "Attribute": "allotmentsused" }, 
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customerid" }, 
{ "Name": "discount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Discount", "Attribute": "discount" }, 
{ "Name": "discountpercentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Discount (%)", "Attribute": "discountpercentage" }, 
{ "Name": "expireson", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Date", "Attribute": "expireson" }, 
{ "Name": "initialquantity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Quantity", "Attribute": "initialquantity" }, 
{ "Name": "net", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Net", "Attribute": "net" }, 
{ "Name": "price", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Price", "Attribute": "price" }, 
{ "Name": "productid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product", "Attribute": "productid" }, 
{ "Name": "productserialnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Serial Number", "Attribute": "productserialnumber" }, 
{ "Name": "rate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rate", "Attribute": "rate" }, 
{ "Name": "serviceaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Location", "Attribute": "serviceaddress" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Title", "Attribute": "title" }, 
{ "Name": "totalallotments", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Cases/Minutes", "Attribute": "totalallotments" }, 
{ "Name": "uomid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Unit", "Attribute": "uomid" }], 
"ControlsLength": 17, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Contract Detail Information", "Name": "contract detail information", "Visible": true, "Controls": [
{ "Name": "title" }, 
{ "Name": "productid" }, 
{ "Name": "uomid" }, 
{ "Name": "serviceaddress" }, 
{ "Name": "activeon" }, 
{ "Name": "expireson" }]}, 
{ "Label": "Pricing", "Name": "pricing", "Visible": true, "Controls": [
{ "Name": "initialquantity" }, 
{ "Name": "rate" }, 
{ "Name": "price" }, 
{ "Name": "discount" }, 
{ "Name": "discountpercentage" }, 
{ "Name": "net" }]}, 
{ "Label": "Administration", "Name": "administration", "Visible": true, "Controls": [
{ "Name": "customerid" }, 
{ "Name": "productserialnumber" }]}, 
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "Allotment Details", "Name": "allotment details", "Visible": true, "Controls": [
{ "Name": "totalallotments" }, 
{ "Name": "allotmentsused" }, 
{ "Name": "allotmentsremaining" }]}]}]
};

var Xrm = new _xrm(pageData);
