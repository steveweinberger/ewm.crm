/// <reference path="Common/XrmPage-vsdoc.js" />

// InformationSourceFormScript  

if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.InformationSource = {

    FormOnLoad: function () {
        COG.Library.InformationSource.AttachEvents();
        COG.Library.InformationSource.SetAlerts();
        COG.Library.InformationSource.SetInformationTabs();
        //COG.Library.InformationSource.ShowRandomSample();
    },

    SetAlerts: function () {
    },

    AttachEvents: function () {
        //Xrm.Page.getAttribute("cog_validationmethod").addOnChange(COG.Library.InformationSource.SetValidationMethod);
        Xrm.Page.getAttribute("cog_incidentorigin").addOnChange(COG.Library.InformationSource.SetInformationTabs);
    },

    SetValidationMethod: function () {
        var optionset = Xrm.Page.getAttribute("cog_validationmethod");

        //Sections
        var randomSampleSection = Xrm.Page.ui.tabs.get("tab_Main").sections.get("section_RandomSample");

        if (optionset != null) {
                //External Data Sources = 181310000
                //Internal Algorithm Library = 181310001
                //Identity Validation = 181310002
                //Random Sample = 181310003
                //Social Media = 181310004
                //Web = 
                if (randomsampleSection != null)
                    randomsampleSection.setVisible(optionset == 181310003);
        }
    },

    //hide contact, web or analytics sections based on origin type
    SetInformationTabs: function () {
        var optionset = Xrm.Page.getAttribute("cog_incidentorigin");

        //Sections
        var mainSection = Xrm.Page.ui.tabs.get("tab_Main").sections.get("section_Analytics");
        var contactSection = Xrm.Page.ui.tabs.get("tab_Main").sections.get("section_Contact");
        var webSection = Xrm.Page.ui.tabs.get("tab_Main").sections.get("section_Web");
        var randomSampleSection = Xrm.Page.ui.tabs.get("tab_Main").sections.get("section_RandomSample");
        var validationMethods = Xrm.Page.ui.tabs.get("tab_Main").sections.get("section_ValidationMethods");

        switch (optionset.getValue()) {
            case 181310000: //fax
                contactSection.setVisible(true); //Contact Section
                mainSection.setVisible(false); //Analytics Section
                webSection.setVisible(false); //Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            case 181310001: //letter
                contactSection.setVisible(true); //Contact Section
                mainSection.setVisible(false); //Analytics Section
                webSection.setVisible(false); //Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            case 181310002: //other
                contactSection.setVisible(true); //Contact Section
                mainSection.setVisible(false); //Analytics Section
                webSection.setVisible(false); //Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            case 181310003: //referral
                contactSection.setVisible(true); //Contact Section
                mainSection.setVisible(false); //Analytics Section
                webSection.setVisible(false);//Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            case 181310004: //Supervised Analytics
                contactSection.setVisible(false); //Contact Section
                mainSection.setVisible(true);//Analytics Section
                webSection.setVisible(false); //Web Section
                randomSampleSection.setVisible(true); //Random Sample Section
                break;
            case 181310005: //Un - Supervised Analytics
                contactSection.setVisible(false); //Contact Section
                mainSection.setVisible(true);//Analytics Section
                webSection.setVisible(false); //Web Section
                randomSampleSection.setVisible(true); //Random Sample Section
                break;
            case 181310006: //Walk in
                contactSection.setVisible(true); //Contact Section
                mainSection.setVisible(false); //Analytics Section
                webSection.setVisible(false); //Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            case 181310007: //phone
                contactSection.setVisible(true); //Contact Section
                mainSection.setVisible(false); //Analytics Section
                webSection.setVisible(false);//Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            case 181310008: //email
                contactSection.setVisible(true); //Contact Section
                mainSection.setVisible(false);//Analytics Section
                webSection.setVisible(false);//Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            case 181310009: //web
                contactSection.setVisible(false); //Contact Section
                mainSection.setVisible(false);//Analytics Section
                webSection.setVisible(true);//Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            case 181310010: //social media
                contactSection.setVisible(false); //Contact Section
                mainSection.setVisible(false); //Analytics Section
                webSection.setVisible(true);//Web Section
                randomSampleSection.setVisible(false); //Random Sample Section
                break;
            //case 181310011: //random sample
            //    contactSection.setVisible(false); //Contact Section
            //    mainSection.setVisible(false); //Analytics Section
            //    webSection.setVisible(false);//Web Section
            //    break;
        }

        //Determine if a Random Sample Validation method was used and if so, display the Random Sample Section
        //var rsOptionset = Xrm.Page.getAttribute("cog_validationmethod");
    },

    ShowRandomSample: function () {
        //var quickViewControl = Xrm.Page.ui.quickForms.get('qvInformationSource');

        //if (quickViewControl != undefined) {

        //    //check to see if quickform is loaded
        //    if (quickViewControl.isLoaded()) {

        var selectedRows = Xrm.Page.getControl("sgValidationMethods").getGrid().getSelectedRows();
                var selectedRow = selectedRows.getAll()[0];
                var attributes = selectedRow.getData().getEntity().getAttributes().getAll();

                attributes.forEach(function (attribute) {
                    var attributeName = attribute.getKey();
                    var attributeValue = attribute.getValue();
                    var targetAttributeName = null;
                    switch (attributeName) {
                        case "Random Sample":
                            targetAttributeName = true;
                            break;
                        default:
                    }
                });

                
                var randomSampleSection = Xrm.Page.ui.tabs.get("tab_Main").sections.get("section_RandomSample");
                    if (randomsampleSection != null)
                        randomsampleSection.setVisible(targetAttributeName);
                
                //if (tab != null) {
                //    var randomsampleSection = tab.sections.getByName("section_RandomSample");
                //    if (randomsampleSection != null)
                //        randomsampleSection.setVisible(optionset == 181310011);
                //}
                //var tab = quickViewControl.ui.tabs.getByName("tab_InformationSource");

                //if (optionset != null) {
                //    if (tab != null) {
                //        var randomsampleSection = tab.sections.getByName("section_RandomSample");
                //        if (randomsampleSection != null)
                //            randomsampleSection.setVisible(optionset == 181310011);
                //    }
                //}
            //}
            //else {
            //    //if not, try again using timeout
            //    setTimeout(COG.Library.Case.HideInformationSource, 10);
            //}
    },


    __namespace: true
};