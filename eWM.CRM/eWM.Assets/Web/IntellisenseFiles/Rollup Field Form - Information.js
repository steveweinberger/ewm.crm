/// <reference path="Xrm.js" />

var EntityLogicalName = "rollupfield";
var Form_0cf7e97d_c2f0_4d0e_97a0_8a51898a6b1d_Properties = {
sourceentity: "sourceentity"
};

var Form_0cf7e97d_c2f0_4d0e_97a0_8a51898a6b1d_Controls = {
dateattribute: "dateattribute"
,entityfordateattribute: "entityfordateattribute"
,goalattribute: "goalattribute"
,sourceattribute: "sourceattribute"
,sourceentity: "sourceentity"
,sourcestate: "sourcestate"
,sourcestatus: "sourcestatus"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9604", "etc": "9604", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "rollupfield",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
]
, "AttributesLength": 0, 
"Controls": [
], 
"ControlsLength": 0, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Step 1: Specify the rollup field to track against goals", "Name": "{41a22d3a-56ec-4317-812a-ac5c92764cd5}", "Visible": true, "Controls": [
{ "Name": "goalattribute" }]}, 
{ "Label": "Step 2: Specify the details about the source data that rolls up", "Name": "{27578c24-6dcb-7649-ba95-913c229c39eb}", "Visible": true, "Controls": [
{ "Name": "sourceentity" }, 
{ "Name": "sourceattribute" }]}, 
{ "Label": "Section4", "Name": "{6ad1c698-2e2e-8a08-b43a-b66815b9eb06}", "Visible": true, "Controls": [
{ "Name": "sourcestate" }, 
{ "Name": "sourcestatus" }]}, 
{ "Label": "Step 3: Specify the date field that determines the goal period that the records will roll up into", "Name": "{d65a4472-a959-3b9c-c416-d79c56e4a44b}", "Visible": true, "Controls": [
{ "Name": "entityfordateattribute" }, 
{ "Name": "dateattribute" }]}]}]
};

var Xrm = new _xrm(pageData);
