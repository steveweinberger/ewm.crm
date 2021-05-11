/// <reference path="Xrm.js" />

var EntityLogicalName = "emailserverprofile";
var Form_d7735d4f_13c2_4f0e_a4ff_09e7510d84ed_Properties = {
description: "description"
,emailservertypename: "emailservertypename"
,incomingauthenticationprotocol: "incomingauthenticationprotocol"
,incomingcredentialretrieval: "incomingcredentialretrieval"
,incomingpassword: "incomingpassword"
,incomingportnumber: "incomingportnumber"
,incomingserverlocation: "incomingserverlocation"
,incominguseimpersonation: "incominguseimpersonation"
,incomingusername: "incomingusername"
,incomingusessl: "incomingusessl"
,maxconcurrentconnections: "maxconcurrentconnections"
,minpollingintervalinminutes: "minpollingintervalinminutes"
,moveundeliveredemails: "moveundeliveredemails"
,name: "name"
,outgoingauthenticationprotocol: "outgoingauthenticationprotocol"
,outgoingcredentialretrieval: "outgoingcredentialretrieval"
,outgoingpassword: "outgoingpassword"
,outgoingportnumber: "outgoingportnumber"
,outgoingserverlocation: "outgoingserverlocation"
,outgoinguseimpersonation: "outgoinguseimpersonation"
,outgoingusername: "outgoingusername"
,outgoingusessl: "outgoingusessl"
,ownerid: "ownerid"
,processemailsreceivedafter: "processemailsreceivedafter"
,sendemailalert: "sendemailalert"
,servertype: "servertype"
,statecode: "statecode"
,timeoutmailboxconnection: "timeoutmailboxconnection"
,timeoutmailboxconnectionafteramount: "timeoutmailboxconnectionafteramount"
,useautodiscover: "useautodiscover"
,usesamesettingsforoutgoingconnections: "usesamesettingsforoutgoingconnections"
};

