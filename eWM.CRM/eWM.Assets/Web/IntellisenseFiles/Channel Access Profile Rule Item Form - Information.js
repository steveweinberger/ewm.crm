/// <reference path="Xrm.js" />

var EntityLogicalName = "channelaccessprofileruleitem";
var Form_d406a883_48da_40d2_9f57_bac0857f023e_Properties = {
associatedchannelaccessprofile: "associatedchannelaccessprofile"
,description: "description"
,name: "name"
};

var Form_d406a883_48da_40d2_9f57_bac0857f023e_Controls = {
associatedProfile: "associatedProfile"
,description: "description"
,name: "name"
,notescontrol: "notescontrol"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9401", "etc": "9401", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "channelaccessprofileruleitem",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "associatedchannelaccessprofile", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "associatedProfile" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "description" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 150, "Controls": [{ "Name": "name" }] }]
, "AttributesLength": 3, 
"Controls": [
{ "Name": "associatedProfile", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Assign Profile", "Attribute": "associatedchannelaccessprofile" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }], 
"ControlsLength": 3, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Channel Access Profile Rule Items", "Name": "null", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "description" }]}]}, 
{ "Label": "Rule Criteria", "Name": "RuleCriteria", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "If Conditions", "Name": "ConditionControl", "Visible": true, "Controls": [
]}, 
{ "Label": "Then Conditions", "Name": "rule then conditions", "Visible": true, "Controls": [
{ "Name": "associatedProfile" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
