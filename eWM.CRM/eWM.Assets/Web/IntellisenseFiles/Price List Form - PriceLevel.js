/// <reference path="Xrm.js" />

var EntityLogicalName = "pricelevel";
var Form_fd57cc72_a5b1_4e65_a5db_0127da5941f7_Properties = {
begindate: "begindate"
,description: "description"
,enddate: "enddate"
,name: "name"
,statuscode: "statuscode"
,transactioncurrencyid: "transactioncurrencyid"
};

var Form_fd57cc72_a5b1_4e65_a5db_0127da5941f7_Controls = {
begindate: "begindate"
,description: "description"
,enddate: "enddate"
,header_statuscode: "header_statuscode"
,name: "name"
,pricelistitemsgrid: "pricelistitemsgrid"
,RelatedTerritoriesGrid: "RelatedTerritoriesGrid"
,transactioncurrencyid: "transactioncurrencyid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1022", "etc": "1022", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "pricelevel",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "begindate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "begindate" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "enddate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "enddate" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 100001 }, { "text" : "Inactive", "value": 100002 }], "SelectedOption" : { "option" : "Active", "value": 100001 }, "Text": "Active", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "begindate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Start Date", "Attribute": "begindate" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "enddate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Date", "Attribute": "enddate" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "General", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Price Level Information", "Name": "price level information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "begindate" }, 
{ "Name": "enddate" }, 
{ "Name": "transactioncurrencyid" }]}, 
{ "Label": "Description", "Name": "Description", "Visible": true, "Controls": [
{ "Name": "description" }]}]}, 
{ "Label": "Price List Items", "Name": "Price_List_Items", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Price List Items", "Name": "pricelistbyproduct", "Visible": true, "Controls": [
{ "Name": "pricelistitemsgrid" }]}]}, 
{ "Label": "Territory Relationships", "Name": "TERRITORYRELATIONSHIP_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Territories", "Name": "Territories", "Visible": true, "Controls": [
{ "Name": "RelatedTerritoriesGrid" }]}]}]
};

var Xrm = new _xrm(pageData);
