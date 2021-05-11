/// <reference path="Xrm.js" />

var EntityLogicalName = "list";
var Form_6e77626b_e693_44f0_a1c7_359b1a7a9a4c_Properties = {
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

var Form_6e77626b_e693_44f0_a1c7_359b1a7a9a4c_Controls = {
accounts: "accounts"
,Campaigns: "Campaigns"
,contacts: "contacts"
,cost: "cost"
,createdfromcode: "createdfromcode"
,description: "description"
,header_lastusedon: "header_lastusedon"
,header_lockstatus: "header_lockstatus"
,header_ownerid: "header_ownerid"
,lastusedon: "lastusedon"
,leads: "leads"
,listname: "listname"
,lockstatus: "lockstatus"
,modifiedon: "modifiedon"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,purpose: "purpose"
,QuickCampaigns: "QuickCampaigns"
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
{ "Name": "lastusedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "header_lastusedon" }, { "Name": "lastusedon" }] }, 
{ "Name": "listname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 128, "Controls": [{ "Name": "listname" }] }, 
{ "Name": "lockstatus", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "header_lockstatus" }, { "Name": "lockstatus" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }, { "Name": "ownerid" }] }, 
{ "Name": "purpose", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 512, "Controls": [{ "Name": "purpose" }] }, 
{ "Name": "source", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 128, "Controls": [{ "Name": "source" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "type", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "type" }] }]
, "AttributesLength": 12, 
"Controls": [
, 
{ "Name": "cost", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Cost", "Attribute": "cost" }, 
{ "Name": "createdfromcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Targeted At", "Attribute": "createdfromcode" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "header_lastusedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Used on (Date)", "Attribute": "lastusedon" }, 
{ "Name": "header_lockstatus", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Locked", "Attribute": "lockstatus" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "lastusedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Used On", "Attribute": "lastusedon" }, 
{ "Name": "listname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "listname" }, 
{ "Name": "lockstatus", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Locked", "Attribute": "lockstatus" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "purpose", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Purpose", "Attribute": "purpose" }, 
{ "Name": "source", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Source", "Attribute": "source" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "type", "Type": "standard", "Disabled": false, "Visible": true, "Label": "List Type", "Attribute": "type" }], 
"ControlsLength": 15, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Summary", "Name": "Summary", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Information", "Name": "information", "Visible": true, "Controls": [
{ "Name": "listname" }, 
{ "Name": "type" }, 
{ "Name": "purpose" }, 
{ "Name": "createdfromcode" }, 
{ "Name": "source" }, 
{ "Name": "transactioncurrencyid" }, 
{ "Name": "modifiedon" }, 
{ "Name": "cost" }, 
{ "Name": "lastusedon" }, 
{ "Name": "lockstatus" }, 
{ "Name": "ownerid" }, 
{ "Name": "description" }]}, 
{ "Label": "Members", "Name": "members", "Visible": true, "Controls": [
{ "Name": "contacts" }, 
{ "Name": "accounts" }, 
{ "Name": "leads" }]}, 
{ "Label": "Campaigns", "Name": "campaigns", "Visible": true, "Controls": [
{ "Name": "Campaigns" }]}, 
{ "Label": "Quick Campaigns", "Name": "quickcampaigns", "Visible": true, "Controls": [
{ "Name": "QuickCampaigns" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
