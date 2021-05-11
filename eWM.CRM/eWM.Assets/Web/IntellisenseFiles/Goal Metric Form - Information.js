/// <reference path="Xrm.js" />

var EntityLogicalName = "metric";
var Form_607323da_cd0b_4614_9c4a_7f18ed905364_Properties = {
amountdatatype: "amountdatatype"
,description: "description"
,isamount: "isamount"
,isstretchtracked: "isstretchtracked"
,name: "name"
,statecode: "statecode"
};

var Form_607323da_cd0b_4614_9c4a_7f18ed905364_Controls = {
amountdatatype: "amountdatatype"
,description: "description"
,footer_statecode: "footer_statecode"
,isamount: "isamount"
,isstretchtracked: "isstretchtracked"
,MetricLineItemSubGrid: "MetricLineItemSubGrid"
,name: "name"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9603", "etc": "9603", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "metric",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "amountdatatype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Money", "value": 0 }, { "text" : "Decimal", "value": 1 }, { "text" : "Integer", "value": 2 }], "SelectedOption" : { "option" : "Money", "value": 0 }, "Text": "Money", "Controls": [{ "Name": "amountdatatype" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "isamount", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isamount" }] }, 
{ "Name": "isstretchtracked", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isstretchtracked" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "amountdatatype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Amount Data Type", "Attribute": "amountdatatype" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "isamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Metric Type", "Attribute": "isamount" }, 
{ "Name": "isstretchtracked", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Track Stretch Target", "Attribute": "isstretchtracked" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Step1 : Define the metric", "Name": "{379F3DB8-82DF-4e44-930A-C7A22C0E5206}", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "isamount" }, 
{ "Name": "amountdatatype" }, 
{ "Name": "isstretchtracked" }]}]}, 
{ "Label": "Rollup Fields", "Name": "Rollup Attributes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Step2 : Define the rollup fields for this metric to track the target's actual and in-progress values", "Name": "{CEBD8001-3DD4-4abb-99DE-9A3F2FD250EB}", "Visible": true, "Controls": [
{ "Name": "MetricLineItemSubGrid" }]}]}, 
{ "Label": "Description", "Name": "description", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}]
};

var Xrm = new _xrm(pageData);
