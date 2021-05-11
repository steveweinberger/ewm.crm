/// <reference path="Xrm.js" />

var EntityLogicalName = "plugintracelog";
var Form_95705278_fa02_49d0_8e02_9ad7791a096f_Properties = {
configuration: "configuration"
,correlationid: "correlationid"
,depth: "depth"
,exceptiondetails: "exceptiondetails"
,issystemcreated: "issystemcreated"
,messageblock: "messageblock"
,messagename: "messagename"
,mode: "mode"
,operationtype: "operationtype"
,performanceexecutionduration: "performanceexecutionduration"
,performanceexecutionstarttime: "performanceexecutionstarttime"
,persistencekey: "persistencekey"
,pluginstepid: "pluginstepid"
,primaryentity: "primaryentity"
,requestid: "requestid"
,secureconfiguration: "secureconfiguration"
,typename: "typename"
};

var Form_95705278_fa02_49d0_8e02_9ad7791a096f_Controls = {
configuration: "configuration"
,correlationid: "correlationid"
,depth: "depth"
,exceptiondetails: "exceptiondetails"
,header_messagename: "header_messagename"
,header_operationtype: "header_operationtype"
,header_primaryentity: "header_primaryentity"
,issystemcreated: "issystemcreated"
,messageblock: "messageblock"
,messagename: "messagename"
,mode: "mode"
,operationtype: "operationtype"
,performanceexecutionduration: "performanceexecutionduration"
,performanceexecutionstarttime: "performanceexecutionstarttime"
,persistencekey: "persistencekey"
,pluginstepid: "pluginstepid"
,primaryentity: "primaryentity"
,requestid: "requestid"
,secureconfiguration: "secureconfiguration"
,typename: "typename"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4619", "etc": "4619", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "plugintracelog",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "configuration", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1073741823, "Controls": [{ "Name": "configuration" }] }, 
{ "Name": "correlationid", "Value": null, "Type" : "", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "correlationid" }] }, 
{ "Name": "depth", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "depth" }] }, 
{ "Name": "exceptiondetails", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1073741823, "Controls": [{ "Name": "exceptiondetails" }] }, 
{ "Name": "issystemcreated", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : null, "Controls": [{ "Name": "issystemcreated" }] }, 
{ "Name": "messageblock", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1073741823, "Controls": [{ "Name": "messageblock" }] }, 
{ "Name": "messagename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1024, "Controls": [{ "Name": "header_messagename" }, { "Name": "messagename" }] }, 
{ "Name": "mode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Synchronous", "value": 0 }, { "text" : "Asynchronous", "value": 1 }], "SelectedOption" : { "option" : "Synchronous", "value": 0 }, "Text": "Synchronous", "Controls": [{ "Name": "mode" }] }, 
{ "Name": "operationtype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Unknown", "value": 0 }, { "text" : "Plug-in", "value": 1 }, { "text" : "Workflow Activity", "value": 2 }], "SelectedOption" : { "option" : "Unknown", "value": 0 }, "Text": "Unknown", "Controls": [{ "Name": "header_operationtype" }, { "Name": "operationtype" }] }, 
{ "Name": "performanceexecutionduration", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "performanceexecutionduration" }] }, 
{ "Name": "performanceexecutionstarttime", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "performanceexecutionstarttime" }] }, 
{ "Name": "persistencekey", "Value": null, "Type" : "", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "persistencekey" }] }, 
{ "Name": "pluginstepid", "Value": null, "Type" : "", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "pluginstepid" }] }, 
{ "Name": "primaryentity", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1000, "Controls": [{ "Name": "header_primaryentity" }, { "Name": "primaryentity" }] }, 
{ "Name": "requestid", "Value": null, "Type" : "", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "requestid" }] }, 
{ "Name": "secureconfiguration", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1073741823, "Controls": [{ "Name": "secureconfiguration" }] }, 
{ "Name": "typename", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1024, "Controls": [{ "Name": "typename" }] }]
, "AttributesLength": 17, 
"Controls": [
{ "Name": "configuration", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Configuration", "Attribute": "configuration" }, 
{ "Name": "correlationid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Correlation Id", "Attribute": "correlationid" }, 
{ "Name": "depth", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Depth", "Attribute": "depth" }, 
{ "Name": "exceptiondetails", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Exception Details", "Attribute": "exceptiondetails" }, 
{ "Name": "header_messagename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Message Name", "Attribute": "messagename" }, 
{ "Name": "header_operationtype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Operation Type", "Attribute": "operationtype" }, 
{ "Name": "header_primaryentity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Primary Entity", "Attribute": "primaryentity" }, 
{ "Name": "issystemcreated", "Type": "standard", "Disabled": false, "Visible": true, "Label": "System Created", "Attribute": "issystemcreated" }, 
{ "Name": "messageblock", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Message Block", "Attribute": "messageblock" }, 
{ "Name": "messagename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Message Name", "Attribute": "messagename" }, 
{ "Name": "mode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Mode", "Attribute": "mode" }, 
{ "Name": "operationtype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Operation Type", "Attribute": "operationtype" }, 
{ "Name": "performanceexecutionduration", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Execution Duration (ms)", "Attribute": "performanceexecutionduration" }, 
{ "Name": "performanceexecutionstarttime", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Execution Start Time", "Attribute": "performanceexecutionstarttime" }, 
{ "Name": "persistencekey", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Persistence Key", "Attribute": "persistencekey" }, 
{ "Name": "pluginstepid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Plugin Step Id", "Attribute": "pluginstepid" }, 
{ "Name": "primaryentity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Primary Entity", "Attribute": "primaryentity" }, 
{ "Name": "requestid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Request Id", "Attribute": "requestid" }, 
{ "Name": "secureconfiguration", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Secure Configuration", "Attribute": "secureconfiguration" }, 
{ "Name": "typename", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Type Name", "Attribute": "typename" }], 
"ControlsLength": 20, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Configuration", "Name": "Configuration", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "Configuration_General", "Visible": true, "Controls": [
{ "Name": "issystemcreated" }, 
{ "Name": "typename" }, 
{ "Name": "messagename" }, 
{ "Name": "primaryentity" }, 
{ "Name": "configuration" }, 
{ "Name": "secureconfiguration" }, 
{ "Name": "persistencekey" }, 
{ "Name": "operationtype" }, 
{ "Name": "pluginstepid" }]}, 
{ "Label": "Context", "Name": "Configuration_Context", "Visible": true, "Controls": [
{ "Name": "depth" }, 
{ "Name": "mode" }, 
{ "Name": "correlationid" }, 
{ "Name": "requestid" }]}]}, 
{ "Label": "Execution", "Name": "Execution", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Performance", "Name": "Execution_Performance", "Visible": true, "Controls": [
{ "Name": "performanceexecutionstarttime" }, 
{ "Name": "performanceexecutionduration" }, 
{ "Name": "messageblock" }, 
{ "Name": "exceptiondetails" }]}]}]
};

var Xrm = new _xrm(pageData);
