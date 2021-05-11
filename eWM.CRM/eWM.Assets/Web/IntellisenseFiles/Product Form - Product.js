/// <reference path="Xrm.js" />

var EntityLogicalName = "product";
var Form_a640be62_63f6_4027_90d7_48c014a7c6f3_Properties = {
defaultuomid: "defaultuomid"
,defaultuomscheduleid: "defaultuomscheduleid"
,description: "description"
,name: "name"
,parentproductid: "parentproductid"
,pricelevelid: "pricelevelid"
,productnumber: "productnumber"
,quantitydecimal: "quantitydecimal"
,statecode: "statecode"
,subjectid: "subjectid"
,validfromdate: "validfromdate"
,validtodate: "validtodate"
};

var Form_a640be62_63f6_4027_90d7_48c014a7c6f3_Controls = {
defaultuomid: "defaultuomid"
,defaultuomscheduleid: "defaultuomscheduleid"
,description: "description"
,DynamicPropertiesList_LinkControl: "DynamicPropertiesList_LinkControl"
,header_statecode: "header_statecode"
,name: "name"
,notescontrol: "notescontrol"
,parentproductid: "parentproductid"
,Price_List_Items: "Price_List_Items"
,pricelevelid: "pricelevelid"
,product_dynamic_properties: "product_dynamic_properties"
,productassocaition_items: "productassocaition_items"
,productnumber: "productnumber"
,productsubstitute_items: "productsubstitute_items"
,quantitydecimal: "quantitydecimal"
,subjectid: "subjectid"
,validfromdate: "validfromdate"
,validtodate: "validtodate"
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
{ "Name": "defaultuomid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "defaultuomid" }] }, 
{ "Name": "defaultuomscheduleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "defaultuomscheduleid" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "parentproductid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "parentproductid" }] }, 
{ "Name": "pricelevelid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Controls": [{ "Name": "pricelevelid" }] }, 
{ "Name": "productnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "productnumber" }] }, 
{ "Name": "quantitydecimal", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 5, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "quantitydecimal" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Retired", "value": 1 }, { "text" : "Draft", "value": 2 }, { "text" : "Under Revision", "value": 3 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "header_statecode" }] }, 
{ "Name": "subjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "subjectid" }] }, 
{ "Name": "validfromdate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "validfromdate" }] }, 
{ "Name": "validtodate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "validtodate" }] }]
, "AttributesLength": 12, 
"Controls": [
{ "Name": "defaultuomid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Unit", "Attribute": "defaultuomid" }, 
{ "Name": "defaultuomscheduleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Unit Group", "Attribute": "defaultuomscheduleid" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "header_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "parentproductid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Parent", "Attribute": "parentproductid" }, 
{ "Name": "pricelevelid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Price List", "Attribute": "pricelevelid" }, 
{ "Name": "productnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product ID", "Attribute": "productnumber" }, 
{ "Name": "quantitydecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Decimals Supported", "Attribute": "quantitydecimal" }, 
{ "Name": "subjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subjectid" }, 
{ "Name": "validfromdate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Valid From", "Attribute": "validfromdate" }, 
{ "Name": "validtodate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Valid To", "Attribute": "validtodate" }], 
"ControlsLength": 12, 
"Navigation": [
{"Id": "navPrices", "Key": "navPrices", "Label": "", "Visible": true }, 
{"Id": "navDocument", "Key": "navDocument", "Label": "", "Visible": true }, 
{"Id": "navAsyncOperations", "Key": "navAsyncOperations", "Label": "", "Visible": true }, 
{"Id": "navProcessSessions", "Key": "navProcessSessions", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "SUMMARY", "Name": "product_details", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "PRODUCT PROPERTIES", "Name": "product information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "productnumber" }, 
{ "Name": "parentproductid" }, 
{ "Name": "validfromdate" }, 
{ "Name": "validtodate" }, 
{ "Name": "description" }]}, 
{ "Label": "", "Name": "costs", "Visible": true, "Controls": [
{ "Name": "defaultuomscheduleid" }, 
{ "Name": "defaultuomid" }, 
{ "Name": "pricelevelid" }, 
{ "Name": "quantitydecimal" }, 
{ "Name": "subjectid" }]}]}, 
{ "Label": "BUNDLE PRODUCTS", "Name": "productassocaition_items", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "productassocaition_items_section", "Visible": true, "Controls": [
{ "Name": "productassocaition_items" }]}, 
{ "Label": "", "Name": "DynamicProperties", "Visible": true, "Controls": [
{ "Name": "DynamicPropertiesList_LinkControl" }]}]}, 
{ "Label": "PRODUCT PROPERTIES", "Name": "product_dynamic_properties", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "product_dynamic_properties_section", "Visible": true, "Controls": [
{ "Name": "product_dynamic_properties" }]}]}, 
{ "Label": "ADDITIONAL DETAILS", "Name": "price_list_items", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "price_list_items_section", "Visible": true, "Controls": [
{ "Name": "Price_List_Items" }]}, 
{ "Label": "", "Name": "productsubstitute_items_section", "Visible": true, "Controls": [
{ "Name": "productsubstitute_items" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
