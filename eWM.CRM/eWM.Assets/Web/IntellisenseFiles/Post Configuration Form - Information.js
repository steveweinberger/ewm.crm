/// <reference path="Xrm.js" />

var EntityLogicalName = "msdyn_postconfig";
var Form_9ede067a_eebc_4e49_a31a_5e76c17148b0_Properties = {
msdyn_configurewall: "msdyn_configurewall"
,msdyn_entityname: "msdyn_entityname"
,msdyn_status: "msdyn_status"
,statecode: "statecode"
};

var Form_9ede067a_eebc_4e49_a31a_5e76c17148b0_Controls = {
ActivityFeedsRules: "ActivityFeedsRules"
,footer_statecode: "footer_statecode"
,msdyn_configurewall: "msdyn_configurewall"
,msdyn_entityname: "msdyn_entityname"
,msdyn_status: "msdyn_status"
,Views: "Views"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "10001", "etc": "10001", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "msdyn_postconfig",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "msdyn_configurewall", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "msdyn_configurewall" }] }, 
{ "Name": "msdyn_entityname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "msdyn_entityname" }] }, 
{ "Name": "msdyn_status", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "msdyn_status" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }]
, "AttributesLength": 4, 
"Controls": [
, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "msdyn_configurewall", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Enable walls for this type of record form", "Attribute": "msdyn_configurewall" }, 
{ "Name": "msdyn_entityname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entity Name", "Attribute": "msdyn_entityname" }, 
{ "Name": "msdyn_status", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Configuration Status", "Attribute": "msdyn_status" }], 
"ControlsLength": 4, 
"Navigation": [
{"Id": "navAsyncOperations", "Key": "navAsyncOperations", "Label": "", "Visible": true }, 
{"Id": "navAudit", "Key": "navAudit", "Label": "", "Visible": true }, 
{"Id": "navProcessSessions", "Key": "navProcessSessions", "Label": "", "Visible": true }, 
{"Id": "nav_msdyn_postconfig_msdyn_postruleconfig", "Key": "nav_msdyn_postconfig_msdyn_postruleconfig", "Label": "", "Visible": true }, 
{"Id": "nav_msdyn_postconfig_wallsavedquery", "Key": "nav_msdyn_postconfig_wallsavedquery", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "null", "Visible": true, "Controls": [
{ "Name": "msdyn_entityname" }, 
{ "Name": "msdyn_configurewall" }]}]}, 
{ "Label": "Rules", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Rules", "Name": "tab_2_section_1", "Visible": true, "Controls": [
{ "Name": "ActivityFeedsRules" }]}]}, 
{ "Label": "Filters", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Filters", "Name": "{1cd67d69-1741-4c0e-a413-7f4a6e91347f}_section_4", "Visible": true, "Controls": [
{ "Name": "Views" }]}]}, 
{ "Label": "Troubleshooting", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Troubleshooting", "Name": "{1cd67d69-1741-4c0e-a413-7f4a6e91347f}_section_3", "Visible": true, "Controls": [
{ "Name": "msdyn_status" }]}]}, 
{ "Label": "If you enable or disable walls on the form for this record, you will need to publish the related entity.", "Name": "tab_notification", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_5_section_1", "Visible": true, "Controls": [
]}]}]
};

var Xrm = new _xrm(pageData);
