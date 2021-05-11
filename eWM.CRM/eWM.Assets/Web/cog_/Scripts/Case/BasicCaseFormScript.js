/// <reference path="Common/XrmPage-vsdoc.js" />
/// <reference path="Common/FormMainScripts.js" />
// CaseFormScript   

if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.Case = {

    DUE_DATE_ALERT: "DUE_DATE_ALERT",
    PROVIDERDOCUMENTATION_DUE_ALERT: "PROVIDERDOCUMENTATION_DUE_ALERT",
    LEGALACTION_DUE_ALERT: "LEGALACTION_DATE_ALERT",
    PROVIDERRELATEDCASES_ALERT: "PROVIDERRELATEDCASES_ALERT",
    CASE_LASTWORKED_DATE: "CASE_LASTWORKED_DATE",
    ALERT_TYPE_WARNING: "WARNING",
    ALERT_TYPE_INFORMATION: "INFORMATION",

    FormOnLoad: function () {
        COG.Library.Case.AttachEvents();
        COG.Library.Case.SetAlerts();
        COG.Library.Case.CollapseBasicCaseProcess();
        COG.Library.Case.RestrictCustomerToContact();
        //COG.Library.Case.SetBusinessProcessFlow();
        COG.Library.Case.LoadDocs();
    },

    SetAlerts: function () {
        COG.Library.Case.SetDueDateAlert();
        COG.Library.Case.SetProviderDocumentationDateAlert();
        COG.Library.Case.SetLegalActionDateAlert();
        COG.Library.Case.SetRelatedCasesAlert();
        COG.Library.Case.SetCaseNotWorkedAlert();

        // Remove Related Case alert after 10 seconds - just testing
        setTimeout(function () { Xrm.Page.ui.clearFormNotification(COG.Library.Case.PROVIDERRELATEDCASES_ALERT); }, 10000);
    },

    AttachEvents: function () {
        Xrm.Page.getAttribute("cog_duedate").addOnChange(COG.Library.Case.SetDueDateAlert);
        Xrm.Page.getAttribute("cog_providerduedate").addOnChange(COG.Library.Case.SetProviderDocumentationDateAlert);
        Xrm.Page.getAttribute("cog_legalactionduedate").addOnChange(COG.Library.Case.SetLegalActionDateAlert);
        Xrm.Page.getAttribute("cog_lastworkeddate").addOnChange(COG.Library.Case.SetCaseNotWorkedAlert);
        Xrm.Page.getAttribute("cog_totalminutes").addOnChange(COG.Library.Case.SetTotalTimeSpent);
        Xrm.Page.getAttribute("ownerid").addOnChange(COG.Library.Case.SetBusinessProcessFlow);
    },

    SetDueDateAlert: function () {
        COG.Library.Case.ShowHideAlert("cog_duedate", new Date(), COG.Library.Case.DUE_DATE_ALERT, "This case is past due date.", COG.Library.Case.ALERT_TYPE_WARNING);
    },

    SetProviderDocumentationDateAlert: function () {
        COG.Library.Case.ShowHideAlert("cog_providerduedate", new Date(), COG.Library.Case.PROVIDERDOCUMENTATION_DUE_ALERT, "Provider Documentation is Overdue", COG.Library.Case.ALERT_TYPE_WARNING);
    },

    SetLegalActionDateAlert: function () {
        COG.Library.Case.ShowHideAlert("cog_legalactionduedate", new Date(), COG.Library.Case.LEGALACTION_DUE_ALERT, "Legal Action is Overdue", COG.Library.Case.ALERT_TYPE_WARNING);
    },

    SetRelatedCasesAlert: function () {
        if (Xrm.Page.getAttribute("customerid") == null)
            return;

        var customerid = Xrm.Page.getAttribute("customerid").getValue();
        if (customerid == null)
            return;

        var query = "<fetch><entity name='incident'><attribute name='incidentid'/><filter><condition attribute='customerid' operator='eq' value='" + customerid[0].id + "'/></filter></entity></fetch>"
        var cases = XrmServiceToolkit.Soap.Fetch(query);

        if (cases.length > 1)
            Xrm.Page.ui.setFormNotification("Provider on this case has more open cases. See Related Cases section to see details.", COG.Library.Case.ALERT_TYPE_INFORMATION, COG.Library.Case.PROVIDERRELATEDCASES_ALERT);

    },

    SetCaseNotWorkedAlert: function () {
        var workeddate = new Date();
        workeddate.setDate(workeddate.getDate() - 7);

        COG.Library.Case.ShowHideAlert("cog_lastworkeddate", workeddate, COG.Library.Case.CASE_LASTWORKED_DATE, "Case has not been worked in past 7 days", COG.Library.Case.ALERT_TYPE_WARNING);
    },

    ShowHideAlert: function (datefield, comparedate, alertname, alertmessage, alerttype) {
        if (Xrm.Page.getAttribute(datefield)) {
            var duedate = Xrm.Page.getAttribute(datefield).getValue();
            if (duedate != null) {
                //var currentdate = new Date();
                if (comparedate.setHours(0, 0, 0, 0) > duedate.setHours(0, 0, 0, 0))
                    Xrm.Page.ui.setFormNotification(alertmessage, alerttype, alertname);
                else Xrm.Page.ui.clearFormNotification(alertname);
            }
        }
    },

    ToggleOnsiteDate: function () {
        var optionset = Xrm.Page.getAttribute("cog_reviewtype");
        var onsiteDate = Xrm.Page.getControl("cog_onsitedate");

        switch (optionset.getValue()) {
            case 181311000:	//Desk
                onsiteDate.setVisible(false); //Medical Review
                break;
            case 181311001:	//Field
                onsiteDate.setVisible(true); //Medical Review & Data Analytics
                break;
            case 181311002:	//Other
                onsiteDate.setVisible(false); //Medical Review
                break;
            case 181311003:	//Self Report
                onsiteDate.setVisible(false); //Medical Review
                break;
            default:
                onsiteDate.setVisible(true);
                break;
        }
    },

    CollapseBasicCaseProcess: function () {
        setTimeout(COG.Library.Case.CollapseBasicCaseProcessDelay, 20);
    },

    CollapseBasicCaseProcessDelay: function () {
        Xrm.Page.ui.process != null && Xrm.Page.ui.process.setDisplayState("collapsed")
    },

    RestrictCustomerToContact: function () {
        var lookupData = Xrm.Page.getAttribute('customerid').getLookupDataAttribute();
        //check if multiple type dropdowns enabled for this lookup and it is not a partylist. For partylist we might want to select an account and a contact
        if (lookupData.getSupportedLookupTypes().length > 1
             && !lookupData.getIsPartyList()
             && lookupData.getSingleLookupTypeId() !== 2) {
            lookupData.setLookupTypes(['contact'])
        }
    },

    SetTotalTimeSpent: function () {
        var minutes = Xrm.Page.getAttribute("cog_totalminutes").getValue();
        var totaltime = COG.Library.Case.MinutesToStr(minutes);
        Xrm.Page.getAttribute("cog_totaltime").setValue(totaltime);
    },

    MinutesToStr: function (minutes) {
        var sign = '';

        if (minutes < 0) {
            sign = '-';
        }

        var hours = COG.Library.Case.LeftPad(Math.floor(Math.abs(minutes) / 60));
        var minutes = COG.Library.Case.LeftPad(Math.abs(minutes) % 60);

        return sign + hours + 'hrs ' + minutes + 'min';
    },

    LeftPad: function (number) {
        return ((number < 10 && number >= 0) ? '0' : '') + number;
    },

    HideInformationSource: function () {
        var quickViewControl = Xrm.Page.ui.quickForms.get('qvInformationSource');

        if (quickViewControl != undefined) {

            //check to see if quickform is loaded
            if (quickViewControl.isLoaded()) {

                var optionset = quickViewControl.getControl("cog_incidentorigin").getAttribute().getValue();
                var tab = quickViewControl.ui.tabs.getByName("tab_InformationSource");

                if (optionset != null) {
                    if (tab != null) {
                        var randomsampleSection = tab.sections.getByName("section_RandomSample");
                        if (randomsampleSection != null)
                            randomsampleSection.setVisible(optionset == 181310011);
                    }
                }
            }
            else {
                //if not, try again using timeout
                setTimeout(COG.Library.Case.HideInformationSource, 10);
            }
        }
    },

    SetBusinessProcessFlow: function () {
        // Get ownerid
        debugger;

        // If owner is Finance Team - Switch to Case - Finance Business Process Flow
        var owner = Xrm.Page.getAttribute("ownerid");
        if (owner != null) {
            if (owner.getValue()[0].name == "Finance") {
                COG.Library.Common.ActivateBusinessProcessFlow("Case - Finance Business Process");
            }
            else {
                COG.Library.Common.ActivateBusinessProcessFlow("Data Analytics Case Process");
            }
        }

    },

    LoadDocs: function () {
        // JavaScript source code
        //Verify that it isn't create for folder
        if (Xrm.Page.ui.getFormType() === 1)
            return;

        //If not create then display documentation grid
        var recordid = Xrm.Page.data.entity.getId();
        var strrecordid = recordid.toString().replace("{", "").replace("}", "");
        var typecode = Xrm.Page.context.getQueryStringParameters().etc;
        var formId = Xrm.Page.ui.formSelector.getCurrentItem().getId();
        var iFrame = Xrm.Page.ui.controls.get("IFRAME_Documents");

        var url = Xrm.Page.context.getClientUrl() + "/userdefined/areas.aspx?formid=" + formId + "&inlineEdit=1&navItemName=Documents&oId=%7b" + strrecordid + "%7d&oType=" + typecode + "&pagemode=iframe&rof=true&security=852023&tabSet=areaSPDocuments&theme=Outlook15White";
        iFrame.setSrc(url);
    },

    __namespace: true
};

