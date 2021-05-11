/// <reference path="Xrm.js" />

var EntityLogicalName = "invoice";
var Form_c9f7c8e8_324f_4ae4_9927_14efcba20d08_Properties = {
billto_composite: "billto_composite"
,customerid: "customerid"
,datedelivered: "datedelivered"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,duedate: "duedate"
,freightamount: "freightamount"
,invoicenumber: "invoicenumber"
,ispricelocked: "ispricelocked"
,name: "name"
,opportunityid: "opportunityid"
,ownerid: "ownerid"
,paymenttermscode: "paymenttermscode"
,pricelevelid: "pricelevelid"
,salesorderid: "salesorderid"
,shippingmethodcode: "shippingmethodcode"
,shipto_composite: "shipto_composite"
,statecode: "statecode"
,statuscode: "statuscode"
,totalamount: "totalamount"
,totalamountlessfreight: "totalamountlessfreight"
,totallineitemamount: "totallineitemamount"
,totaltax: "totaltax"
,transactioncurrencyid: "transactioncurrencyid"
,willcall: "willcall"
};

var Form_c9f7c8e8_324f_4ae4_9927_14efcba20d08_Controls = {
billto_composite: "billto_composite"
,customerid: "customerid"
,datedelivered: "datedelivered"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,duedate: "duedate"
,DynamicPropertiesList_LinkControl: "DynamicPropertiesList_LinkControl"
,freightamount: "freightamount"
,header_ownerid: "header_ownerid"
,header_statecode: "header_statecode"
,header_statuscode: "header_statuscode"
,header_totalamount: "header_totalamount"
,invoicedetailsGrid: "invoicedetailsGrid"
,invoicenumber: "invoicenumber"
,ispricelocked: "ispricelocked"
,name: "name"
,notescontrol: "notescontrol"
,opportunityid: "opportunityid"
,paymenttermscode: "paymenttermscode"
,pricelevelid: "pricelevelid"
,ProductSuggestions_LinkControl: "ProductSuggestions_LinkControl"
,salesorderid: "salesorderid"
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
"QueryStringParameters": { "_gridType": "1090", "etc": "1090", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "invoice",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "billto_composite", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1000, "Controls": [{ "Name": "billto_composite" }] }, 
{ "Name": "customerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerid" }] }, 
{ "Name": "datedelivered", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "datedelivered" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "discountamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discountamount" }] }, 
{ "Name": "discountpercentage", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discountpercentage" }] }, 
{ "Name": "duedate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "duedate" }] }, 
{ "Name": "freightamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "freightamount" }] }, 
{ "Name": "invoicenumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "invoicenumber" }] }, 
{ "Name": "ispricelocked", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : null, "Controls": [{ "Name": "ispricelocked" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "name" }] }, 
{ "Name": "opportunityid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "opportunityid" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "paymenttermscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Net 30", "value": 1 }, { "text" : "2% 10, Net 30", "value": 2 }, { "text" : "Net 45", "value": 3 }, { "text" : "Net 60", "value": 4 }], "SelectedOption" : { "option" : "Net 30", "value": 1 }, "Text": "Net 30", "Controls": [{ "Name": "paymenttermscode" }] }, 
{ "Name": "pricelevelid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "pricelevelid" }] }, 
{ "Name": "salesorderid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "salesorderid" }] }, 
{ "Name": "shippingmethodcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Airborne", "value": 1 }, { "text" : "DHL", "value": 2 }, { "text" : "FedEx", "value": 3 }, { "text" : "UPS", "value": 4 }, { "text" : "Postal Mail", "value": 5 }, { "text" : "Full Load", "value": 6 }, { "text" : "Will Call", "value": 7 }], "SelectedOption" : { "option" : "Airborne", "value": 1 }, "Text": "Airborne", "Controls": [{ "Name": "shippingmethodcode" }] }, 
{ "Name": "shipto_composite", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1000, "Controls": [{ "Name": "shipto_composite" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Closed (deprecated)", "value": 1 }, { "text" : "Paid", "value": 2 }, { "text" : "Canceled", "value": 3 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "header_statecode" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "New", "value": 1 }, { "text" : "Partially Shipped", "value": 2 }, { "text" : "Billed", "value": 4 }, { "text" : "Booked (applies to services)", "value": 5 }, { "text" : "Installed (applies to services)", "value": 6 }, { "text" : "Canceled (deprecated)", "value": 3 }, { "text" : "Paid in Full (deprecated)", "value": 7 }, { "text" : "Complete", "value": 100001 }, { "text" : "Partial", "value": 100002 }, { "text" : "Canceled", "value": 100003 }], "SelectedOption" : { "option" : "New", "value": 1 }, "Text": "New", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "totalamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "header_totalamount" }, { "Name": "totalamount" }] }, 
{ "Name": "totalamountlessfreight", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totalamountlessfreight" }] }, 
{ "Name": "totallineitemamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totallineitemamount" }] }, 
{ "Name": "totaltax", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totaltax" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "willcall", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "willcall" }] }]
, "AttributesLength": 26, 
"Controls": [
{ "Name": "billto_composite", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Bill To Address", "Attribute": "billto_composite" }, 
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customerid" }, 
{ "Name": "datedelivered", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Date Delivered", "Attribute": "datedelivered" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "discountamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(-) Discount", "Attribute": "discountamount" }, 
{ "Name": "discountpercentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(-) Discount (%)", "Attribute": "discountpercentage" }, 
{ "Name": "duedate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Due Date", "Attribute": "duedate" }, 
{ "Name": "freightamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(+) Freight Amount", "Attribute": "freightamount" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "header_totalamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Amount", "Attribute": "totalamount" }, 
{ "Name": "invoicenumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Invoice ID", "Attribute": "invoicenumber" }, 
{ "Name": "ispricelocked", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Prices Locked", "Attribute": "ispricelocked" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "opportunityid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Opportunity", "Attribute": "opportunityid" }, 
{ "Name": "paymenttermscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Payment Terms", "Attribute": "paymenttermscode" }, 
{ "Name": "pricelevelid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Price List", "Attribute": "pricelevelid" }, 
{ "Name": "salesorderid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Order", "Attribute": "salesorderid" }, 
{ "Name": "shippingmethodcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Shipping Method", "Attribute": "shippingmethodcode" }, 
{ "Name": "shipto_composite", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ship To Address", "Attribute": "shipto_composite" }, 
{ "Name": "totalamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Amount", "Attribute": "totalamount" }, 
{ "Name": "totalamountlessfreight", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Pre-Freight Amount", "Attribute": "totalamountlessfreight" }, 
{ "Name": "totallineitemamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Detail Amount", "Attribute": "totallineitemamount" }, 
{ "Name": "totaltax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(+) Total Tax", "Attribute": "totaltax" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "willcall", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ship To", "Attribute": "willcall" }], 
"ControlsLength": 27, 
"Navigation": [
{"Id": "navProducts", "Key": "navProducts", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "Summary", "Name": "Summary_tab", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "INVOICE INFORMATION", "Name": "invoice information", "Visible": true, "Controls": [
{ "Name": "invoicenumber" }, 
{ "Name": "name" }, 
{ "Name": "transactioncurrencyid" }, 
{ "Name": "pricelevelid" }, 
{ "Name": "ispricelocked" }]}, 
{ "Label": "SHIPPING DATES", "Name": "dates", "Visible": true, "Controls": [
{ "Name": "datedelivered" }, 
{ "Name": "duedate" }]}, 
{ "Label": "SHIPPING INFORMATION", "Name": "shipping information", "Visible": true, "Controls": [
{ "Name": "shippingmethodcode" }, 
{ "Name": "paymenttermscode" }]}, 
{ "Label": "ADDRESSES", "Name": "addresses", "Visible": true, "Controls": [
{ "Name": "billto_composite" }, 
{ "Name": "willcall" }, 
{ "Name": "shipto_composite" }]}, 
{ "Label": "PRODUCTS", "Name": "products", "Visible": true, "Controls": [
{ "Name": "invoicedetailsGrid" }]}, 
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
{ "Name": "salesorderid" }, 
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
