/// <reference path="Xrm.js" />

var EntityLogicalName = "product";
var Form_42805efb_1f65_4ae8_91bc_618967a55c6e_Properties = {
currentcost: "currentcost"
,defaultuomid: "defaultuomid"
,defaultuomscheduleid: "defaultuomscheduleid"
,description: "description"
,name: "name"
,price: "price"
,pricelevelid: "pricelevelid"
,productnumber: "productnumber"
,producttypecode: "producttypecode"
,producturl: "producturl"
,quantitydecimal: "quantitydecimal"
,quantityonhand: "quantityonhand"
,standardcost: "standardcost"
,stockvolume: "stockvolume"
,stockweight: "stockweight"
,subjectid: "subjectid"
,transactioncurrencyid: "transactioncurrencyid"
,vendorname: "vendorname"
,vendorpartnumber: "vendorpartnumber"
};

var Form_42805efb_1f65_4ae8_91bc_618967a55c6e_Controls = {
currentcost: "currentcost"
,defaultuomid: "defaultuomid"
,defaultuomscheduleid: "defaultuomscheduleid"
,description: "description"
,name: "name"
,notescontrol: "notescontrol"
,price: "price"
,pricelevelid: "pricelevelid"
,productnumber: "productnumber"
,producttypecode: "producttypecode"
,producturl: "producturl"
,quantitydecimal: "quantitydecimal"
,quantityonhand: "quantityonhand"
,standardcost: "standardcost"
,stockvolume: "stockvolume"
,stockweight: "stockweight"
,subjectid: "subjectid"
,transactioncurrencyid: "transactioncurrencyid"
,vendorname: "vendorname"
,vendorpartnumber: "vendorpartnumber"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1024", "etc": "1024", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "product",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "currentcost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "currentcost" }] }, 
{ "Name": "defaultuomid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "defaultuomid" }] }, 
{ "Name": "defaultuomscheduleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "defaultuomscheduleid" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "price", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "price" }] }, 
{ "Name": "pricelevelid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Controls": [{ "Name": "pricelevelid" }] }, 
{ "Name": "productnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "productnumber" }] }, 
{ "Name": "producttypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Sales Inventory", "value": 1 }, { "text" : "Miscellaneous Charges", "value": 2 }, { "text" : "Services", "value": 3 }, { "text" : "Flat Fees", "value": 4 }], "SelectedOption" : { "option" : "Sales Inventory", "value": 1 }, "Text": "Sales Inventory", "Controls": [{ "Name": "producttypecode" }] }, 
{ "Name": "producturl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 255, "Controls": [{ "Name": "producturl" }] }, 
{ "Name": "quantitydecimal", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 5, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "quantitydecimal" }] }, 
{ "Name": "quantityonhand", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "quantityonhand" }] }, 
{ "Name": "standardcost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "standardcost" }] }, 
{ "Name": "stockvolume", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "stockvolume" }] }, 
{ "Name": "stockweight", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "stockweight" }] }, 
{ "Name": "subjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "subjectid" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "vendorname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "vendorname" }] }, 
{ "Name": "vendorpartnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "vendorpartnumber" }] }]
, "AttributesLength": 19, 
"Controls": [
{ "Name": "currentcost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Current Cost", "Attribute": "currentcost" }, 
{ "Name": "defaultuomid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Unit", "Attribute": "defaultuomid" }, 
{ "Name": "defaultuomscheduleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Unit Group", "Attribute": "defaultuomscheduleid" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "price", "Type": "standard", "Disabled": false, "Visible": true, "Label": "List Price", "Attribute": "price" }, 
{ "Name": "pricelevelid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Price List", "Attribute": "pricelevelid" }, 
{ "Name": "productnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product ID", "Attribute": "productnumber" }, 
{ "Name": "producttypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product Type", "Attribute": "producttypecode" }, 
{ "Name": "producturl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "URL", "Attribute": "producturl" }, 
{ "Name": "quantitydecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Decimals Supported", "Attribute": "quantitydecimal" }, 
{ "Name": "quantityonhand", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Quantity On Hand", "Attribute": "quantityonhand" }, 
{ "Name": "standardcost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Standard Cost", "Attribute": "standardcost" }, 
{ "Name": "stockvolume", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Stock Volume", "Attribute": "stockvolume" }, 
{ "Name": "stockweight", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Stock Weight", "Attribute": "stockweight" }, 
{ "Name": "subjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subjectid" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "vendorname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Vendor", "Attribute": "vendorname" }, 
{ "Name": "vendorpartnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Vendor Name", "Attribute": "vendorpartnumber" }], 
"ControlsLength": 19, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Product Information", "Name": "product information", "Visible": true, "Controls": [
{ "Name": "productnumber" }, 
{ "Name": "name" }, 
{ "Name": "subjectid" }, 
{ "Name": "producttypecode" }, 
{ "Name": "defaultuomscheduleid" }, 
{ "Name": "quantityonhand" }, 
{ "Name": "defaultuomid" }, 
{ "Name": "producturl" }, 
{ "Name": "transactioncurrencyid" }]}, 
{ "Label": "Costs", "Name": "costs", "Visible": true, "Controls": [
{ "Name": "pricelevelid" }, 
{ "Name": "price" }, 
{ "Name": "quantitydecimal" }, 
{ "Name": "standardcost" }, 
{ "Name": "currentcost" }]}]}, 
{ "Label": "Description", "Name": "description", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Description Information", "Name": "description information", "Visible": true, "Controls": [
{ "Name": "vendorname" }, 
{ "Name": "stockweight" }, 
{ "Name": "vendorpartnumber" }, 
{ "Name": "stockvolume" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
