/// <reference path="Xrm.js" />

var EntityLogicalName = "queue";
var Form_a96ce25b_0ba6_4862_a0df_537b9c4e0006_Properties = {
defaultmailbox: "defaultmailbox"
,description: "description"
,emailaddress: "emailaddress"
,incomingemailfilteringmethod: "incomingemailfilteringmethod"
,name: "name"
,ownerid: "ownerid"
};

var Form_a96ce25b_0ba6_4862_a0df_537b9c4e0006_Controls = {
defaultmailbox: "defaultmailbox"
,description: "description"
,emailaddress: "emailaddress"
,incomingemailfilteringmethod: "incomingemailfilteringmethod"
,name: "name"
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
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "defaultmailbox", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Mailbox", "Attribute": "defaultmailbox" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "emailaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Incoming Email", "Attribute": "emailaddress" }, 
{ "Name": "incomingemailfilteringmethod", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Convert to email activities:", "Attribute": "incomingemailfilteringmethod" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Queue Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Queue Information", "Name": "queue information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "emailaddress" }, 
{ "Name": "ownerid" }, 
{ "Name": "description" }]}, 
{ "Label": "Incoming Email", "Name": "incoming email", "Visible": true, "Controls": [
{ "Name": "incomingemailfilteringmethod" }]}, 
{ "Label": "Email Configuration", "Name": "email configuration", "Visible": true, "Controls": [
{ "Name": "defaultmailbox" }]}]}]
};

var Xrm = new _xrm(pageData);
