/// <reference path="Xrm.js" />

var EntityLogicalName = "connection";
var Form_108e1be5_be0b_4b9f_9827_80841cdd5f48_Properties = {
description: "description"
,effectiveend: "effectiveend"
,effectivestart: "effectivestart"
,ownerid: "ownerid"
,record1id: "record1id"
,record1roleid: "record1roleid"
,record2id: "record2id"
,record2roleid: "record2roleid"
,statecode: "statecode"
};

var Form_108e1be5_be0b_4b9f_9827_80841cdd5f48_Controls = {
description: "description"
,effectiveend: "effectiveend"
,effectivestart: "effectivestart"
,footer_statecode: "footer_statecode"
,header_record1id: "header_record1id"
,ownerid: "ownerid"
,record1id: "record1id"
,record1roleid: "record1roleid"
,record2id: "record2id"
,record2roleid: "record2roleid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "3234", "etc": "3234", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "connection",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "effectiveend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "effectiveend" }] }, 
{ "Name": "effectivestart", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "effectivestart" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "record1id", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_record1id" }, { "Name": "record1id" }] }, 
{ "Name": "record1roleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "record1roleid" }] }, 
{ "Name": "record2id", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "record2id" }] }, 
{ "Name": "record2roleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "record2roleid" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }]
, "AttributesLength": 9, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "effectiveend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Date", "Attribute": "effectiveend" }, 
{ "Name": "effectivestart", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Start Date", "Attribute": "effectivestart" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "header_record1id", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Connected From", "Attribute": "record1id" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "record1id", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Connected From", "Attribute": "record1id" }, 
{ "Name": "record1roleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "As this role", "Attribute": "record1roleid" }, 
{ "Name": "record2id", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "record2id" }, 
{ "Name": "record2roleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "As this role", "Attribute": "record2roleid" }], 
"ControlsLength": 10, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Connect To", "Name": "info", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Connect To", "Name": "info_s", "Visible": true, "Controls": [
{ "Name": "record2id" }, 
{ "Name": "record2roleid" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}, 
{ "Label": "Details", "Name": "details", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Connected From", "Name": "connect_from", "Visible": true, "Controls": [
{ "Name": "record1id" }, 
{ "Name": "record1roleid" }]}, 
{ "Label": "Details", "Name": "details", "Visible": true, "Controls": [
{ "Name": "effectivestart" }, 
{ "Name": "effectiveend" }, 
{ "Name": "ownerid" }]}]}]
};

var Xrm = new _xrm(pageData);
