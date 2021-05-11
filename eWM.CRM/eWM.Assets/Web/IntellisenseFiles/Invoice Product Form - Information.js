/// <reference path="Xrm.js" />

var EntityLogicalName = "invoicedetail";
var Form_684b159c_c312_4248_8b0f_0c164abe7d9e_Properties = {
actualdeliveryon: "actualdeliveryon"
,baseamount: "baseamount"
,extendedamount: "extendedamount"
,ispriceoverridden: "ispriceoverridden"
,isproductoverridden: "isproductoverridden"
,manualdiscountamount: "manualdiscountamount"
,priceperunit: "priceperunit"
,productdescription: "productdescription"
,productid: "productid"
,quantity: "quantity"
,quantitybackordered: "quantitybackordered"
,quantitycancelled: "quantitycancelled"
,quantityshipped: "quantityshipped"
,salesrepid: "salesrepid"
,shipto_city: "shipto_city"
,shipto_country: "shipto_country"
,shipto_fax: "shipto_fax"
,shipto_freighttermscode: "shipto_freighttermscode"
,shipto_line1: "shipto_line1"
,shipto_line2: "shipto_line2"
,shipto_line3: "shipto_line3"
,shipto_name: "shipto_name"
,shipto_postalcode: "shipto_postalcode"
,shipto_stateorprovince: "shipto_stateorprovince"
,shipto_telephone: "shipto_telephone"
,tax: "tax"
,uomid: "uomid"
,volumediscountamount: "volumediscountamount"
,willcall: "willcall"
};

