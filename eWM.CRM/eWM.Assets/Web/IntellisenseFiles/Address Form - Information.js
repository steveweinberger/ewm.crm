/// <reference path="Xrm.js" />

var EntityLogicalName = "customeraddress";
var Form_df5bef3a_9237_40bd_a27c_2cd7fd434706_Properties = {
addresstypecode: "addresstypecode"
,city: "city"
,country: "country"
,fax: "fax"
,freighttermscode: "freighttermscode"
,line1: "line1"
,line2: "line2"
,line3: "line3"
,name: "name"
,postalcode: "postalcode"
,primarycontactname: "primarycontactname"
,shippingmethodcode: "shippingmethodcode"
,stateorprovince: "stateorprovince"
,telephone1: "telephone1"
,telephone2: "telephone2"
};

var Form_df5bef3a_9237_40bd_a27c_2cd7fd434706_Controls = {
addresstypecode: "addresstypecode"
,city: "city"
,country: "country"
,fax: "fax"
,freighttermscode: "freighttermscode"
,line1: "line1"
,line2: "line2"
,line3: "line3"
,name: "name"
,postalcode: "postalcode"
,primarycontactname: "primarycontactname"
,shippingmethodcode: "shippingmethodcode"
,stateorprovince: "stateorprovince"
,telephone1: "telephone1"
,telephone2: "telephone2"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1071", "etc": "1071", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "customeraddress",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "addresstypecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Bill To", "value": 1 }, { "text" : "Ship To", "value": 2 }, { "text" : "Primary", "value": 3 }, { "text" : "Other", "value": 4 }], "SelectedOption" : { "option" : "Bill To", "value": 1 }, "Text": "Bill To", "Controls": [{ "Name": "addresstypecode" }] }, 
{ "Name": "city", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 80, "Controls": [{ "Name": "city" }] }, 
{ "Name": "country", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 80, "Controls": [{ "Name": "country" }] }, 
{ "Name": "fax", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "fax" }] }, 
{ "Name": "freighttermscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "FOB", "value": 1 }, { "text" : "No Charge", "value": 2 }], "SelectedOption" : { "option" : "FOB", "value": 1 }, "Text": "FOB", "Controls": [{ "Name": "freighttermscode" }] }, 
{ "Name": "line1", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "line1" }] }, 
{ "Name": "line2", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "line2" }] }, 
{ "Name": "line3", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "line3" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "name" }] }, 
{ "Name": "postalcode", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 20, "Controls": [{ "Name": "postalcode" }] }, 
{ "Name": "primarycontactname", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 150, "Controls": [{ "Name": "primarycontactname" }] }, 
{ "Name": "shippingmethodcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Airborne", "value": 1 }, { "text" : "DHL", "value": 2 }, { "text" : "FedEx", "value": 3 }, { "text" : "UPS", "value": 4 }, { "text" : "Postal Mail", "value": 5 }, { "text" : "Full Load", "value": 6 }, { "text" : "Will Call", "value": 7 }], "SelectedOption" : { "option" : "Airborne", "value": 1 }, "Text": "Airborne", "Controls": [{ "Name": "shippingmethodcode" }] }, 
{ "Name": "stateorprovince", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "stateorprovince" }] }, 
{ "Name": "telephone1", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "telephone1" }] }, 
{ "Name": "telephone2", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "telephone2" }] }]
, "AttributesLength": 15, 
"Controls": [
{ "Name": "addresstypecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Address Type", "Attribute": "addresstypecode" }, 
{ "Name": "city", "Type": "standard", "Disabled": false, "Visible": true, "Label": "City", "Attribute": "city" }, 
{ "Name": "country", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Country/Region", "Attribute": "country" }, 
{ "Name": "fax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fax", "Attribute": "fax" }, 
{ "Name": "freighttermscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Freight Terms", "Attribute": "freighttermscode" }, 
{ "Name": "line1", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Street 1", "Attribute": "line1" }, 
{ "Name": "line2", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Street 2", "Attribute": "line2" }, 
{ "Name": "line3", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Street 3", "Attribute": "line3" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Address Name", "Attribute": "name" }, 
{ "Name": "postalcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "ZIP/Postal Code", "Attribute": "postalcode" }, 
{ "Name": "primarycontactname", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Address Contact", "Attribute": "primarycontactname" }, 
{ "Name": "shippingmethodcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Shipping Method", "Attribute": "shippingmethodcode" }, 
{ "Name": "stateorprovince", "Type": "standard", "Disabled": false, "Visible": true, "Label": "State/Province", "Attribute": "stateorprovince" }, 
{ "Name": "telephone1", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Main Phone", "Attribute": "telephone1" }, 
{ "Name": "telephone2", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Phone 2", "Attribute": "telephone2" }], 
"ControlsLength": 15, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Customer Address Information", "Name": "customer address information", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "stateorprovince" }, 
{ "Name": "line1" }, 
{ "Name": "postalcode" }, 
{ "Name": "line2" }, 
{ "Name": "country" }, 
{ "Name": "line3" }, 
{ "Name": "addresstypecode" }, 
{ "Name": "city" }]}, 
{ "Label": "Phone Numbers", "Name": "phone numbers", "Visible": true, "Controls": [
{ "Name": "telephone1" }, 
{ "Name": "fax" }, 
{ "Name": "telephone2" }]}, 
{ "Label": "Additional Information", "Name": "additional information", "Visible": true, "Controls": [
{ "Name": "shippingmethodcode" }, 
{ "Name": "primarycontactname" }, 
{ "Name": "freighttermscode" }]}]}]
};

var Xrm = new _xrm(pageData);
