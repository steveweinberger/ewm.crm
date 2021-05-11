/// <reference path="Xrm.js" />

var EntityLogicalName = "connectionrole";
var Form_851fa67d_624f_4420_aff2_fbc34dc041e0_Properties = {
category: "category"
,description: "description"
,name: "name"
};

var Form_851fa67d_624f_4420_aff2_fbc34dc041e0_Controls = {
category: "category"
,connectionroleobjecttypecodelist: "connectionroleobjecttypecodelist"
,description: "description"
,name: "name"
,reciprocalRoleGrid: "reciprocalRoleGrid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "3231", "etc": "3231", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "connectionrole",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "category", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Business", "value": 1 }, { "text" : "Family", "value": 2 }, { "text" : "Social", "value": 3 }, { "text" : "Sales", "value": 4 }, { "text" : "Other", "value": 5 }, { "text" : "Stakeholder", "value": 1000 }, { "text" : "Sales Team", "value": 1001 }, { "text" : "Service", "value": 1002 }], "SelectedOption" : { "option" : "Business", "value": 1 }, "Text": "Business", "Controls": [{ "Name": "category" }] }, 
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 1000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "category", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Connection Role Category", "Attribute": "category" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Step 1: Describe the connection role", "Name": "step1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "category" }, 
{ "Name": "description" }]}, 
{ "Label": "Step 2: Select record types", "Name": "step2", "Visible": true, "Controls": [
{ "Name": "connectionroleobjecttypecodelist" }]}, 
{ "Label": "Section1", "Name": "{b0a70b0d-568c-10d3-1a3d-01c997a061c1}", "Visible": true, "Controls": [
]}]}, 
{ "Label": "Matching Connection Roles", "Name": "reciprocalroles", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Step 3: List matching connection roles (optional)", "Name": "roleGrid", "Visible": true, "Controls": [
{ "Name": "reciprocalRoleGrid" }]}]}]
};

var Xrm = new _xrm(pageData);
