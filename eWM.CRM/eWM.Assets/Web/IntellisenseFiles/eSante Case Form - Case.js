/// <reference path="Xrm.js" />

var EntityLogicalName = "incident";
var Form_4a63c8d1_6c1e_48ec_9db4_3e6c7155334c_Properties = {
billedserviceunits: "billedserviceunits"
,blockedprofile: "blockedprofile"
,caseorigincode: "caseorigincode"
,casetypecode: "casetypecode"
,cog_casesource: "cog_casesource"
,cog_casetype: "cog_casetype"
,contractdetailid: "contractdetailid"
,contractid: "contractid"
,contractservicelevelcode: "contractservicelevelcode"
,createdon: "createdon"
,customerid: "customerid"
,description: "description"
,entitlementid: "entitlementid"
,escalatedon: "escalatedon"
,firstresponsebykpiid: "firstresponsebykpiid"
,firstresponsesent: "firstresponsesent"
,followupby: "followupby"
,incidentstagecode: "incidentstagecode"
,influencescore: "influencescore"
,isescalated: "isescalated"
,kbarticleid: "kbarticleid"
,messagetypecode: "messagetypecode"
,ownerid: "ownerid"
,parentcaseid: "parentcaseid"
,primarycontactid: "primarycontactid"
,prioritycode: "prioritycode"
,productid: "productid"
,productserialnumber: "productserialnumber"
,resolveby: "resolveby"
,resolvebykpiid: "resolvebykpiid"
,responseby: "responseby"
,sentimentvalue: "sentimentvalue"
,socialprofileid: "socialprofileid"
,statuscode: "statuscode"
,subjectid: "subjectid"
,ticketnumber: "ticketnumber"
,title: "title"
};

