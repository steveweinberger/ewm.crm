/// <reference path="Xrm.js" />

var EntityLogicalName = "documenttemplate";
var Form_509ab872_dce9_4090_8535_a89e33bab96a_Properties = {
associatedentitytypecode: "associatedentitytypecode"
,createdby: "createdby"
,createdon: "createdon"
,description: "description"
,documenttype: "documenttype"
,languagecode: "languagecode"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,status: "status"
};

var Form_509ab872_dce9_4090_8535_a89e33bab96a_Controls = {
associatedentitytypecode: "associatedentitytypecode"
,createdby: "createdby"
,createdon: "createdon"
,description: "description"
,documenttype: "documenttype"
,languagecode: "languagecode"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,status: "status"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9940", "etc": "9940", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "documenttemplate",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "associatedentitytypecode", "Value": null, "Type" : "string", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "associatedentitytypecode" }] }, 
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdby" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "description" }] }, 
{ "Name": "documenttype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Microsoft Excel", "value": 1 }, { "text" : "Microsoft Word", "value": 2 }], "SelectedOption" : { "option" : "Microsoft Excel", "value": 1 }, "Text": "Microsoft Excel", "Controls": [{ "Name": "documenttype" }] }, 
{ "Name": "languagecode", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "languagecode" }] }, 
{ "Name": "modifiedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedby" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "name" }] }, 
{ "Name": "status", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : null, "Controls": [{ "Name": "status" }] }]
, "AttributesLength": 10, 
"Controls": [
{ "Name": "associatedentitytypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Associated Entity Type Code", "Attribute": "associatedentitytypecode" }, 
{ "Name": "createdby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "documenttype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Type", "Attribute": "documenttype" }, 
{ "Name": "languagecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Language", "Attribute": "languagecode" }, 
{ "Name": "modifiedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified By", "Attribute": "modifiedby" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "status", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "status" }], 
"ControlsLength": 10, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Details", "Name": "Details", "Visible": true, "Controls": [
{ "Name": "status" }, 
{ "Name": "name" }, 
{ "Name": "description" }, 
{ "Name": "documenttype" }, 
{ "Name": "modifiedon" }, 
{ "Name": "modifiedby" }, 
{ "Name": "associatedentitytypecode" }, 
{ "Name": "createdby" }, 
{ "Name": "createdon" }, 
{ "Name": "languagecode" }]}]}]
};

var Xrm = new _xrm(pageData);
