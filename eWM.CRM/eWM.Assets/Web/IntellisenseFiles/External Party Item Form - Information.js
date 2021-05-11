/// <reference path="Xrm.js" />

var EntityLogicalName = "externalpartyitem";
var Form_124c0352_ae4f_49d7_8767_2d32e28e1557_Properties = {
channelaccessprofileid: "channelaccessprofileid"
,createdon: "createdon"
,externalpartyid: "externalpartyid"
,lastdisabledon: "lastdisabledon"
,lastenabledon: "lastenabledon"
,modifiedon: "modifiedon"
,name: "name"
,regardingobjectid: "regardingobjectid"
,statuscode: "statuscode"
};

var Form_124c0352_ae4f_49d7_8767_2d32e28e1557_Controls = {
channelaccessprofileid: "channelaccessprofileid"
,createdon: "createdon"
,externalpartyid: "externalpartyid"
,header_statuscode: "header_statuscode"
,lastdisabledon: "lastdisabledon"
,lastenabledon: "lastenabledon"
,modifiedon: "modifiedon"
,name: "name"
,regardingobjectid: "regardingobjectid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9987", "etc": "9987", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "externalpartyitem",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "channelaccessprofileid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "channelaccessprofileid" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : , "canCreate" : }, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "externalpartyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "externalpartyid" }] }, 
{ "Name": "lastdisabledon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "lastdisabledon" }] }, 
{ "Name": "lastenabledon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "lastenabledon" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : , "canCreate" : }, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "name" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Enabled", "value": 1 }, { "text" : "Disabled", "value": 2 }], "SelectedOption" : { "option" : "Enabled", "value": 1 }, "Text": "Enabled", "Controls": [{ "Name": "header_statuscode" }] }]
, "AttributesLength": 9, 
"Controls": [
{ "Name": "channelaccessprofileid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Channel Access Profile", "Attribute": "channelaccessprofileid" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "externalpartyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "External Party", "Attribute": "externalpartyid" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }, 
{ "Name": "lastdisabledon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Disabled On", "Attribute": "lastdisabledon" }, 
{ "Name": "lastenabledon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Enabled On", "Attribute": "lastenabledon" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }], 
"ControlsLength": 9, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "null", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "regardingobjectid" }, 
{ "Name": "externalpartyid" }, 
{ "Name": "channelaccessprofileid" }]}, 
{ "Label": "Administration", "Name": "external party item administration", "Visible": true, "Controls": [
{ "Name": "lastenabledon" }, 
{ "Name": "lastdisabledon" }, 
{ "Name": "createdon" }, 
{ "Name": "modifiedon" }]}]}]
};

var Xrm = new _xrm(pageData);
