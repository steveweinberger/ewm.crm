/// <reference path="Xrm.js" />

var EntityLogicalName = "bulkoperation";
var Form_e365fd2c_e07d_46b3_9d97_6f9a831867d3_Properties = {
actualend: "actualend"
,actualstart: "actualstart"
,bulkoperationnumber: "bulkoperationnumber"
,errornumber: "errornumber"
,failurecount: "failurecount"
,operationtypecode: "operationtypecode"
,regardingobjectid: "regardingobjectid"
,statecode: "statecode"
,statuscode: "statuscode"
,subject: "subject"
,successcount: "successcount"
};

var Form_e365fd2c_e07d_46b3_9d97_6f9a831867d3_Controls = {
actualend: "actualend"
,actualstart: "actualstart"
,bulkoperationnumber: "bulkoperationnumber"
,errornumber: "errornumber"
,failurecount: "failurecount"
,footer_statecode: "footer_statecode"
,operationtypecode: "operationtypecode"
,regardingobjectid: "regardingobjectid"
,statuscode: "statuscode"
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
{ "Name": "actualend", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "actualend" }] }, 
{ "Name": "actualstart", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "actualstart" }] }, 
{ "Name": "bulkoperationnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 32, "Controls": [{ "Name": "bulkoperationnumber" }] }, 
{ "Name": "errornumber", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : -1000000000, "Precision" : 0, "Controls": [{ "Name": "errornumber" }] }, 
{ "Name": "failurecount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "failurecount" }] }, 
{ "Name": "operationtypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Create Opportunities", "value": 1 }, { "text" : "Create Activities", "value": 2 }, { "text" : "Send Direct Mail", "value": 3 }, { "text" : "Distribute", "value": 4 }, { "text" : "Execute", "value": 5 }, { "text" : "Quick Campaign", "value": 7 }], "SelectedOption" : { "option" : "Create Opportunities", "value": 1 }, "Text": "Create Opportunities", "Controls": [{ "Name": "operationtypecode" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Open", "value": 0 }, { "text" : "Closed", "value": 1 }, { "text" : "Canceled", "value": 2 }], "SelectedOption" : { "option" : "Open", "value": 0 }, "Text": "Open", "Controls": [{ "Name": "footer_statecode" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Pending", "value": 1 }, { "text" : "In Progress", "value": 2 }, { "text" : "Aborted", "value": 3 }, { "text" : "Completed", "value": 4 }, { "text" : "Canceled", "value": 5 }], "SelectedOption" : { "option" : "Pending", "value": 1 }, "Text": "Pending", "Controls": [{ "Name": "statuscode" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 200, "Controls": [{ "Name": "subject" }] }, 
{ "Name": "successcount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "successcount" }] }]
, "AttributesLength": 11, 
"Controls": [
{ "Name": "actualend", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual End", "Attribute": "actualend" }, 
{ "Name": "actualstart", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual Start", "Attribute": "actualstart" }, 
{ "Name": "bulkoperationnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Bulk Operation Number", "Attribute": "bulkoperationnumber" }, 
{ "Name": "errornumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Error Number", "Attribute": "errornumber" }, 
{ "Name": "failurecount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "No. of Failures", "Attribute": "failurecount" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "operationtypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Operation", "Attribute": "operationtypecode" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subject" }, 
{ "Name": "successcount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "No. of Successes", "Attribute": "successcount" }], 
"ControlsLength": 11, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "general", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "bulkoperationnumber" }, 
{ "Name": "actualstart" }, 
{ "Name": "regardingobjectid" }, 
{ "Name": "actualend" }, 
{ "Name": "operationtypecode" }, 
{ "Name": "successcount" }, 
{ "Name": "failurecount" }, 
{ "Name": "statuscode" }, 
{ "Name": "errornumber" }]}]}]
};

var Xrm = new _xrm(pageData);
