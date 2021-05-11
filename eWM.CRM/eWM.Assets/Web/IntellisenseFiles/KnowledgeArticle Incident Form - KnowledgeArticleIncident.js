/// <reference path="Xrm.js" />

var EntityLogicalName = "knowledgearticleincident";
var Form_fb404e98_5caa_465b_b8f6_942c47ddffa9_Properties = {
incidentid: "incidentid"
,issenttocustomer: "issenttocustomer"
,knowledgeusage: "knowledgeusage"
};

var Form_fb404e98_5caa_465b_b8f6_942c47ddffa9_Controls = {
incidentid: "incidentid"
,issenttocustomer: "issenttocustomer"
,knowledgeusage: "knowledgeusage"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9954", "etc": "9954", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "knowledgearticleincident",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "incidentid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "incidentid" }] }, 
{ "Name": "issenttocustomer", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : null, "Controls": [{ "Name": "issenttocustomer" }] }, 
{ "Name": "knowledgeusage", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Reference", "value": 1 }, { "text" : "Solution", "value": 2 }], "SelectedOption" : { "option" : "Reference", "value": 1 }, "Text": "Reference", "Controls": [{ "Name": "knowledgeusage" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "incidentid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Incident", "Attribute": "incidentid" }, 
{ "Name": "issenttocustomer", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Sent To Customer", "Attribute": "issenttocustomer" }, 
{ "Name": "knowledgeusage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Knowledge Usage ", "Attribute": "knowledgeusage" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "Knowledge Information", "Visible": true, "Controls": [
{ "Name": "incidentid" }, 
{ "Name": "knowledgeusage" }, 
{ "Name": "issenttocustomer" }]}]}]
};

var Xrm = new _xrm(pageData);
