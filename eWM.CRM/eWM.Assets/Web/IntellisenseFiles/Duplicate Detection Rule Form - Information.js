/// <reference path="Xrm.js" />

var EntityLogicalName = "duplicaterule";
var Form_048ba661_cb40_463c_a394_2496a6118495_Properties = {
baseentitytypecode: "baseentitytypecode"
,createdby: "createdby"
,createdon: "createdon"
,description: "description"
,excludeinactiverecords: "excludeinactiverecords"
,iscasesensitive: "iscasesensitive"
,matchingentitytypecode: "matchingentitytypecode"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,ownerid: "ownerid"
,statuscode: "statuscode"
};

var Form_048ba661_cb40_463c_a394_2496a6118495_Controls = {
baseentitytypecode: "baseentitytypecode"
,createdby: "createdby"
,createdon: "createdon"
,description: "description"
,excludeinactiverecords: "excludeinactiverecords"
,iscasesensitive: "iscasesensitive"
,matchingentitytypecode: "matchingentitytypecode"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,ruleconditioncontrol: "ruleconditioncontrol"
,statuscode: "statuscode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4414", "etc": "4414", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "duplicaterule",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "baseentitytypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Default Value", "value": 0 }], "SelectedOption" : { "option" : "Default Value", "value": 0 }, "Text": "Default Value", "Controls": [{ "Name": "baseentitytypecode" }] }, 
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdby" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "excludeinactiverecords", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "excludeinactiverecords" }] }, 
{ "Name": "iscasesensitive", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "iscasesensitive" }] }, 
{ "Name": "matchingentitytypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Default Value", "value": 0 }], "SelectedOption" : { "option" : "Default Value", "value": 0 }, "Text": "Default Value", "Controls": [{ "Name": "matchingentitytypecode" }] }, 
{ "Name": "modifiedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedby" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 160, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Unpublished", "value": 0 }, { "text" : "Publishing", "value": 1 }, { "text" : "Published", "value": 2 }], "SelectedOption" : { "option" : "Unpublished", "value": 0 }, "Text": "Unpublished", "Controls": [{ "Name": "statuscode" }] }]
, "AttributesLength": 12, 
"Controls": [
{ "Name": "baseentitytypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Base Record Type", "Attribute": "baseentitytypecode" }, 
{ "Name": "createdby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "excludeinactiverecords", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Exclude inactive matching records", "Attribute": "excludeinactiverecords" }, 
{ "Name": "iscasesensitive", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Case-sensitive", "Attribute": "iscasesensitive" }, 
{ "Name": "matchingentitytypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Matching Record Type", "Attribute": "matchingentitytypecode" }, 
{ "Name": "modifiedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified By", "Attribute": "modifiedby" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }], 
"ControlsLength": 12, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "rule", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section 1", "Name": "section 1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "statuscode" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "Duplicate Detection Rule Criteria", "Name": "criteria", "Visible": true, "Controls": [
{ "Name": "baseentitytypecode" }, 
{ "Name": "matchingentitytypecode" }, 
{ "Name": "iscasesensitive" }, 
{ "Name": "excludeinactiverecords" }]}, 
{ "Label": "You cannot customize the duplicate-detection rule criteria section.", "Name": "Rule Conditions", "Visible": true, "Controls": [
{ "Name": "ruleconditioncontrol" }]}]}, 
{ "Label": "Administration", "Name": "administration", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section 1", "Name": "section 1", "Visible": true, "Controls": [
{ "Name": "createdby" }, 
{ "Name": "createdon" }, 
{ "Name": "modifiedby" }, 
{ "Name": "modifiedon" }, 
{ "Name": "ownerid" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
