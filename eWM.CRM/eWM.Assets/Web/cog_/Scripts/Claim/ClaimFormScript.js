/// <reference path="Common/XrmPage-vsdoc.js" />

// ClaimFormScript  

if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.Claim = {

    FormOnLoad: function () {
        COG.Library.Claim.AttachEvents();
        COG.Library.Claim.SetAlerts();
        COG.Library.Claim.ToggleClaimTabs();
        COG.Library.Claim.MakeClaimFieldsReadOnly();
    },

    SetAlerts: function () {
    },

    AttachEvents: function () {
    },

    //Sets the name field to the description of the sakclaim
    ToggleClaimTabs: function() {

        var providerTab = Xrm.Page.ui.tabs.get("tab_Provider");
        var recipientTab = Xrm.Page.ui.tabs.get("tab_Recipient");
        providerTab.setDisplayState("collapsed");
        recipientTab.setDisplayState("collapsed");

        var claim = "";
        var name = Xrm.Page.getAttribute('cog_sakclaim');
        if (name.getValue() != null) {
            var claimValue = name.getValue();

            if (claimValue != null) {
                claim = claimValue.toString();
            }
            if (Xrm.Page.getControl('cog_name') != null) {
                Xrm.Page.data.entity.attributes.get('cog_name').setValue(claim);
            }
        }
    },

    //In order to maintain data integrity, the header claim fields on the form need to be read only
    MakeClaimFieldsReadOnly: function () {
        COG.Library.Claim.TabObject("tab_Header", true);
        if (Xrm.Page.getControl('cog_name') != null) {
            Xrm.Page.getControl("cog_name").setDisabled(true);
        }
        
    },

    TabObject: function (tabName, DisableStatus) {
        var sectionName = Xrm.Page.ui.tabs.get(tabName).sections.get();
        for (var i in sectionName) {
            var controls = sectionName[i].controls.get();
            var controlsLength = controls.length;
            for (var i = 0; i < controlsLength; i++) {
                controls[i].setDisabled(DisableStatus);
            }
        }
    },

    __namespace: true
};