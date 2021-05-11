/// <reference path="Xrm.js" />

var EntityLogicalName = "goal";
var Form_a091897e_d685_4487_b61c_98158391015e_Properties = {
actualdecimal: "actualdecimal"
,actualinteger: "actualinteger"
,actualmoney: "actualmoney"
,consideronlygoalownersrecords: "consideronlygoalownersrecords"
,customrollupfielddecimal: "customrollupfielddecimal"
,customrollupfieldinteger: "customrollupfieldinteger"
,customrollupfieldmoney: "customrollupfieldmoney"
,fiscalperiod: "fiscalperiod"
,fiscalyear: "fiscalyear"
,goalenddate: "goalenddate"
,goalownerid: "goalownerid"
,goalstartdate: "goalstartdate"
,inprogressdecimal: "inprogressdecimal"
,inprogressinteger: "inprogressinteger"
,inprogressmoney: "inprogressmoney"
,isfiscalperiodgoal: "isfiscalperiodgoal"
,lastrolledupdate: "lastrolledupdate"
,metricid: "metricid"
,ownerid: "ownerid"
,parentgoalid: "parentgoalid"
,percentage: "percentage"
,rolluponlyfromchildgoals: "rolluponlyfromchildgoals"
,rollupqueryactualdecimalid: "rollupqueryactualdecimalid"
,rollupqueryactualintegerid: "rollupqueryactualintegerid"
,rollupqueryactualmoneyid: "rollupqueryactualmoneyid"
,rollupquerycustomdecimalid: "rollupquerycustomdecimalid"
,rollupquerycustomintegerid: "rollupquerycustomintegerid"
,rollupquerycustommoneyid: "rollupquerycustommoneyid"
,rollupqueryinprogressdecimalid: "rollupqueryinprogressdecimalid"
,rollupqueryinprogressintegerid: "rollupqueryinprogressintegerid"
,rollupqueryinprogressmoneyid: "rollupqueryinprogressmoneyid"
,statecode: "statecode"
,stretchtargetdecimal: "stretchtargetdecimal"
,stretchtargetinteger: "stretchtargetinteger"
,stretchtargetmoney: "stretchtargetmoney"
,targetdecimal: "targetdecimal"
,targetinteger: "targetinteger"
,targetmoney: "targetmoney"
,title: "title"
};

