/// <reference path="Xrm.js" />

var EntityLogicalName = "systemuser";
var Form_c0d7d7dd_afd0_4675_85fe_1cc5a48be6df_Properties = {
accessmode: "accessmode"
,address1_city: "address1_city"
,address1_country: "address1_country"
,address1_fax: "address1_fax"
,address1_line1: "address1_line1"
,address1_line2: "address1_line2"
,address1_line3: "address1_line3"
,address1_postalcode: "address1_postalcode"
,address1_stateorprovince: "address1_stateorprovince"
,address1_telephone1: "address1_telephone1"
,address1_telephone2: "address1_telephone2"
,address1_telephone3: "address1_telephone3"
,address2_city: "address2_city"
,address2_country: "address2_country"
,address2_line1: "address2_line1"
,address2_line2: "address2_line2"
,address2_line3: "address2_line3"
,address2_postalcode: "address2_postalcode"
,address2_stateorprovince: "address2_stateorprovince"
,businessunitid: "businessunitid"
,caltype: "caltype"
,defaultmailbox: "defaultmailbox"
,domainname: "domainname"
,firstname: "firstname"
,homephone: "homephone"
,internalemailaddress: "internalemailaddress"
,invitestatuscode: "invitestatuscode"
,isdisabled: "isdisabled"
,lastname: "lastname"
,mobilealertemail: "mobilealertemail"
,mobilephone: "mobilephone"
,parentsystemuserid: "parentsystemuserid"
,personalemailaddress: "personalemailaddress"
,positionid: "positionid"
,preferredaddresscode: "preferredaddresscode"
,preferredphonecode: "preferredphonecode"
,queueid: "queueid"
,siteid: "siteid"
,territoryid: "territoryid"
,title: "title"
,windowsliveid: "windowsliveid"
};

var Form_c0d7d7dd_afd0_4675_85fe_1cc5a48be6df_Controls = {
accessmode: "accessmode"
,address1_city: "address1_city"
,address1_country: "address1_country"
,address1_fax: "address1_fax"
,address1_line1: "address1_line1"
,address1_line2: "address1_line2"
,address1_line3: "address1_line3"
,address1_postalcode: "address1_postalcode"
,address1_stateorprovince: "address1_stateorprovince"
,address1_telephone1: "address1_telephone1"
,address1_telephone2: "address1_telephone2"
,address1_telephone3: "address1_telephone3"
,address2_city: "address2_city"
,address2_country: "address2_country"
,address2_line1: "address2_line1"
,address2_line2: "address2_line2"
,address2_line3: "address2_line3"
,address2_postalcode: "address2_postalcode"
,address2_stateorprovince: "address2_stateorprovince"
,businessunitid: "businessunitid"
,caltype: "caltype"
,defaultmailbox: "defaultmailbox"
,domainname: "domainname"
,firstname: "firstname"
,footer_isdisabled: "footer_isdisabled"
,homephone: "homephone"
,internalemailaddress: "internalemailaddress"
,invitestatuscode: "invitestatuscode"
,lastname: "lastname"
,mobilealertemail: "mobilealertemail"
,mobilephone: "mobilephone"
,parentsystemuserid: "parentsystemuserid"
,personalemailaddress: "personalemailaddress"
,positionid: "positionid"
,preferredaddresscode: "preferredaddresscode"
,preferredphonecode: "preferredphonecode"
,queueid: "queueid"
,siteid: "siteid"
,territoryid: "territoryid"
,title: "title"
,WebResource_RecordWall: "WebResource_RecordWall"
,windowsliveid: "windowsliveid"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "8", "etc": "8", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "systemuser",
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
], 
"Tabs": [
{ "Label": "What's New", "Name": "tab_recordwall", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Section", "Name": "tab_recordwall_section_1", "Visible": true, "Controls": [
{ "Name": "WebResource_RecordWall" }]}]}, 
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Account Information", "Name": "onpremise account information", "Visible": true, "Controls": [
{ "Name": "domainname" }]}, 
{ "Label": "Account Information", "Name": "online account information", "Visible": true, "Controls": [
{ "Name": "windowsliveid" }, 
{ "Name": "invitestatuscode" }]}, 
{ "Label": "User Information", "Name": "user information", "Visible": true, "Controls": [
{ "Name": "firstname" }, 
{ "Name": "address1_telephone1" }, 
{ "Name": "lastname" }, 
{ "Name": "address1_telephone2" }, 
{ "Name": "title" }, 
{ "Name": "homephone" }, 
{ "Name": "internalemailaddress" }, 
{ "Name": "mobilephone" }, 
{ "Name": "personalemailaddress" }, 
{ "Name": "preferredphonecode" }, 
{ "Name": "mobilealertemail" }, 
{ "Name": "address1_telephone3" }, 
{ "Name": "address1_fax" }]}, 
{ "Label": "Organization Information", "Name": "organization information", "Visible": true, "Controls": [
{ "Name": "positionid" }, 
{ "Name": "parentsystemuserid" }, 
{ "Name": "businessunitid" }, 
{ "Name": "territoryid" }, 
{ "Name": "siteid" }]}, 
{ "Label": "Email Configuration", "Name": "email configuration", "Visible": true, "Controls": [
{ "Name": "defaultmailbox" }]}, 
{ "Label": "Client Access License (CAL) Information", "Name": "administration", "Visible": true, "Controls": [
{ "Name": "accessmode" }, 
{ "Name": "caltype" }]}, 
{ "Label": "Queue Information", "Name": "queue selection", "Visible": true, "Controls": [
{ "Name": "queueid" }]}]}, 
{ "Label": "Addresses", "Name": "addresses", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Mailing Address", "Name": "mailing address", "Visible": true, "Controls": [
{ "Name": "address1_line1" }, 
{ "Name": "address1_stateorprovince" }, 
{ "Name": "address1_line2" }, 
{ "Name": "address1_postalcode" }, 
{ "Name": "address1_line3" }, 
{ "Name": "address1_country" }, 
{ "Name": "address1_city" }]}, 
{ "Label": "Other Address", "Name": "other address", "Visible": true, "Controls": [
{ "Name": "address2_line1" }, 
{ "Name": "address2_stateorprovince" }, 
{ "Name": "address2_line2" }, 
{ "Name": "address2_postalcode" }, 
{ "Name": "address2_line3" }, 
{ "Name": "address2_country" }, 
{ "Name": "address2_city" }]}, 
{ "Label": "Address Preference", "Name": "address preference", "Visible": true, "Controls": [
{ "Name": "preferredaddresscode" }]}]}]
};

var Xrm = new _xrm(pageData);
