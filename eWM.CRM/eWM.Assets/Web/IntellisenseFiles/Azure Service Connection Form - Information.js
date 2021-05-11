/// <reference path="Xrm.js" />

var EntityLogicalName = "azureserviceconnection";
var Form_aa598438_5207_4d1c_9420_1fcee98529e6_Properties = {
accountkey: "accountkey"
,createdby: "createdby"
,description: "description"
,lastconnectionstatuscode: "lastconnectionstatuscode"
,lastconnectiontime: "lastconnectiontime"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,serviceuri: "serviceuri"
,statecode: "statecode"
};

var Form_aa598438_5207_4d1c_9420_1fcee98529e6_Controls = {
accountkey: "accountkey"
,createdby: "createdby"
,description: "description"
,header_statecode: "header_statecode"
,lastconnectionstatuscode: "lastconnectionstatuscode"
,lastconnectiontime: "lastconnectiontime"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,serviceuri: "serviceuri"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9936", "etc": "9936", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "azureserviceconnection",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "accountkey", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "accountkey" }] }, 
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdby" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "lastconnectionstatuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Success", "value": 1 }, { "text" : "Failure", "value": 2 }], "SelectedOption" : { "option" : "Success", "value": 1 }, "Text": "Success", "Controls": [{ "Name": "lastconnectionstatuscode" }] }, 
{ "Name": "lastconnectiontime", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "lastconnectiontime" }] }, 
{ "Name": "modifiedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedby" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 160, "Controls": [{ "Name": "name" }] }, 
{ "Name": "serviceuri", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "serviceuri" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "header_statecode" }] }]
, "AttributesLength": 10, 
"Controls": [
{ "Name": "accountkey", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Azure Account Key", "Attribute": "accountkey" }, 
{ "Name": "createdby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "header_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "lastconnectionstatuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Connection Status", "Attribute": "lastconnectionstatuscode" }, 
{ "Name": "lastconnectiontime", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Connection Time", "Attribute": "lastconnectiontime" }, 
{ "Name": "modifiedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified By", "Attribute": "modifiedby" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "serviceuri", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Azure Service URL", "Attribute": "serviceuri" }], 
"ControlsLength": 10, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "CONNECTION INFORMATION", "Name": "connectioninfo", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "serviceuri" }, 
{ "Name": "accountkey" }, 
{ "Name": "createdby" }, 
{ "Name": "modifiedby" }, 
{ "Name": "modifiedon" }, 
{ "Name": "description" }]}, 
{ "Label": "CONNECTION TEST INFORMATION", "Name": "connectiontestinfo", "Visible": true, "Controls": [
{ "Name": "lastconnectionstatuscode" }, 
{ "Name": "lastconnectiontime" }]}]}]
};

var Xrm = new _xrm(pageData);
