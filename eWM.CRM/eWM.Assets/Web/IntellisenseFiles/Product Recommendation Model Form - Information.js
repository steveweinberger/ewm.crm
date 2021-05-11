/// <reference path="Xrm.js" />

var EntityLogicalName = "recommendationmodel";
var Form_f81b1671_4623_4f6a_82f3_6b600cfaeb6e_Properties = {
azuremodelid: "azuremodelid"
,basketdatalastsynchronizationstatus: "basketdatalastsynchronizationstatus"
,basketdatalastsynchronizedon: "basketdatalastsynchronizedon"
,cataloglastsynchronizationstatus: "cataloglastsynchronizationstatus"
,cataloglastsynchronizedon: "cataloglastsynchronizedon"
,description: "description"
,maximumversions: "maximumversions"
,maxrecommendations: "maxrecommendations"
,minrecommendationrating: "minrecommendationrating"
,name: "name"
,productcatalogcrossselllinkrating: "productcatalogcrossselllinkrating"
,recommendationmodelversionid: "recommendationmodelversionid"
,statuscode: "statuscode"
,validuntil: "validuntil"
};

var Form_f81b1671_4623_4f6a_82f3_6b600cfaeb6e_Controls = {
azuremodelid: "azuremodelid"
,basketdatalastsynchronizationstatus: "basketdatalastsynchronizationstatus"
,basketdatalastsynchronizedon: "basketdatalastsynchronizedon"
,basketEntities: "basketEntities"
,cataloglastsynchronizationstatus: "cataloglastsynchronizationstatus"
,cataloglastsynchronizedon: "cataloglastsynchronizedon"
,description: "description"
,header_recommendationmodelversionid: "header_recommendationmodelversionid"
,header_statuscode: "header_statuscode"
,header_validuntil: "header_validuntil"
,maximumversions: "maximumversions"
,maxrecommendations: "maxrecommendations"
,minrecommendationrating: "minrecommendationrating"
,modelversions: "modelversions"
,name: "name"
,productcatalogcrossselllinkrating: "productcatalogcrossselllinkrating"
,recommendationEntities: "recommendationEntities"
,recommendationmodelversionid: "recommendationmodelversionid"
,recommendationmodelversionid: "recommendationmodelversionid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9933", "etc": "9933", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "recommendationmodel",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "azuremodelid", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "azuremodelid" }] }, 
{ "Name": "basketdatalastsynchronizationstatus", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Failure", "value": 1 }, { "text" : "Success", "value": 2 }], "SelectedOption" : { "option" : "Failure", "value": 1 }, "Text": "Failure", "Controls": [{ "Name": "basketdatalastsynchronizationstatus" }] }, 
{ "Name": "basketdatalastsynchronizedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "basketdatalastsynchronizedon" }] }, 
{ "Name": "cataloglastsynchronizationstatus", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Failure", "value": 1 }, { "text" : "Success", "value": 2 }], "SelectedOption" : { "option" : "Failure", "value": 1 }, "Text": "Failure", "Controls": [{ "Name": "cataloglastsynchronizationstatus" }] }, 
{ "Name": "cataloglastsynchronizedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "cataloglastsynchronizedon" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "maximumversions", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 15, "Min" : 1, "Precision" : 0, "Controls": [{ "Name": "maximumversions" }] }, 
{ "Name": "maxrecommendations", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 10, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "maxrecommendations" }] }, 
{ "Name": "minrecommendationrating", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "minrecommendationrating" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "productcatalogcrossselllinkrating", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1, "Min" : 0, "Precision" : 1, "Controls": [{ "Name": "productcatalogcrossselllinkrating" }] }, 
{ "Name": "recommendationmodelversionid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_recommendationmodelversionid" }, { "Name": "recommendationmodelversionid" }, { "Name": "recommendationmodelversionid" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 1 }, { "text" : "Inactive", "value": 2 }], "SelectedOption" : { "option" : "Active", "value": 1 }, "Text": "Active", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "validuntil", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_validuntil" }] }]
, "AttributesLength": 14, 
"Controls": [
{ "Name": "azuremodelid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Azure Model Id", "Attribute": "azuremodelid" }, 
{ "Name": "basketdatalastsynchronizationstatus", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Basket Data Last Synchronization Status", "Attribute": "basketdatalastsynchronizationstatus" }, 
{ "Name": "basketdatalastsynchronizedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Basket Data Last Synchronized On", "Attribute": "basketdatalastsynchronizedon" }, 
{ "Name": "cataloglastsynchronizationstatus", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Catalog Last Synchronization Status", "Attribute": "cataloglastsynchronizationstatus" }, 
{ "Name": "cataloglastsynchronizedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Catalog Last Synchronized On", "Attribute": "cataloglastsynchronizedon" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "header_recommendationmodelversionid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Model Version", "Attribute": "recommendationmodelversionid" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "header_validuntil", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Valid Until", "Attribute": "validuntil" }, 
{ "Name": "maximumversions", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Maximum Versions", "Attribute": "maximumversions" }, 
{ "Name": "maxrecommendations", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Maximum Recommendations", "Attribute": "maxrecommendations" }, 
{ "Name": "minrecommendationrating", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Minimum Recommendation Rating", "Attribute": "minrecommendationrating" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Model Name", "Attribute": "name" }, 
{ "Name": "productcatalogcrossselllinkrating", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product Catalog Cross-sell Link Rating", "Attribute": "productcatalogcrossselllinkrating" }, 
{ "Name": "recommendationmodelversionid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Model Version", "Attribute": "recommendationmodelversionid" }, 
{ "Name": "recommendationmodelversionid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Model Version", "Attribute": "recommendationmodelversionid" }], 
"ControlsLength": 16, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Details", "Name": "{fb5bf81a-36b1-4cac-a1c7-bae6fcb4d45f}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "MODEL INFORMATION", "Name": "{2ddde429-8548-48f8-94e0-06c15a33bc5d}", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "maxrecommendations" }, 
{ "Name": "minrecommendationrating" }, 
{ "Name": "productcatalogcrossselllinkrating" }, 
{ "Name": "recommendationmodelversionid" }, 
{ "Name": "azuremodelid" }, 
{ "Name": "description" }]}, 
{ "Label": "BUILD MODEL VERSION INSIGHTS", "Name": "{fb5bf81a-36b1-4cac-a1c7-bae6fcb4d45f}_section_6", "Visible": true, "Controls": [
{ "Name": "recommendationmodelversionid" }]}, 
{ "Label": "SYNCHRONIZATION INFORMATION", "Name": "{fb5bf81a-36b1-4cac-a1c7-bae6fcb4d45f}_section_5", "Visible": true, "Controls": [
{ "Name": "cataloglastsynchronizedon" }, 
{ "Name": "cataloglastsynchronizationstatus" }, 
{ "Name": "basketdatalastsynchronizedon" }, 
{ "Name": "basketdatalastsynchronizationstatus" }]}]}, 
{ "Label": "Basket Data Entities", "Name": "{a4aa2970-03c2-a0c1-1cc7-1ae1cb38a5ae}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "{5c73d598-4b77-1cd4-4759-a8421e582993}", "Visible": true, "Controls": [
{ "Name": "basketEntities" }]}]}, 
{ "Label": "Recommendation Entities", "Name": "{6792e534-4564-2153-0bb9-53c5e1bd8b12}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "{3b895405-374c-1b83-5929-77c64b2a844c}", "Visible": true, "Controls": [
{ "Name": "recommendationEntities" }]}]}, 
{ "Label": "Model Versions", "Name": "{365aea89-d690-2a56-7908-ae3cbc5104ed}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "{3b80648a-0384-4335-5eeb-a1144e9702c7}", "Visible": true, "Controls": [
{ "Name": "maximumversions" }, 
{ "Name": "modelversions" }]}]}]
};

var Xrm = new _xrm(pageData);
