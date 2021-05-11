/// <reference path="Xrm.js" />

var EntityLogicalName = "dynamicproperty";
var Form_b955ef97_f38a_4412_aa21_adb00a83effc_Properties = {
datatype: "datatype"
,defaultvaluedecimal: "defaultvaluedecimal"
,defaultvaluedouble: "defaultvaluedouble"
,defaultvalueinteger: "defaultvalueinteger"
,defaultvalueoptionset: "defaultvalueoptionset"
,defaultvaluestring: "defaultvaluestring"
,description: "description"
,ishidden: "ishidden"
,isreadonly: "isreadonly"
,isrequired: "isrequired"
,maxlengthstring: "maxlengthstring"
,maxvaluedecimal: "maxvaluedecimal"
,maxvaluedouble: "maxvaluedouble"
,maxvalueinteger: "maxvalueinteger"
,minvaluedecimal: "minvaluedecimal"
,minvaluedouble: "minvaluedouble"
,minvalueinteger: "minvalueinteger"
,name: "name"
,precision: "precision"
,regardingobjectid: "regardingobjectid"
};

var Form_b955ef97_f38a_4412_aa21_adb00a83effc_Controls = {
datatype: "datatype"
,defaultvaluedecimal: "defaultvaluedecimal"
,defaultvaluedouble: "defaultvaluedouble"
,defaultvalueinteger: "defaultvalueinteger"
,defaultvalueoptionset: "defaultvalueoptionset"
,defaultvaluestring: "defaultvaluestring"
,description: "description"
,grid_DynamicPropertyOptionSetItem: "grid_DynamicPropertyOptionSetItem"
,ishidden: "ishidden"
,isreadonly: "isreadonly"
,isrequired: "isrequired"
,maxlengthstring: "maxlengthstring"
,maxvaluedecimal: "maxvaluedecimal"
,maxvaluedouble: "maxvaluedouble"
,maxvalueinteger: "maxvalueinteger"
,minvaluedecimal: "minvaluedecimal"
,minvaluedouble: "minvaluedouble"
,minvalueinteger: "minvalueinteger"
,name: "name"
,precision: "precision"
,regardingobjectid: "regardingobjectid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1048", "etc": "1048", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "dynamicproperty",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "datatype", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Option Set", "value": 0 }, { "text" : "Decimal", "value": 1 }, { "text" : "Floating Point Number", "value": 2 }, { "text" : "Single Line Of Text", "value": 3 }, { "text" : "Whole Number", "value": 4 }], "SelectedOption" : { "option" : "Option Set", "value": 0 }, "Text": "Option Set", "Controls": [{ "Name": "datatype" }] }, 
{ "Name": "defaultvaluedecimal", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 2, "Controls": [{ "Name": "defaultvaluedecimal" }] }, 
{ "Name": "defaultvaluedouble", "Value": null, "Type" : "double", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 5, "Controls": [{ "Name": "defaultvaluedouble" }] }, 
{ "Name": "defaultvalueinteger", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "defaultvalueinteger" }] }, 
{ "Name": "defaultvalueoptionset", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "defaultvalueoptionset" }] }, 
{ "Name": "defaultvaluestring", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 1024, "Controls": [{ "Name": "defaultvaluestring" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "ishidden", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "ishidden" }] }, 
{ "Name": "isreadonly", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isreadonly" }] }, 
{ "Name": "isrequired", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isrequired" }] }, 
{ "Name": "maxlengthstring", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1024, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "maxlengthstring" }] }, 
{ "Name": "maxvaluedecimal", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 2, "Controls": [{ "Name": "maxvaluedecimal" }] }, 
{ "Name": "maxvaluedouble", "Value": null, "Type" : "double", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 5, "Controls": [{ "Name": "maxvaluedouble" }] }, 
{ "Name": "maxvalueinteger", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "maxvalueinteger" }] }, 
{ "Name": "minvaluedecimal", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 2, "Controls": [{ "Name": "minvaluedecimal" }] }, 
{ "Name": "minvaluedouble", "Value": null, "Type" : "double", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 5, "Controls": [{ "Name": "minvaluedouble" }] }, 
{ "Name": "minvalueinteger", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "minvalueinteger" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "name" }] }, 
{ "Name": "precision", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 5, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "precision" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }]
, "AttributesLength": 20, 
"Controls": [
{ "Name": "datatype", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Data Type", "Attribute": "datatype" }, 
{ "Name": "defaultvaluedecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Value", "Attribute": "defaultvaluedecimal" }, 
{ "Name": "defaultvaluedouble", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Value", "Attribute": "defaultvaluedouble" }, 
{ "Name": "defaultvalueinteger", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Value", "Attribute": "defaultvalueinteger" }, 
{ "Name": "defaultvalueoptionset", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Value", "Attribute": "defaultvalueoptionset" }, 
{ "Name": "defaultvaluestring", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Default Value", "Attribute": "defaultvaluestring" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "ishidden", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Hidden", "Attribute": "ishidden" }, 
{ "Name": "isreadonly", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Read-Only", "Attribute": "isreadonly" }, 
{ "Name": "isrequired", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Required", "Attribute": "isrequired" }, 
{ "Name": "maxlengthstring", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Maximum Length", "Attribute": "maxlengthstring" }, 
{ "Name": "maxvaluedecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Maximum Value", "Attribute": "maxvaluedecimal" }, 
{ "Name": "maxvaluedouble", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Maximum Value", "Attribute": "maxvaluedouble" }, 
{ "Name": "maxvalueinteger", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Maximum Value", "Attribute": "maxvalueinteger" }, 
{ "Name": "minvaluedecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Minimum Value", "Attribute": "minvaluedecimal" }, 
{ "Name": "minvaluedouble", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Minimum Value", "Attribute": "minvaluedouble" }, 
{ "Name": "minvalueinteger", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Minimum Value", "Attribute": "minvalueinteger" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "precision", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Precision", "Attribute": "precision" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }], 
"ControlsLength": 20, 
"Navigation": [
], 
"Tabs": [
{ "Label": "", "Name": "dynamic_property_summary", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "", "Name": "dynamic_property_properties_1", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "isreadonly" }, 
{ "Name": "isrequired" }, 
{ "Name": "ishidden" }]}, 
{ "Label": "", "Name": "dynamic_property_properties_3", "Visible": true, "Controls": [
{ "Name": "regardingobjectid" }, 
{ "Name": "description" }]}]}, 
{ "Label": "", "Name": "dynamic_property_properties", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "PROPERTY TYPE", "Name": "dynamic_property_properties_2", "Visible": true, "Controls": [
{ "Name": "datatype" }, 
{ "Name": "defaultvaluedecimal" }, 
{ "Name": "defaultvaluedouble" }, 
{ "Name": "defaultvalueinteger" }, 
{ "Name": "defaultvaluestring" }, 
{ "Name": "defaultvalueoptionset" }]}, 
{ "Label": "", "Name": "dynamic_property_properties_4", "Visible": true, "Controls": [
]}, 
{ "Label": "", "Name": "dynamic_property_properties_3", "Visible": true, "Controls": [
{ "Name": "grid_DynamicPropertyOptionSetItem" }]}, 
{ "Label": "", "Name": "dynamic_property_properties_4", "Visible": true, "Controls": [
{ "Name": "maxlengthstring" }, 
{ "Name": "minvaluedecimal" }, 
{ "Name": "maxvaluedecimal" }, 
{ "Name": "minvaluedouble" }, 
{ "Name": "maxvaluedouble" }, 
{ "Name": "minvalueinteger" }, 
{ "Name": "maxvalueinteger" }, 
{ "Name": "precision" }]}]}]
};

var Xrm = new _xrm(pageData);
