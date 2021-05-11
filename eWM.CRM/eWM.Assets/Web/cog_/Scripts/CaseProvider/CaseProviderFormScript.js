/// <reference path="Common/XrmPage-vsdoc.js" />

// CaseProviderFormScript   

if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.CaseProvider = {

    FormOnLoad: function () {
        COG.Library.CaseProvider.AttachEvents();
        COG.Library.CaseProvider.SetAlerts();        
        COG.Library.CaseProvider.SetName();
    },

    SetAlerts: function () {
    },

    AttachEvents: function () {
    },

    SetName: function(){
        var LookupFieldObject;
        LookupFieldObject = Xrm.Page.data.entity.attributes.get('cog_caseprovidercontactid');
        var NameValue = '';
        if (LookupFieldObject.getValue() != null) {
            NameValue = LookupFieldObject.getValue()[0].name;            
        }

        if (Xrm.Page.getControl('cog_name') != null && NameValue != '') {
            Xrm.Page.data.entity.attributes.get('cog_name').setValue(NameValue);
        }
    },
    __namespace: true
};