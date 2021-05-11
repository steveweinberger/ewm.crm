/// <reference path="Xrm.js" />

var EntityLogicalName = "import";
var Form_c7024539_6476_418d_93f5_b5c564aa32d2_Properties = {
createdby: "createdby"
,createdon: "createdon"
,name: "name"
,ownerid: "ownerid"
,sequence: "sequence"
,statuscode: "statuscode"
};

var Form_c7024539_6476_418d_93f5_b5c564aa32d2_Controls = {
createdby: "createdby"
,createdon: "createdon"
,name: "name"
,ownerid: "ownerid"
,sequence: "sequence"
,statuscode: "statuscode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4410", "etc": "4410", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "import",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdby" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "sequence", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "sequence" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Submitted", "value": 0 }, { "text" : "Parsing", "value": 1 }, { "text" : "Transforming", "value": 2 }, { "text" : "Importing", "value": 3 }, { "text" : "Completed", "value": 4 }, { "text" : "Failed", "value": 5 }], "SelectedOption" : { "option" : "Submitted", "value": 0 }, "Text": "Submitted", "Controls": [{ "Name": "statuscode" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "createdby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "sequence", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Sequence", "Attribute": "sequence" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "general", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "statuscode" }, 
{ "Name": "sequence" }]}, 
{ "Label": "Properties", "Name": "properties", "Visible": true, "Controls": [
{ "Name": "createdby" }, 
{ "Name": "createdon" }, 
{ "Name": "ownerid" }]}]}]
};

var Xrm = new _xrm(pageData);