var Form_a091897e_d685_4487_b61c_98158391015e_Controls = {
actualdecimal: "actualdecimal"
,actualinteger: "actualinteger"
,actualmoney: "actualmoney"
,child_goals: "child_goals"
,consideronlygoalownersrecords: "consideronlygoalownersrecords"
,customrollupfielddecimal: "customrollupfielddecimal"
,customrollupfieldinteger: "customrollupfieldinteger"
,customrollupfieldmoney: "customrollupfieldmoney"
,fiscalperiod: "fiscalperiod"
,fiscalyear: "fiscalyear"
,footer_statecode: "footer_statecode"
,goalenddate: "goalenddate"
,goalownerid: "goalownerid"
,goalstartdate: "goalstartdate"
,inprogressdecimal: "inprogressdecimal"
,inprogressinteger: "inprogressinteger"
,inprogressmoney: "inprogressmoney"
,isfiscalperiodgoal: "isfiscalperiodgoal"
,lastrolledupdate: "lastrolledupdate"
,metricid: "metricid"
,notescontrol: "notescontrol"
,ownerid: "ownerid"
,parentgoalid: "parentgoalid"
,percentage: "percentage"
,percentage: "percentage"
,percentage: "percentage"
,rolluponlyfromchildgoals: "rolluponlyfromchildgoals"
,rollupqueryactualdecimalid: "rollupqueryactualdecimalid"
,rollupqueryactualintegerid: "rollupqueryactualintegerid"
,rollupqueryactualmoneyid: "rollupqueryactualmoneyid"
,rollupquerycustomdecimalid: "rollupquerycustomdecimalid"
,rollupquerycustomintegerid: "rollupquerycustomintegerid"
,rollupquerycustommoneyid: "rollupquerycustommoneyid"
,rollupqueryinprogressdecimalid: "rollupqueryinprogressdecimalid"
,rollupqueryinprogressintegerid: "rollupqueryinprogressintegerid"
,rollupqueryinprogressmoneyid: "rollupqueryinprogressmoneyid"
,stretchtargetdecimal: "stretchtargetdecimal"
,stretchtargetinteger: "stretchtargetinteger"
,stretchtargetmoney: "stretchtargetmoney"
,targetdecimal: "targetdecimal"
,targetinteger: "targetinteger"
,targetmoney: "targetmoney"
,title: "title"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "9600", "etc": "9600", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "goal",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "actualdecimal", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 10, "Controls": [{ "Name": "actualdecimal" }] }, 
{ "Name": "actualinteger", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "actualinteger" }] }, 
{ "Name": "actualmoney", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 4, "Controls": [{ "Name": "actualmoney" }] }, 
{ "Name": "consideronlygoalownersrecords", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "consideronlygoalownersrecords" }] }, 
{ "Name": "customrollupfielddecimal", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 10, "Controls": [{ "Name": "customrollupfielddecimal" }] }, 
{ "Name": "customrollupfieldinteger", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "customrollupfieldinteger" }] }, 
{ "Name": "customrollupfieldmoney", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 4, "Controls": [{ "Name": "customrollupfieldmoney" }] }, 
{ "Name": "fiscalperiod", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Quarter 1", "value": 1 }, { "text" : "Quarter 2", "value": 2 }, { "text" : "Quarter 3", "value": 3 }, { "text" : "Quarter 4", "value": 4 }, { "text" : "January", "value": 101 }, { "text" : "February", "value": 102 }, { "text" : "March", "value": 103 }, { "text" : "April", "value": 104 }, { "text" : "May", "value": 105 }, { "text" : "June", "value": 106 }, { "text" : "July", "value": 107 }, { "text" : "August", "value": 108 }, { "text" : "September", "value": 109 }, { "text" : "October", "value": 110 }, { "text" : "November", "value": 111 }, { "text" : "December", "value": 112 }, { "text" : "Semester 1", "value": 201 }, { "text" : "Semester 2", "value": 202 }, { "text" : "Annual", "value": 301 }, { "text" : "P1", "value": 401 }, { "text" : "P2", "value": 402 }, { "text" : "P3", "value": 403 }, { "text" : "P4", "value": 404 }, { "text" : "P5", "value": 405 }, { "text" : "P6", "value": 406 }, { "text" : "P7", "value": 407 }, { "text" : "P8", "value": 408 }, { "text" : "P9", "value": 409 }, { "text" : "P10", "value": 410 }, { "text" : "P11", "value": 411 }, { "text" : "P12", "value": 412 }, { "text" : "P13", "value": 413 }], "SelectedOption" : { "option" : "Quarter 1", "value": 1 }, "Text": "Quarter 1", "Controls": [{ "Name": "fiscalperiod" }] }, 
{ "Name": "fiscalyear", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "FY2038", "value": 2038 }, { "text" : "FY2037", "value": 2037 }, { "text" : "FY2036", "value": 2036 }, { "text" : "FY2035", "value": 2035 }, { "text" : "FY2034", "value": 2034 }, { "text" : "FY2033", "value": 2033 }, { "text" : "FY2032", "value": 2032 }, { "text" : "FY2031", "value": 2031 }, { "text" : "FY2030", "value": 2030 }, { "text" : "FY2029", "value": 2029 }, { "text" : "FY2028", "value": 2028 }, { "text" : "FY2027", "value": 2027 }, { "text" : "FY2026", "value": 2026 }, { "text" : "FY2025", "value": 2025 }, { "text" : "FY2024", "value": 2024 }, { "text" : "FY2023", "value": 2023 }, { "text" : "FY2022", "value": 2022 }, { "text" : "FY2021", "value": 2021 }, { "text" : "FY2020", "value": 2020 }, { "text" : "FY2019", "value": 2019 }, { "text" : "FY2018", "value": 2018 }, { "text" : "FY2017", "value": 2017 }, { "text" : "FY2016", "value": 2016 }, { "text" : "FY2015", "value": 2015 }, { "text" : "FY2014", "value": 2014 }, { "text" : "FY2013", "value": 2013 }, { "text" : "FY2012", "value": 2012 }, { "text" : "FY2011", "value": 2011 }, { "text" : "FY2010", "value": 2010 }, { "text" : "FY2009", "value": 2009 }, { "text" : "FY2008", "value": 2008 }, { "text" : "FY2007", "value": 2007 }, { "text" : "FY2006", "value": 2006 }, { "text" : "FY2005", "value": 2005 }, { "text" : "FY2004", "value": 2004 }, { "text" : "FY2003", "value": 2003 }, { "text" : "FY2002", "value": 2002 }, { "text" : "FY2001", "value": 2001 }, { "text" : "FY2000", "value": 2000 }, { "text" : "FY1999", "value": 1999 }, { "text" : "FY1998", "value": 1998 }, { "text" : "FY1997", "value": 1997 }, { "text" : "FY1996", "value": 1996 }, { "text" : "FY1995", "value": 1995 }, { "text" : "FY1994", "value": 1994 }, { "text" : "FY1993", "value": 1993 }, { "text" : "FY1992", "value": 1992 }, { "text" : "FY1991", "value": 1991 }, { "text" : "FY1990", "value": 1990 }, { "text" : "FY1989", "value": 1989 }, { "text" : "FY1988", "value": 1988 }, { "text" : "FY1987", "value": 1987 }, { "text" : "FY1986", "value": 1986 }, { "text" : "FY1985", "value": 1985 }, { "text" : "FY1984", "value": 1984 }, { "text" : "FY1983", "value": 1983 }, { "text" : "FY1982", "value": 1982 }, { "text" : "FY1981", "value": 1981 }, { "text" : "FY1980", "value": 1980 }, { "text" : "FY1979", "value": 1979 }, { "text" : "FY1978", "value": 1978 }, { "text" : "FY1977", "value": 1977 }, { "text" : "FY1976", "value": 1976 }, { "text" : "FY1975", "value": 1975 }, { "text" : "FY1974", "value": 1974 }, { "text" : "FY1973", "value": 1973 }, { "text" : "FY1972", "value": 1972 }, { "text" : "FY1971", "value": 1971 }, { "text" : "FY1970", "value": 1970 }], "SelectedOption" : { "option" : "FY2038", "value": 2038 }, "Text": "FY2038", "Controls": [{ "Name": "fiscalyear" }] }, 
{ "Name": "goalenddate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "goalenddate" }] }, 
{ "Name": "goalownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "goalownerid" }] }, 
{ "Name": "goalstartdate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "goalstartdate" }] }, 
{ "Name": "inprogressdecimal", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 10, "Controls": [{ "Name": "inprogressdecimal" }] }, 
{ "Name": "inprogressinteger", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : -2147483648, "Precision" : 0, "Controls": [{ "Name": "inprogressinteger" }] }, 
{ "Name": "inprogressmoney", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 922337203685477, "Min" : -922337203685477, "Precision" : 4, "Controls": [{ "Name": "inprogressmoney" }] }, 
{ "Name": "isfiscalperiodgoal", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "isfiscalperiodgoal" }] }, 
{ "Name": "lastrolledupdate", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "lastrolledupdate" }] }, 
{ "Name": "metricid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "metricid" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "ownerid" }] }, 
{ "Name": "parentgoalid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "parentgoalid" }] }, 
{ "Name": "percentage", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : -100000000000, "Precision" : 0, "Controls": [{ "Name": "percentage" }, { "Name": "percentage" }, { "Name": "percentage" }] }, 
{ "Name": "rolluponlyfromchildgoals", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "rolluponlyfromchildgoals" }] }, 
{ "Name": "rollupqueryactualdecimalid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupqueryactualdecimalid" }] }, 
{ "Name": "rollupqueryactualintegerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupqueryactualintegerid" }] }, 
{ "Name": "rollupqueryactualmoneyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupqueryactualmoneyid" }] }, 
{ "Name": "rollupquerycustomdecimalid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupquerycustomdecimalid" }] }, 
{ "Name": "rollupquerycustomintegerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupquerycustomintegerid" }] }, 
{ "Name": "rollupquerycustommoneyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupquerycustommoneyid" }] }, 
{ "Name": "rollupqueryinprogressdecimalid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupqueryinprogressdecimalid" }] }, 
{ "Name": "rollupqueryinprogressintegerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupqueryinprogressintegerid" }] }, 
{ "Name": "rollupqueryinprogressmoneyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "rollupqueryinprogressmoneyid" }] }, 
{ "Name": "statecode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "InitialValue" : 930650000, "Options" : [{ "text" : "Active", "value": 0 }, { "text" : "Inactive", "value": 1 }], "SelectedOption" : { "option" : "Active", "value": 0 }, "Text": "Active", "Controls": [{ "Name": "footer_statecode" }] }, 
{ "Name": "stretchtargetdecimal", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "stretchtargetdecimal" }] }, 
{ "Name": "stretchtargetinteger", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "stretchtargetinteger" }] }, 
{ "Name": "stretchtargetmoney", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 922337203685477, "Min" : 0, "Precision" : 4, "Controls": [{ "Name": "stretchtargetmoney" }] }, 
{ "Name": "targetdecimal", "Value": null, "Type" : "decimal", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "targetdecimal" }] }, 
{ "Name": "targetinteger", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 2147483647, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "targetinteger" }] }, 
{ "Name": "targetmoney", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 922337203685477, "Min" : 0, "Precision" : 4, "Controls": [{ "Name": "targetmoney" }] }, 
{ "Name": "title", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 100, "Controls": [{ "Name": "title" }] }]
, "AttributesLength": 39, 
"Controls": [
{ "Name": "actualdecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual (Decimal)", "Attribute": "actualdecimal" }, 
{ "Name": "actualinteger", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual (Integer)", "Attribute": "actualinteger" }, 
{ "Name": "actualmoney", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Actual (Money)", "Attribute": "actualmoney" }, 
{ "Name": "consideronlygoalownersrecords", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Record Set for Rollup", "Attribute": "consideronlygoalownersrecords" }, 
{ "Name": "customrollupfielddecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Custom Rollup Field (Decimal)", "Attribute": "customrollupfielddecimal" }, 
{ "Name": "customrollupfieldinteger", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Custom Rollup Field (Integer)", "Attribute": "customrollupfieldinteger" }, 
{ "Name": "customrollupfieldmoney", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Custom Rollup Field (Money)", "Attribute": "customrollupfieldmoney" }, 
{ "Name": "fiscalperiod", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fiscal Period", "Attribute": "fiscalperiod" }, 
{ "Name": "fiscalyear", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fiscal Year", "Attribute": "fiscalyear" }, 
{ "Name": "footer_statecode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Status", "Attribute": "statecode" }, 
{ "Name": "goalenddate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "To", "Attribute": "goalenddate" }, 
{ "Name": "goalownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Goal Owner", "Attribute": "goalownerid" }, 
{ "Name": "goalstartdate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "From", "Attribute": "goalstartdate" }, 
{ "Name": "inprogressdecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "In-progress (Decimal)", "Attribute": "inprogressdecimal" }, 
{ "Name": "inprogressinteger", "Type": "standard", "Disabled": false, "Visible": true, "Label": "In-progress (Integer)", "Attribute": "inprogressinteger" }, 
{ "Name": "inprogressmoney", "Type": "standard", "Disabled": false, "Visible": true, "Label": "In-progress (Money)", "Attribute": "inprogressmoney" }, 
{ "Name": "isfiscalperiodgoal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Goal Period Type", "Attribute": "isfiscalperiodgoal" }, 
{ "Name": "lastrolledupdate", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Rolled Up Date", "Attribute": "lastrolledupdate" }, 
{ "Name": "metricid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Goal Metric", "Attribute": "metricid" }, 
{ "Name": "ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Manager", "Attribute": "ownerid" }, 
{ "Name": "parentgoalid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Parent Goal", "Attribute": "parentgoalid" }, 
{ "Name": "percentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Percentage Achieved", "Attribute": "percentage" }, 
{ "Name": "percentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Percentage Achieved", "Attribute": "percentage" }, 
{ "Name": "percentage", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Percentage Achieved", "Attribute": "percentage" }, 
{ "Name": "rolluponlyfromchildgoals", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Roll Up Only from Child Goals", "Attribute": "rolluponlyfromchildgoals" }, 
{ "Name": "rollupqueryactualdecimalid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - Actual(Decimal)", "Attribute": "rollupqueryactualdecimalid" }, 
{ "Name": "rollupqueryactualintegerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - Actual(Integer)", "Attribute": "rollupqueryactualintegerid" }, 
{ "Name": "rollupqueryactualmoneyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - Actual(Money)", "Attribute": "rollupqueryactualmoneyid" }, 
{ "Name": "rollupquerycustomdecimalid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - Custom Rollup Field (Decimal)", "Attribute": "rollupquerycustomdecimalid" }, 
{ "Name": "rollupquerycustomintegerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - Custom Rollup Field (Integer)", "Attribute": "rollupquerycustomintegerid" }, 
{ "Name": "rollupquerycustommoneyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - Custom Rollup Field (Money)", "Attribute": "rollupquerycustommoneyid" }, 
{ "Name": "rollupqueryinprogressdecimalid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - In-progress(Decimal)", "Attribute": "rollupqueryinprogressdecimalid" }, 
{ "Name": "rollupqueryinprogressintegerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - In-progress(Integer)", "Attribute": "rollupqueryinprogressintegerid" }, 
{ "Name": "rollupqueryinprogressmoneyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Rollup Query - In-progress(Money)", "Attribute": "rollupqueryinprogressmoneyid" }, 
{ "Name": "stretchtargetdecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Stretch Target (Decimal)", "Attribute": "stretchtargetdecimal" }, 
{ "Name": "stretchtargetinteger", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Stretch Target (Integer)", "Attribute": "stretchtargetinteger" }, 
{ "Name": "stretchtargetmoney", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Stretch Target (Money)", "Attribute": "stretchtargetmoney" }, 
{ "Name": "targetdecimal", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Target (Decimal)", "Attribute": "targetdecimal" }, 
{ "Name": "targetinteger", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Target (Integer)", "Attribute": "targetinteger" }, 
{ "Name": "targetmoney", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Target (Money)", "Attribute": "targetmoney" }, 
{ "Name": "title", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Name", "Attribute": "title" }], 
"ControlsLength": 41, 
"Navigation": [
], 
"Tabs": [
{ "Label": "General", "Name": "general", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Information", "Name": "information", "Visible": true, "Controls": [
{ "Name": "title" }, 
{ "Name": "parentgoalid" }, 
{ "Name": "metricid" }, 
{ "Name": "goalownerid" }, 
{ "Name": "ownerid" }]}]}, 
{ "Label": "Time Period", "Name": "{349a439d-6ed5-bae8-7c7d-3721869367ca}", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Time Period", "Name": "{3a5c2dc2-2ee7-848c-83eb-a2b1e4d1c703}", "Visible": true, "Controls": [
{ "Name": "isfiscalperiodgoal" }, 
{ "Name": "fiscalperiod" }, 
{ "Name": "fiscalyear" }, 
{ "Name": "goalstartdate" }, 
{ "Name": "goalenddate" }]}]}, 
{ "Label": "Targets", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Money", "Name": "{48707907-e91e-1590-1cd1-a9ddb71476d7}", "Visible": true, "Controls": [
{ "Name": "targetmoney" }, 
{ "Name": "stretchtargetmoney" }]}, 
{ "Label": "Numbers", "Name": "{adadc153-6be6-448b-7b31-64c39637829b}", "Visible": true, "Controls": [
{ "Name": "targetinteger" }, 
{ "Name": "stretchtargetinteger" }]}, 
{ "Label": "Decimal", "Name": "{a7c72450-609e-c738-4557-781b2088c473}", "Visible": true, "Controls": [
{ "Name": "targetdecimal" }, 
{ "Name": "stretchtargetdecimal" }]}]}, 
{ "Label": "Child Goals", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Child Goals", "Name": "{89ae1e95-1ccc-8646-eece-5de9e57b9743}", "Visible": true, "Controls": [
{ "Name": "child_goals" }]}]}, 
{ "Label": "Actuals", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Money", "Name": "{1d7eac24-348a-75b1-8a7b-c1dbbc2d7930}", "Visible": true, "Controls": [
{ "Name": "actualmoney" }, 
{ "Name": "percentage" }, 
{ "Name": "inprogressmoney" }, 
{ "Name": "customrollupfieldmoney" }]}, 
{ "Label": "Numbers", "Name": "{7c93d1dd-bcb6-8994-06ba-b913cab6bdb4}", "Visible": true, "Controls": [
{ "Name": "actualinteger" }, 
{ "Name": "percentage" }, 
{ "Name": "inprogressinteger" }, 
{ "Name": "customrollupfieldinteger" }]}, 
{ "Label": "Decimal", "Name": "{86aa59b3-d012-bd70-488b-6d2767ea858d}", "Visible": true, "Controls": [
{ "Name": "actualdecimal" }, 
{ "Name": "percentage" }, 
{ "Name": "inprogressdecimal" }, 
{ "Name": "customrollupfielddecimal" }]}, 
{ "Label": "Rollup additional information", "Name": "null", "Visible": true, "Controls": [
{ "Name": "lastrolledupdate" }]}]}, 
{ "Label": "Goal Criteria", "Name": "null", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Define criteria for this goal. The criteria will be used for rolling up the Actuals data against the goal.", "Name": "null", "Visible": true, "Controls": [
{ "Name": "rolluponlyfromchildgoals" }, 
{ "Name": "consideronlygoalownersrecords" }]}, 
{ "Label": "Additional Rollup Criteria - Rollup Queries", "Name": "null", "Visible": true, "Controls": [
{ "Name": "rollupqueryactualmoneyid" }, 
{ "Name": "rollupqueryinprogressmoneyid" }, 
{ "Name": "rollupquerycustommoneyid" }]}, 
{ "Label": "Additional Rollup Criteria - Rollup Queries", "Name": "null", "Visible": true, "Controls": [
{ "Name": "rollupqueryactualintegerid" }, 
{ "Name": "rollupqueryinprogressintegerid" }, 
{ "Name": "rollupquerycustomintegerid" }]}, 
{ "Label": "Additional Rollup Criteria - Rollup Queries", "Name": "null", "Visible": true, "Controls": [
{ "Name": "rollupqueryactualdecimalid" }, 
{ "Name": "rollupqueryinprogressdecimalid" }, 
{ "Name": "rollupquerycustomdecimalid" }]}]}, 
{ "Label": "Notes", "Name": "notes", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "Notes", "Name": "notes", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}]}]
};

var Xrm = new _xrm(pageData);
