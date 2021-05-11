/// <reference path="Xrm.js" />

var EntityLogicalName = "entitlement";
var Form_b1b386f2_c1f3_4d38_bd64_87b9021e24c5_Properties = {
allocationtypecode: "allocationtypecode"
,customerid: "customerid"
,decreaseremainingon: "decreaseremainingon"
,description: "description"
,enddate: "enddate"
,isdefault: "isdefault"
,name: "name"
,ownerid: "ownerid"
,remainingterms: "remainingterms"
,restrictcasecreation: "restrictcasecreation"
,slaid: "slaid"
,startdate: "startdate"
,statecode: "statecode"
,totalterms: "totalterms"
};

var Form_b1b386f2_c1f3_4d38_bd64_87b9021e24c5_Controls = {
allocationtypecode: "allocationtypecode"
,customerid: "customerid"
,decreaseremainingon: "decreaseremainingon"
,description: "description"
,enddate: "enddate"
,grid_EntitlementChannel: "grid_EntitlementChannel"
,grid_EntitlementContacts: "grid_EntitlementContacts"
,grid_EntitlementProducts: "grid_EntitlementProducts"
,header_customerid: "header_customerid"
,header_enddate: "header_enddate"
,header_remainingterms: "header_remainingterms"
,header_statecode: "header_statecode"
,isdefault: "isdefault"
,name: "name"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,remainingterms: "remainingterms"
,restrictcasecreation: "restrictcasecreation"
,slaid: "slaid"
,startdate: "startdate"
,totalterms: "totalterms"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9700", "etc": "9700", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "entitlement",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "allocationtypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Number of cases", "value": 0 }, { "text" : "Number of hours", "value": 1 }], "SelectedOption" : { "option" : "Number of cases", "value": 0 }, "Text": "Number of cases", "Controls": [{ "Name": "allocationtypecode" }] }, 
{ "Name": "customerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerid" }, { "Name": "header_customerid" }] }, 
{ "Name": "decreaseremainingon", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Case Resolution", "value": 0 }, { "text" : "Case Creation", "value": 1 }], "SelectedOption" : { "option" : "Case Resolution", "value": 0 }, "Text": "Case Resolution", "Controls": [{ "Name": "decreaseremainingon" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "enddate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "enddate" }, { "Name": "header_enddate" }] }, 
{ "Name": "isdefault", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isdefault" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "remainingterms", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 2, "Controls": [{ "Name": "header_remainingterms" }, { "Name": "remainingterms" }] }, 
{ "Name": "restrictcasecreation", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "restrictcasecreation" }] }, 
{ "Name": "slaid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "slaid" }] }, 
{ "Name": "startdate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "startdate" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Draft", "value": 0 }, { "text" : "Active", "value": 1 }, { "text" : "Cancelled", "value": 2 }, { "text" : "Expired", "value": 3 }, { "text" : "Waiting", "value": 4 }], "SelectedOption" : { "option" : "Draft", "value": 0 }, "Text": "Draft", "Controls": [{ "Name": "header_statecode" }] }, 
{ "Name": "totalterms", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "totalterms" }] }]
, "AttributesLength": 14, 
"Controls": [
{ "Name": "allocationtypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Allocation Type", "Attribute": "allocationtypecode" }, 
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Primary Customer", "Attribute": "customerid" }, 
{ "Name": "decreaseremainingon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Decrease Remaining On", "Attribute": "decreaseremainingon" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "enddate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Date", "Attribute": "enddate" }, 
{ "Name": "header_customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customerid" }, 
{ "Name": "header_enddate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "End Date", "Attribute": "enddate" }, 
{ "Name": "header_remainingterms", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Remaining Terms", "Attribute": "remainingterms" }, 
{ "Name": "header_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "isdefault", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Is Default", "Attribute": "isdefault" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "remainingterms", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Remaining Terms", "Attribute": "remainingterms" }, 
{ "Name": "restrictcasecreation", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Restrict based on entitlement terms", "Attribute": "restrictcasecreation" }, 
{ "Name": "slaid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "SLA", "Attribute": "slaid" }, 
{ "Name": "startdate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Start Date", "Attribute": "startdate" }, 
{ "Name": "totalterms", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Terms", "Attribute": "totalterms" }], 
"ControlsLength": 17, 
"Navigation": [
{"Id": "navCases", "Key": "navCases", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "INFORMATION", "Name": "information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "customerid" }, 
{ "Name": "startdate" }, 
{ "Name": "enddate" }, 
{ "Name": "restrictcasecreation" }, 
{ "Name": "slaid" }, 
{ "Name": "ownerid" }, 
{ "Name": "description" }, 
{ "Name": "isdefault" }]}, 
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "ENTITLEMENT TERMS", "Name": "entitlementterms", "Visible": true, "Controls": [
{ "Name": "allocationtypecode" }, 
{ "Name": "decreaseremainingon" }, 
{ "Name": "totalterms" }, 
{ "Name": "remainingterms" }]}, 
{ "Label": "", "Name": "entitlementterms", "Visible": true, "Controls": [
{ "Name": "grid_EntitlementChannel" }]}, 
{ "Label": "", "Name": "products", "Visible": true, "Controls": [
{ "Name": "grid_EntitlementProducts" }]}, 
{ "Label": "", "Name": "contacts", "Visible": true, "Controls": [
{ "Name": "grid_EntitlementContacts" }]}]}]
};

var Xrm = new _xrm(pageData);
