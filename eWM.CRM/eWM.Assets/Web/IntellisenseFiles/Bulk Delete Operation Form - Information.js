/// <reference path="Xrm.js" />

var EntityLogicalName = "bulkdeleteoperation";
var Form_cf6efbf9_bff7_463c_a476_24496ac96b69_Properties = {
createdby: "createdby"
,createdon: "createdon"
,failurecount: "failurecount"
,isrecurring: "isrecurring"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,nextrun: "nextrun"
,statuscode: "statuscode"
,successcount: "successcount"
};

var Form_cf6efbf9_bff7_463c_a476_24496ac96b69_Controls = {
advfindcontrol: "advfindcontrol"
,createdby: "createdby"
,createdon: "createdon"
,failurecount: "failurecount"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,name: "name"
,nextrun: "nextrun"
,ownerid: "ownerid"
,querylist: "querylist"
,rdNotify: "rdNotify"
,recipients: "recipients"
,recurring: "recurring"
,statuscode: "statuscode"
,successcount: "successcount"
,totalcount: "totalcount"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4424", "etc": "4424", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "bulkdeleteoperation",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdby" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "failurecount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "failurecount" }] }, 
{ "Name": "isrecurring", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : null, "Controls": [{ "Name": "recurring" }] }, 
{ "Name": "modifiedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedby" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 256, "Controls": [{ "Name": "name" }] }, 
{ "Name": "nextrun", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "nextrun" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Waiting For Resources", "value": 0 }, { "text" : "Waiting", "value": 10 }, { "text" : "Retrying", "value": 11 }, { "text" : "Paused", "value": 12 }, { "text" : "In Progress", "value": 20 }, { "text" : "Pausing", "value": 21 }, { "text" : "Canceling", "value": 22 }, { "text" : "Succeeded", "value": 30 }, { "text" : "Failed", "value": 31 }, { "text" : "Canceled", "value": 32 }], "SelectedOption" : { "option" : "Waiting For Resources", "value": 0 }, "Text": "Waiting For Resources", "Controls": [{ "Name": "statuscode" }] }, 
{ "Name": "successcount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "successcount" }] }]
, "AttributesLength": 10, 
"Controls": [
, 
{ "Name": "createdby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "failurecount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Failures", "Attribute": "failurecount" }, 
{ "Name": "modifiedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified By", "Attribute": "modifiedby" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "nextrun", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Next Run", "Attribute": "nextrun" }, 
{ "Name": "recurring", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Recurrence", "Attribute": "isrecurring" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "successcount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Successes", "Attribute": "successcount" }], 
"ControlsLength": 10, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "general", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "ownerid" }, 
{ "Name": "statuscode" }]}, 
{ "Label": "Options", "Name": "options", "Visible": true, "Controls": [
{ "Name": "rdNotify" }, 
{ "Name": "recurring" }, 
{ "Name": "recipients" }, 
{ "Name": "nextrun" }]}, 
{ "Label": "Results", "Name": "result", "Visible": true, "Controls": [
{ "Name": "successcount" }, 
{ "Name": "totalcount" }, 
{ "Name": "failurecount" }]}]}, 
{ "Label": "Properties", "Name": "properties", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Details", "Name": "details", "Visible": true, "Controls": [
{ "Name": "createdby" }, 
{ "Name": "createdon" }, 
{ "Name": "modifiedby" }, 
{ "Name": "modifiedon" }]}, 
{ "Label": "Query Details", "Name": "querydetails", "Visible": true, "Controls": [
{ "Name": "querylist" }, 
{ "Name": "advfindcontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
