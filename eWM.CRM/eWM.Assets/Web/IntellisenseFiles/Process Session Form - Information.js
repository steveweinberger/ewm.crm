/// <reference path="Xrm.js" />

var EntityLogicalName = "processsession";
var Form_dbaf6621_b57a_4f9d_b39d_60d5e5285113_Properties = {
canceledby: "canceledby"
,canceledon: "canceledon"
,comments: "comments"
,completedby: "completedby"
,completedon: "completedon"
,createdon: "createdon"
,name: "name"
,nextlinkedsessionid: "nextlinkedsessionid"
,originatingsessionid: "originatingsessionid"
,ownerid: "ownerid"
,previouslinkedsessionid: "previouslinkedsessionid"
,processid: "processid"
,regardingobjectid: "regardingobjectid"
,startedby: "startedby"
,startedon: "startedon"
,statecode: "statecode"
,statuscode: "statuscode"
};

var Form_dbaf6621_b57a_4f9d_b39d_60d5e5285113_Controls = {
canceledby: "canceledby"
,canceledon: "canceledon"
,comments: "comments"
,completedby: "completedby"
,completedon: "completedon"
,createdon: "createdon"
,footer_statecode: "footer_statecode"
,name: "name"
,nextlinkedsessionid: "nextlinkedsessionid"
,originatingsessionid: "originatingsessionid"
,ownerid: "ownerid"
,previouslinkedsessionid: "previouslinkedsessionid"
,processid: "processid"
,regardingobjectid: "regardingobjectid"
,startedby: "startedby"
,startedon: "startedon"
,statuscode: "statuscode"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "4710", "etc": "4710", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "processsession",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "canceledby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "canceledby" }] }, 
{ "Name": "canceledon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Controls": [{ "Name": "canceledon" }] }, 
{ "Name": "comments", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "comments" }] }, 
{ "Name": "completedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "completedby" }] }, 
{ "Name": "completedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Controls": [{ "Name": "completedon" }] }, 
{ "Name": "createdon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "createdon" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 256, "Controls": [{ "Name": "name" }] }, 
{ "Name": "nextlinkedsessionid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "nextlinkedsessionid" }] }, 
{ "Name": "originatingsessionid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "originatingsessionid" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "previouslinkedsessionid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "previouslinkedsessionid" }] }, 
{ "Name": "processid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "processid" }] }, 
{ "Name": "regardingobjectid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "regardingobjectid" }] }, 
{ "Name": "startedby", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "Controls": [{ "Name": "startedby" }] }, 
{ "Name": "startedon", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "startedon" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Incomplete", "value": 0 }, { "text" : "Complete", "value": 1 }], "SelectedOption" : { "option" : "Incomplete", "value": 0 }, "Text": "Incomplete", "Controls": [{ "Name": "footer_statecode" }] }, 
{ "Name": "statuscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Not Started", "value": 1 }, { "text" : "In Progress", "value": 2 }, { "text" : "Paused", "value": 3 }, { "text" : "Completed", "value": 4 }, { "text" : "Canceled", "value": 5 }, { "text" : "Failed", "value": 6 }], "SelectedOption" : { "option" : "Not Started", "value": 1 }, "Text": "Not Started", "Controls": [{ "Name": "statuscode" }] }]
, "AttributesLength": 17, 
"Controls": [
{ "Name": "canceledby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Canceled By", "Attribute": "canceledby" }, 
{ "Name": "canceledon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Canceled On", "Attribute": "canceledon" }, 
{ "Name": "comments", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Comments", "Attribute": "comments" }, 
{ "Name": "completedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Completed By", "Attribute": "completedby" }, 
{ "Name": "completedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Completed On", "Attribute": "completedon" }, 
{ "Name": "createdon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Created On", "Attribute": "createdon" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "name" }, 
{ "Name": "nextlinkedsessionid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Next Linked Session", "Attribute": "nextlinkedsessionid" }, 
{ "Name": "originatingsessionid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Originating Session", "Attribute": "originatingsessionid" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "previouslinkedsessionid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Previous Linked Session", "Attribute": "previouslinkedsessionid" }, 
{ "Name": "processid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Process", "Attribute": "processid" }, 
{ "Name": "regardingobjectid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Regarding", "Attribute": "regardingobjectid" }, 
{ "Name": "startedby", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Started By", "Attribute": "startedby" }, 
{ "Name": "startedon", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Started On", "Attribute": "startedon" }, 
{ "Name": "statuscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status Reason", "Attribute": "statuscode" }], 
"ControlsLength": 17, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "{474B8A52-CB22-4194-A5A6-F21FD40B7417}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Details", "Name": "Details", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "processid" }, 
{ "Name": "regardingobjectid" }, 
{ "Name": "createdon" }, 
{ "Name": "ownerid" }, 
{ "Name": "statuscode" }]}]}, 
{ "Label": "Summary", "Name": "Summary", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Summary", "Name": "Summary", "Visible": true, "Controls": [
]}]}, 
{ "Label": "Comments", "Name": "Comments", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Comments", "Name": "Comments", "Visible": true, "Controls": [
{ "Name": "comments" }]}]}, 
{ "Label": "Linked Sessions", "Name": "Linked Sessions", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Linked Sessions", "Name": "Linked Sessions", "Visible": true, "Controls": [
{ "Name": "originatingsessionid" }, 
{ "Name": "previouslinkedsessionid" }, 
{ "Name": "nextlinkedsessionid" }]}]}, 
{ "Label": "Details", "Name": "Details", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Details", "Name": "Details", "Visible": true, "Controls": [
{ "Name": "startedon" }, 
{ "Name": "startedby" }, 
{ "Name": "completedon" }, 
{ "Name": "completedby" }, 
{ "Name": "canceledon" }, 
{ "Name": "canceledby" }]}]}]
};

var Xrm = new _xrm(pageData);