var Form_4a63c8d1_6c1e_48ec_9db4_3e6c7155334c_Controls = {
Associated_Articles: "Associated_Articles"
,Associated_KnowledgeArticles: "Associated_KnowledgeArticles"
,billedserviceunits: "billedserviceunits"
,blockedprofile: "blockedprofile"
,caseorigincode: "caseorigincode"
,CaseResearch_LinkControl: "CaseResearch_LinkControl"
,casetypecode: "casetypecode"
,ChildCasesGrid: "ChildCasesGrid"
,cog_casesource: "cog_casesource"
,cog_casetype: "cog_casetype"
,contractdetailid: "contractdetailid"
,contractid: "contractid"
,contractservicelevelcode: "contractservicelevelcode"
,customerid: "customerid"
,customerpane_qfc: "customerpane_qfc"
,description: "description"
,entitlementid: "entitlementid"
,escalatedon: "escalatedon"
,firstresponsesent: "firstresponsesent"
,firstresponseslaquickform: "firstresponseslaquickform"
,followupby: "followupby"
,header_createdon: "header_createdon"
,header_ownerid: "header_ownerid"
,header_prioritycode: "header_prioritycode"
,header_statuscode: "header_statuscode"
,incidentstagecode: "incidentstagecode"
,influencescore: "influencescore"
,isescalated: "isescalated"
,kbarticleid: "kbarticleid"
,kbviewer: "kbviewer"
,MergedCasesGrid: "MergedCasesGrid"
,messagetypecode: "messagetypecode"
,notescontrol: "notescontrol"
,parentcaseid: "parentcaseid"
,primarycontactid: "primarycontactid"
,productid: "productid"
,productserialnumber: "productserialnumber"
,RelatedSolutionGrid: "RelatedSolutionGrid"
,resolveby: "resolveby"
,resolvebyslaquickform: "resolvebyslaquickform"
,responseby: "responseby"
,sentimentvalue: "sentimentvalue"
,SLA_KPI_Instances_List: "SLA_KPI_Instances_List"
,socialprofileid: "socialprofileid"
,subjectid: "subjectid"
,ticketnumber: "ticketnumber"
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
{ "Name": "billedserviceunits", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "billedserviceunits" }] }, 
{ "Name": "blockedprofile", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "blockedprofile" }] }, 
{ "Name": "caseorigincode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Phone", "value": 1 }, { "text" : "Email", "value": 2 }, { "text" : "Web", "value": 3 }, { "text" : "Facebook", "value": 2483 }, { "text" : "Twitter", "value": 3986 }], "SelectedOption" : { "option" : "Phone", "value": 1 }, "Text": "Phone", "Controls": [{ "Name": "caseorigincode" }] }, 
{ "Name": "casetypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Question", "value": 1 }, { "text" : "Problem", "value": 2 }, { "text" : "Request", "value": 3 }], "SelectedOption" : { "option" : "Question", "value": 1 }, "Text": "Question", "Controls": [{ "Name": "casetypecode" }] }, 
{ "Name": "cog_casesource", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Email", "value": 181310005 }, { "text" : "Fax", "value": 181310003 }, { "text" : "Letter", "value": 181310006 }, { "text" : "Other", "value": 181310009 }, { "text" : "Phone", "value": 181310004 }, { "text" : "Referral", "value": 181310008 }, { "text" : "Supervised Analytics", "value": 181310000 }, { "text" : "Un-Supervised Analytics", "value": 181310001 }, { "text" : "Walk-in", "value": 181310002 }, { "text" : "Web based", "value": 181310007 }], "SelectedOption" : { "option" : "Email", "value": 181310005 }, "Text": "Email", "Controls": [{ "Name": "cog_casesource" }] }, 
{ "Name": "cog_casetype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Basic", "value": 181310000 }, { "text" : "Data Analytics", "value": 181310005 }, { "text" : "Electronic Health Record", "value": 181310003 }, { "text" : "Estate Recovery", "value": 181310004 }, { "text" : "External Review", "value": 181310007 }, { "text" : "Internal Review", "value": 181310006 }, { "text" : "Managed Care", "value": 181310001 }, { "text" : "Medical Review", "value": 181310002 }, { "text" : "Payment Accuracy", "value": 181310009 }, { "text" : "PERM", "value": 181310008 }, { "text" : "Self Report", "value": 181310010 }, { "text" : "Special Projects", "value": 181310012 }, { "text" : "State Single Audit", "value": 181310011 }], "SelectedOption" : { "option" : "Basic", "value": 181310000 }, "Text": "Basic", "Controls": [{ "Name": "cog_casetype" }] }, 
{ "Name": "contractdetailid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "contractdetailid" }] }, 
{ "Name": "contractid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "contractid" }] }, 
{ "Name": "contractservicelevelcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Gold", "value": 1 }, { "text" : "Silver", "value": 2 }, { "text" : "Bronze", "value": 3 }], "SelectedOption" : { "option" : "Gold", "value": 1 }, "Text": "Gold", "Controls": [{ "Name": "contractservicelevelcode" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "header_createdon" }] }, 
{ "Name": "customerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerid" }, { "Name": "customerpane_qfc" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "entitlementid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "entitlementid" }] }, 
{ "Name": "escalatedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "escalatedon" }] }, 
{ "Name": "firstresponsebykpiid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "firstresponseslaquickform" }] }, 
{ "Name": "firstresponsesent", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "firstresponsesent" }] }, 
{ "Name": "followupby", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "followupby" }] }, 
{ "Name": "incidentstagecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Default Value", "value": 1 }], "SelectedOption" : { "option" : "Default Value", "value": 1 }, "Text": "Default Value", "Controls": [{ "Name": "incidentstagecode" }] }, 
{ "Name": "influencescore", "Value": null, "Type" : "double", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "influencescore" }] }, 
{ "Name": "isescalated", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isescalated" }] }, 
{ "Name": "kbarticleid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "kbarticleid" }] }, 
{ "Name": "messagetypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Public Message", "value": 0 }, { "text" : "Private Message", "value": 1 }], "SelectedOption" : { "option" : "Public Message", "value": 0 }, "Text": "Public Message", "Controls": [{ "Name": "messagetypecode" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "parentcaseid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "parentcaseid" }] }, 
{ "Name": "primarycontactid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "primarycontactid" }] }, 
{ "Name": "prioritycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "High", "value": 1 }, { "text" : "Normal", "value": 2 }, { "text" : "Low", "value": 3 }], "SelectedOption" : { "option" : "High", "value": 1 }, "Text": "High", "Controls": [{ "Name": "header_prioritycode" }] }, 
{ "Name": "productid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "productid" }] }, 
{ "Name": "productserialnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "productserialnumber" }] }, 
{ "Name": "resolveby", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "resolveby" }] }, 
{ "Name": "resolvebykpiid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "resolvebyslaquickform" }] }, 
{ "Name": "responseby", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "responseby" }] }, 
{ "Name": "sentimentvalue", "Value": null, "Type" : "double", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 2, "Controls": [{ "Name": "sentimentvalue" }] }, 
{ "Name": "socialprofileid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "socialprofileid" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Problem Solved", "value": 5 }, { "text" : "Information Provided", "value": 1000 }, { "text" : "Canceled", "value": 6 }, { "text" : "Merged", "value": 2000 }, { "text" : "In Progress", "value": 1 }, { "text" : "On Hold", "value": 2 }, { "text" : "Waiting for Details", "value": 3 }, { "text" : "Researching", "value": 4 }], "SelectedOption" : { "option" : "Problem Solved", "value": 5 }, "Text": "Problem Solved", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "subjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "subjectid" }] }, 
{ "Name": "ticketnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "ticketnumber" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "title" }] }]
, "AttributesLength": 37, 
"Controls": [
, 
{ "Name": "billedserviceunits", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Billed Service Units", "Attribute": "billedserviceunits" }, 
{ "Name": "blockedprofile", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Blocked Profile", "Attribute": "blockedprofile" }, 
{ "Name": "caseorigincode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Origin", "Attribute": "caseorigincode" }, 
{ "Name": "casetypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Type", "Attribute": "casetypecode" }, 
{ "Name": "cog_casesource", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Case Source", "Attribute": "cog_casesource" }, 
{ "Name": "cog_casetype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Case Type", "Attribute": "cog_casetype" }, 
{ "Name": "contractdetailid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract Line", "Attribute": "contractdetailid" }, 
{ "Name": "contractid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract", "Attribute": "contractid" }, 
{ "Name": "contractservicelevelcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Service Level", "Attribute": "contractservicelevelcode" }, 
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customerid" }, 
{ "Name": "customerpane_qfc", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customerid" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "entitlementid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entitlement", "Attribute": "entitlementid" }, 
{ "Name": "escalatedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Escalated On", "Attribute": "escalatedon" }, 
{ "Name": "firstresponsesent", "Type": "standard", "Disabled": false, "Visible": true, "Label": "First Response Sent", "Attribute": "firstresponsesent" }, 
{ "Name": "firstresponseslaquickform", "Type": "standard", "Disabled": false, "Visible": true, "Label": "First Response By KPI", "Attribute": "firstresponsebykpiid" }, 
{ "Name": "followupby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Follow Up By", "Attribute": "followupby" }, 
{ "Name": "header_createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_prioritycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Priority", "Attribute": "prioritycode" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }, 
{ "Name": "incidentstagecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Case Stage", "Attribute": "incidentstagecode" }, 
{ "Name": "influencescore", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Influence Score", "Attribute": "influencescore" }, 
{ "Name": "isescalated", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Escalated", "Attribute": "isescalated" }, 
{ "Name": "kbarticleid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Knowledge Base Article", "Attribute": "kbarticleid" }, 
{ "Name": "messagetypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Received As", "Attribute": "messagetypecode" }, 
{ "Name": "parentcaseid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Parent Case", "Attribute": "parentcaseid" }, 
{ "Name": "primarycontactid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contact", "Attribute": "primarycontactid" }, 
{ "Name": "productid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product", "Attribute": "productid" }, 
{ "Name": "productserialnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Serial Number", "Attribute": "productserialnumber" }, 
{ "Name": "resolveby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Resolve By", "Attribute": "resolveby" }, 
{ "Name": "resolvebyslaquickform", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Resolve By KPI", "Attribute": "resolvebykpiid" }, 
{ "Name": "responseby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "First Response By", "Attribute": "responseby" }, 
{ "Name": "sentimentvalue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Sentiment Score", "Attribute": "sentimentvalue" }, 
{ "Name": "socialprofileid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Social Profile", "Attribute": "socialprofileid" }, 
{ "Name": "subjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Subject", "Attribute": "subjectid" }, 
{ "Name": "ticketnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "ID", "Attribute": "ticketnumber" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Case Title", "Attribute": "title" }], 
"ControlsLength": 38, 
"Navigation": [
{"Id": "navActivities", "Key": "navActivities", "Label": "", "Visible": true }, 
{"Id": "navActivityHistory", "Key": "navActivityHistory", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "Summary", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "CASE DETAILS", "Name": "Details", "Visible": true, "Controls": [
{ "Name": "title" }, 
{ "Name": "ticketnumber" }, 
{ "Name": "cog_casetype" }, 
{ "Name": "cog_casesource" }, 
{ "Name": "subjectid" }, 
{ "Name": "customerid" }, 
{ "Name": "caseorigincode" }, 
{ "Name": "primarycontactid" }, 
{ "Name": "entitlementid" }, 
{ "Name": "productid" }]}, 
{ "Label": "DESCRIPTION", "Name": "null", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "APPLICABLE SLA", "Name": "Applicable SLA(STANDARD)", "Visible": true, "Controls": [
{ "Name": "responseby" }, 
{ "Name": "resolveby" }]}, 
{ "Label": "TABS CONTROL", "Name": "TabsControl", "Visible": true, "Controls": [
{ "Name": "incidentstagecode" }, 
{ "Name": "billedserviceunits" }, 
{ "Name": "notescontrol" }]}, 
{ "Label": "CUSTOMER DETAILS", "Name": "Customer", "Visible": true, "Controls": [
{ "Name": "customerpane_qfc" }]}]}, 
{ "Label": "Case Relationships", "Name": "CASERELATIONSHIP_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "Solutions", "Visible": true, "Controls": [
{ "Name": "RelatedSolutionGrid" }]}, 
{ "Label": "RESEARCH", "Name": "Research", "Visible": true, "Controls": [
{ "Name": "CaseResearch_LinkControl" }]}, 
{ "Label": "", "Name": "MergedCases", "Visible": true, "Controls": [
{ "Name": "MergedCasesGrid" }]}, 
{ "Label": "", "Name": "ChildCases", "Visible": true, "Controls": [
{ "Name": "ChildCasesGrid" }]}]}, 
{ "Label": "Associated Knowledge Records", "Name": "AssociatedKnowledgeBaseRecords", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "Articles", "Visible": true, "Controls": [
{ "Name": "Associated_Articles" }]}, 
{ "Label": "", "Name": "KnowledgeArticles", "Visible": true, "Controls": [
{ "Name": "Associated_KnowledgeArticles" }]}]}, 
{ "Label": "Enhanced SLA Details", "Name": " Enhanced_SLA_Details_Tab", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "APPLICABLE SLA", "Name": "Applicable SLA(ENHANCED)", "Visible": true, "Controls": [
{ "Name": "firstresponseslaquickform" }, 
{ "Name": "resolvebyslaquickform" }]}, 
{ "Label": "SLA KPI Instances", "Name": "SLAKPIInstances", "Visible": true, "Controls": [
{ "Name": "SLA_KPI_Instances_List" }]}]}, 
{ "Label": "Additional Details", "Name": "ADDITIONALDETAILS_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "parentcaseandtype", "Visible": true, "Controls": [
{ "Name": "casetypecode" }, 
{ "Name": "parentcaseid" }]}, 
{ "Label": "", "Name": "escalations", "Visible": true, "Controls": [
{ "Name": "isescalated" }, 
{ "Name": "escalatedon" }]}, 
{ "Label": "", "Name": "responses", "Visible": true, "Controls": [
{ "Name": "followupby" }, 
{ "Name": "firstresponsesent" }]}]}, 
{ "Label": "Social Details", "Name": "SOCIALDETAILS_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "social", "Visible": true, "Controls": [
{ "Name": "socialprofileid" }, 
{ "Name": "messagetypecode" }]}, 
{ "Label": "", "Name": "scores", "Visible": true, "Controls": [
{ "Name": "influencescore" }, 
{ "Name": "sentimentvalue" }]}, 
{ "Label": "", "Name": "social3", "Visible": true, "Controls": [
{ "Name": "blockedprofile" }]}]}, 
{ "Label": "Articles and Contract Information", "Name": "KBARTICLE_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "ARTICLES", "Name": "kb article", "Visible": true, "Controls": [
{ "Name": "kbarticleid" }, 
{ "Name": "kbviewer" }]}, 
{ "Label": "CONTRACT", "Name": "contract and product information", "Visible": true, "Controls": [
{ "Name": "contractid" }, 
{ "Name": "contractdetailid" }, 
{ "Name": "productserialnumber" }, 
{ "Name": "contractservicelevelcode" }]}]}]
};

var Xrm = new _xrm(pageData);
