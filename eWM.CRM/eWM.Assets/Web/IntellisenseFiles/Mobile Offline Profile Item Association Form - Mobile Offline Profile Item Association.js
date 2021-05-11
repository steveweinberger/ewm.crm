/// <reference path="Xrm.js" />

var EntityLogicalName = "mobileofflineprofileitemassociation";
var Form_22106344_023f_4cb7_b4ef_0720c6d7362c_Properties = {
createdon: "createdon"
,name: "name"
,relationshipname: "relationshipname"
,selectedrelationshipsschema: "selectedrelationshipsschema"
};

var Form_22106344_023f_4cb7_b4ef_0720c6d7362c_Controls = {
createdon: "createdon"
,name: "name"
,relationshipname: "relationshipname"
,selectedrelationshipsschema: "selectedrelationshipsschema"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9868", "etc": "9868", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "mobileofflineprofileitemassociation",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "name" }] }, 
{ "Name": "relationshipname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 200, "Controls": [{ "Name": "relationshipname" }] }, 
{ "Name": "selectedrelationshipsschema", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [], "SelectedOption" : null, "Text": null, "Controls": [{ "Name": "selectedrelationshipsschema" }] }]
, "AttributesLength": 4, 
"Controls": [
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "relationshipname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entity Relationship", "Attribute": "relationshipname" }, 
{ "Name": "selectedrelationshipsschema", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entity Relationship", "Attribute": "selectedrelationshipsschema" }], 
"ControlsLength": 4, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General Information", "Name": "GENERALINFORMATION_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "General", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "createdon" }, 
{ "Name": "selectedrelationshipsschema" }, 
{ "Name": "relationshipname" }]}]}]
};

var Xrm = new _xrm(pageData);
