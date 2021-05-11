/// <reference path="Xrm.js" />

var EntityLogicalName = "systemuser";
var Form_c2cd9e55_d4b4_4b55_9951_16ead79643e5_Properties = {
accessmode: "accessmode"
,address1_composite: "address1_composite"
,address1_fax: "address1_fax"
,address1_telephone1: "address1_telephone1"
,address1_telephone2: "address1_telephone2"
,address1_telephone3: "address1_telephone3"
,address2_composite: "address2_composite"
,businessunitid: "businessunitid"
,caltype: "caltype"
,defaultmailbox: "defaultmailbox"
,domainname: "domainname"
,fullname: "fullname"
,homephone: "homephone"
,internalemailaddress: "internalemailaddress"
,invitestatuscode: "invitestatuscode"
,isdisabled: "isdisabled"
,mobilealertemail: "mobilealertemail"
,mobileofflineprofileid: "mobileofflineprofileid"
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

var Form_c2cd9e55_d4b4_4b55_9951_16ead79643e5_Controls = {
accessmode: "accessmode"
,address1_composite: "address1_composite"
,address1_fax: "address1_fax"
,address1_telephone1: "address1_telephone1"
,address1_telephone2: "address1_telephone2"
,address1_telephone3: "address1_telephone3"
,address2_composite: "address2_composite"
,businessunitid: "businessunitid"
,caltype: "caltype"
,defaultmailbox: "defaultmailbox"
,DirectReports: "DirectReports"
,domainname: "domainname"
,footer_isdisabled: "footer_isdisabled"
,fullname: "fullname"
,homephone: "homephone"
,internalemailaddress: "internalemailaddress"
,invitestatuscode: "invitestatuscode"
,mobilealertemail: "mobilealertemail"
,mobileofflineprofileid: "mobileofflineprofileid"
,mobilephone: "mobilephone"
,notescontrol: "notescontrol"
,parentsystemuserid: "parentsystemuserid"
,personalemailaddress: "personalemailaddress"
,positionid: "positionid"
,preferredaddresscode: "preferredaddresscode"
,preferredphonecode: "preferredphonecode"
,PrivateQueuesSubGrid: "PrivateQueuesSubGrid"
,queueid: "queueid"
,siteid: "siteid"
,TeamsSubGrid: "TeamsSubGrid"
,territoryid: "territoryid"
,title: "title"
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
{ "Label": "Summary", "Name": "SUMMARY_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Account Information", "Name": "onpremise account information", "Visible": true, "Controls": [
{ "Name": "domainname" }]}, 
{ "Label": "Account Information", "Name": "online account information", "Visible": true, "Controls": [
{ "Name": "windowsliveid" }, 
{ "Name": "invitestatuscode" }]}, 
{ "Label": "User Information", "Name": "user information", "Visible": true, "Controls": [
{ "Name": "fullname" }, 
{ "Name": "title" }, 
{ "Name": "internalemailaddress" }, 
{ "Name": "mobilephone" }, 
{ "Name": "address1_telephone1" }]}, 
{ "Label": "SOCIAL PANE", "Name": "SOCIAL_PANE_TAB", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "", "Name": "teams information", "Visible": true, "Controls": [
{ "Name": "TeamsSubGrid" }]}, 
{ "Label": "Organization Information", "Name": "organization information", "Visible": true, "Controls": [
{ "Name": "siteid" }, 
{ "Name": "territoryid" }, 
{ "Name": "businessunitid" }, 
{ "Name": "parentsystemuserid" }, 
{ "Name": "positionid" }]}, 
{ "Label": "Queue Information", "Name": "queue selection", "Visible": true, "Controls": [
{ "Name": "queueid" }]}, 
{ "Label": "", "Name": "queue information", "Visible": true, "Controls": [
{ "Name": "PrivateQueuesSubGrid" }]}]}, 
{ "Label": "Details", "Name": "DETAILS_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "User Information", "Name": "user information", "Visible": true, "Controls": [
{ "Name": "homephone" }, 
{ "Name": "address1_telephone2" }, 
{ "Name": "personalemailaddress" }, 
{ "Name": "preferredphonecode" }, 
{ "Name": "mobilealertemail" }, 
{ "Name": "address1_telephone3" }, 
{ "Name": "address1_fax" }]}, 
{ "Label": "Mailing Address", "Name": "mailing address", "Visible": true, "Controls": [
{ "Name": "preferredaddresscode" }, 
{ "Name": "address1_composite" }, 
{ "Name": "address2_composite" }]}, 
{ "Label": "Direct Reports", "Name": "DirectReports", "Visible": true, "Controls": [
{ "Name": "DirectReports" }]}]}, 
{ "Label": "Administration", "Name": "ADMINISTRATION_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Client Access License (CAL) Information", "Name": "administration", "Visible": true, "Controls": [
{ "Name": "accessmode" }, 
{ "Name": "caltype" }]}, 
{ "Label": "E-mail Access Configuration", "Name": "e-mail configuration", "Visible": true, "Controls": [
{ "Name": "defaultmailbox" }]}]}, 
{ "Label": "Mobile Offline Profile Details", "Name": "MobileOfflineProfile_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Mobile Offline Access Information", "Name": "mobileofflineaccessinfo", "Visible": true, "Controls": [
{ "Name": "mobileofflineprofileid" }]}]}]
};

var Xrm = new _xrm(pageData);
