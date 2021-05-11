/// <reference path="Xrm.js" />

var EntityLogicalName = "mailbox";
var Form_d08328e6_d988_44df_8d76_d4e83674f85c_Properties = {
actdeliverymethod: "actdeliverymethod"
,actstatus: "actstatus"
,allowemailconnectortousecredentials: "allowemailconnectortousecredentials"
,emailaddress: "emailaddress"
,emailserverprofile: "emailserverprofile"
,incomingemaildeliverymethod: "incomingemaildeliverymethod"
,incomingemailstatus: "incomingemailstatus"
,isforwardmailbox: "isforwardmailbox"
,name: "name"
,outgoingemaildeliverymethod: "outgoingemaildeliverymethod"
,outgoingemailstatus: "outgoingemailstatus"
,ownerid: "ownerid"
,password: "password"
,processanddeleteemails: "processanddeleteemails"
,regardingobjectid: "regardingobjectid"
,statecode: "statecode"
,testmailboxaccesscompletedon: "testmailboxaccesscompletedon"
,username: "username"
};

var Form_d08328e6_d988_44df_8d76_d4e83674f85c_Controls = {
actdeliverymethod: "actdeliverymethod"
,actstatus: "actstatus"
,allowemailconnectortousecredentials: "allowemailconnectortousecredentials"
,emailaddress: "emailaddress"
,emailserverprofile: "emailserverprofile"
,footer_statecode: "footer_statecode"
,incomingemaildeliverymethod: "incomingemaildeliverymethod"
,incomingemailstatus: "incomingemailstatus"
,isforwardmailbox: "isforwardmailbox"
,name: "name"
,notescontrol: "notescontrol"
,outgoingemaildeliverymethod: "outgoingemaildeliverymethod"
,outgoingemailstatus: "outgoingemailstatus"
,ownerid: "ownerid"
,password: "password"
,processanddeleteemails: "processanddeleteemails"
,regardingobjectid: "regardingobjectid"
,testmailboxaccesscompletedon: "testmailboxaccesscompletedon"
,username: "username"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9606", "etc": "9606", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "mailbox",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actdeliverymethod", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Microsoft Dynamics CRM for Outlook", "value": 0 }, { "text" : "Server-Side Synchronization", "value": 1 }, { "text" : "None", "value": 2 }], "SelectedOption" : { "option" : "Microsoft Dynamics CRM for Outlook", "value": 0 }, "Text": "Microsoft Dynamics CRM for Outlook", "Controls": [{ "Name": "actdeliverymethod" }] }, 
{ "Name": "actstatus", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Not Run", "value": 0 }, { "text" : "Success", "value": 1 }, { "text" : "Failure", "value": 2 }], "SelectedOption" : { "option" : "Not Run", "value": 0 }, "Text": "Not Run", "Controls": [{ "Name": "actstatus" }] }, 
{ "Name": "allowemailconnectortousecredentials", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "allowemailconnectortousecredentials" }] }, 
{ "Name": "emailaddress", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "emailaddress" }] }, 
{ "Name": "emailserverprofile", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "emailserverprofile" }] }, 
{ "Name": "incomingemaildeliverymethod", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "None", "value": 0 }, { "text" : "Microsoft Dynamics CRM for Outlook", "value": 1 }, { "text" : "Server-Side Synchronization or Email Router", "value": 2 }, { "text" : "Forward Mailbox", "value": 3 }], "SelectedOption" : { "option" : "None", "value": 0 }, "Text": "None", "Controls": [{ "Name": "incomingemaildeliverymethod" }] }, 
{ "Name": "incomingemailstatus", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Not Run", "value": 0 }, { "text" : "Success", "value": 1 }, { "text" : "Failure", "value": 2 }], "SelectedOption" : { "option" : "Not Run", "value": 0 }, "Text": "Not Run", "Controls": [{ "Name": "incomingemailstatus" }] }, 
{ "Name": "isforwardmailbox", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : null, "Controls": [{ "Name": "isforwardmailbox" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "name" }] }, 
{ "Name": "outgoingemaildeliverymethod", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "None", "value": 0 }, { "text" : "Microsoft Dynamics CRM for Outlook", "value": 1 }, { "text" : "Server-Side Synchronization or Email Router", "value": 2 }], "SelectedOption" : { "option" : "None", "value": 0 }, "Text": "None", "Controls": [{ "Name": "outgoingemaildeliverymethod" }] }, 
{ "Name": "outgoingemailstatus", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Not Run", "value": 0 }, { "text" : "Success", "value": 1 }, { "text" : "Failure", "value": 2 }], "SelectedOption" : { "option" : "Not Run", "value": 0 }, "Text": "Not Run", "Controls": [{ "Name": "outgoingemailstatus" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "password", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : false, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "password" }] }, 
{ "Name": "processanddeleteemails", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "processanddeleteemails" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }, 
{ "Name": "testmailboxaccesscompletedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "testmailboxaccesscompletedon" }] }, 
{ "Name": "username", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "username" }] }]
, "AttributesLength": 18, 
"Controls": [
{ "Name": "actdeliverymethod", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Appointments, Contacts, and Tasks", "Attribute": "actdeliverymethod" }, 
{ "Name": "actstatus", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Appointments, Contacts, and Tasks Status", "Attribute": "actstatus" }, 
{ "Name": "allowemailconnectortousecredentials", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Allow to Use Credentials for Email Processing", "Attribute": "allowemailconnectortousecredentials" }, 
{ "Name": "emailaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Email Address", "Attribute": "emailaddress" }, 
{ "Name": "emailserverprofile", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Server Profile", "Attribute": "emailserverprofile" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "incomingemaildeliverymethod", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Incoming Email", "Attribute": "incomingemaildeliverymethod" }, 
{ "Name": "incomingemailstatus", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Incoming Email Status", "Attribute": "incomingemailstatus" }, 
{ "Name": "isforwardmailbox", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Is Forward Mailbox", "Attribute": "isforwardmailbox" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "outgoingemaildeliverymethod", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Outgoing Email", "Attribute": "outgoingemaildeliverymethod" }, 
{ "Name": "outgoingemailstatus", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Outgoing Email Status", "Attribute": "outgoingemailstatus" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "password", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Password", "Attribute": "password" }, 
{ "Name": "processanddeleteemails", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Delete Emails after Processing", "Attribute": "processanddeleteemails" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "testmailboxaccesscompletedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Mailbox Test Completed On", "Attribute": "testmailboxaccesscompletedon" }, 
{ "Name": "username", "Type": "standard", "Disabled": false, "Visible": true, "Label": "User Name", "Attribute": "username" }], 
"ControlsLength": 18, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Mailbox Information", "Name": "{6540ea4f-4803-4411-80d0-54aec63a1698}", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "ownerid" }, 
{ "Name": "emailaddress" }, 
{ "Name": "isforwardmailbox" }, 
{ "Name": "regardingobjectid" }, 
{ "Name": "processanddeleteemails" }]}, 
{ "Label": "Credentials", "Name": "{c46aa141-19bf-4677-bd94-2bb61073779e}_section_3", "Visible": true, "Controls": [
{ "Name": "allowemailconnectortousecredentials" }, 
{ "Name": "username" }, 
{ "Name": "password" }]}, 
{ "Label": "Synchronization Method", "Name": "{c46aa141-19bf-4677-bd94-2bb61073779e}_section_4", "Visible": true, "Controls": [
{ "Name": "emailserverprofile" }, 
{ "Name": "incomingemaildeliverymethod" }, 
{ "Name": "outgoingemaildeliverymethod" }, 
{ "Name": "actdeliverymethod" }]}]}, 
{ "Label": "Configuration Test Results", "Name": "tab_4", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Configuration Test Results", "Name": "tab_4_section_1", "Visible": true, "Controls": [
{ "Name": "incomingemailstatus" }, 
{ "Name": "outgoingemailstatus" }, 
{ "Name": "actstatus" }, 
{ "Name": "testmailboxaccesscompletedon" }]}]}, 
{ "Label": "Notes", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "null", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
