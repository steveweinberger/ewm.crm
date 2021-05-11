/// <reference path="Xrm.js" />

var EntityLogicalName = "convertrule";
var Form_f54c3b3c_4385_41a2_b61e_35dee0b858db_Properties = {
allowunknownsender: "allowunknownsender"
,channelpropertygroupid: "channelpropertygroupid"
,checkactiveentitlement: "checkactiveentitlement"
,checkblockedsocialprofile: "checkblockedsocialprofile"
,checkdirectmessages: "checkdirectmessages"
,checkifresolved: "checkifresolved"
,name: "name"
,ownerid: "ownerid"
,queueid: "queueid"
,resolvedsince: "resolvedsince"
,responsetemplateid: "responsetemplateid"
,sendautomaticresponse: "sendautomaticresponse"
,sourcechanneltypecode: "sourcechanneltypecode"
,sourcetypecode: "sourcetypecode"
};

var Form_f54c3b3c_4385_41a2_b61e_35dee0b858db_Controls = {
AllowUnknownSender: "AllowUnknownSender"
,channelpropertygroupid: "channelpropertygroupid"
,CheckActiveEntitlement: "CheckActiveEntitlement"
,checkblockedsocialprofile: "checkblockedsocialprofile"
,checkdirectmessages: "checkdirectmessages"
,CheckIfResolved: "CheckIfResolved"
,ConvertRuleItemsGrid: "ConvertRuleItemsGrid"
,name: "name"
,ownerid: "ownerid"
,queueid: "queueid"
,ResolvedSince: "ResolvedSince"
,ResponseTemplateId: "ResponseTemplateId"
,SendAutomaticResponse: "SendAutomaticResponse"
,sourcechanneltypecode: "sourcechanneltypecode"
,sourcetypecode: "sourcetypecode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9300", "etc": "9300", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "convertrule",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
]
, "AttributesLength": 0, 
"Controls": [
], 
"ControlsLength": 0, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "ConvertToCaseSettings", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "sourcetypecode" }, 
{ "Name": "sourcechanneltypecode" }, 
{ "Name": "queueid" }, 
{ "Name": "ownerid" }]}, 
{ "Label": "CHANNEL PROPERTIES", "Name": "ChannelProperties", "Visible": true, "Controls": [
{ "Name": "channelpropertygroupid" }]}, 
{ "Label": "SPECIFY CONDITIONS FOR RECORD CREATION", "Name": "SocialMonitoringCaseConditions", "Visible": true, "Controls": [
{ "Name": "checkblockedsocialprofile" }, 
{ "Name": "checkdirectmessages" }]}, 
{ "Label": "SPECIFY CONDITIONS FOR RECORD CREATION", "Name": "EmailCaseConditions", "Visible": true, "Controls": [
{ "Name": "AllowUnknownSender" }, 
{ "Name": "CheckActiveEntitlement" }, 
{ "Name": "CheckIfResolved" }, 
{ "Name": "ResolvedSince" }]}, 
{ "Label": "SPECIFY AUTORESPONSE SETTINGS", "Name": "AutoResponseSettings", "Visible": true, "Controls": [
{ "Name": "SendAutomaticResponse" }, 
{ "Name": "ResponseTemplateId" }]}, 
{ "Label": "SPECIFY RECORD CREATION AND UPDATE DETAILS", "Name": "CaseDetails", "Visible": true, "Controls": [
{ "Name": "ConvertRuleItemsGrid" }]}]}]
};

var Xrm = new _xrm(pageData);
