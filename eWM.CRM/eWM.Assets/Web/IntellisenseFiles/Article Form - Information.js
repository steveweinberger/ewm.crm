/// <reference path="Xrm.js" />

var EntityLogicalName = "kbarticle";
var Form_fdd6d28a_6a67_4bf3_802c_37eb1a472ae2_Properties = {
articlexml: "articlexml"
,keywords: "keywords"
,languagecode: "languagecode"
,statecode: "statecode"
,subjectid: "subjectid"
,title: "title"
};

var Form_fdd6d28a_6a67_4bf3_802c_37eb1a472ae2_Controls = {
ArticleComments: "ArticleComments"
,articlexmlcontrol: "articlexmlcontrol"
,footer_statecode: "footer_statecode"
,keywords: "keywords"
,languagecode: "languagecode"
,notescontrol: "notescontrol"
,subjectid: "subjectid"
,title: "title"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "127", "etc": "127", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "kbarticle",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "articlexml", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 1073741823, "Controls": [{ "Name": "articlexmlcontrol" }] }, 
{ "Name": "keywords", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100000, "Controls": [{ "Name": "keywords" }] }, 
{ "Name": "languagecode", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "languagecode" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Draft", "value": 1 }, { "text" : "Unapproved", "value": 2 }, { "text" : "Published", "value": 3 }], "SelectedOption" : { "option" : "Draft", "value": 1 }, "Text": "Draft", "Controls": [{ "Name": "footer_statecode" }] }, 
{ "Name": "subjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "subjectid" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "title" }] }]
, "AttributesLength": 6, 
"Controls": [
, 
{ "Name": "articlexmlcontrol", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Article XML", "Attribute": "articlexml" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status ", "Attribute": "statecode" }, 
{ "Name": "keywords", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Key Words", "Attribute": "keywords" }, 
{ "Name": "languagecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Language", "Attribute": "languagecode" }, 
{ "Name": "subjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subjectid" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Title", "Attribute": "title" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Article Information", "Name": "article information", "Visible": true, "Controls": [
{ "Name": "title" }, 
{ "Name": "subjectid" }]}, 
{ "Label": "Article Keywords", "Name": "Article Keywords", "Visible": true, "Controls": [
{ "Name": "keywords" }, 
{ "Name": "languagecode" }]}, 
{ "Label": "Kb-Article data", "Name": "kb-article description", "Visible": true, "Controls": [
{ "Name": "articlexmlcontrol" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}, 
{ "Label": "Comments", "Name": "{b641b7d4-753c-c99a-5978-977e6912e856}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Comments", "Name": "{493d7206-6935-e73d-75cc-44dc53d021e8}", "Visible": true, "Controls": [
{ "Name": "ArticleComments" }]}]}]
};

var Xrm = new _xrm(pageData);
