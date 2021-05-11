/// <reference path="Xrm.js" />

var EntityLogicalName = "letter";
var Form_d6784cb8_bc33_4fcc_a9a9_3dc5b46ea9c6_Properties = {
actualdurationminutes: "actualdurationminutes"
,address: "address"
,description: "description"
,directioncode: "directioncode"
,from: "from"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,scheduledend: "scheduledend"
,statecode: "statecode"
,subject: "subject"
,to: "to"
};

var Form_d6784cb8_bc33_4fcc_a9a9_3dc5b46ea9c6_Controls = {
actualdurationminutes: "actualdurationminutes"
,address: "address"
,description: "description"
,directioncode: "directioncode"
,from: "from"
,header_ownerid: "header_ownerid"
,header_priority: "header_priority"
,header_scheduledend: "header_scheduledend"
,header_statecode: "header_statecode"
,regardingobjectid: "regardingobjectid"
,subject: "subject"
,to: "to"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4207", "etc": "4207", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "letter",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actualdurationminutes", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "actualdurationminutes" }] }, 
{ "Name": "address", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "address" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "directioncode", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "directioncode" }] }, 
{ "Name": "from", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "from" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "prioritycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Low", "value": 0 }, { "text" : "Normal", "value": 1 }, { "text" : "High", "value": 2 }], "SelectedOption" : { "option" : "Low", "value": 0 }, "Text": "Low", "Controls": [{ "Name": "header_priority" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "scheduledend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_scheduledend" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Open", "value": 0 }, { "text" : "Completed", "value": 1 }, { "text" : "Canceled", "value": 2 }], "SelectedOption" : { "option" : "Open", "value": 0 }, "Text": "Open", "Controls": [{ "Name": "header_statecode" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }, 
{ "Name": "to", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "to" }] }]
, "AttributesLength": 12, 
"Controls": [
{ "Name": "actualdurationminutes", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Duration", "Attribute": "actualdurationminutes" }, 
{ "Name": "address", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Address", "Attribute": "address" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "directioncode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Direction", "Attribute": "directioncode" }, 
{ "Name": "from", "Type": "standard", "Disabled": false, "Visible": true, "Label": "From", "Attribute": "from" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_priority", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Priority", "Attribute": "prioritycode" }, 
{ "Name": "header_scheduledend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Due", "Attribute": "scheduledend" }, 
{ "Name": "header_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Activity Status", "Attribute": "statecode" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }, 
{ "Name": "to", "Type": "standard", "Disabled": false, "Visible": true, "Label": "To", "Attribute": "to" }], 
"ControlsLength": 12, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Summary", "Name": "SUMMARY_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "general information", "Visible": true, "Controls": [
{ "Name": "from" }, 
{ "Name": "to" }, 
{ "Name": "address" }, 
{ "Name": "directioncode" }, 
{ "Name": "subject" }]}, 
{ "Label": "Description", "Name": "Letter description", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "Letter Details", "Name": "Letter details", "Visible": true, "Controls": [
{ "Name": "regardingobjectid" }, 
{ "Name": "actualdurationminutes" }]}, 
{ "Label": "Section", "Name": "tab_2_section_2", "Visible": true, "Controls": [
]}]}]
};

var Xrm = new _xrm(pageData);
