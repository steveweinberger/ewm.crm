/// <reference path="Xrm.js" />

var EntityLogicalName = "msdyn_wallsavedqueryusersettings";
var Form_7968a7d9_82f4_48d1_9802_4e4312b1b375_Properties = {
msdyn_isvisible: "msdyn_isvisible"
,msdyn_savedqueryname: "msdyn_savedqueryname"
,msdyn_userid: "msdyn_userid"
,msdyn_wallsavedqueryid: "msdyn_wallsavedqueryid"
,ownerid: "ownerid"
,statecode: "statecode"
};

var Form_7968a7d9_82f4_48d1_9802_4e4312b1b375_Controls = {
footer_statecode: "footer_statecode"
,msdyn_isvisible: "msdyn_isvisible"
,msdyn_savedqueryname: "msdyn_savedqueryname"
,msdyn_userid: "msdyn_userid"
,msdyn_wallsavedqueryid: "msdyn_wallsavedqueryid"
,ownerid: "ownerid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "10004", "etc": "10004", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "msdyn_wallsavedqueryusersettings",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "msdyn_isvisible", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "msdyn_isvisible" }] }, 
{ "Name": "msdyn_savedqueryname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "msdyn_savedqueryname" }] }, 
{ "Name": "msdyn_userid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "msdyn_userid" }] }, 
{ "Name": "msdyn_wallsavedqueryid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "msdyn_wallsavedqueryid" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "msdyn_isvisible", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Display on the wall", "Attribute": "msdyn_isvisible" }, 
{ "Name": "msdyn_savedqueryname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "View Name", "Attribute": "msdyn_savedqueryname" }, 
{ "Name": "msdyn_userid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "User Id", "Attribute": "msdyn_userid" }, 
{ "Name": "msdyn_wallsavedqueryid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Wall View Id", "Attribute": "msdyn_wallsavedqueryid" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "null", "Visible": true, "Controls": [
{ "Name": "msdyn_savedqueryname" }, 
{ "Name": "ownerid" }, 
{ "Name": "msdyn_wallsavedqueryid" }, 
{ "Name": "msdyn_userid" }, 
{ "Name": "msdyn_isvisible" }]}]}]
};

var Xrm = new _xrm(pageData);
