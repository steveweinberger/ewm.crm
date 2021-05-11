/// <reference path="Xrm.js" />

var EntityLogicalName = "publisher";
var Form_70098ad4_4956_11dd_982e_00188b01dce6_Properties = {
address1_city: "address1_city"
,address1_country: "address1_country"
,address1_line1: "address1_line1"
,address1_line2: "address1_line2"
,address1_postalcode: "address1_postalcode"
,address1_stateorprovince: "address1_stateorprovince"
,address1_telephone1: "address1_telephone1"
,customizationoptionvalueprefix: "customizationoptionvalueprefix"
,customizationprefix: "customizationprefix"
,description: "description"
,emailaddress: "emailaddress"
,friendlyname: "friendlyname"
,supportingwebsiteurl: "supportingwebsiteurl"
,uniquename: "uniquename"
};

var Form_70098ad4_4956_11dd_982e_00188b01dce6_Controls = {
address1_city: "address1_city"
,address1_country: "address1_country"
,address1_line1: "address1_line1"
,address1_line2: "address1_line2"
,address1_postalcode: "address1_postalcode"
,address1_stateorprovince: "address1_stateorprovince"
,address1_telephone1: "address1_telephone1"
,customizationoptionvalueprefix: "customizationoptionvalueprefix"
,customizationprefix: "customizationprefix"
,description: "description"
,emailaddress: "emailaddress"
,friendlyname: "friendlyname"
,IFRAME_SolutionsMarketplace: "IFRAME_SolutionsMarketplace"
,preview_prefix: "preview_prefix"
,supportingwebsiteurl: "supportingwebsiteurl"
,uniquename: "uniquename"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "7101", "etc": "7101", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "publisher",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "address1_city", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 80, "Controls": [{ "Name": "address1_city" }] }, 
{ "Name": "address1_country", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 80, "Controls": [{ "Name": "address1_country" }] }, 
{ "Name": "address1_line1", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "address1_line1" }] }, 
{ "Name": "address1_line2", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "address1_line2" }] }, 
{ "Name": "address1_postalcode", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 20, "Controls": [{ "Name": "address1_postalcode" }] }, 
{ "Name": "address1_stateorprovince", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "address1_stateorprovince" }] }, 
{ "Name": "address1_telephone1", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "address1_telephone1" }] }, 
{ "Name": "customizationoptionvalueprefix", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 99999, "Min" : 10000, "Precision" : 0, "Controls": [{ "Name": "customizationoptionvalueprefix" }] }, 
{ "Name": "customizationprefix", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 8, "Controls": [{ "Name": "customizationprefix" }] }, 
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "emailaddress", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "emailaddress" }] }, 
{ "Name": "friendlyname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "friendlyname" }] }, 
{ "Name": "supportingwebsiteurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "supportingwebsiteurl" }] }, 
{ "Name": "uniquename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "uniquename" }] }]
, "AttributesLength": 14, 
"Controls": [
{ "Name": "address1_city", "Type": "standard", "Disabled": false, "Visible": true, "Label": "City", "Attribute": "address1_city" }, 
{ "Name": "address1_country", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Country/Region", "Attribute": "address1_country" }, 
{ "Name": "address1_line1", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Street 1", "Attribute": "address1_line1" }, 
{ "Name": "address1_line2", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Street 2", "Attribute": "address1_line2" }, 
{ "Name": "address1_postalcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "ZIP/Postal Code", "Attribute": "address1_postalcode" }, 
{ "Name": "address1_stateorprovince", "Type": "standard", "Disabled": false, "Visible": true, "Label": "State/Province", "Attribute": "address1_stateorprovince" }, 
{ "Name": "address1_telephone1", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Phone", "Attribute": "address1_telephone1" }, 
{ "Name": "customizationoptionvalueprefix", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Option Value Prefix", "Attribute": "customizationoptionvalueprefix" }, 
{ "Name": "customizationprefix", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Prefix", "Attribute": "customizationprefix" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "emailaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Email", "Attribute": "emailaddress" }, 
{ "Name": "friendlyname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Display Name", "Attribute": "friendlyname" }, 
{ "Name": "supportingwebsiteurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Website", "Attribute": "supportingwebsiteurl" }, 
{ "Name": "uniquename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "uniquename" }], 
"ControlsLength": 14, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "{70098AD5-4956-11DD-982E-00188B01DCE6}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "{70098AD6-4956-11DD-982E-00188B01DCE6}", "Visible": true, "Controls": [
{ "Name": "friendlyname" }, 
{ "Name": "uniquename" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "Set the prefix name for custom entities and fields", "Name": "{eaf2edb4-7c5e-dd11-940f-00155d8ac303}", "Visible": true, "Controls": [
{ "Name": "customizationprefix" }, 
{ "Name": "customizationoptionvalueprefix" }, 
{ "Name": "preview_prefix" }]}]}, 
{ "Label": "Contact Details", "Name": "{E1F7A9C9-A0E6-4C8B-ACBD-C6610FBD2343}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Use this information to contact the company responsible for solutions related to this publisher", "Name": "{CBF04024-5749-444C-BC51-CFAF839688BF}", "Visible": true, "Controls": [
{ "Name": "address1_telephone1" }, 
{ "Name": "emailaddress" }, 
{ "Name": "supportingwebsiteurl" }]}, 
{ "Label": "Address", "Name": "{6FE75F79-0CA8-4DBE-8C7B-6E68C17DE013}", "Visible": true, "Controls": [
{ "Name": "address1_line1" }, 
{ "Name": "address1_postalcode" }, 
{ "Name": "address1_line2" }, 
{ "Name": "address1_country" }, 
{ "Name": "address1_city" }, 
{ "Name": "address1_stateorprovince" }]}]}, 
{ "Label": "Marketplace", "Name": "solutions marketplace", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Marketplace", "Name": "marketplacesection", "Visible": true, "Controls": [
{ "Name": "IFRAME_SolutionsMarketplace" }]}]}]
};

var Xrm = new _xrm(pageData);
