/// <reference path="Xrm.js" />

var EntityLogicalName = "partnerapplication";
var Form_48d5f9e3_95ca_4e5a_8b26_69554fbbca6e_Properties = {
applicationrole: "applicationrole"
,name: "name"
,principalid: "principalid"
,statecode: "statecode"
,useauthorizationserver: "useauthorizationserver"
};

var Form_48d5f9e3_95ca_4e5a_8b26_69554fbbca6e_Controls = {
applicationrole: "applicationrole"
,footer_statecode: "footer_statecode"
,name: "name"
,notescontrol: "notescontrol"
,principalid: "principalid"
,useauthorizationserver: "useauthorizationserver"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1095", "etc": "1095", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "partnerapplication",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "applicationrole", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Client", "value": 0 }, { "text" : "Server", "value": 1 }], "SelectedOption" : { "option" : "Client", "value": 0 }, "Text": "Client", "Controls": [{ "Name": "applicationrole" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "principalid", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "principalid" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }, 
{ "Name": "useauthorizationserver", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "useauthorizationserver" }] }]
, "AttributesLength": 5, 
"Controls": [
{ "Name": "applicationrole", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Application Role", "Attribute": "applicationrole" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "principalid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Application Id", "Attribute": "principalid" }, 
{ "Name": "useauthorizationserver", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Use Authorization Server", "Attribute": "useauthorizationserver" }], 
"ControlsLength": 5, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "{fb5f4715-aeab-42b1-8e7c-763e7d86542f}", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "applicationrole" }, 
{ "Name": "principalid" }, 
{ "Name": "useauthorizationserver" }]}]}, 
{ "Label": "Notes", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "null", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
