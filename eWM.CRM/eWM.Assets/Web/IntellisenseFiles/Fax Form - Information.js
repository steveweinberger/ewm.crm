/// <reference path="Xrm.js" />

var EntityLogicalName = "fax";
var Form_69f5f3c9_6654_4482_b188_a0c9f7cea52e_Properties = {
actualdurationminutes: "actualdurationminutes"
,category: "category"
,coverpagename: "coverpagename"
,description: "description"
,directioncode: "directioncode"
,faxnumber: "faxnumber"
,from: "from"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,scheduledend: "scheduledend"
,subcategory: "subcategory"
,subject: "subject"
,to: "to"
};

var Form_69f5f3c9_6654_4482_b188_a0c9f7cea52e_Controls = {
actualdurationminutes: "actualdurationminutes"
,category: "category"
,coverpagename: "coverpagename"
,description: "description"
,directioncode: "directioncode"
,faxnumber: "faxnumber"
,from: "from"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,regardingobjectid: "regardingobjectid"
,scheduledend: "scheduledend"
,subcategory: "subcategory"
,subject: "subject"
,to: "to"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4204", "etc": "4204", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "fax",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actualdurationminutes", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "actualdurationminutes" }] }, 
{ "Name": "category", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "category" }] }, 
{ "Name": "coverpagename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "coverpagename" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "directioncode", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "directioncode" }] }, 
{ "Name": "faxnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "faxnumber" }] }, 
{ "Name": "from", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "from" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "prioritycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Low", "value": 0 }, { "text" : "Normal", "value": 1 }, { "text" : "High", "value": 2 }], "SelectedOption" : { "option" : "Low", "value": 0 }, "Text": "Low", "Controls": [{ "Name": "prioritycode" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "scheduledend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "scheduledend" }] }, 
{ "Name": "subcategory", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "subcategory" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }, 
{ "Name": "to", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "to" }] }]
, "AttributesLength": 14, 
"Controls": [
{ "Name": "actualdurationminutes", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Duration", "Attribute": "actualdurationminutes" }, 
{ "Name": "category", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Category", "Attribute": "category" }, 
{ "Name": "coverpagename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Cover Page", "Attribute": "coverpagename" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "directioncode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Direction", "Attribute": "directioncode" }, 
{ "Name": "faxnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fax Number", "Attribute": "faxnumber" }, 
{ "Name": "from", "Type": "standard", "Disabled": false, "Visible": true, "Label": "From", "Attribute": "from" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "prioritycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Priority", "Attribute": "prioritycode" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "scheduledend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Due", "Attribute": "scheduledend" }, 
{ "Name": "subcategory", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Sub-Category", "Attribute": "subcategory" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }, 
{ "Name": "to", "Type": "standard", "Disabled": false, "Visible": true, "Label": "To", "Attribute": "to" }], 
"ControlsLength": 14, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Fax", "Name": "fax", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General Information", "Name": "general information", "Visible": true, "Controls": [
{ "Name": "from" }, 
{ "Name": "faxnumber" }, 
{ "Name": "to" }, 
{ "Name": "directioncode" }]}, 
{ "Label": "Description", "Name": "fax description", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "description" }]}, 
{ "Label": "Fax Details", "Name": "fax details", "Visible": true, "Controls": [
{ "Name": "regardingobjectid" }, 
{ "Name": "ownerid" }, 
{ "Name": "actualdurationminutes" }, 
{ "Name": "prioritycode" }, 
{ "Name": "scheduledend" }, 
{ "Name": "coverpagename" }, 
{ "Name": "category" }, 
{ "Name": "subcategory" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
