/// <reference path="Xrm.js" />

var EntityLogicalName = "externalparty";
var Form_93f979fa_d98e_4e27_af36_bab26518debb_Properties = {
correlationkey: "correlationkey"
,emailaddress: "emailaddress"
,fullname: "fullname"
,lastdisabledon: "lastdisabledon"
,lastenabledon: "lastenabledon"
,ownerid: "ownerid"
,statuscode: "statuscode"
};

var Form_93f979fa_d98e_4e27_af36_bab26518debb_Controls = {
correlationkey: "correlationkey"
,emailaddress: "emailaddress"
,externalPartyItemsGrid: "externalPartyItemsGrid"
,fullname: "fullname"
,header_ownerid: "header_ownerid"
,header_statuscode: "header_statuscode"
,lastdisabledon: "lastdisabledon"
,lastenabledon: "lastenabledon"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "3008", "etc": "3008", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "externalparty",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "correlationkey", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "correlationkey" }] }, 
{ "Name": "emailaddress", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "emailaddress" }] }, 
{ "Name": "fullname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "fullname" }] }, 
{ "Name": "lastdisabledon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "lastdisabledon" }] }, 
{ "Name": "lastenabledon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "lastenabledon" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Enabled", "value": 1 }, { "text" : "Disabled", "value": 2 }], "SelectedOption" : { "option" : "Enabled", "value": 1 }, "Text": "Enabled", "Controls": [{ "Name": "header_statuscode" }] }]
, "AttributesLength": 7, 
"Controls": [
{ "Name": "correlationkey", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Correlation Key", "Attribute": "correlationkey" }, 
{ "Name": "emailaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Email Address", "Attribute": "emailaddress" }, 
{ "Name": "fullname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Full Name", "Attribute": "fullname" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }, 
{ "Name": "lastdisabledon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Disabled On", "Attribute": "lastdisabledon" }, 
{ "Name": "lastenabledon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Enabled On", "Attribute": "lastenabledon" }], 
"ControlsLength": 7, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "null", "Visible": true, "Controls": [
{ "Name": "fullname" }, 
{ "Name": "emailaddress" }, 
{ "Name": "correlationkey" }]}, 
{ "Label": "Administration", "Name": "null", "Visible": true, "Controls": [
{ "Name": "lastenabledon" }, 
{ "Name": "lastdisabledon" }]}, 
{ "Label": "", "Name": "null", "Visible": true, "Controls": [
{ "Name": "externalPartyItemsGrid" }]}]}]
};

var Xrm = new _xrm(pageData);
