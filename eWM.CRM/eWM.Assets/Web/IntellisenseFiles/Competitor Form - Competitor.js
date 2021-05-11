/// <reference path="Xrm.js" />

var EntityLogicalName = "competitor";
var Form_940c7b69_3a65_46c5_b6e9_cb66d95c93d9_Properties = {
address1_composite: "address1_composite"
,name: "name"
,reportedrevenue: "reportedrevenue"
,strengths: "strengths"
,tickersymbol: "tickersymbol"
,transactioncurrencyid: "transactioncurrencyid"
,weaknesses: "weaknesses"
,websiteurl: "websiteurl"
};

var Form_940c7b69_3a65_46c5_b6e9_cb66d95c93d9_Controls = {
address1_composite: "address1_composite"
,ChartTest: "ChartTest"
,header_reportedrevenue: "header_reportedrevenue"
,header_tickersymbol: "header_tickersymbol"
,name: "name"
,notescontrol: "notescontrol"
,OpportunityCurrentFiscalYear: "OpportunityCurrentFiscalYear"
,strengths: "strengths"
,transactioncurrencyid: "transactioncurrencyid"
,weaknesses: "weaknesses"
,websiteurl: "websiteurl"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "123", "etc": "123", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "competitor",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "address1_composite", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1000, "Controls": [{ "Name": "address1_composite" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "reportedrevenue", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "header_reportedrevenue" }] }, 
{ "Name": "strengths", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "strengths" }] }, 
{ "Name": "tickersymbol", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 10, "Controls": [{ "Name": "header_tickersymbol" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "weaknesses", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "weaknesses" }] }, 
{ "Name": "websiteurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "websiteurl" }] }]
, "AttributesLength": 8, 
"Controls": [
{ "Name": "address1_composite", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Address", "Attribute": "address1_composite" }, 
{ "Name": "header_reportedrevenue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Reported Revenue", "Attribute": "reportedrevenue" }, 
{ "Name": "header_tickersymbol", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ticker Symbol", "Attribute": "tickersymbol" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "strengths", "Type": "standard", "Disabled": false, "Visible": true, "Label": "STRENGTH", "Attribute": "strengths" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "weaknesses", "Type": "standard", "Disabled": false, "Visible": true, "Label": "WEAKNESS", "Attribute": "weaknesses" }, 
{ "Name": "websiteurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Website", "Attribute": "websiteurl" }], 
"ControlsLength": 8, 
"Navigation": [
{"Id": "navOpportunities", "Key": "navOpportunities", "Label": "", "Visible": true }, 
{"Id": "navConnections", "Key": "navConnections", "Label": "", "Visible": true }, 
{"Id": "navAsyncOperations", "Key": "navAsyncOperations", "Label": "", "Visible": true }, 
{"Id": "navProcessSessions", "Key": "navProcessSessions", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "COMPETITOR", "Name": "COMPETITOR", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Competitor Information", "Name": "Competitor Information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "websiteurl" }, 
{ "Name": "transactioncurrencyid" }, 
{ "Name": "address1_composite" }]}, 
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "Analysis", "Name": "analysis", "Visible": true, "Controls": [
{ "Name": "strengths" }, 
{ "Name": "weaknesses" }]}]}, 
{ "Label": "OPPORTUNITIES", "Name": "opportunities", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Opportunity", "Name": "Opportunity", "Visible": true, "Controls": [
{ "Name": "OpportunityCurrentFiscalYear" }]}, 
{ "Label": "OpportunitiesChart", "Name": "OpportunitiesChart", "Visible": true, "Controls": [
{ "Name": "ChartTest" }]}]}]
};

var Xrm = new _xrm(pageData);
