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
        COG.Library.Contact.ToggleContactTabs();
    },

    AttachEvents: function () {
        Xrm.Page.getAttribute("cog_contacttype").addOnChange(COG.Library.Contact.ToggleContactTabs);
    },

    SetAlerts: function () {
    },

    //hide recipient, provider or information source based on contact type
    ToggleContactTabs: function () {
        alert("into Toggle Event");
        var optionset = Xrm.Page.getAttribute("cog_contacttype");
        //Tabs
        var providerTab = Xrm.Page.ui.tabs.get("tab_ProviderInformation");
        var recipientTab = Xrm.Page.ui.tabs.get("tab_RecipientInformation");
        var informationTab = Xrm.Page.ui.tabs.get("tab_InformationSource");
        var contactAddressesTab = Xrm.Page.ui.tabs.get("tab_ContactAddresses");
        var associatedInfoTab = Xrm.Page.ui.tabs.get("tab_AssociatedInfo");

        //Sections
        //var personalSection = Xrm.Page.ui.tabs.get("tab_Contact").sections.get("section_Contact");
        var fullname = Xrm.Page.ui.controls.get("fullname");
        var firstname = Xrm.Page.ui.controls.get("firstname");
        var middlename = Xrm.Page.ui.controls.get("middlename");
        var lastname = Xrm.Page.ui.controls.get("lastname");
        var salutation = Xrm.Page.ui.controls.get("salutation");
        var preferredcontactmethodcode = Xrm.Page.ui.controls.get("preferredcontactmethodcode");
        var cog_ssn = Xrm.Page.ui.controls.get("cog_ssn");
        //var secondaryAddress = Xrm.Page.ui.tabs.get("tab_SecondaryAddress");
        //var primaryAddress = Xrm.Page.ui.tabs.get("tab_PrimaryAddress");
        alert("before optionset");
        alert("optionset value: " + optionset.getValue());
        switch (optionset.getValue()) {
            
            case 181310007:
                //Anonymous
                providerTab.setVisible(false); //Provider Tab
                recipientTab.setVisible(false); //Recipient Tab
                informationTab.setVisible(false); //Information Source
                contactAddressesTab.setVisible(true); //Contact Addresses
                //personalSection.setVisible(true); //Personal Section
                fullname.setVisible(true); //
                firstname.setVisible(true); //
                middlename.setVisible(true); //
                lastname.setVisible(true); //
                salutation.setVisible(true); //
                preferredcontactmethodcode.setVisible(true); //
                cog_ssn.setVisible(true); //
                break;

            case 181310000:
                //Contact
                providerTab.setVisible(false); //Provider Tab
                recipientTab.setVisible(false); //Recipient Tab
                informationTab.setVisible(false); //Information Source
                contactAddressesTab.setVisible(true); //Contact Addresses
                //personalSection.setVisible(true); //Personal Section
                fullname.setVisible(true); //
                firstname.setVisible(true); //
                middlename.setVisible(true); //
                lastname.setVisible(true); //
                salutation.setVisible(true); //
                preferredcontactmethodcode.setVisible(true); //
                cog_ssn.setVisible(true); //
                break;

            case 181310001:
                //Information Source
                providerTab.setVisible(false); //Provider Tab
                recipientTab.setVisible(false); //Recipient Tab
                informationTab.setVisible(true); //Information Source
                contactAddressesTab.setVisible(false); //Contact Addresses
                //personalSection.setVisible(false); //Personal Section
                fullname.setVisible(false); //
                firstname.setVisible(false); //
                middlename.setVisible(false); //
                lastname.setVisible(false); //
                salutation.setVisible(false); //
                preferredcontactmethodcode.setVisible(false); //
                cog_ssn.setVisible(false); //
                break;

            case 181310002:
                //Lead
                providerTab.setVisible(false); //Provider Tab
                recipientTab.setVisible(false); //Recipient Tab
                informationTab.setVisible(false); //Information Source
                contactAddressesTab.setVisible(true); //Contact Addresses
                //personalSection.setVisible(true); //Personal Section
                fullname.setVisible(true); //
                firstname.setVisible(true); //
                middlename.setVisible(true); //
                lastname.setVisible(true); //
                salutation.setVisible(true); //
                preferredcontactmethodcode.setVisible(true); //
                cog_ssn.setVisible(true); //
                break;

            case 181310003:
                //Provider
                
                providerTab.setVisible(true); //Provider Tab
                providerTab.setDisplayState("expanded");
                recipientTab.setVisible(false); //Recipient Tab
                informationTab.setVisible(false); //Information Source
                //contactAddressesTab.setVisible(true); //Contact Addresses
                //contactAddressesTab.setDisplayState("collapsed");
                //associatedInfoTab.setDisplayState("collapsed");
                //personalSection.setVisible(true); //Personal Section
                //fullname.setVisible(true); //
                firstname.setVisible(true); //
                middlename.setVisible(true); //
                lastname.setVisible(true); //
                salutation.setVisible(true); //
                preferredcontactmethodcode.setVisible(true); //
                cog_ssn.setVisible(true); //
                break;

            case 181310004:
                //Recipient
                providerTab.setVisible(false); //Provider Tab
                recipientTab.setVisible(true); //Recipient Tab
                recipientTab.setDisplayState("expanded");
                informationTab.setVisible(false); //Information Source
                contactAddressesTab.setVisible(true); //Contact Addresses
                //personalSection.setVisible(true); //Personal Section
                fullname.setVisible(true); //
                firstname.setVisible(true); //
                middlename.setVisible(true); //
                lastname.setVisible(true); //
                salutation.setVisible(true); //
                preferredcontactmethodcode.setVisible(true); //
                cog_ssn.setVisible(true); //
                break;

            case 181310005:
                //Referral
                providerTab.setVisible(false); //Provider Tab
                recipientTab.setVisible(false); //Recipient Tab
                informationTab.setVisible(false); //Information Source
                contactAddressesTab.setVisible(true); //Contact Addresses
                //personalSection.setVisible(true); //Personal Section
                fullname.setVisible(true); //
                firstname.setVisible(true); //
                middlename.setVisible(true); //
                lastname.setVisible(true); //
                salutation.setVisible(true); //
                preferredcontactmethodcode.setVisible(true); //
                cog_ssn.setVisible(true); //
                break;

            case 181310006:
                //Subscriber
                providerTab.setVisible(false); //Provider Tab
                recipientTab.setVisible(false); //Recipient Tab
                informationTab.setVisible(false); //Information Source
                contactAddressesTab.setVisible(true); //Contact Addresses
                //personalSection.setVisible(true); //Personal Section
                fullname.setVisible(true); //
                firstname.setVisible(true); //
                middlename.setVisible(true); //
                lastname.setVisible(true); //
                salutation.setVisible(true); //
                preferredcontactmethodcode.setVisible(true); //
                cog_ssn.setVisible(true); //
                break;
            default:
                break;
        }
    },
    __namespace: true
};