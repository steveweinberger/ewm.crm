/// <reference path="Xrm.js" />

var EntityLogicalName = "importjob";
var Form_894d4d49_0f0b_44b0_a1f2_9ecd032d32f8_Properties = {
new_name: "new_name"
,ownerid: "ownerid"
,progress: "progress"
,solutionname: "solutionname"
,statecode: "statecode"
};

var Form_894d4d49_0f0b_44b0_a1f2_9ecd032d32f8_Controls = {
footer_statecode: "footer_statecode"
,new_name: "new_name"
,ownerid: "ownerid"
,progress: "progress"
,solutionname: "solutionname"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9107", "etc": "9107", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "importjob",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "progress", "Value": null, "Type" : "double", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "progress" }] }, 
{ "Name": "solutionname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "solutionname" }] }]
, "AttributesLength": 2, 
"Controls": [
, 
{ "Name": "progress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Progress", "Attribute": "progress" }, 
{ "Name": "solutionname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "SolutionName", "Attribute": "solutionname" }], 
"ControlsLength": 2, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Information", "Name": "null", "Visible": true, "Controls": [
{ "Name": "new_name" }, 
{ "Name": "ownerid" }, 
{ "Name": "solutionname" }, 
{ "Name": "progress" }]}]}]
};

var Xrm = new _xrm(pageData);
