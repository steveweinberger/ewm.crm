/// <reference path="Xrm.js" />

var EntityLogicalName = "salesorder";
var Form_d598792c_3ff0_43f3_b3e3_bbd70b99e1a5_Properties = {
billto_composite: "billto_composite"
,customerid: "customerid"
,datefulfilled: "datefulfilled"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,freightamount: "freightamount"
,freighttermscode: "freighttermscode"
,ispricelocked: "ispricelocked"
,name: "name"
,opportunityid: "opportunityid"
,ordernumber: "ordernumber"
,ownerid: "ownerid"
,paymenttermscode: "paymenttermscode"
,pricelevelid: "pricelevelid"
,quoteid: "quoteid"
,requestdeliveryby: "requestdeliveryby"
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

var Form_d598792c_3ff0_43f3_b3e3_bbd70b99e1a5_Controls = {
billto_composite: "billto_composite"
,customerid: "customerid"
,datefulfilled: "datefulfilled"
,description: "description"
,discountamount: "discountamount"
,discountpercentage: "discountpercentage"
,DynamicPropertiesList_LinkControl: "DynamicPropertiesList_LinkControl"
,freightamount: "freightamount"
,freighttermscode: "freighttermscode"
,header_ownerid: "header_ownerid"
,header_statecode: "header_statecode"
,header_statuscode: "header_statuscode"
,header_totalamount: "header_totalamount"
,ispricelocked: "ispricelocked"
,name: "name"
,notescontrol: "notescontrol"
,opportunityid: "opportunityid"
,ordernumber: "ordernumber"
,paymenttermscode: "paymenttermscode"
,pricelevelid: "pricelevelid"
,ProductSuggestions_LinkControl: "ProductSuggestions_LinkControl"
,quoteid: "quoteid"
,requestdeliveryby: "requestdeliveryby"
,salesorderdetailsGrid: "salesorderdetailsGrid"
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
"QueryStringParameters": { "_gridType": "1088", "etc": "1088", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "salesorder",
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
{ "Name": "datefulfilled", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "datefulfilled" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "discountamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discountamount" }] }, 
{ "Name": "discountpercentage", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "discountpercentage" }] }, 
{ "Name": "freightamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "freightamount" }] }, 
{ "Name": "freighttermscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "FOB", "value": 1 }, { "text" : "No Charge", "value": 2 }], "SelectedOption" : { "option" : "FOB", "value": 1 }, "Text": "FOB", "Controls": [{ "Name": "freighttermscode" }] }, 
{ "Name": "ispricelocked", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : null, "Controls": [{ "Name": "ispricelocked" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 300, "Controls": [{ "Name": "name" }] }, 
{ "Name": "opportunityid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "opportunityid" }] }, 
{ "Name": "ordernumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "ordernumber" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "paymenttermscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Net 30", "value": 1 }, { "text" : "2% 10, Net 30", "value": 2 }, { "text" : "Net 45", "value": 3 }, { "text" : "Net 60", "value": 4 }], "SelectedOption" : { "option" : "Net 30", "value": 1 }, "Text": "Net 30", "Controls": [{ "Name": "paymenttermscode" }] }, 
{ "Name": "pricelevelid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "pricelevelid" }] }, 
{ "Name": "quoteid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "quoteid" }] }, 
{ "Name": "requestdeliveryby", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "requestdeliveryby" }] }, 
{ "Name": "shippingmethodcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Airborne", "value": 1 }, { "text" : "DHL", "value": 2 }, { "text" : "FedEx", "value": 3 }, { "text" : "UPS", "value": 4 }, { "text" : "Postal Mail", "value": 5 }, { "text" : "Full Load", "value": 6 }, { "text" : "Will Call", "value": 7 }], "SelectedOption" : { "option" : "Airborne", "value": 1 }, "Text": "Airborne", "Controls": [{ "Name": "shippingmethodcode" }] }, 
{ "Name": "shipto_composite", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1000, "Controls": [{ "Name": "shipto_composite" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Submitted", "value": 1 }, { "text" : "Canceled", "value": 2 }, { "text" : "Fulfilled", "value": 3 }, { "text" : "Invoiced", "value": 4 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "header_statecode" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "In Progress", "value": 3 }, { "text" : "No Money", "value": 4 }, { "text" : "New", "value": 1 }, { "text" : "Pending", "value": 2 }, { "text" : "Complete", "value": 100001 }, { "text" : "Partial", "value": 100002 }, { "text" : "Invoiced", "value": 100003 }], "SelectedOption" : { "option" : "In Progress", "value": 3 }, "Text": "In Progress", "Controls": [{ "Name": "header_statuscode" }] }, 
{ "Name": "totalamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "header_totalamount" }, { "Name": "totalamount" }] }, 
{ "Name": "totalamountlessfreight", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totalamountlessfreight" }] }, 
{ "Name": "totallineitemamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totallineitemamount" }] }, 
{ "Name": "totaltax", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "totaltax" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "willcall", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "willcall" }] }]
, "AttributesLength": 27, 
"Controls": [
{ "Name": "billto_composite", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Bill To Address", "Attribute": "billto_composite" }, 
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Potential Customer", "Attribute": "customerid" }, 
{ "Name": "datefulfilled", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Date Fulfilled", "Attribute": "datefulfilled" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "DESCRIPTION", "Attribute": "description" }, 
{ "Name": "discountamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(-) Discount", "Attribute": "discountamount" }, 
{ "Name": "discountpercentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(-) Discount (%)", "Attribute": "discountpercentage" }, 
{ "Name": "freightamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(+) Freight Amount", "Attribute": "freightamount" }, 
{ "Name": "freighttermscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Freight Terms", "Attribute": "freighttermscode" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "header_statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "header_totalamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Amount", "Attribute": "totalamount" }, 
{ "Name": "ispricelocked", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Prices Locked", "Attribute": "ispricelocked" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "opportunityid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Opportunity", "Attribute": "opportunityid" }, 
{ "Name": "ordernumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Order ID", "Attribute": "ordernumber" }, 
{ "Name": "paymenttermscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Payment Terms", "Attribute": "paymenttermscode" }, 
{ "Name": "pricelevelid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Price List", "Attribute": "pricelevelid" }, 
{ "Name": "quoteid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Quote", "Attribute": "quoteid" }, 
{ "Name": "requestdeliveryby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Requested Delivery", "Attribute": "requestdeliveryby" }, 
{ "Name": "shippingmethodcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Shipping Method", "Attribute": "shippingmethodcode" }, 
{ "Name": "shipto_composite", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ship To Address", "Attribute": "shipto_composite" }, 
{ "Name": "totalamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Amount", "Attribute": "totalamount" }, 
{ "Name": "totalamountlessfreight", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Pre-Freight Amount", "Attribute": "totalamountlessfreight" }, 
{ "Name": "totallineitemamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Detail Amount", "Attribute": "totallineitemamount" }, 
{ "Name": "totaltax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "(+) Total Tax", "Attribute": "totaltax" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "willcall", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ship To", "Attribute": "willcall" }], 
"ControlsLength": 28, 
"Navigation": [
{"Id": "navProducts", "Key": "navProducts", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "Summary", "Name": "summary_tab", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "ORDER INFORMATION", "Name": "order information", "Visible": true, "Controls": [
{ "Name": "ordernumber" }, 
{ "Name": "name" }, 
{ "Name": "transactioncurrencyid" }, 
{ "Name": "pricelevelid" }, 
{ "Name": "ispricelocked" }]}, 
{ "Label": "SHIPPING DATES", "Name": "shipping dates", "Visible": true, "Controls": [
{ "Name": "requestdeliveryby" }, 
{ "Name": "datefulfilled" }]}, 
{ "Label": "SHIPPING INFORMATION", "Name": "shipping information", "Visible": true, "Controls": [
{ "Name": "shippingmethodcode" }, 
{ "Name": "paymenttermscode" }, 
{ "Name": "freighttermscode" }]}, 
{ "Label": "ADDRESSES", "Name": "addresses", "Visible": true, "Controls": [
{ "Name": "billto_composite" }, 
{ "Name": "willcall" }, 
{ "Name": "shipto_composite" }]}, 
{ "Label": "PRODUCTS", "Name": "products", "Visible": true, "Controls": [
{ "Name": "salesorderdetailsGrid" }]}, 
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
{ "Label": "SALES INFORMATION", "Name": "sales information", "Visible": true, "Controls": [
{ "Name": "opportunityid" }, 
{ "Name": "quoteid" }, 
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
