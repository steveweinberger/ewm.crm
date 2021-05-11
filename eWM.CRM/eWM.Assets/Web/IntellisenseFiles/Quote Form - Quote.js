/// <reference path="Xrm.js" />

var EntityLogicalName = "quote";
var Form_54076a2d_d043_4a1b_b061_4d06846371a9_Properties = {
billto_composite: "billto_composite"
,customerid: "customerid"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,effectivefrom: "effectivefrom"
,effectiveto: "effectiveto"
,freightamount: "freightamount"
,freighttermscode: "freighttermscode"
,name: "name"
,opportunityid: "opportunityid"
,ownerid: "ownerid"
,paymenttermscode: "paymenttermscode"
,pricelevelid: "pricelevelid"
,quotenumber: "quotenumber"
,revisionnumber: "revisionnumber"
,shippingmethodcode: "shippingmethodcode"
,shipto_composite: "shipto_composite"
,totalamount: "totalamount"
,totalamountlessfreight: "totalamountlessfreight"
,totallineitemamount: "totallineitemamount"
,totaltax: "totaltax"
,transactioncurrencyid: "transactioncurrencyid"
,willcall: "willcall"
};

var Form_54076a2d_d043_4a1b_b061_4d06846371a9_Controls = {
billto_composite: "billto_composite"
,customerid: "customerid"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,DynamicPropertiesList_LinkControl: "DynamicPropertiesList_LinkControl"
,freightamount: "freightamount"
,freighttermscode: "freighttermscode"
,header_effectivefrom: "header_effectivefrom"
,header_effectiveto: "header_effectiveto"
,header_ownerid: "header_ownerid"
,header_totalamount: "header_totalamount"
,name: "name"
,notescontrol: "notescontrol"
,opportunityid: "opportunityid"
,paymenttermscode: "paymenttermscode"
,pricelevelid: "pricelevelid"
,ProductSuggestions_LinkControl: "ProductSuggestions_LinkControl"
,quotedetailsGrid: "quotedetailsGrid"
,quotenumber: "quotenumber"
,revisionnumber: "revisionnumber"
,shippingmethodcode: "shippingmethodcode"
,shipto_composite: "shipto_composite"
,totalamount: "totalamount"
,totalamountlessfreight: "totalamountlessfreight"
,totallineitemamount: "totallineitemamount"
,totaltax: "totaltax"
,transactioncurrencyid: "transactioncurrencyid"
,willcall: "willcall"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1084", "etc": "1084", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "quote",
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
{"Id": "navProducts", "Key": "navProducts", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "Summary", "Name": "Summary_tab", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "QUOTE INFORMATION", "Name": "quote information", "Visible": true, "Controls": [
{ "Name": "quotenumber" }, 
{ "Name": "revisionnumber" }, 
{ "Name": "name" }, 
{ "Name": "transactioncurrencyid" }, 
{ "Name": "pricelevelid" }]}, 
{ "Label": "SHIPPING INFORMATION", "Name": "shipping information", "Visible": true, "Controls": [
{ "Name": "shippingmethodcode" }, 
{ "Name": "paymenttermscode" }, 
{ "Name": "freighttermscode" }]}, 
{ "Label": "ADDRESSES", "Name": "addresses", "Visible": true, "Controls": [
{ "Name": "billto_composite" }, 
{ "Name": "willcall" }, 
{ "Name": "shipto_composite" }]}, 
{ "Label": "PRODUCTS", "Name": "products", "Visible": true, "Controls": [
{ "Name": "quotedetailsGrid" }]}, 
{ "Label": "", "Name": "suggestionsection", "Visible": true, "Controls": [
{ "Name": "ProductSuggestions_LinkControl" }]}, 
{ "Label": "", "Name": "DynamicProperties", "Visible": true, "Controls": [
{ "Name": "DynamicPropertiesList_LinkControl" }]}, 
{ "Label": "Product Line Item Totals", "Name": "totals", "Visible": true, "Controls": [
{ "Name": "totallineitemamount" }, 
{ "Name": "discountpercentage" }, 
{ "Name": "discountamount" }, 
{ "Name": "totalamountlessfreight" }, 
{ "Name": "freightamount" }, 
{ "Name": "totaltax" }, 
{ "Name": "totalamount" }]}, 
{ "Label": "SALES INFORMATION", "Name": "sales_information", "Visible": true, "Controls": [
{ "Name": "opportunityid" }, 
{ "Name": "customerid" }]}, 
{ "Label": "DESCRIPTION", "Name": "description_section", "Visible": true, "Controls": [
{ "Name": "description" }]}]}, 
{ "Label": "Details", "Name": "details_tab", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "SOCIAL PANE", "Name": "Social Pane", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "Section", "Name": "tab_2_section_2", "Visible": true, "Controls": [
]}]}]
};

var Xrm = new _xrm(pageData);
