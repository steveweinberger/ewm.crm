/// <reference path="Xrm.js" />

var EntityLogicalName = "list";
var Form_ce6bb1c7_04a7_43e3_a00f_a87ad5cd0670_Properties = {
cost: "cost"
,createdfromcode: "createdfromcode"
,description: "description"
,lastusedon: "lastusedon"
,listname: "listname"
,lockstatus: "lockstatus"
,modifiedon: "modifiedon"
,ownerid: "ownerid"
,purpose: "purpose"
,source: "source"
,transactioncurrencyid: "transactioncurrencyid"
,type: "type"
};

var Form_ce6bb1c7_04a7_43e3_a00f_a87ad5cd0670_Controls = {
cost: "cost"
,createdfromcode: "createdfromcode"
,description: "description"
,lastusedon: "lastusedon"
,listname: "listname"
,lockstatus: "lockstatus"
,modifiedon: "modifiedon"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,purpose: "purpose"
,source: "source"
,transactioncurrencyid: "transactioncurrencyid"
,type: "type"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4300", "etc": "4300", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "list",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "cost", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "cost" }] }, 
{ "Name": "createdfromcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Account", "value": 1 }, { "text" : "Contact", "value": 2 }, { "text" : "Lead", "value": 4 }], "SelectedOption" : { "option" : "Account", "value": 1 }, "Text": "Account", "Controls": [{ "Name": "createdfromcode" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "lastusedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "lastusedon" }] }, 
{ "Name": "listname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 128, "Controls": [{ "Name": "listname" }] }, 
{ "Name": "lockstatus", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "lockstatus" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "purpose", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 512, "Controls": [{ "Name": "purpose" }] }, 
{ "Name": "source", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 128, "Controls": [{ "Name": "source" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "type", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "type" }] }]
, "AttributesLength": 12, 
"Controls": [
{ "Name": "cost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Cost", "Attribute": "cost" }, 
{ "Name": "createdfromcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Targeted At", "Attribute": "createdfromcode" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "lastusedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Used On", "Attribute": "lastusedon" }, 
{ "Name": "listname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "listname" }, 
{ "Name": "lockstatus", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Locked", "Attribute": "lockstatus" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "purpose", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Purpose", "Attribute": "purpose" }, 
{ "Name": "source", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Source", "Attribute": "source" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "type", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Type", "Attribute": "type" }], 
"ControlsLength": 12, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Marketing List Information", "Name": "marketing list information", "Visible": true, "Controls": [
{ "Name": "listname" }, 
{ "Name": "createdfromcode" }, 
{ "Name": "type" }, 
{ "Name": "purpose" }, 
{ "Name": "source" }, 
{ "Name": "modifiedon" }, 
{ "Name": "transactioncurrencyid" }, 
{ "Name": "cost" }, 
{ "Name": "lastusedon" }, 
{ "Name": "lockstatus" }, 
{ "Name": "ownerid" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
