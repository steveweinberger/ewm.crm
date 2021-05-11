/// <reference path="Xrm.js" />

var EntityLogicalName = "campaignresponse";
var Form_c7a6dff6_b081_4b6a_b092_b33085cabc1d_Properties = {
channeltypecode: "channeltypecode"
,companyname: "companyname"
,customer: "customer"
,description: "description"
,emailaddress: "emailaddress"
,fax: "fax"
,firstname: "firstname"
,lastname: "lastname"
,originatingactivityid: "originatingactivityid"
,ownerid: "ownerid"
,partner: "partner"
,prioritycode: "prioritycode"
,promotioncodename: "promotioncodename"
,receivedon: "receivedon"
,regardingobjectid: "regardingobjectid"
,responsecode: "responsecode"
,scheduledend: "scheduledend"
,subject: "subject"
,telephone: "telephone"
};

var Form_c7a6dff6_b081_4b6a_b092_b33085cabc1d_Controls = {
channeltypecode: "channeltypecode"
,companyname: "companyname"
,customer: "customer"
,description: "description"
,emailaddress: "emailaddress"
,fax: "fax"
,firstname: "firstname"
,lastname: "lastname"
,notescontrol: "notescontrol"
,originatingactivityid: "originatingactivityid"
,ownerid: "ownerid"
,partner: "partner"
,prioritycode: "prioritycode"
,promotioncodename: "promotioncodename"
,receivedon: "receivedon"
,regardingobjectid: "regardingobjectid"
,responsecode: "responsecode"
,scheduledend: "scheduledend"
,subject: "subject"
,telephone: "telephone"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4401", "etc": "4401", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "campaignresponse",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "channeltypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Email", "value": 1 }, { "text" : "Phone", "value": 2 }, { "text" : "Fax", "value": 3 }, { "text" : "Letter", "value": 4 }, { "text" : "Appointment", "value": 5 }, { "text" : "Others", "value": 6 }], "SelectedOption" : { "option" : "Email", "value": 1 }, "Text": "Email", "Controls": [{ "Name": "channeltypecode" }] }, 
{ "Name": "companyname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "companyname" }] }, 
{ "Name": "customer", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customer" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "emailaddress", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "emailaddress" }] }, 
{ "Name": "fax", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "fax" }] }, 
{ "Name": "firstname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "firstname" }] }, 
{ "Name": "lastname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "lastname" }] }, 
{ "Name": "originatingactivityid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "originatingactivityid" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "partner", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "partner" }] }, 
{ "Name": "prioritycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Low", "value": 0 }, { "text" : "Normal", "value": 1 }, { "text" : "High", "value": 2 }], "SelectedOption" : { "option" : "Low", "value": 0 }, "Text": "Low", "Controls": [{ "Name": "prioritycode" }] }, 
{ "Name": "promotioncodename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "promotioncodename" }] }, 
{ "Name": "receivedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "receivedon" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "responsecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Interested", "value": 1 }, { "text" : "Not Interested", "value": 2 }, { "text" : "Do Not Send Marketing Materials", "value": 3 }, { "text" : "Error", "value": 4 }], "SelectedOption" : { "option" : "Interested", "value": 1 }, "Text": "Interested", "Controls": [{ "Name": "responsecode" }] }, 
{ "Name": "scheduledend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "scheduledend" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }, 
{ "Name": "telephone", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "telephone" }] }]
, "AttributesLength": 19, 
"Controls": [
{ "Name": "channeltypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Channel", "Attribute": "channeltypecode" }, 
{ "Name": "companyname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Company Name", "Attribute": "companyname" }, 
{ "Name": "customer", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customer" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "emailaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Email", "Attribute": "emailaddress" }, 
{ "Name": "fax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fax", "Attribute": "fax" }, 
{ "Name": "firstname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "First Name", "Attribute": "firstname" }, 
{ "Name": "lastname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Name", "Attribute": "lastname" }, 
{ "Name": "originatingactivityid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Originating Activity", "Attribute": "originatingactivityid" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "partner", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Outsource Vendor", "Attribute": "partner" }, 
{ "Name": "prioritycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Priority", "Attribute": "prioritycode" }, 
{ "Name": "promotioncodename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Promotion Code", "Attribute": "promotioncodename" }, 
{ "Name": "receivedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Received On", "Attribute": "receivedon" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Parent Campaign", "Attribute": "regardingobjectid" }, 
{ "Name": "responsecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Response Code", "Attribute": "responsecode" }, 
{ "Name": "scheduledend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Close By", "Attribute": "scheduledend" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }, 
{ "Name": "telephone", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Phone", "Attribute": "telephone" }], 
"ControlsLength": 19, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Campaign Response", "Name": "campaign response", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "general", "Visible": true, "Controls": [
{ "Name": "regardingobjectid" }, 
{ "Name": "responsecode" }, 
{ "Name": "promotioncodename" }, 
{ "Name": "subject" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "Administration", "Name": "administration", "Visible": true, "Controls": [
{ "Name": "ownerid" }, 
{ "Name": "prioritycode" }]}, 
{ "Label": "Received From Existing Customer", "Name": "received from existing customer", "Visible": true, "Controls": [
{ "Name": "customer" }]}, 
{ "Label": "Received From New Customer", "Name": "received from new customer", "Visible": true, "Controls": [
{ "Name": "companyname" }, 
{ "Name": "telephone" }, 
{ "Name": "lastname" }, 
{ "Name": "emailaddress" }, 
{ "Name": "firstname" }, 
{ "Name": "fax" }]}, 
{ "Label": "Details", "Name": "details", "Visible": true, "Controls": [
{ "Name": "channeltypecode" }, 
{ "Name": "partner" }, 
{ "Name": "receivedon" }, 
{ "Name": "scheduledend" }, 
{ "Name": "originatingactivityid" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
