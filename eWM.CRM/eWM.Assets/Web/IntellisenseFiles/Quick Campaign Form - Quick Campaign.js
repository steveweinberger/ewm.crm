/// <reference path="Xrm.js" />

var EntityLogicalName = "bulkoperation";
var Form_1736184c_35af_476b_a86a_37ba05fee9a1_Properties = {
createdon: "createdon"
,createdrecordtypecode: "createdrecordtypecode"
,description: "description"
,failurecount: "failurecount"
,ownerid: "ownerid"
,statuscode: "statuscode"
,subject: "subject"
,successcount: "successcount"
,targetedrecordtypecode: "targetedrecordtypecode"
};

var Form_1736184c_35af_476b_a86a_37ba05fee9a1_Controls = {
accounts: "accounts"
,contacts: "contacts"
,description: "description"
,excluded: "excluded"
,failurecount: "failurecount"
,header_createdon: "header_createdon"
,header_createdrecordtypecode: "header_createdrecordtypecode"
,header_statuscode: "header_statuscode"
,header_targetedrecordtypecode: "header_targetedrecordtypecode"
,leads: "leads"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,Responses: "Responses"
,subject: "subject"
,successcount: "successcount"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4406", "etc": "4406", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "bulkoperation",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "header_createdon" }] }, 
{ "Name": "createdrecordtypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Phone Call", "value": 1 }, { "text" : "Fax", "value": 2 }, { "text" : "Letter", "value": 3 }, { "text" : "Email", "value": 4 }, { "text" : "Appointment", "value": 5 }, { "text" : "Send Direct Email", "value": 6 }], "SelectedOption" : { "option" : "Phone Call", "value": 1 }, "Text": "Phone Call", "Controls": [{ "Name": "header_createdrecordtypecode" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "failurecount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "failurecount" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Pending", "value": 1 }, { "text" : "In Progress", "value": 2 }, { "text" : "Aborted", "value": 3 }, { "text" : "Completed", "value": 4 }, { "text" : "Canceled", "value": 5 }], "SelectedOption" : { "option" : "Pending", "value": 1 }, "Text": "Pending", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }, 
{ "Name": "successcount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "successcount" }] }, 
{ "Name": "targetedrecordtypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Account", "value": 1 }, { "text" : "Contact", "value": 2 }, { "text" : "Lead", "value": 4 }], "SelectedOption" : { "option" : "Account", "value": 1 }, "Text": "Account", "Controls": [{ "Name": "header_targetedrecordtypecode" }] }]
, "AttributesLength": 9, 
"Controls": [
, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Error Details", "Attribute": "description" }, 
{ "Name": "failurecount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "No. of Failures", "Attribute": "failurecount" }, 
{ "Name": "header_createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "header_createdrecordtypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Activity Type", "Attribute": "createdrecordtypecode" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "header_targetedrecordtypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Members Type", "Attribute": "targetedrecordtypecode" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }, 
{ "Name": "successcount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "No. of Successes", "Attribute": "successcount" }], 
"ControlsLength": 9, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Summary", "Name": "Summary", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "INFORMATION", "Name": "Information", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "ownerid" }, 
{ "Name": "successcount" }, 
{ "Name": "failurecount" }, 
{ "Name": "description" }]}, 
{ "Label": "RELATED PANE", "Name": "RELATED PANE", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "SELECTED MEMBERS", "Name": "selectedMembers", "Visible": true, "Controls": [
{ "Name": "accounts" }, 
{ "Name": "contacts" }, 
{ "Name": "leads" }]}, 
{ "Label": "EXCLUDED MEMBERS", "Name": "excludedMembers", "Visible": true, "Controls": [
{ "Name": "excluded" }]}]}, 
{ "Label": "Responses", "Name": "Responses", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "RESPONSES", "Name": "Responses", "Visible": true, "Controls": [
{ "Name": "Responses" }]}]}]
};

var Xrm = new _xrm(pageData);
