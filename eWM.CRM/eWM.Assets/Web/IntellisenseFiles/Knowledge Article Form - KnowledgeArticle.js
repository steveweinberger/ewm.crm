/// <reference path="Xrm.js" />

var EntityLogicalName = "knowledgearticle";
var Form_e7ef555e_7f57_4164_b604_59fa4f0a7e2e_Properties = {
articlepublicnumber: "articlepublicnumber"
,createdby: "createdby"
,createdon: "createdon"
,description: "description"
,expirationdate: "expirationdate"
,keywords: "keywords"
,languagelocaleid: "languagelocaleid"
,majorversionnumber: "majorversionnumber"
,minorversionnumber: "minorversionnumber"
,modifiedby: "modifiedby"
,modifiedon: "modifiedon"
,ownerid: "ownerid"
,parentarticlecontentid: "parentarticlecontentid"
,primaryauthorid: "primaryauthorid"
,publishon: "publishon"
,rootarticleid: "rootarticleid"
,statuscode: "statuscode"
,subjectid: "subjectid"
,title: "title"
};

var Form_e7ef555e_7f57_4164_b604_59fa4f0a7e2e_Controls = {
articlepublicnumber: "articlepublicnumber"
,articleviewcountquickform: "articleviewcountquickform"
,creadedon: "creadedon"
,createdname: "createdname"
,description: "description"
,expirationdate: "expirationdate"
,header_languagelocaleid: "header_languagelocaleid"
,header_majorversionnumber: "header_majorversionnumber"
,header_minorversionnumber: "header_minorversionnumber"
,header_statuscode: "header_statuscode"
,IFRAME_articlecontent: "IFRAME_articlecontent"
,keywords: "keywords"
,KnowledgearticleviewsGrid: "KnowledgearticleviewsGrid"
,languagelocaleid: "languagelocaleid"
,modifiedname: "modifiedname"
,modifiedon: "modifiedon"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,primaryauthorid: "primaryauthorid"
,publishon: "publishon"
,relatedarticlequickform: "relatedarticlequickform"
,RelatedCasesGrid: "RelatedCasesGrid"
,relatedproducts: "relatedproducts"
,RelatedTranslationsGrid: "RelatedTranslationsGrid"
,relatedversionsquickform: "relatedversionsquickform"
,statuscode: "statuscode"
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
"QueryStringParameters": { "_gridType": "9953", "etc": "9953", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "knowledgearticle",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "articlepublicnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 4000, "Controls": [{ "Name": "articlepublicnumber" }] }, 
{ "Name": "createdby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdname" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "creadedon" }] }, 
{ "Name": "description", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 155, "Controls": [{ "Name": "description" }] }, 
{ "Name": "expirationdate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "expirationdate" }] }, 
{ "Name": "keywords", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 4000, "Controls": [{ "Name": "keywords" }] }, 
{ "Name": "languagelocaleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_languagelocaleid" }, { "Name": "languagelocaleid" }] }, 
{ "Name": "majorversionnumber", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "header_majorversionnumber" }] }, 
{ "Name": "minorversionnumber", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "header_minorversionnumber" }] }, 
{ "Name": "modifiedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedname" }] }, 
{ "Name": "modifiedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "modifiedon" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "parentarticlecontentid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "relatedversionsquickform" }] }, 
{ "Name": "primaryauthorid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "primaryauthorid" }] }, 
{ "Name": "publishon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "publishon" }] }, 
{ "Name": "rootarticleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "articleviewcountquickform" }, { "Name": "relatedarticlequickform" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Proposed", "value": 1 }, { "text" : "Draft", "value": 2 }, { "text" : "Needs review", "value": 3 }, { "text" : "In review", "value": 4 }, { "text" : "Approved", "value": 5 }, { "text" : "Scheduled", "value": 6 }, { "text" : "Published", "value": 7 }, { "text" : "Needs review", "value": 8 }, { "text" : "Updating", "value": 9 }, { "text" : "Expired", "value": 10 }, { "text" : "Rejected", "value": 11 }, { "text" : "Archived", "value": 12 }, { "text" : "Discarded", "value": 13 }, { "text" : "Rejected", "value": 14 }], "SelectedOption" : { "option" : "Proposed", "value": 1 }, "Text": "Proposed", "Controls": [{ "Name": "header_statuscode" }, { "Name": "statuscode" }] }, 
{ "Name": "subjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "subjectid" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 4000, "Controls": [{ "Name": "title" }] }]
, "AttributesLength": 19, 
"Controls": [
{ "Name": "articlepublicnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Article Public Number", "Attribute": "articlepublicnumber" }, 
{ "Name": "articleviewcountquickform", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total views", "Attribute": "rootarticleid" }, 
{ "Name": "creadedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "createdname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created By", "Attribute": "createdby" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "expirationdate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Expiration Date", "Attribute": "expirationdate" }, 
{ "Name": "header_languagelocaleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Language", "Attribute": "languagelocaleid" }, 
{ "Name": "header_majorversionnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Major Version Number", "Attribute": "majorversionnumber" }, 
{ "Name": "header_minorversionnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Minor Version Number", "Attribute": "minorversionnumber" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "keywords", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Keywords", "Attribute": "keywords" }, 
{ "Name": "languagelocaleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Language", "Attribute": "languagelocaleid" }, 
{ "Name": "modifiedname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified By", "Attribute": "modifiedby" }, 
{ "Name": "modifiedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Modified On", "Attribute": "modifiedon" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "primaryauthorid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Primary Author Id", "Attribute": "primaryauthorid" }, 
{ "Name": "publishon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Publish On", "Attribute": "publishon" }, 
{ "Name": "relatedarticlequickform", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Root Article Id", "Attribute": "rootarticleid" }, 
{ "Name": "relatedversionsquickform", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Related Versions", "Attribute": "parentarticlecontentid" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "subjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subjectid" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Title", "Attribute": "title" }], 
"ControlsLength": 22, 
"Navigation": [
], 
"Tabs": [
{ "Label": "CONTENT", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "ARTICLE CONTENT", "Name": "Knowledge Information", "Visible": true, "Controls": [
{ "Name": "title" }, 
{ "Name": "keywords" }, 
{ "Name": "description" }]}, 
{ "Label": "Content", "Name": "KnowledgeArticleIFrameContent", "Visible": true, "Controls": [
{ "Name": "IFRAME_articlecontent" }]}, 
{ "Label": "RELATED INFORMATION", "Name": "Related_pane", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}, 
{ "Label": "SETTINGS", "Name": "publish", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "PORTAL SETTINGS", "Name": "Portal Settings", "Visible": true, "Controls": [
{ "Name": "statuscode" }, 
{ "Name": "ownerid" }, 
{ "Name": "articlepublicnumber" }, 
{ "Name": "primaryauthorid" }, 
{ "Name": "languagelocaleid" }, 
{ "Name": "createdname" }, 
{ "Name": "creadedon" }, 
{ "Name": "modifiedname" }, 
{ "Name": "modifiedon" }]}, 
{ "Label": "ASSOCIATED INFORMATION", "Name": "Associations", "Visible": true, "Controls": [
{ "Name": "subjectid" }, 
{ "Name": "publishon" }, 
{ "Name": "expirationdate" }]}, 
{ "Label": "RELATED INFORMATION", "Name": "Version History", "Visible": true, "Controls": [
{ "Name": "relatedversionsquickform" }, 
{ "Name": "RelatedTranslationsGrid" }, 
{ "Name": "relatedarticlequickform" }, 
{ "Name": "relatedproducts" }]}]}, 
{ "Label": "ANALYTICS", "Name": "analytics", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Views", "Name": "views", "Visible": true, "Controls": [
{ "Name": "articleviewcountquickform" }, 
{ "Name": "KnowledgearticleviewsGrid" }]}, 
{ "Label": "Cases", "Name": "cases", "Visible": true, "Controls": [
{ "Name": "RelatedCasesGrid" }]}]}]
};

var Xrm = new _xrm(pageData);
