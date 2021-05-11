/// <reference path="Xrm.js" />

var EntityLogicalName = "annotation";
var Form_69e5bd50_3d3e_47ca_aabc_d47bcbe59775_Properties = {
createdby: "createdby"
,createdon: "createdon"
,filename: "filename"
,filesize: "filesize"
,isdocument: "isdocument"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,notetext: "notetext"
,ownerid: "ownerid"
};

var Form_69e5bd50_3d3e_47ca_aabc_d47bcbe59775_Controls = {
createdby: "createdby"
,createdon: "createdon"
,filename: "filename"
,filesize: "filesize"
,isdocument: "isdocument"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,notetext: "notetext"
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
"QueryStringParameters": { "_gridType": "5", "etc": "5", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "annotation",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdby" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "filename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 255, "Controls": [{ "Name": "filename" }] }, 
{ "Name": "filesize", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "filesize" }] }, 
{ "Name": "isdocument", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isdocument" }] }, 
{ "Name": "modifiedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedby" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "notetext", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100000, "Controls": [{ "Name": "notetext" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }]
, "AttributesLength": 9, 
"Controls": [
{ "Name": "createdby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "filename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "File Name", "Attribute": "filename" }, 
{ "Name": "filesize", "Type": "standard", "Disabled": false, "Visible": true, "Label": "File Size (Bytes)", "Attribute": "filesize" }, 
{ "Name": "isdocument", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Document Attached", "Attribute": "isdocument" }, 
{ "Name": "modifiedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified By", "Attribute": "modifiedby" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "notetext", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Note Text", "Attribute": "notetext" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }], 
"ControlsLength": 9, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Account Information", "Name": "account information", "Visible": true, "Controls": [
{ "Name": "ownerid" }, 
{ "Name": "createdby" }, 
{ "Name": "createdon" }, 
{ "Name": "filename" }, 
{ "Name": "filesize" }, 
{ "Name": "isdocument" }, 
{ "Name": "modifiedby" }, 
{ "Name": "modifiedon" }, 
{ "Name": "notetext" }]}]}]
};

var Xrm = new _xrm(pageData);
