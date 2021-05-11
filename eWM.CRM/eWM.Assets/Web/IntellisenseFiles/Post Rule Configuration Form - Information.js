/// <reference path="Xrm.js" />

var EntityLogicalName = "msdyn_postruleconfig";
var Form_b7a6bcf3_d0b9_4652_8254_cf9b40fa24e1_Properties = {
createdby: "createdby"
,createdon: "createdon"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,msdyn_name: "msdyn_name"
,msdyn_postconfigid: "msdyn_postconfigid"
,msdyn_posttoyammer: "msdyn_posttoyammer"
,statecode: "statecode"
};

var Form_b7a6bcf3_d0b9_4652_8254_cf9b40fa24e1_Controls = {
footer_createdby: "footer_createdby"
,footer_createdon: "footer_createdon"
,footer_modifiedby: "footer_modifiedby"
,footer_modifiedon: "footer_modifiedon"
,footer_statecode: "footer_statecode"
,msdyn_name: "msdyn_name"
,msdyn_postconfigid: "msdyn_postconfigid"
,msdyn_posttoyammer: "msdyn_posttoyammer"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "10002", "etc": "10002", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "msdyn_postruleconfig",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "footer_createdby" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "footer_createdon" }] }, 
{ "Name": "modifiedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "footer_modifiedby" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "footer_modifiedon" }] }, 
{ "Name": "msdyn_name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "msdyn_name" }] }, 
{ "Name": "msdyn_postconfigid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "msdyn_postconfigid" }] }, 
{ "Name": "msdyn_posttoyammer", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "msdyn_posttoyammer" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }]
, "AttributesLength": 8, 
"Controls": [
{ "Name": "footer_createdby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "footer_createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "footer_modifiedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified By", "Attribute": "modifiedby" }, 
{ "Name": "footer_modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "msdyn_name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "msdyn_name" }, 
{ "Name": "msdyn_postconfigid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entity", "Attribute": "msdyn_postconfigid" }, 
{ "Name": "msdyn_posttoyammer", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Post to Yammer Activity Stream", "Attribute": "msdyn_posttoyammer" }], 
"ControlsLength": 8, 
"Navigation": [
{"Id": "navAsyncOperations", "Key": "navAsyncOperations", "Label": "", "Visible": true }, 
{"Id": "navAudit", "Key": "navAudit", "Label": "", "Visible": true }, 
{"Id": "navProcessSessions", "Key": "navProcessSessions", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "null", "Visible": true, "Controls": [
{ "Name": "msdyn_name" }, 
{ "Name": "msdyn_postconfigid" }, 
{ "Name": "msdyn_posttoyammer" }]}]}]
};

var Xrm = new _xrm(pageData);
