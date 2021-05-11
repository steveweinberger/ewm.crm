/// <reference path="Xrm.js" />

var EntityLogicalName = "channelpropertygroup";
var Form_68941354_c587_45a0_8c4b_b8527a75614c_Properties = {
createdon: "createdon"
,name: "name"
,regardingtypecode: "regardingtypecode"
};

var Form_68941354_c587_45a0_8c4b_b8527a75614c_Controls = {
createdon: "createdon"
,name: "name"
,propertiesGrid: "propertiesGrid"
,regardingtypecode: "regardingtypecode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1234", "etc": "1234", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "channelpropertygroup",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "regardingtypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Phone Call", "value": 4210 }, { "text" : "Email", "value": 4202 }, { "text" : "Appointment", "value": 4201 }, { "text" : "Service Activity", "value": 4214 }, { "text" : "Task", "value": 4212 }, { "text" : "Social Activity", "value": 4216 }], "SelectedOption" : { "option" : "Phone Call", "value": 4210 }, "Text": "Phone Call", "Controls": [{ "Name": "regardingtypecode" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "regardingtypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Source Type", "Attribute": "regardingtypecode" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "property_bag_summary", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "property_bag_properties_1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "createdon" }, 
{ "Name": "regardingtypecode" }]}, 
{ "Label": "", "Name": "property_bag_items_1", "Visible": true, "Controls": [
{ "Name": "propertiesGrid" }]}]}]
};

var Xrm = new _xrm(pageData);
