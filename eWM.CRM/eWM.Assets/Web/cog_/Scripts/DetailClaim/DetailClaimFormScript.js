/// <reference path="Common/XrmPage-vsdoc.js" />

// DetailClaimFormScript  

if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.DetailClaim = {

    FormOnLoad: function () {
        COG.Library.DetailClaim.AttachEvents();
        COG.Library.DetailClaim.SetAlerts();
        COG.Library.DetailClaim.ToggleDetailClaimTabs();
        COG.Library.DetailClaim.MakeClaimFieldsReadOnly();
    },

    SetAlerts: function () {
    },

    AttachEvents: function () {
    },

    //Sets the name field to the description of the sakclaim
    ToggleDetailClaimTabs: function () {

        var providerTab = Xrm.Page.ui.tabs.get("tab_Provider");
        var recipientTab = Xrm.Page.ui.tabs.get("tab_Recipient");
        providerTab.setDisplayState("collapsed");
        recipientTab.setDisplayState("collapsed");

        var claim = "";
        var name = Xrm.Page.getAttribute('cog_sakclaimdetail');
        if (name.getValue() != null) {
            var claimValue = name.getValue();

            if (claimValue != null) {
                claim = claimValue.toString();
            }
            Xrm.Page.data.entity.attributes.get('cog_name').setValue(claim);
        }
    },

    //In order to maintain data integrity, the header claim fields on the form need to be read only
    MakeClaimFieldsReadOnly: function () {
        COG.Library.DetailClaim.TabObject("tab_Header", true);
        COG.Library.DetailClaim.TabObject("tab_Detail", true);
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