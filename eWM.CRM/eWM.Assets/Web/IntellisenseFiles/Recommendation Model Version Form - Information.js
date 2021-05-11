/// <reference path="Xrm.js" />

var EntityLogicalName = "recommendationmodelversion";
var Form_5b86db13_178d_482f_b7e0_5eb269a0af97_Properties = {
azurebuildid: "azurebuildid"
,azuremodelbuildstatus: "azuremodelbuildstatus"
,basketdatasynchronizationstatus: "basketdatasynchronizationstatus"
,buildendedon: "buildendedon"
,buildstartedon: "buildstartedon"
,catalogcoverage: "catalogcoverage"
,catalogsynchronizationstatus: "catalogsynchronizationstatus"
,description: "description"
,name: "name"
,percentilerank: "percentilerank"
,statuscode: "statuscode"
};

var Form_5b86db13_178d_482f_b7e0_5eb269a0af97_Controls = {
AzureBuildId: "AzureBuildId"
,azuremodelbuildstatus: "azuremodelbuildstatus"
,BasketDataSynchronizationStatus: "BasketDataSynchronizationStatus"
,basketentities: "basketentities"
,BuildStartedOn: "BuildStartedOn"
,catalogcoverage: "catalogcoverage"
,CatalogSynchronizationStatus: "CatalogSynchronizationStatus"
,description: "description"
,header_buildenddate: "header_buildenddate"
,header_statuscode: "header_statuscode"
,name: "name"
,percentilerank: "percentilerank"
,recommendationentities: "recommendationentities"
,workflowexecutionhistory: "workflowexecutionhistory"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9935", "etc": "9935", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "recommendationmodelversion",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
]
, "AttributesLength": 0, 
"Controls": [
], 
"ControlsLength": 0, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Details", "Name": "Details", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "MODEL VERSION INFORMATION", "Name": "ModelVersion_section_1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "BuildStartedOn" }, 
{ "Name": "AzureBuildId" }, 
{ "Name": "description" }]}, 
{ "Label": "SYNCHRONIZATION INFORMATION", "Name": "ModelVersion_section_2", "Visible": true, "Controls": [
{ "Name": "CatalogSynchronizationStatus" }, 
{ "Name": "BasketDataSynchronizationStatus" }, 
{ "Name": "azuremodelbuildstatus" }]}, 
{ "Label": "BUILD MODEL VERSION INSIGHTS", "Name": "ModelVersion_section_2", "Visible": true, "Controls": [
{ "Name": "catalogcoverage" }, 
{ "Name": "percentilerank" }]}]}, 
{ "Label": "Basket Data Entities", "Name": "tab_3", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_3_section_1", "Visible": true, "Controls": [
{ "Name": "basketentities" }]}]}, 
{ "Label": "Recommendation Entities", "Name": "tab_4", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_4_section_1", "Visible": true, "Controls": [
{ "Name": "recommendationentities" }]}]}, 
{ "Label": "Build Workflow Execution History", "Name": "tab_5", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_4_section_1", "Visible": true, "Controls": [
{ "Name": "workflowexecutionhistory" }]}]}]
};

var Xrm = new _xrm(pageData);
