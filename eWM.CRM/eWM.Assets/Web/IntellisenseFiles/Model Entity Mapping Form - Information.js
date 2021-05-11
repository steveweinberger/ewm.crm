/// <reference path="Xrm.js" />

var EntityLogicalName = "recommendationmodelmapping";
var Form_29256bfc_ddef_4073_abff_1abdcbb0f4ad_Properties = {
accountfieldpicklist: "accountfieldpicklist"
,datafilter: "datafilter"
,entitypicklist: "entitypicklist"
,mappingtype: "mappingtype"
,productfieldpicklist: "productfieldpicklist"
,productlineitemrelationshippicklist: "productlineitemrelationshippicklist"
};

var Form_29256bfc_ddef_4073_abff_1abdcbb0f4ad_Controls = {
accountfieldpicklist: "accountfieldpicklist"
,datafilter: "datafilter"
,entitypicklist: "entitypicklist"
,mappingtype: "mappingtype"
,productfieldpicklist: "productfieldpicklist"
,productlineitemrelationshippicklist: "productlineitemrelationshippicklist"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9934", "etc": "9934", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "recommendationmodelmapping",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "accountfieldpicklist", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Yes", "value": 1 }, { "text" : "No", "value": 2 }], "SelectedOption" : { "option" : "Yes", "value": 1 }, "Text": "Yes", "Controls": [{ "Name": "accountfieldpicklist" }] }, 
{ "Name": "datafilter", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 1073741823, "Controls": [{ "Name": "datafilter" }] }, 
{ "Name": "entitypicklist", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Yes", "value": 1 }, { "text" : "No", "value": 2 }], "SelectedOption" : { "option" : "Yes", "value": 1 }, "Text": "Yes", "Controls": [{ "Name": "entitypicklist" }] }, 
{ "Name": "mappingtype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Basket Entity", "value": 1 }, { "text" : "Recommendation Entity", "value": 2 }, { "text" : "Catalog Entity", "value": 3 }], "SelectedOption" : { "option" : "Basket Entity", "value": 1 }, "Text": "Basket Entity", "Controls": [{ "Name": "mappingtype" }] }, 
{ "Name": "productfieldpicklist", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Yes", "value": 1 }, { "text" : "No", "value": 2 }], "SelectedOption" : { "option" : "Yes", "value": 1 }, "Text": "Yes", "Controls": [{ "Name": "productfieldpicklist" }] }, 
{ "Name": "productlineitemrelationshippicklist", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Yes", "value": 1 }, { "text" : "No", "value": 2 }], "SelectedOption" : { "option" : "Yes", "value": 1 }, "Text": "Yes", "Controls": [{ "Name": "productlineitemrelationshippicklist" }] }]
, "AttributesLength": 6, 
"Controls": [
{ "Name": "accountfieldpicklist", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Account Lookup Field", "Attribute": "accountfieldpicklist" }, 
{ "Name": "datafilter", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Data Filter", "Attribute": "datafilter" }, 
{ "Name": "entitypicklist", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entity", "Attribute": "entitypicklist" }, 
{ "Name": "mappingtype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Entity Mapping Type", "Attribute": "mappingtype" }, 
{ "Name": "productfieldpicklist", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product Lookup Field", "Attribute": "productfieldpicklist" }, 
{ "Name": "productlineitemrelationshippicklist", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Product Line Item Relationship", "Attribute": "productlineitemrelationshippicklist" }], 
"ControlsLength": 6, 
"Navigation": [
], 
"Tabs": [
{ "Label": "Mapping Information", "Name": "{d7d9127d-5258-e4b7-a15a-c5677b03c7a7}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Mapping Information", "Name": "{06322ccb-8d6a-3985-a756-e1240b75ccce}", "Visible": true, "Controls": [
{ "Name": "mappingtype" }, 
{ "Name": "entitypicklist" }, 
{ "Name": "accountfieldpicklist" }, 
{ "Name": "productlineitemrelationshippicklist" }, 
{ "Name": "productfieldpicklist" }, 
{ "Name": "datafilter" }]}]}]
};

var Xrm = new _xrm(pageData);
