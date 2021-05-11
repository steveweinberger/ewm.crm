/// <reference path="Common/XrmPage-vsdoc.js" />

// ContactFormScript
if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.Contact = {

    FormOnLoad: function () {
        COG.Library.Contact.AttachEvents();
        COG.Library.Contact.SetAlerts();
        COG.Library.Contact.ToggleContactCreateTabs();
    },

    AttachEvents: function () {
        Xrm.Page.getAttribute("cog_contacttype").addOnChange(COG.Library.Contact.ToggleContactCreateTabs);
    },

    SetAlerts: function () {
    },

    //hide recipient, provider or information source based on contact type
    ToggleContactCreateTabs: function () {
        var optionset = Xrm.Page.getAttribute("cog_contacttype");

        //Tabs    
        var contactTab = Xrm.Page.ui.tabs.get("tab_Contact");

        //Sections
        var contactSection = contactTab.sections.get("section_Contact");
        var addressSection = contactTab.sections.get("section_Address");
        var recipientProviderSection = contactTab.sections.get("section_Recipient_Provider");

        var sakProvider = Xrm.Page.ui.controls.get("cog_sakprovider");
        var providerid = Xrm.Page.ui.controls.get("cog_providerid");
        var providertype = Xrm.Page.ui.controls.get("cog_providertype");
        var providerspecialty = Xrm.Page.ui.controls.get("cog_providerspecialty");
        var legalname = Xrm.Page.ui.controls.get("cog_legalname");
        var licensetype = Xrm.Page.ui.controls.get("cog_licensetype");
        var licensenumber = Xrm.Page.ui.controls.get("cog_licensenumber");
        var licenseeffectivedate = Xrm.Page.ui.controls.get("cog_licenseeffectivedate");
        var licenseenddate = Xrm.Page.ui.controls.get("cog_licenseenddate");
        var taxonomycode = Xrm.Page.ui.controls.get("cog_taxonomycode");
        var servicecategorycode = Xrm.Page.ui.controls.get("cog_servicecategorycode");
        var sakrecipient = Xrm.Page.ui.controls.get("cog_sakrecipient");
        var recipientid = Xrm.Page.ui.controls.get("cog_recipientid");
        var subscriberid = Xrm.Page.ui.controls.get("cog_subscriberid");
        var dualeligibilitycode = Xrm.Page.ui.controls.get("cog_dualeligibilitycode");
        var eligibilitygroupcode = Xrm.Page.ui.controls.get("cog_eligibilitygroupcode");
        var eligibilityeffectivedate = Xrm.Page.ui.controls.get("cog_eligibilityeffectivedate");
        var eligibilityenddate = Xrm.Page.ui.controls.get("cog_eligibilityenddate");


        switch (optionset.getValue()) {
            case 181310007:
                //Anonymous
                contactSection.setVisible(true); //Contact Section
                addressSection.setVisible(true); //Address Section
                recipientProviderSection.setVisible(false); //Recipient Provider Section
                break;

            case 181310000:
                //Contact
                contactSection.setVisible(true); //Contact Section
                addressSection.setVisible(true); //Address Section
                recipientProviderSection.setVisible(false); //Recipient Provider Section
                break;

            case 181310001:
                //Information Source
                contactSection.setVisible(true); //Contact Section
                addressSection.setVisible(true); //Address Section
                recipientProviderSection.setVisible(false); //Recipient Provider Section
                break;

            case 181310002:
                //Lead
                contactSection.setVisible(true); //Contact Section
                addressSection.setVisible(true); //Address Section
                recipientProviderSection.setVisible(false); //Recipient Provider Section
                break;

            case 181310003:
                //Provider
                contactSection.setVisible(true); //Contact Section
                addressSection.setVisible(true); //Address Section
                recipientProviderSection.setVisible(true); //Recipient Provider Section

                //individual controls
                recipientProviderSection.setLabel("Provider Information");
                sakProvider.setVisible(true);
                providerid.setVisible(true);
                providertype.setVisible(true);
                providerspecialty.setVisible(true);
                legalname.setVisible(true);
                licensetype.setVisible(true);
                licensenumber.setVisible(true);
                licenseeffectivedate.setVisible(true);
                licenseenddate.setVisible(true);
                taxonomycode.setVisible(true);
                servicecategorycode.setVisible(true);
                sakrecipient.setVisible(false);
                recipientid.setVisible(false);
                subscriberid.setVisible(false);
                dualeligibilitycode.setVisible(false);
                eligibilitygroupcode.setVisible(false);
                eligibilityeffectivedate.setVisible(false);
                eligibilityenddate.setVisible(false);
                break;

            case 181310004:
                //Recipient
                contactSection.setVisible(true); //Contact Section
                addressSection.setVisible(true); //Address Section
                recipientProviderSection.setVisible(true); //Recipient Provider Section

                //individual controls
                recipientProviderSection.setLabel("Recipient Information");
                sakProvider.setVisible(false);
                providerid.setVisible(false);
                providertype.setVisible(false);
                providerspecialty.setVisible(false);
                legalname.setVisible(false);
                licensetype.setVisible(false);
                licensenumber.setVisible(false);
                licenseeffectivedate.setVisible(false);
                licenseenddate.setVisible(false);
                taxonomycode.setVisible(false);
                servicecategorycode.setVisible(false);
                sakrecipient.setVisible(true);
                recipientid.setVisible(true);
                subscriberid.setVisible(true);
                dualeligibilitycode.setVisible(true);
                eligibilitygroupcode.setVisible(true);
                eligibilityeffectivedate.setVisible(true);
                eligibilityenddate.setVisible(true);
                break;

            case 181310005:
                //Referral
                contactSection.setVisible(true); //Contact Section
                addressSection.setVisible(true); //Address Section
                recipientProviderSection.setVisible(false); //Recipient Provider Section
                break;

            case 181310006:
                //Subscriber
                contactSection.setVisible(true); //Contact Section
                addressSection.setVisible(true); //Address Section
                recipientProviderSection.setVisible(true); //Recipient Provider Section
                break;
            default:
                break;
        }
    },

    __namespace: true
};