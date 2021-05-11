/// <reference path="Xrm.js" />

var EntityLogicalName = "queue";
var Form_6ed25386_e3ec_4e2b_bc5e_6a2a7803c8f3_Properties = {
defaultmailbox: "defaultmailbox"
,description: "description"
,emailaddress: "emailaddress"
,incomingemailfilteringmethod: "incomingemailfilteringmethod"
,name: "name"
,ownerid: "ownerid"
,queueviewtype: "queueviewtype"
};

var Form_6ed25386_e3ec_4e2b_bc5e_6a2a7803c8f3_Controls = {
defaultmailbox: "defaultmailbox"
,description: "description"
,emailaddress: "emailaddress"
,incomingemailfilteringmethod: "incomingemailfilteringmethod"
,name: "name"
,ownerid: "ownerid"
,QueueItemsGrid: "QueueItemsGrid"
,queuemembersgrid: "queuemembersgrid"
,queueviewtype: "queueviewtype"
,RecordCreationAndUpdateRuleGrid: "RecordCreationAndUpdateRuleGrid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "2020", "etc": "2020", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "queue",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "defaultmailbox", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "defaultmailbox" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "emailaddress", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "emailaddress" }] }, 
{ "Name": "incomingemailfilteringmethod", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "All email messages", "value": 0 }, { "text" : "Email messages in response to CRM email", "value": 1 }, { "text" : "Email messages from CRM Leads, Contacts and Accounts", "value": 2 }, { "text" : "Email messages from CRM records that are email enabled", "value": 3 }], "SelectedOption" : { "option" : "All email messages", "value": 0 }, "Text": "All email messages", "Controls": [{ "Name": "incomingemailfilteringmethod" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "queueviewtype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Public", "value": 0 }, { "text" : "Private", "value": 1 }], "SelectedOption" : { "option" : "Public", "value": 0 }, "Text": "Public", "Controls": [{ "Name": "queueviewtype" }] }]
, "AttributesLength": 7, 
"Controls": [
{ "Name": "defaultmailbox", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Mailbox", "Attribute": "defaultmailbox" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "emailaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Incoming Email", "Attribute": "emailaddress" }, 
{ "Name": "incomingemailfilteringmethod", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Convert Incoming Email To Activities", "Attribute": "incomingemailfilteringmethod" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "queueviewtype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Type", "Attribute": "queueviewtype" }], 
"ControlsLength": 7, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "SUMMARY", "Name": "queue information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "queueviewtype" }, 
{ "Name": "emailaddress" }, 
{ "Name": "ownerid" }, 
{ "Name": "description" }]}, 
{ "Label": "EMAIL SETTINGS", "Name": "incoming email", "Visible": true, "Controls": [
{ "Name": "incomingemailfilteringmethod" }, 
{ "Name": "defaultmailbox" }]}, 
{ "Label": "", "Name": "RecordCreationAndUpdateRule", "Visible": true, "Controls": [
{ "Name": "RecordCreationAndUpdateRuleGrid" }]}, 
{ "Label": "", "Name": "QueueItems", "Visible": true, "Controls": [
{ "Name": "QueueItemsGrid" }]}, 
{ "Label": "", "Name": "QueueMembers", "Visible": true, "Controls": [
{ "Name": "queuemembersgrid" }]}, 
{ "Label": "Members", "Name": "QueueMembersNoRecord", "Visible": true, "Controls": [
]}]}]
};

var Xrm = new _xrm(pageData);
