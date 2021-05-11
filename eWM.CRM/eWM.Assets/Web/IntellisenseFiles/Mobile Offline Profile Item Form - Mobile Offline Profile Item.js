/// <reference path="Xrm.js" />

var EntityLogicalName = "mobileofflineprofileitem";
var Form_b2fa2a1a_4734_4acd_98a8_72cbdd277430_Properties = {
createdon: "createdon"
,name: "name"
,recorddistributioncriteria: "recorddistributioncriteria"
,recordsownedbyme: "recordsownedbyme"
,recordsownedbymybusinessunit: "recordsownedbymybusinessunit"
,recordsownedbymyteam: "recordsownedbymyteam"
,selectedentitytypecode: "selectedentitytypecode"
};

var Form_b2fa2a1a_4734_4acd_98a8_72cbdd277430_Controls = {
createdon: "createdon"
,name: "name"
,profileassociationgrid: "profileassociationgrid"
,recorddistributioncriteria: "recorddistributioncriteria"
,recordsownedbyme: "recordsownedbyme"
,recordsownedbymybusinessunit: "recordsownedbymybusinessunit"
,recordsownedbymyteam: "recordsownedbymyteam"
,selectedentitytypecode: "selectedentitytypecode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9867", "etc": "9867", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "mobileofflineprofileitem",
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
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 255, "Controls": [{ "Name": "name" }] }, 
{ "Name": "recorddistributioncriteria", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Download related data only", "value": 0 }, { "text" : "All records", "value": 1 }, { "text" : "Other data filter", "value": 2 }], "SelectedOption" : { "option" : "Download related data only", "value": 0 }, "Text": "Download related data only", "Controls": [{ "Name": "recorddistributioncriteria" }] }, 
{ "Name": "recordsownedbyme", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "recordsownedbyme" }] }, 
{ "Name": "recordsownedbymybusinessunit", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "recordsownedbymybusinessunit" }] }, 
{ "Name": "recordsownedbymyteam", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "recordsownedbymyteam" }] }, 
{ "Name": "selectedentitytypecode", "Value": null, "Type" : "string", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "selectedentitytypecode" }] }]
, "AttributesLength": 7, 
"Controls": [
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "recorddistributioncriteria", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Data Download Filter", "Attribute": "recorddistributioncriteria" }, 
{ "Name": "recordsownedbyme", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Download my records", "Attribute": "recordsownedbyme" }, 
{ "Name": "recordsownedbymybusinessunit", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Download my business unit's records", "Attribute": "recordsownedbymybusinessunit" }, 
{ "Name": "recordsownedbymyteam", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Download my team's records", "Attribute": "recordsownedbymyteam" }, 
{ "Name": "selectedentitytypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entity", "Attribute": "selectedentitytypecode" }], 
"ControlsLength": 7, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General Information", "Name": "GENERALINFORMATION_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "Entity Selection", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "createdon" }, 
{ "Name": "selectedentitytypecode" }, 
{ "Name": "recorddistributioncriteria" }, 
{ "Name": "recordsownedbyme" }, 
{ "Name": "recordsownedbymyteam" }, 
{ "Name": "recordsownedbymybusinessunit" }]}, 
{ "Label": "", "Name": "MOBILE OFFLINE PROFILE ITEM ASSOCIATIONS", "Visible": true, "Controls": [
{ "Name": "profileassociationgrid" }]}]}]
};

var Xrm = new _xrm(pageData);