var Form_684b159c_c312_4248_8b0f_0c164abe7d9e_Controls = {
actualdeliveryon: "actualdeliveryon"
,baseamount: "baseamount"
,extendedamount: "extendedamount"
,ispriceoverridden: "ispriceoverridden"
,isproductoverridden: "isproductoverridden"
,manualdiscountamount: "manualdiscountamount"
,priceperunit: "priceperunit"
,productdescription: "productdescription"
,productid: "productid"
,quantity: "quantity"
,quantitybackordered: "quantitybackordered"
,quantitycancelled: "quantitycancelled"
,quantityshipped: "quantityshipped"
,salesrepid: "salesrepid"
,shipto_city: "shipto_city"
,shipto_country: "shipto_country"
,shipto_fax: "shipto_fax"
,shipto_freighttermscode: "shipto_freighttermscode"
,shipto_line1: "shipto_line1"
,shipto_line2: "shipto_line2"
,shipto_line3: "shipto_line3"
,shipto_name: "shipto_name"
,shipto_postalcode: "shipto_postalcode"
,shipto_stateorprovince: "shipto_stateorprovince"
,shipto_telephone: "shipto_telephone"
,tax: "tax"
,uomid: "uomid"
,volumediscountamount: "volumediscountamount"
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
"QueryStringParameters": { "_gridType": "1091", "etc": "1091", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "invoicedetail",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actualdeliveryon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "actualdeliveryon" }] }, 
{ "Name": "baseamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "baseamount" }] }, 
{ "Name": "extendedamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "extendedamount" }] }, 
{ "Name": "ispriceoverridden", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "ispriceoverridden" }] }, 
{ "Name": "isproductoverridden", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isproductoverridden" }] }, 
{ "Name": "manualdiscountamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "manualdiscountamount" }] }, 
{ "Name": "priceperunit", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 2, "Controls": [{ "Name": "priceperunit" }] }, 
{ "Name": "productdescription", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 500, "Controls": [{ "Name": "productdescription" }] }, 
{ "Name": "productid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "productid" }] }, 
{ "Name": "quantity", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 5, "Controls": [{ "Name": "quantity" }] }, 
{ "Name": "quantitybackordered", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 5, "Controls": [{ "Name": "quantitybackordered" }] }, 
{ "Name": "quantitycancelled", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 5, "Controls": [{ "Name": "quantitycancelled" }] }, 
{ "Name": "quantityshipped", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : -1000000000, "Precision" : 5, "Controls": [{ "Name": "quantityshipped" }] }, 
{ "Name": "salesrepid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "salesrepid" }] }, 
{ "Name": "shipto_city", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 80, "Controls": [{ "Name": "shipto_city" }] }, 
{ "Name": "shipto_country", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 80, "Controls": [{ "Name": "shipto_country" }] }, 
{ "Name": "shipto_fax", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "shipto_fax" }] }, 
{ "Name": "shipto_freighttermscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "FOB", "value": 1 }, { "text" : "No Charge", "value": 2 }], "SelectedOption" : { "option" : "FOB", "value": 1 }, "Text": "FOB", "Controls": [{ "Name": "shipto_freighttermscode" }] }, 
{ "Name": "shipto_line1", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "shipto_line1" }] }, 
{ "Name": "shipto_line2", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "shipto_line2" }] }, 
{ "Name": "shipto_line3", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 250, "Controls": [{ "Name": "shipto_line3" }] }, 
{ "Name": "shipto_name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "shipto_name" }] }, 
{ "Name": "shipto_postalcode", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 20, "Controls": [{ "Name": "shipto_postalcode" }] }, 
{ "Name": "shipto_stateorprovince", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "shipto_stateorprovince" }] }, 
{ "Name": "shipto_telephone", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "shipto_telephone" }] }, 
{ "Name": "tax", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000000, "Min" : -1000000000000, "Precision" : 2, "Controls": [{ "Name": "tax" }] }, 
{ "Name": "uomid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "uomid" }] }, 
{ "Name": "volumediscountamount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 922337203685477, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "volumediscountamount" }] }, 
{ "Name": "willcall", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "willcall" }] }]
, "AttributesLength": 29, 
"Controls": [
{ "Name": "actualdeliveryon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Delivered On", "Attribute": "actualdeliveryon" }, 
{ "Name": "baseamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Amount", "Attribute": "baseamount" }, 
{ "Name": "extendedamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Extended Amount", "Attribute": "extendedamount" }, 
{ "Name": "ispriceoverridden", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Pricing", "Attribute": "ispriceoverridden" }, 
{ "Name": "isproductoverridden", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Select Product", "Attribute": "isproductoverridden" }, 
{ "Name": "manualdiscountamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Manual Discount", "Attribute": "manualdiscountamount" }, 
{ "Name": "priceperunit", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Price Per Unit", "Attribute": "priceperunit" }, 
{ "Name": "productdescription", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Write-In Product", "Attribute": "productdescription" }, 
{ "Name": "productid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Existing Product", "Attribute": "productid" }, 
{ "Name": "quantity", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Quantity", "Attribute": "quantity" }, 
{ "Name": "quantitybackordered", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Back Ordered", "Attribute": "quantitybackordered" }, 
{ "Name": "quantitycancelled", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fulfilled", "Attribute": "quantitycancelled" }, 
{ "Name": "quantityshipped", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Shipped", "Attribute": "quantityshipped" }, 
{ "Name": "salesrepid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Salesperson", "Attribute": "salesrepid" }, 
{ "Name": "shipto_city", "Type": "standard", "Disabled": false, "Visible": true, "Label": "City", "Attribute": "shipto_city" }, 
{ "Name": "shipto_country", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Country/Region", "Attribute": "shipto_country" }, 
{ "Name": "shipto_fax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fax", "Attribute": "shipto_fax" }, 
{ "Name": "shipto_freighttermscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Freight Terms", "Attribute": "shipto_freighttermscode" }, 
{ "Name": "shipto_line1", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Street 1", "Attribute": "shipto_line1" }, 
{ "Name": "shipto_line2", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Street 2", "Attribute": "shipto_line2" }, 
{ "Name": "shipto_line3", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Street 3", "Attribute": "shipto_line3" }, 
{ "Name": "shipto_name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "shipto_name" }, 
{ "Name": "shipto_postalcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "ZIP/Postal Code", "Attribute": "shipto_postalcode" }, 
{ "Name": "shipto_stateorprovince", "Type": "standard", "Disabled": false, "Visible": true, "Label": "State/Province", "Attribute": "shipto_stateorprovince" }, 
{ "Name": "shipto_telephone", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Phone", "Attribute": "shipto_telephone" }, 
{ "Name": "tax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Tax", "Attribute": "tax" }, 
{ "Name": "uomid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Unit", "Attribute": "uomid" }, 
{ "Name": "volumediscountamount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Volume Discount", "Attribute": "volumediscountamount" }, 
{ "Name": "willcall", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ship To", "Attribute": "willcall" }], 
"ControlsLength": 29, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Invoice Detail Information", "Name": "invoice detail information", "Visible": true, "Controls": [
{ "Name": "isproductoverridden" }, 
{ "Name": "productdescription" }, 
{ "Name": "productid" }, 
{ "Name": "uomid" }]}, 
{ "Label": "Pricing", "Name": "pricing", "Visible": true, "Controls": [
{ "Name": "ispriceoverridden" }, 
{ "Name": "priceperunit" }, 
{ "Name": "volumediscountamount" }, 
{ "Name": "quantity" }, 
{ "Name": "baseamount" }, 
{ "Name": "manualdiscountamount" }, 
{ "Name": "tax" }, 
{ "Name": "extendedamount" }]}]}, 
{ "Label": "Delivery", "Name": "delivery", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Delivery Information", "Name": "delivery information", "Visible": true, "Controls": [
{ "Name": "actualdeliveryon" }, 
{ "Name": "salesrepid" }]}, 
{ "Label": "Fulfillment", "Name": "fulfillment", "Visible": true, "Controls": [
{ "Name": "quantityshipped" }, 
{ "Name": "quantitybackordered" }, 
{ "Name": "quantitycancelled" }]}]}, 
{ "Label": "Address", "Name": "address", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Ship To Address", "Name": "ship to address", "Visible": true, "Controls": [
{ "Name": "willcall" }, 
{ "Name": "shipto_name" }, 
{ "Name": "shipto_postalcode" }, 
{ "Name": "shipto_line1" }, 
{ "Name": "shipto_country" }, 
{ "Name": "shipto_line2" }, 
{ "Name": "shipto_telephone" }, 
{ "Name": "shipto_line3" }, 
{ "Name": "shipto_fax" }, 
{ "Name": "shipto_city" }, 
{ "Name": "shipto_freighttermscode" }, 
{ "Name": "shipto_stateorprovince" }]}]}]
};

var Xrm = new _xrm(pageData);
