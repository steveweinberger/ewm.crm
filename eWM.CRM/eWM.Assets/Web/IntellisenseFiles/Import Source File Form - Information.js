/// <reference path="Xrm.js" />

var EntityLogicalName = "importfile";
var Form_f3ad23ab_72f5_4221_81e3_0ab5f761c49c_Properties = {
completedon: "completedon"
,createdby: "createdby"
,createdon: "createdon"
,enableduplicatedetection: "enableduplicatedetection"
,failurecount: "failurecount"
,importmapid: "importmapid"
,name: "name"
,partialfailurecount: "partialfailurecount"
,recordsownerid: "recordsownerid"
,size: "size"
,source: "source"
,statuscode: "statuscode"
,successcount: "successcount"
,targetentityname: "targetentityname"
,totalcount: "totalcount"
};

var Form_f3ad23ab_72f5_4221_81e3_0ab5f761c49c_Controls = {
completedon: "completedon"
,createdby: "createdby"
,createdon: "createdon"
,enableduplicatedetection: "enableduplicatedetection"
,failurecount: "failurecount"
,footer_statuscode: "footer_statuscode"
,importmapid: "importmapid"
,name: "name"
,partialfailurecount: "partialfailurecount"
,recordsownerid: "recordsownerid"
,size: "size"
,source: "source"
,statuscode: "statuscode"
,successcount: "successcount"
,targetentityname: "targetentityname"
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
"QueryStringParameters": { "_gridType": "4412", "etc": "4412", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "importfile",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "completedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "completedon" }] }, 
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdby" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "enableduplicatedetection", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "enableduplicatedetection" }] }, 
{ "Name": "failurecount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "failurecount" }] }, 
{ "Name": "importmapid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "importmapid" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "name" }] }, 
{ "Name": "partialfailurecount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "partialfailurecount" }] }, 
{ "Name": "recordsownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "recordsownerid" }] }, 
{ "Name": "size", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 160, "Controls": [{ "Name": "size" }] }, 
{ "Name": "source", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "source" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Submitted", "value": 0 }, { "text" : "Parsing", "value": 1 }, { "text" : "Transforming", "value": 2 }, { "text" : "Importing", "value": 3 }, { "text" : "Completed", "value": 4 }, { "text" : "Failed", "value": 5 }], "SelectedOption" : { "option" : "Submitted", "value": 0 }, "Text": "Submitted", "Controls": [{ "Name": "footer_statuscode" }, { "Name": "statuscode" }] }, 
{ "Name": "successcount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "successcount" }] }, 
{ "Name": "targetentityname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 160, "Controls": [{ "Name": "targetentityname" }] }, 
{ "Name": "totalcount", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "totalcount" }] }]
, "AttributesLength": 15, 
"Controls": [
{ "Name": "completedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Finished On", "Attribute": "completedon" }, 
{ "Name": "createdby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "enableduplicatedetection", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Duplicate Detection", "Attribute": "enableduplicatedetection" }, 
{ "Name": "failurecount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Failures", "Attribute": "failurecount" }, 
{ "Name": "footer_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "importmapid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Map", "Attribute": "importmapid" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "partialfailurecount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Partial Failures", "Attribute": "partialfailurecount" }, 
{ "Name": "recordsownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Records Owned By", "Attribute": "recordsownerid" }, 
{ "Name": "size", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Size", "Attribute": "size" }, 
{ "Name": "source", "Type": "standard", "Disabled": false, "Visible": true, "Label": "File", "Attribute": "source" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }, 
{ "Name": "successcount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Successes", "Attribute": "successcount" }, 
{ "Name": "targetentityname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Record Type", "Attribute": "targetentityname" }, 
{ "Name": "totalcount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total", "Attribute": "totalcount" }], 
"ControlsLength": 16, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "General", "Name": "general", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "statuscode" }, 
{ "Name": "createdby" }, 
{ "Name": "createdon" }, 
{ "Name": "completedon" }]}, 
{ "Label": "Properties", "Name": "properties", "Visible": true, "Controls": [
{ "Name": "source" }, 
{ "Name": "size" }, 
{ "Name": "targetentityname" }, 
{ "Name": "importmapid" }, 
{ "Name": "recordsownerid" }, 
{ "Name": "enableduplicatedetection" }]}, 
{ "Label": "Results", "Name": "result", "Visible": true, "Controls": [
{ "Name": "successcount" }, 
{ "Name": "failurecount" }, 
{ "Name": "partialfailurecount" }, 
{ "Name": "totalcount" }]}]}]
};

var Xrm = new _xrm(pageData);
