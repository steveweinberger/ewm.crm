/// <reference path="Xrm.js" />

var EntityLogicalName = "contract";
var Form_9198bc43_88a8_40c0_bd25_6be0a13ee30f_Properties = {
activeon: "activeon"
,billingcustomerid: "billingcustomerid"
,billingendon: "billingendon"
,billingfrequencycode: "billingfrequencycode"
,billingstarton: "billingstarton"
,billtoaddress: "billtoaddress"
,cancelon: "cancelon"
,contractlanguage: "contractlanguage"
,contractnumber: "contractnumber"
,contractservicelevelcode: "contractservicelevelcode"
,contracttemplateid: "contracttemplateid"
,createdon: "createdon"
,customerid: "customerid"
,duration: "duration"
,expireson: "expireson"
,netprice: "netprice"
,originatingcontract: "originatingcontract"
,ownerid: "ownerid"
,serviceaddress: "serviceaddress"
,statuscode: "statuscode"
,title: "title"
,totaldiscount: "totaldiscount"
,totalprice: "totalprice"
,transactioncurrencyid: "transactioncurrencyid"
,usediscountaspercentage: "usediscountaspercentage"
};

var Form_9198bc43_88a8_40c0_bd25_6be0a13ee30f_Controls = {
activeon: "activeon"
,billingcustomerid: "billingcustomerid"
,billingendon: "billingendon"
,billingfrequencycode: "billingfrequencycode"
,billingstarton: "billingstarton"
,billtoaddress: "billtoaddress"
,cancelon: "cancelon"
,Contract_lines: "Contract_lines"
,contractlanguage: "contractlanguage"
,contractnumber: "contractnumber"
,contractservicelevelcode: "contractservicelevelcode"
,contracttemplateid: "contracttemplateid"
,customerid: "customerid"
,duration: "duration"
,expireson: "expireson"
,header_createdon: "header_createdon"
,header_ownerid: "header_ownerid"
,header_status: "header_status"
,netprice: "netprice"
,notescontrol: "notescontrol"
,originatingcontract: "originatingcontract"
,ownerid: "ownerid"
,serviceaddress: "serviceaddress"
,title: "title"
,totaldiscount: "totaldiscount"
,totalprice: "totalprice"
,transactioncurrencyid: "transactioncurrencyid"
,usediscountaspercentage: "usediscountaspercentage"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1010", "etc": "1010", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "contract",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "activeon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "activeon" }] }, 
{ "Name": "billingcustomerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "billingcustomerid" }] }, 
{ "Name": "billingendon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "billingendon" }] }, 
{ "Name": "billingfrequencycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Monthly", "value": 1 }, { "text" : "Bimonthly", "value": 2 }, { "text" : "Quarterly", "value": 3 }, { "text" : "Semiannually", "value": 4 }, { "text" : "Annually", "value": 5 }], "SelectedOption" : { "option" : "Monthly", "value": 1 }, "Text": "Monthly", "Controls": [{ "Name": "billingfrequencycode" }] }, 
{ "Name": "billingstarton", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "billingstarton" }] }, 
{ "Name": "billtoaddress", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "billtoaddress" }] }, 
{ "Name": "cancelon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "cancelon" }] }, 
{ "Name": "contractlanguage", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "contractlanguage" }] }, 
{ "Name": "contractnumber", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "contractnumber" }] }, 
{ "Name": "contractservicelevelcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Gold", "value": 1 }, { "text" : "Silver", "value": 2 }, { "text" : "Bronze", "value": 3 }], "SelectedOption" : { "option" : "Gold", "value": 1 }, "Text": "Gold", "Controls": [{ "Name": "contractservicelevelcode" }] }, 
{ "Name": "contracttemplateid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "contracttemplateid" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "header_createdon" }] }, 
{ "Name": "customerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "customerid" }] }, 
{ "Name": "duration", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "duration" }] }, 
{ "Name": "expireson", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "expireson" }] }, 
{ "Name": "netprice", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "netprice" }] }, 
{ "Name": "originatingcontract", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "originatingcontract" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }, { "Name": "ownerid" }] }, 
{ "Name": "serviceaddress", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "serviceaddress" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Draft", "value": 1 }, { "text" : "Invoiced", "value": 2 }, { "text" : "Active", "value": 3 }, { "text" : "On Hold", "value": 4 }, { "text" : "Canceled", "value": 5 }, { "text" : "Expired", "value": 6 }], "SelectedOption" : { "option" : "Draft", "value": 1 }, "Text": "Draft", "Controls": [{ "Name": "header_status" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "title" }] }, 
{ "Name": "totaldiscount", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "totaldiscount" }] }, 
{ "Name": "totalprice", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "totalprice" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "usediscountaspercentage", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "usediscountaspercentage" }] }]
, "AttributesLength": 25, 
"Controls": [
{ "Name": "activeon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract Start Date", "Attribute": "activeon" }, 
{ "Name": "billingcustomerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Bill To Customer", "Attribute": "billingcustomerid" }, 
{ "Name": "billingendon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Billing End Date", "Attribute": "billingendon" }, 
{ "Name": "billingfrequencycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Billing Frequency", "Attribute": "billingfrequencycode" }, 
{ "Name": "billingstarton", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Billing Start Date", "Attribute": "billingstarton" }, 
{ "Name": "billtoaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Bill To Address", "Attribute": "billtoaddress" }, 
{ "Name": "cancelon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Cancellation Date", "Attribute": "cancelon" }, 
{ "Name": "contractlanguage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "contractlanguage" }, 
{ "Name": "contractnumber", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract ID", "Attribute": "contractnumber" }, 
{ "Name": "contractservicelevelcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Service Level", "Attribute": "contractservicelevelcode" }, 
{ "Name": "contracttemplateid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract Template", "Attribute": "contracttemplateid" }, 
{ "Name": "customerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Customer", "Attribute": "customerid" }, 
{ "Name": "duration", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Duration In Days", "Attribute": "duration" }, 
{ "Name": "expireson", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract End Date", "Attribute": "expireson" }, 
{ "Name": "header_createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_status", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }, 
{ "Name": "netprice", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Net Price", "Attribute": "netprice" }, 
{ "Name": "originatingcontract", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Originating Contract", "Attribute": "originatingcontract" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "serviceaddress", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract Address", "Attribute": "serviceaddress" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contract Name", "Attribute": "title" }, 
{ "Name": "totaldiscount", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Discount", "Attribute": "totaldiscount" }, 
{ "Name": "totalprice", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Total Price", "Attribute": "totalprice" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "usediscountaspercentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Discount", "Attribute": "usediscountaspercentage" }], 
"ControlsLength": 26, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Header", "Name": "header", "Visible": true, "Controls": [
{ "Name": "contractnumber" }, 
{ "Name": "title" }, 
{ "Name": "customerid" }, 
{ "Name": "serviceaddress" }, 
{ "Name": "activeon" }, 
{ "Name": "expireson" }, 
{ "Name": "duration" }]}, 
{ "Label": "Contract Type", "Name": "contract type", "Visible": true, "Controls": [
{ "Name": "usediscountaspercentage" }, 
{ "Name": "contractservicelevelcode" }]}, 
{ "Label": "History", "Name": "history", "Visible": true, "Controls": [
{ "Name": "originatingcontract" }, 
{ "Name": "contracttemplateid" }, 
{ "Name": "ownerid" }]}, 
{ "Label": "Description", "Name": "description", "Visible": true, "Controls": [
{ "Name": "contractlanguage" }]}, 
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "Contract Lines", "Name": "contract_line", "Visible": true, "Controls": [
{ "Name": "Contract_lines" }]}, 
{ "Label": "Billing Information", "Name": "billing information", "Visible": true, "Controls": [
{ "Name": "billingcustomerid" }, 
{ "Name": "billtoaddress" }, 
{ "Name": "billingstarton" }, 
{ "Name": "billingendon" }, 
{ "Name": "billingfrequencycode" }, 
{ "Name": "cancelon" }]}, 
{ "Label": "Pricing", "Name": "pricing", "Visible": true, "Controls": [
{ "Name": "transactioncurrencyid" }, 
{ "Name": "totalprice" }, 
{ "Name": "totaldiscount" }, 
{ "Name": "netprice" }]}]}]
};

var Xrm = new _xrm(pageData);
