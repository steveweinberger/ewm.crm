/// <reference path="Xrm.js" />

var EntityLogicalName = "channelaccessprofile";
var Form_d60516fc_ba51_4370_ba17_5e8292fa7852_Properties = {
emailaccess: "emailaccess"
,facebookaccess: "facebookaccess"
,name: "name"
,ownerid: "ownerid"
,phoneaccess: "phoneaccess"
,rateknowledgearticles: "rateknowledgearticles"
,statuscode: "statuscode"
,submitfeedback: "submitfeedback"
,twitteraccess: "twitteraccess"
,viewarticlerating: "viewarticlerating"
,viewknowledgearticles: "viewknowledgearticles"
,webaccess: "webaccess"
};

var Form_d60516fc_ba51_4370_ba17_5e8292fa7852_Controls = {
emailaccess: "emailaccess"
,facebookaccess: "facebookaccess"
,header_statuscode: "header_statuscode"
,name: "name"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,phoneaccess: "phoneaccess"
,RateKnowledgeArticles: "RateKnowledgeArticles"
,Role_Control: "Role_Control"
,SubmitFeedback: "SubmitFeedback"
,twitteraccess: "twitteraccess"
,ViewArticleRating: "ViewArticleRating"
,ViewKnowledgeArticles: "ViewKnowledgeArticles"
,webaccess: "webaccess"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "3005", "etc": "3005", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "channelaccessprofile",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "emailaccess", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "emailaccess" }] }, 
{ "Name": "facebookaccess", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "facebookaccess" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "phoneaccess", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "phoneaccess" }] }, 
{ "Name": "rateknowledgearticles", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "RateKnowledgeArticles" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 1 }, { "text" : "Inactive", "value": 2 }], "SelectedOption" : { "option" : "Active", "value": 1 }, "Text": "Active", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "submitfeedback", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "SubmitFeedback" }] }, 
{ "Name": "twitteraccess", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "twitteraccess" }] }, 
{ "Name": "viewarticlerating", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "ViewArticleRating" }] }, 
{ "Name": "viewknowledgearticles", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "ViewKnowledgeArticles" }] }, 
{ "Name": "webaccess", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "webaccess" }] }]
, "AttributesLength": 12, 
"Controls": [
{ "Name": "emailaccess", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Email access", "Attribute": "emailaccess" }, 
{ "Name": "facebookaccess", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Facebook access", "Attribute": "facebookaccess" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "phoneaccess", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Phone access", "Attribute": "phoneaccess" }, 
{ "Name": "RateKnowledgeArticles", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rate Knowledge Articles", "Attribute": "rateknowledgearticles" }, 
{ "Name": "SubmitFeedback", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Submit Feedback", "Attribute": "submitfeedback" }, 
{ "Name": "twitteraccess", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Twitter access", "Attribute": "twitteraccess" }, 
{ "Name": "ViewArticleRating", "Type": "standard", "Disabled": false, "Visible": true, "Label": "View Article Rating", "Attribute": "viewarticlerating" }, 
{ "Name": "ViewKnowledgeArticles", "Type": "standard", "Disabled": false, "Visible": true, "Label": "View Knowledge Articles", "Attribute": "viewknowledgearticles" }, 
{ "Name": "webaccess", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Web access", "Attribute": "webaccess" }], 
"ControlsLength": 12, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "{0b47768f-53ec-41e2-8d53-34424f383627}_section_2", "Visible": true, "Controls": [
{ "Name": "name" }]}, 
{ "Label": "Section", "Name": "{0b47768f-53ec-41e2-8d53-34424f383627}_section_3", "Visible": true, "Controls": [
{ "Name": "ownerid" }]}]}, 
{ "Label": "Entity Permissions", "Name": "EntityPermissions", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_2_section_1", "Visible": true, "Controls": [
{ "Name": "Role_Control" }]}]}, 
{ "Label": "Channel Access", "Name": "ChannelAccess", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_3_section_1", "Visible": true, "Controls": [
{ "Name": "phoneaccess" }, 
{ "Name": "emailaccess" }, 
{ "Name": "facebookaccess" }]}, 
{ "Label": "Section", "Name": "tab_3_section_2", "Visible": true, "Controls": [
{ "Name": "webaccess" }, 
{ "Name": "twitteraccess" }]}]}, 
{ "Label": "Knowledge Settings", "Name": "KnowledgeSettings", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_4_section_1", "Visible": true, "Controls": [
{ "Name": "ViewKnowledgeArticles" }, 
{ "Name": "RateKnowledgeArticles" }]}, 
{ "Label": "Section", "Name": "tab_4_section_2", "Visible": true, "Controls": [
{ "Name": "ViewArticleRating" }, 
{ "Name": "SubmitFeedback" }]}]}, 
{ "Label": "Notes", "Name": "Note", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "NOTES", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
