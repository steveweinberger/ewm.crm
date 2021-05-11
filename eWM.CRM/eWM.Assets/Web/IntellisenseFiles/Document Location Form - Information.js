/// <reference path="Xrm.js" />

var EntityLogicalName = "sharepointdocumentlocation";
var Form_4665225f_e71b_df73_aa01_00155d2a9126_Properties = {
absoluteurl: "absoluteurl"
,description: "description"
,locationtype: "locationtype"
,name: "name"
,ownerid: "ownerid"
,parentsiteorlocation: "parentsiteorlocation"
,regardingobjectid: "regardingobjectid"
,relativeurl: "relativeurl"
,statecode: "statecode"
};

var Form_4665225f_e71b_df73_aa01_00155d2a9126_Controls = {
absoluteurl: "absoluteurl"
,description: "description"
,footer_statecode: "footer_statecode"
,locationtype: "locationtype"
,name: "name"
,ownerid: "ownerid"
,parentsiteorlocation: "parentsiteorlocation"
,regardingobjectid: "regardingobjectid"
,relativeurl: "relativeurl"
,urloption: "urloption"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9508", "etc": "9508", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "sharepointdocumentlocation",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "absoluteurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "absoluteurl" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "locationtype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "General", "value": 0 }, { "text" : "Dedicated for OneNote Integration", "value": 1 }], "SelectedOption" : { "option" : "General", "value": 0 }, "Text": "General", "Controls": [{ "Name": "locationtype" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 160, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "parentsiteorlocation", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "parentsiteorlocation" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "relativeurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 255, "Controls": [{ "Name": "relativeurl" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }]
, "AttributesLength": 9, 
"Controls": [
{ "Name": "absoluteurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Absolute URL", "Attribute": "absoluteurl" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "locationtype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Location Type ", "Attribute": "locationtype" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "parentsiteorlocation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Parent Site or Location", "Attribute": "parentsiteorlocation" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "relativeurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Relative URL", "Attribute": "relativeurl" }], 
"ControlsLength": 9, 
"Navigation": [
{"Id": "navSubDocumentLocations", "Key": "navSubDocumentLocations", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section 1", "Name": "{272eb814-0769-5ebe-3ed1-e95a0b16853e}", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "ownerid" }, 
{ "Name": "description" }]}, 
{ "Label": "URL Options", "Name": "url option", "Visible": true, "Controls": [
{ "Name": "urloption" }, 
{ "Name": "absoluteurl" }, 
{ "Name": "parentsiteorlocation" }, 
{ "Name": "relativeurl" }, 
{ "Name": "regardingobjectid" }, 
{ "Name": "locationtype" }]}]}]
};

var Xrm = new _xrm(pageData);
