/// <reference path="Xrm.js" />

var EntityLogicalName = "opportunityclose";
var Form_d44e63c4_08a3_4817_bfb7_d0b69f99eb68_Properties = {
actualend: "actualend"
,actualrevenue: "actualrevenue"
,competitorid: "competitorid"
,description: "description"
};

var Form_d44e63c4_08a3_4817_bfb7_d0b69f99eb68_Controls = {
actualend: "actualend"
,actualrevenue: "actualrevenue"
,competitorid: "competitorid"
,description: "description"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4208", "etc": "4208", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "opportunityclose",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actualend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "actualend" }] }, 
{ "Name": "actualrevenue", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "actualrevenue" }] }, 
{ "Name": "competitorid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "competitorid" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "actualend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Closed Date", "Attribute": "actualend" }, 
{ "Name": "actualrevenue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual Revenue", "Attribute": "actualrevenue" }, 
{ "Name": "competitorid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Competitor", "Attribute": "competitorid" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Resolution", "Name": "resolution", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Information", "Name": "information", "Visible": true, "Controls": [
{ "Name": "actualrevenue" }, 
{ "Name": "actualend" }, 
{ "Name": "competitorid" }, 
{ "Name": "description" }]}]}]
};

var Xrm = new _xrm(pageData);