var Form_d7735d4f_13c2_4f0e_a4ff_09e7510d84ed_Controls = {
description: "description"
,emailservertypename: "emailservertypename"
,footer_statecode: "footer_statecode"
,incomingauthenticationprotocol: "incomingauthenticationprotocol"
,incomingcredentialretrieval: "incomingcredentialretrieval"
,incomingpassword: "incomingpassword"
,incomingportnumber: "incomingportnumber"
,incomingserverlocation: "incomingserverlocation"
,incominguseimpersonation: "incominguseimpersonation"
,incomingusername: "incomingusername"
,incomingusessl: "incomingusessl"
,maxconcurrentconnections: "maxconcurrentconnections"
,minpollingintervalinminutes: "minpollingintervalinminutes"
,moveundeliveredemails: "moveundeliveredemails"
,name: "name"
,notescontrol: "notescontrol"
,outgoingauthenticationprotocol: "outgoingauthenticationprotocol"
,outgoingcredentialretrieval: "outgoingcredentialretrieval"
,outgoingpassword: "outgoingpassword"
,outgoingportnumber: "outgoingportnumber"
,outgoingserverlocation: "outgoingserverlocation"
,outgoinguseimpersonation: "outgoinguseimpersonation"
,outgoingusername: "outgoingusername"
,outgoingusessl: "outgoingusessl"
,ownerid: "ownerid"
,processemailsreceivedafter: "processemailsreceivedafter"
,sendemailalert: "sendemailalert"
,servertype: "servertype"
,timeoutmailboxconnection: "timeoutmailboxconnection"
,timeoutmailboxconnectionafteramount: "timeoutmailboxconnectionafteramount"
,useautodiscover: "useautodiscover"
,usesamesettingsforoutgoingconnections: "usesamesettingsforoutgoingconnections"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9605", "etc": "9605", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "emailserverprofile",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "emailservertypename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 250, "Controls": [{ "Name": "emailservertypename" }] }, 
{ "Name": "incomingauthenticationprotocol", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Auto Detect", "value": 0 }, { "text" : "Negotiate", "value": 1 }, { "text" : "NTLM", "value": 2 }, { "text" : "Basic", "value": 3 }], "SelectedOption" : { "option" : "Auto Detect", "value": 0 }, "Text": "Auto Detect", "Controls": [{ "Name": "incomingauthenticationprotocol" }] }, 
{ "Name": "incomingcredentialretrieval", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Credentials Specified by a User or Queue", "value": 0 }, { "text" : "Credentials Specified in Email Server Profile", "value": 1 }, { "text" : "Server to Server Authentication", "value": 2 }, { "text" : "Windows Integrated Authentication", "value": 3 }, { "text" : "Without Credentials (Anonymous)", "value": 4 }], "SelectedOption" : { "option" : "Credentials Specified by a User or Queue", "value": 0 }, "Text": "Credentials Specified by a User or Queue", "Controls": [{ "Name": "incomingcredentialretrieval" }] }, 
{ "Name": "incomingpassword", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : false, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "incomingpassword" }] }, 
{ "Name": "incomingportnumber", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 65536, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "incomingportnumber" }] }, 
{ "Name": "incomingserverlocation", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2084, "Controls": [{ "Name": "incomingserverlocation" }] }, 
{ "Name": "incominguseimpersonation", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "incominguseimpersonation" }] }, 
{ "Name": "incomingusername", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "incomingusername" }] }, 
{ "Name": "incomingusessl", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "incomingusessl" }] }, 
{ "Name": "maxconcurrentconnections", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 65536, "Min" : 1, "Precision" : 0, "Controls": [{ "Name": "maxconcurrentconnections" }] }, 
{ "Name": "minpollingintervalinminutes", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1440, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "minpollingintervalinminutes" }] }, 
{ "Name": "moveundeliveredemails", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "moveundeliveredemails" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "outgoingauthenticationprotocol", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Auto Detect", "value": 0 }, { "text" : "Negotiate", "value": 1 }, { "text" : "NTLM", "value": 2 }, { "text" : "Basic", "value": 3 }], "SelectedOption" : { "option" : "Auto Detect", "value": 0 }, "Text": "Auto Detect", "Controls": [{ "Name": "outgoingauthenticationprotocol" }] }, 
{ "Name": "outgoingcredentialretrieval", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Credentials Specified by a User or Queue", "value": 0 }, { "text" : "Credentials Specified in Email Server Profile", "value": 1 }, { "text" : "Server to Server Authentication", "value": 2 }, { "text" : "Windows Integrated Authentication", "value": 3 }, { "text" : "Without Credentials (Anonymous)", "value": 4 }], "SelectedOption" : { "option" : "Credentials Specified by a User or Queue", "value": 0 }, "Text": "Credentials Specified by a User or Queue", "Controls": [{ "Name": "outgoingcredentialretrieval" }] }, 
{ "Name": "outgoingpassword", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : false, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "outgoingpassword" }] }, 
{ "Name": "outgoingportnumber", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 65536, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "outgoingportnumber" }] }, 
{ "Name": "outgoingserverlocation", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2084, "Controls": [{ "Name": "outgoingserverlocation" }] }, 
{ "Name": "outgoinguseimpersonation", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "outgoinguseimpersonation" }] }, 
{ "Name": "outgoingusername", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "outgoingusername" }] }, 
{ "Name": "outgoingusessl", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "outgoingusessl" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "processemailsreceivedafter", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "processemailsreceivedafter" }] }, 
{ "Name": "sendemailalert", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "sendemailalert" }] }, 
{ "Name": "servertype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Exchange Server", "value": 0 }, { "text" : "Other (POP3/SMTP)", "value": 1 }, { "text" : "Exchange Server (Hybrid)", "value": 2 }], "SelectedOption" : { "option" : "Exchange Server", "value": 0 }, "Text": "Exchange Server", "Controls": [{ "Name": "servertype" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }, 
{ "Name": "timeoutmailboxconnection", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "timeoutmailboxconnection" }] }, 
{ "Name": "timeoutmailboxconnectionafteramount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "timeoutmailboxconnectionafteramount" }] }, 
{ "Name": "useautodiscover", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "useautodiscover" }] }, 
{ "Name": "usesamesettingsforoutgoingconnections", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "usesamesettingsforoutgoingconnections" }] }]
, "AttributesLength": 31, 
"Controls": [
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "emailservertypename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Server Type", "Attribute": "emailservertypename" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "incomingauthenticationprotocol", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Incoming Authentication Protocol", "Attribute": "incomingauthenticationprotocol" }, 
{ "Name": "incomingcredentialretrieval", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Authenticate Using", "Attribute": "incomingcredentialretrieval" }, 
{ "Name": "incomingpassword", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Password", "Attribute": "incomingpassword" }, 
{ "Name": "incomingportnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Incoming Port", "Attribute": "incomingportnumber" }, 
{ "Name": "incomingserverlocation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Incoming Server Location", "Attribute": "incomingserverlocation" }, 
{ "Name": "incominguseimpersonation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Use Impersonation", "Attribute": "incominguseimpersonation" }, 
{ "Name": "incomingusername", "Type": "standard", "Disabled": false, "Visible": true, "Label": "User Name", "Attribute": "incomingusername" }, 
{ "Name": "incomingusessl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Use SSL for Incoming Connection", "Attribute": "incomingusessl" }, 
{ "Name": "maxconcurrentconnections", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Maximum Concurrent Connections", "Attribute": "maxconcurrentconnections" }, 
{ "Name": "minpollingintervalinminutes", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Minimum Polling Interval in Minutes", "Attribute": "minpollingintervalinminutes" }, 
{ "Name": "moveundeliveredemails", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Move Failed Emails to Undeliverable Folder", "Attribute": "moveundeliveredemails" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "outgoingauthenticationprotocol", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Outgoing Authentication Protocol", "Attribute": "outgoingauthenticationprotocol" }, 
{ "Name": "outgoingcredentialretrieval", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Authenticate Using", "Attribute": "outgoingcredentialretrieval" }, 
{ "Name": "outgoingpassword", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Password", "Attribute": "outgoingpassword" }, 
{ "Name": "outgoingportnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Outgoing Port", "Attribute": "outgoingportnumber" }, 
{ "Name": "outgoingserverlocation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Outgoing Server Location", "Attribute": "outgoingserverlocation" }, 
{ "Name": "outgoinguseimpersonation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Use Impersonation", "Attribute": "outgoinguseimpersonation" }, 
{ "Name": "outgoingusername", "Type": "standard", "Disabled": false, "Visible": true, "Label": "User Name", "Attribute": "outgoingusername" }, 
{ "Name": "outgoingusessl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Use SSL for Outgoing Connection", "Attribute": "outgoingusessl" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "processemailsreceivedafter", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Process Email From", "Attribute": "processemailsreceivedafter" }, 
{ "Name": "sendemailalert", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Send an alert email to the owner of the email server profile reporting on major events", "Attribute": "sendemailalert" }, 
{ "Name": "servertype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Server Type", "Attribute": "servertype" }, 
{ "Name": "timeoutmailboxconnection", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Timeout Mailbox Connection to Exchange", "Attribute": "timeoutmailboxconnection" }, 
{ "Name": "timeoutmailboxconnectionafteramount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Timeout a Single Mailbox Connection After this Amount of Seconds", "Attribute": "timeoutmailboxconnectionafteramount" }, 
{ "Name": "useautodiscover", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Auto Discover Server Location", "Attribute": "useautodiscover" }, 
{ "Name": "usesamesettingsforoutgoingconnections", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Use same settings for Outgoing", "Attribute": "usesamesettingsforoutgoingconnections" }], 
"ControlsLength": 31, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "{d9e38cc5-74ae-4239-856e-aa52f57fb626}", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "description" }, 
{ "Name": "servertype" }, 
{ "Name": "emailservertypename" }, 
{ "Name": "ownerid" }, 
{ "Name": "useautodiscover" }, 
{ "Name": "incomingserverlocation" }, 
{ "Name": "outgoingserverlocation" }]}]}, 
{ "Label": "Credentials", "Name": "tab_3", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Incoming Connection", "Name": "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_1", "Visible": true, "Controls": [
{ "Name": "incomingcredentialretrieval" }, 
{ "Name": "incomingusername" }, 
{ "Name": "incominguseimpersonation" }, 
{ "Name": "incomingpassword" }]}, 
{ "Label": "Replicate Settings for Outgoing", "Name": "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_2", "Visible": true, "Controls": [
{ "Name": "usesamesettingsforoutgoingconnections" }]}, 
{ "Label": "Outgoing Connection", "Name": "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_3", "Visible": true, "Controls": [
{ "Name": "outgoingcredentialretrieval" }, 
{ "Name": "outgoingusername" }, 
{ "Name": "outgoinguseimpersonation" }, 
{ "Name": "outgoingpassword" }]}]}, 
{ "Label": "Advanced", "Name": "tab_3", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Incoming and Outgoing Connection", "Name": "tab_3_section_1", "Visible": true, "Controls": [
{ "Name": "incomingportnumber" }, 
{ "Name": "outgoingportnumber" }, 
{ "Name": "incomingusessl" }, 
{ "Name": "outgoingusessl" }, 
{ "Name": "incomingauthenticationprotocol" }, 
{ "Name": "outgoingauthenticationprotocol" }]}, 
{ "Label": "Additional Settings", "Name": "tab_3_section_2", "Visible": true, "Controls": [
{ "Name": "processemailsreceivedafter" }, 
{ "Name": "minpollingintervalinminutes" }, 
{ "Name": "maxconcurrentconnections" }, 
{ "Name": "moveundeliveredemails" }]}, 
{ "Label": "Email Notifications", "Name": "tab_3_section_3", "Visible": true, "Controls": [
{ "Name": "sendemailalert" }]}]}, 
{ "Label": "Error Handling", "Name": "tab_4", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "tab_4_section_1", "Visible": true, "Controls": [
{ "Name": "timeoutmailboxconnection" }, 
{ "Name": "timeoutmailboxconnectionafteramount" }]}]}, 
{ "Label": "Notes", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "null", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
