/// <reference path="Xrm.js" />

var EntityLogicalName = "lead";
var Form_e3b6ddb7_8df0_4410_ac7b_fd32e5053d38_Properties = {
address1_composite: "address1_composite"
,campaignid: "campaignid"
,companyname: "companyname"
,description: "description"
,donotbulkemail: "donotbulkemail"
,donotemail: "donotemail"
,donotphone: "donotphone"
,donotpostalmail: "donotpostalmail"
,donotsendmm: "donotsendmm"
,emailaddress1: "emailaddress1"
,fullname: "fullname"
,industrycode: "industrycode"
,jobtitle: "jobtitle"
,lastusedincampaign: "lastusedincampaign"
,leadqualitycode: "leadqualitycode"
,leadsourcecode: "leadsourcecode"
,mobilephone: "mobilephone"
,numberofemployees: "numberofemployees"
,ownerid: "ownerid"
,preferredcontactmethodcode: "preferredcontactmethodcode"
,revenue: "revenue"
,sic: "sic"
,statuscode: "statuscode"
,subject: "subject"
,telephone1: "telephone1"
,transactioncurrencyid: "transactioncurrencyid"
,websiteurl: "websiteurl"
};

var Form_e3b6ddb7_8df0_4410_ac7b_fd32e5053d38_Controls = {
address1_composite: "address1_composite"
,campaignid: "campaignid"
,companyname: "companyname"
,Competitors: "Competitors"
,description: "description"
,donotbulkemail: "donotbulkemail"
,donotemail: "donotemail"
,donotphone: "donotphone"
,donotpostalmail: "donotpostalmail"
,donotsendmm: "donotsendmm"
,emailaddress1: "emailaddress1"
,fullname: "fullname"
,header_leadqualitycode: "header_leadqualitycode"
,header_leadsourcecode: "header_leadsourcecode"
,header_ownerid: "header_ownerid"
,header_statuscode: "header_statuscode"
,industrycode: "industrycode"
,jobtitle: "jobtitle"
,lastusedincampaign: "lastusedincampaign"
,mapcontrol: "mapcontrol"
,mobilephone: "mobilephone"
,notescontrol: "notescontrol"
,numberofemployees: "numberofemployees"
,preferredcontactmethodcode: "preferredcontactmethodcode"
,revenue: "revenue"
,sic: "sic"
,Stakeholders: "Stakeholders"
,subject: "subject"
,telephone1: "telephone1"
,transactioncurrencyid: "transactioncurrencyid"
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
"QueryStringParameters": { "_gridType": "4", "etc": "4", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "lead",
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
{ "Name": "campaignid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "campaignid" }] }, 
{ "Name": "companyname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "companyname" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "donotbulkemail", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotbulkemail" }] }, 
{ "Name": "donotemail", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotemail" }] }, 
{ "Name": "donotphone", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotphone" }] }, 
{ "Name": "donotpostalmail", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotpostalmail" }] }, 
{ "Name": "donotsendmm", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotsendmm" }] }, 
{ "Name": "emailaddress1", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "emailaddress1" }] }, 
{ "Name": "fullname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 160, "Controls": [{ "Name": "fullname" }] }, 
{ "Name": "industrycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Accounting", "value": 1 }, { "text" : "Agriculture and Non-petrol Natural Resource Extraction", "value": 2 }, { "text" : "Broadcasting Printing and Publishing", "value": 3 }, { "text" : "Brokers", "value": 4 }, { "text" : "Building Supply Retail", "value": 5 }, { "text" : "Business Services", "value": 6 }, { "text" : "Consulting", "value": 7 }, { "text" : "Consumer Services", "value": 8 }, { "text" : "Design, Direction and Creative Management", "value": 9 }, { "text" : "Distributors, Dispatchers and Processors", "value": 10 }, { "text" : "Doctor&#39;s Offices and Clinics", "value": 11 }, { "text" : "Durable Manufacturing", "value": 12 }, { "text" : "Eating and Drinking Places", "value": 13 }, { "text" : "Entertainment Retail", "value": 14 }, { "text" : "Equipment Rental and Leasing", "value": 15 }, { "text" : "Financial", "value": 16 }, { "text" : "Food and Tobacco Processing", "value": 17 }, { "text" : "Inbound Capital Intensive Processing", "value": 18 }, { "text" : "Inbound Repair and Services", "value": 19 }, { "text" : "Insurance", "value": 20 }, { "text" : "Legal Services", "value": 21 }, { "text" : "Non-Durable Merchandise Retail", "value": 22 }, { "text" : "Outbound Consumer Service", "value": 23 }, { "text" : "Petrochemical Extraction and Distribution", "value": 24 }, { "text" : "Service Retail", "value": 25 }, { "text" : "SIG Affiliations", "value": 26 }, { "text" : "Social Services", "value": 27 }, { "text" : "Special Outbound Trade Contractors", "value": 28 }, { "text" : "Specialty Realty", "value": 29 }, { "text" : "Transportation", "value": 30 }, { "text" : "Utility Creation and Distribution", "value": 31 }, { "text" : "Vehicle Retail", "value": 32 }, { "text" : "Wholesale", "value": 33 }], "SelectedOption" : { "option" : "Accounting", "value": 1 }, "Text": "Accounting", "Controls": [{ "Name": "industrycode" }] }, 
{ "Name": "jobtitle", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "jobtitle" }] }, 
{ "Name": "lastusedincampaign", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Controls": [{ "Name": "lastusedincampaign" }] }, 
{ "Name": "leadqualitycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Hot", "value": 1 }, { "text" : "Warm", "value": 2 }, { "text" : "Cold", "value": 3 }], "SelectedOption" : { "option" : "Hot", "value": 1 }, "Text": "Hot", "Controls": [{ "Name": "header_leadqualitycode" }] }, 
{ "Name": "leadsourcecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Advertisement", "value": 1 }, { "text" : "Employee Referral", "value": 2 }, { "text" : "External Referral", "value": 3 }, { "text" : "Partner", "value": 4 }, { "text" : "Public Relations", "value": 5 }, { "text" : "Seminar", "value": 6 }, { "text" : "Trade Show", "value": 7 }, { "text" : "Web", "value": 8 }, { "text" : "Word of Mouth", "value": 9 }, { "text" : "Other", "value": 10 }], "SelectedOption" : { "option" : "Advertisement", "value": 1 }, "Text": "Advertisement", "Controls": [{ "Name": "header_leadsourcecode" }] }, 
{ "Name": "mobilephone", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 20, "Controls": [{ "Name": "mobilephone" }] }, 
{ "Name": "numberofemployees", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "numberofemployees" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "preferredcontactmethodcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Any", "value": 1 }, { "text" : "Email", "value": 2 }, { "text" : "Phone", "value": 3 }, { "text" : "Fax", "value": 4 }, { "text" : "Mail", "value": 5 }], "SelectedOption" : { "option" : "Any", "value": 1 }, "Text": "Any", "Controls": [{ "Name": "preferredcontactmethodcode" }] }, 
{ "Name": "revenue", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "revenue" }] }, 
{ "Name": "sic", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 20, "Controls": [{ "Name": "sic" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "New", "value": 1 }, { "text" : "Contacted", "value": 2 }, { "text" : "Qualified", "value": 3 }, { "text" : "Lost", "value": 4 }, { "text" : "Cannot Contact", "value": 5 }, { "text" : "No Longer Interested", "value": 6 }, { "text" : "Canceled", "value": 7 }], "SelectedOption" : { "option" : "New", "value": 1 }, "Text": "New", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "subject", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "subject" }] }, 
{ "Name": "telephone1", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "telephone1" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "websiteurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "websiteurl" }] }]
, "AttributesLength": 27, 
"Controls": [
{ "Name": "address1_composite", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Address", "Attribute": "address1_composite" }, 
{ "Name": "campaignid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Source Campaign", "Attribute": "campaignid" }, 
{ "Name": "companyname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Company", "Attribute": "companyname" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "donotbulkemail", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Bulk Email", "Attribute": "donotbulkemail" }, 
{ "Name": "donotemail", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Email", "Attribute": "donotemail" }, 
{ "Name": "donotphone", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Phone", "Attribute": "donotphone" }, 
{ "Name": "donotpostalmail", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Mail", "Attribute": "donotpostalmail" }, 
{ "Name": "donotsendmm", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Marketing Materials", "Attribute": "donotsendmm" }, 
{ "Name": "emailaddress1", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Email", "Attribute": "emailaddress1" }, 
{ "Name": "fullname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "fullname" }, 
{ "Name": "header_leadqualitycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rating", "Attribute": "leadqualitycode" }, 
{ "Name": "header_leadsourcecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Lead Source", "Attribute": "leadsourcecode" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statuscode" }, 
{ "Name": "industrycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Industry", "Attribute": "industrycode" }, 
{ "Name": "jobtitle", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Job Title", "Attribute": "jobtitle" }, 
{ "Name": "lastusedincampaign", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Campaign Date", "Attribute": "lastusedincampaign" }, 
{ "Name": "mobilephone", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Mobile Phone", "Attribute": "mobilephone" }, 
{ "Name": "numberofemployees", "Type": "standard", "Disabled": false, "Visible": true, "Label": "No. of Employees", "Attribute": "numberofemployees" }, 
{ "Name": "preferredcontactmethodcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Preferred", "Attribute": "preferredcontactmethodcode" }, 
{ "Name": "revenue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Annual Revenue", "Attribute": "revenue" }, 
{ "Name": "sic", "Type": "standard", "Disabled": false, "Visible": true, "Label": "SIC Code", "Attribute": "sic" }, 
{ "Name": "subject", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Topic", "Attribute": "subject" }, 
{ "Name": "telephone1", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Business Phone", "Attribute": "telephone1" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "websiteurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Website", "Attribute": "websiteurl" }], 
"ControlsLength": 27, 
"Navigation": [
{"Id": "navActivities", "Key": "navActivities", "Label": "", "Visible": true }, 
{"Id": "navCampaignsInSFA", "Key": "navCampaignsInSFA", "Label": "", "Visible": true }, 
{"Id": "navLeadCompetitor", "Key": "navLeadCompetitor", "Label": "", "Visible": true }, 
{"Id": "navConnections", "Key": "navConnections", "Label": "", "Visible": true }, 
{"Id": "navDocument", "Key": "navDocument", "Label": "", "Visible": true }, 
{"Id": "navAsyncOperations", "Key": "navAsyncOperations", "Label": "", "Visible": true }, 
{"Id": "navAudit", "Key": "navAudit", "Label": "", "Visible": true }, 
{"Id": "navProcessSessions", "Key": "navProcessSessions", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "Summary", "Name": "Summary", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "CONTACT", "Name": "Contact", "Visible": true, "Controls": [
{ "Name": "subject" }, 
{ "Name": "fullname" }, 
{ "Name": "jobtitle" }, 
{ "Name": "telephone1" }, 
{ "Name": "mobilephone" }, 
{ "Name": "emailaddress1" }]}, 
{ "Label": "COMPANY", "Name": "company", "Visible": true, "Controls": [
{ "Name": "companyname" }, 
{ "Name": "websiteurl" }, 
{ "Name": "address1_composite" }]}, 
{ "Label": "", "Name": "MapSection", "Visible": true, "Controls": [
{ "Name": "mapcontrol" }]}, 
{ "Label": "SOCIAL PANE", "Name": "SOCIAL_PANE", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "", "Name": "RELATED_TAB", "Visible": true, "Controls": [
{ "Name": "Stakeholders" }, 
{ "Name": "Competitors" }]}]}, 
{ "Label": "Details", "Name": "details_tab", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Lead Information", "Name": "lead_information", "Visible": true, "Controls": [
{ "Name": "description" }, 
{ "Name": "industrycode" }, 
{ "Name": "revenue" }, 
{ "Name": "numberofemployees" }, 
{ "Name": "sic" }, 
{ "Name": "transactioncurrencyid" }]}, 
{ "Label": "MARKETING INFORMATION", "Name": "marketing_information", "Visible": true, "Controls": [
{ "Name": "campaignid" }, 
{ "Name": "donotsendmm" }, 
{ "Name": "lastusedincampaign" }]}, 
{ "Label": "CONTACT METHOD", "Name": "contact_methods", "Visible": true, "Controls": [
{ "Name": "preferredcontactmethodcode" }, 
{ "Name": "donotemail" }, 
{ "Name": "donotbulkemail" }, 
{ "Name": "donotphone" }, 
{ "Name": "donotpostalmail" }]}]}]
};

var Xrm = new _xrm(pageData);
