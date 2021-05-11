/// <reference path="Xrm.js" />

var EntityLogicalName = "entitlementtemplate";
var Form_90de3cc4_8fa4_4a55_9e7f_d5c1eec2f392_Properties = {
allocationtypecode: "allocationtypecode"
,decreaseremainingon: "decreaseremainingon"
,description: "description"
,enddate: "enddate"
,name: "name"
,restrictcasecreation: "restrictcasecreation"
,slaid: "slaid"
,startdate: "startdate"
,totalterms: "totalterms"
};

var Form_90de3cc4_8fa4_4a55_9e7f_d5c1eec2f392_Controls = {
allocationtypecode: "allocationtypecode"
,decreaseremainingon: "decreaseremainingon"
,description: "description"
,enddate: "enddate"
,grid_EntitlementChannel: "grid_EntitlementChannel"
,grid_EntitlementProducts: "grid_EntitlementProducts"
,name: "name"
,restrictcasecreation: "restrictcasecreation"
,slaid: "slaid"
,startdate: "startdate"
,totalterms: "totalterms"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9702", "etc": "9702", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "entitlementtemplate",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "allocationtypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Number of cases", "value": 0 }, { "text" : "Number of hours", "value": 1 }], "SelectedOption" : { "option" : "Number of cases", "value": 0 }, "Text": "Number of cases", "Controls": [{ "Name": "allocationtypecode" }] }, 
{ "Name": "decreaseremainingon", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Case Resolution", "value": 0 }, { "text" : "Case Creation", "value": 1 }], "SelectedOption" : { "option" : "Case Resolution", "value": 0 }, "Text": "Case Resolution", "Controls": [{ "Name": "decreaseremainingon" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "enddate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "enddate" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "restrictcasecreation", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "restrictcasecreation" }] }, 
{ "Name": "slaid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "slaid" }] }, 
{ "Name": "startdate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "startdate" }] }, 
{ "Name": "totalterms", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "totalterms" }] }]
, "AttributesLength": 9, 
"Controls": [
{ "Name": "allocationtypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Allocation Type", "Attribute": "allocationtypecode" }, 
{ "Name": "decreaseremainingon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Decrease Remaining On", "Attribute": "decreaseremainingon" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "enddate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Date", "Attribute": "enddate" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entitlement Template Name", "Attribute": "name" }, 
{ "Name": "restrictcasecreation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Restrict based on entitlement terms", "Attribute": "restrictcasecreation" }, 
{ "Name": "slaid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "SLA", "Attribute": "slaid" }, 
{ "Name": "startdate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Start Date", "Attribute": "startdate" }, 
{ "Name": "totalterms", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Terms", "Attribute": "totalterms" }], 
"ControlsLength": 9, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "INFORMATION", "Name": "information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "startdate" }, 
{ "Name": "enddate" }, 
{ "Name": "restrictcasecreation" }, 
{ "Name": "slaid" }, 
{ "Name": "description" }]}, 
{ "Label": "ENTITLEMENT TERMS", "Name": "entitlementterms", "Visible": true, "Controls": [
{ "Name": "allocationtypecode" }, 
{ "Name": "decreaseremainingon" }, 
{ "Name": "totalterms" }]}, 
{ "Label": "", "Name": "entitlementtemplateterms", "Visible": true, "Controls": [
{ "Name": "grid_EntitlementChannel" }]}, 
{ "Label": "", "Name": "products", "Visible": true, "Controls": [
{ "Name": "grid_EntitlementProducts" }]}]}]
};

var Xrm = new _xrm(pageData);
