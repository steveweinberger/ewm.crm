/// <reference path="Xrm.js" />

var EntityLogicalName = "channelproperty";
var Form_dd5776de_cf25_4e03_8a42_88384b986656_Properties = {
applicationsource: "applicationsource"
,datatype: "datatype"
,description: "description"
,name: "name"
};

var Form_dd5776de_cf25_4e03_8a42_88384b986656_Controls = {
applicationsource: "applicationsource"
,propertydescription: "propertydescription"
,propertyname: "propertyname"
,propertytype: "propertytype"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1236", "etc": "1236", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "channelproperty",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "applicationsource", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "applicationsource" }] }, 
{ "Name": "datatype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Floating Point Number", "value": 0 }, { "text" : "Single Line Of Text", "value": 1 }, { "text" : "Whole Number", "value": 2 }], "SelectedOption" : { "option" : "Floating Point Number", "value": 0 }, "Text": "Floating Point Number", "Controls": [{ "Name": "propertytype" }] }, 
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 1000, "Controls": [{ "Name": "propertydescription" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "propertyname" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "applicationsource", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Application Source", "Attribute": "applicationsource" }, 
{ "Name": "propertydescription", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "propertyname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "propertytype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Data Type", "Attribute": "datatype" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Channel Property Information", "Name": "channelpropertyinformation", "Visible": true, "Controls": [
{ "Name": "propertyname" }, 
{ "Name": "propertytype" }, 
{ "Name": "applicationsource" }, 
{ "Name": "propertydescription" }]}]}]
};

var Xrm = new _xrm(pageData);
