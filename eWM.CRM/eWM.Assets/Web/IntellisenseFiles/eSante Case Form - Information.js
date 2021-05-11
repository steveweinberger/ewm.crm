/// <reference path="Xrm.js" />

var EntityLogicalName = "incident";
var Form_f658c846_f74c_459b_b591_b97558958106_Properties = {
caseorigincode: "caseorigincode"
,casetypecode: "casetypecode"
,contractdetailid: "contractdetailid"
,contractid: "contractid"
,contractservicelevelcode: "contractservicelevelcode"
,customerid: "customerid"
,customersatisfactioncode: "customersatisfactioncode"
,followupby: "followupby"
,kbarticleid: "kbarticleid"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,productid: "productid"
,productserialnumber: "productserialnumber"
,statuscode: "statuscode"
,subjectid: "subjectid"
,title: "title"
};

var Form_f658c846_f74c_459b_b591_b97558958106_Controls = {
caseorigincode: "caseorigincode"
,casetypecode: "casetypecode"
,contractdetailid: "contractdetailid"
,contractid: "contractid"
,contractservicelevelcode: "contractservicelevelcode"
,customerid: "customerid"
,customersatisfactioncode: "customersatisfactioncode"
,followupby: "followupby"
,kbarticleid: "kbarticleid"
,kbviewer: "kbviewer"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,prioritycode: "prioritycode"
,productid: "productid"
,productserialnumber: "productserialnumber"
,statuscode: "statuscode"
,subjectid: "subjectid"
,title: "title"
,WebResource_RecordWall: "WebResource_RecordWall"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "112", "etc": "112", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "incident",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "caseorigincode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Phone", "value": 1 }, { "text" : "Email", "value": 2 }, { "text" : "Web", "value": 3 }, { "text" : "Facebook", "value": 2483 }, { "text" : "Twitter", "value": 3986 }], "SelectedOption" : { "option" : "Phone", "value": 1 }, "Text": "Phone", "Controls": [{ "Name": "caseorigincode" }] }, 
{ "Name": "casetypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Question", "value": 1 }, { "text" : "Problem", "value": 2 }, { "text" : "Request", "value": 3 }], "SelectedOption" : { "option" : "Question", "value": 1 }, "Text": "Question", "Controls": [{ "Name": "casetypecode" }] }, 
{ "Name": "contractdetailid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "contractdetailid" }] }, 
{ "Name": "contractid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "contractid" }] }, 
{ "Name": "contractservicelevelcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Gold", "value": 1 }, { "text" : "Silver", "value": 2 }, { "text" : "Bronze", "value": 3 }], "SelectedOption" : { "option" : "Gold", "value": 1 }, "Text": "Gold", "Controls": [{ "Name": "contractservicelevelcode" }] }, 
{ "Name": "customerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerid" }] }, 
{ "Name": "customersatisfactioncode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Very Satisfied", "value": 5 }, { "text" : "Satisfied", "value": 4 }, { "text" : "Neutral", "value": 3 }, { "text" : "Dissatisfied", "value": 2 }, { "text" : "Very Dissatisfied", "value": 1 }], "SelectedOption" : { "option" : "Very Satisfied", "value": 5 }, "Text": "Very Satisfied", "Controls": [{ "Name": "customersatisfactioncode" }] }, 
{ "Name": "followupby", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "followupby" }] }, 
{ "Name": "kbarticleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "kbarticleid" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "prioritycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "High", "value": 1 }, { "text" : "Normal", "value": 2 }, { "text" : "Low", "value": 3 }], "SelectedOption" : { "option" : "High", "value": 1 }, "Text": "High", "Controls": [{ "Name": "prioritycode" }] }, 
{ "Name": "productid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "productid" }] }, 
{ "Name": "productserialnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "productserialnumber" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Problem Solved", "value": 5 }, { "text" : "Information Provided", "value": 1000 }, { "text" : "Canceled", "value": 6 }, { "text" : "Merged", "value": 2000 }, { "text" : "In Progress", "value": 1 }, { "text" : "On Hold", "value": 2 }, { "text" : "Waiting for Details", "value": 3 }, { "text" : "Researching", "value": 4 }], "SelectedOption" : { "option" : "Problem Solved", "value": 5 }, "Text": "Problem Solved", "Controls": [{ "Name": "statuscode" }] }, 
{ "Name": "subjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "subjectid" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "title" }] }]
, "AttributesLength": 16, 
"Controls": [
{ "Name": "caseorigincode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Origin", "Attribute": "caseorigincode" }, 
{ "Name": "casetypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Case Type", "Attribute": "casetypecode" }, 
{ "Name": "contractdetailid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract Line", "Attribute": "contractdetailid" }, 
{ "Name": "contractid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract", "Attribute": "contractid" }, 
{ "Name": "contractservicelevelcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Service Level", "Attribute": "contractservicelevelcode" }, 
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customerid" }, 
{ "Name": "customersatisfactioncode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Satisfaction", "Attribute": "customersatisfactioncode" }, 
{ "Name": "followupby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Follow Up By", "Attribute": "followupby" }, 
{ "Name": "kbarticleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Knowledge Base Article", "Attribute": "kbarticleid" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "prioritycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Priority", "Attribute": "prioritycode" }, 
{ "Name": "productid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product", "Attribute": "productid" }, 
{ "Name": "productserialnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Serial Number", "Attribute": "productserialnumber" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "subjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subjectid" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Case Title", "Attribute": "title" }], 
"ControlsLength": 16, 
"Navigation": [
{"Id": "navActivities", "Key": "navActivities", "Label": "", "Visible": true }, 
{"Id": "navActivityHistory", "Key": "navActivityHistory", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "What's New", "Name": "tab_recordwall", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_recordwall_section_1", "Visible": true, "Controls": [
{ "Name": "WebResource_RecordWall" }]}]}, 
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Overview", "Name": "overview", "Visible": true, "Controls": [
{ "Name": "title" }, 
{ "Name": "customerid" }, 
{ "Name": "subjectid" }, 
{ "Name": "casetypecode" }, 
{ "Name": "caseorigincode" }, 
{ "Name": "customersatisfactioncode" }]}, 
{ "Label": "Assignment Information", "Name": "assignment information", "Visible": true, "Controls": [
{ "Name": "ownerid" }, 
{ "Name": "statuscode" }, 
{ "Name": "followupby" }, 
{ "Name": "prioritycode" }]}, 
{ "Label": "Contract and Product Information", "Name": "contract and product information", "Visible": true, "Controls": [
{ "Name": "contractid" }, 
{ "Name": "productid" }, 
{ "Name": "contractdetailid" }, 
{ "Name": "productserialnumber" }, 
{ "Name": "contractservicelevelcode" }]}]}, 
{ "Label": "Notes and Article", "Name": "notesandkb", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "KB ARTICLES", "Name": "kb article", "Visible": true, "Controls": [
{ "Name": "kbarticleid" }, 
{ "Name": "kbviewer" }]}]}]
};

var Xrm = new _xrm(pageData);
