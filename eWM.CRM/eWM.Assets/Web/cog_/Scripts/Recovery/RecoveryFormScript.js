/// <reference path="Common/XrmPage-vsdoc.js" />

// RecoveryFormScript  
if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.Recovery = {

    FormOnLoad: function () {
        COG.Library.Recovery.AttachEvents();
        COG.Library.Recovery.SetAlerts();
        COG.Library.Recovery.ShowHideTabs();
    },

    SetAlerts: function () {
    },

    AttachEvents: function () {
        Xrm.Page.getAttribute("cog_paymenttype").addOnChange(COG.Library.Recovery.PaymentTypeChange);
    },

    PaymentTypeChange: function(){
        COG.Library.Recovery.ShowHideTabs();
    },

    ShowHideTabs: function(){
        //tabs
        var paymentTab = Xrm.Page.ui.tabs.get("tab_Payment");

        //optionset
        var optionset = Xrm.Page.getAttribute("cog_paymenttype");
        
        //fields
        var cashControlNumber = Xrm.Page.ui.controls.get("cog_cashcontrolnumber");
        var checkNumber = Xrm.Page.ui.controls.get("cog_checknumber");
        var nameOnCard = Xrm.Page.ui.controls.get("cog_nameoncard");
        var creditCardCompany = Xrm.Page.ui.controls.get("cog_creditcardcompany");
        var creditCardNumber = Xrm.Page.ui.controls.get("cog_creditcardnumber");
        var month = Xrm.Page.ui.controls.get("cog_month");
        var year = Xrm.Page.ui.controls.get("cog_year");
        var securityCode = Xrm.Page.ui.controls.get("cog_securitycode");
        var refundAmount = Xrm.Page.ui.controls.get("cog_refundamount");
        var refundReason = Xrm.Page.ui.controls.get("cog_refundreason");
        var paidAmount = Xrm.Page.ui.controls.get("cog_paidamount");
        
        var cogname = Xrm.Page.getAttribute("cog_name");
        cogname.setValue(optionset.getText());

        switch (optionset.getValue()) {
            case 181310000:	//Check
                paidAmount.setVisible(true); //paid amount
                //creditCardSection
                nameOnCard.setVisible(false);
                securityCode.setVisible(false);
                creditCardCompany.setVisible(false);
                creditCardNumber.setVisible(false);
                month.setVisible(false);
                year.setVisible(false);
                //refundSection
                refundAmount.setVisible(false);
                refundReason.setVisible(false);
                checkNumber.setVisible(true); //Check Number
                cashControlNumber.setVisible(false); //CCN
                break;
            case 181310001:	//Cash
                paidAmount.setVisible(true); //paid amount
                //creditCardSection
                nameOnCard.setVisible(false);
                securityCode.setVisible(false);
                creditCardCompany.setVisible(false);
                creditCardNumber.setVisible(false);
                month.setVisible(false);
                year.setVisible(false);
                //refundSection
                refundAmount.setVisible(false);
                refundReason.setVisible(false);
                checkNumber.setVisible(false); //Check Number
                cashControlNumber.setVisible(true); //CCN
                break;
            case 181310002:	//Credit Card
                paidAmount.setVisible(true); //paid amount
                //creditCardSection
                nameOnCard.setVisible(true);
                securityCode.setVisible(true);
                creditCardCompany.setVisible(true);
                creditCardNumber.setVisible(true);
                month.setVisible(true);
                year.setVisible(true);
                //refundSection
                refundAmount.setVisible(false);
                refundReason.setVisible(false);
                checkNumber.setVisible(false); //Check Number
                cashControlNumber.setVisible(false); //CCN
                break;
            case 181310003:	//Recoupment
                paidAmount.setVisible(true); //paid amount
                //creditCardSection
                nameOnCard.setVisible(false);
                securityCode.setVisible(false);
                creditCardCompany.setVisible(false);
                creditCardNumber.setVisible(false);
                month.setVisible(false);
                year.setVisible(false);
                //refundSection
                refundAmount.setVisible(false);
                refundReason.setVisible(false);
                checkNumber.setVisible(false); //Check Number
                cashControlNumber.setVisible(false); //CCN
                break;
            case 181310004:	//Refund
                //creditCardSection
                nameOnCard.setVisible(false);
                securityCode.setVisible(false);
                creditCardCompany.setVisible(false);
                creditCardNumber.setVisible(false);
                month.setVisible(false);
                year.setVisible(false);
                //refundSection
                refundAmount.setVisible(true);
                refundReason.setVisible(true);
                checkNumber.setVisible(false); //Check Number
                cashControlNumber.setVisible(false); //CCN
                paidAmount.setVisible(false); //paid amount
                break;
            default:
                paidAmount.setVisible(true); //paid amount
                //creditCardSection
                nameOnCard.setVisible(false);
                securityCode.setVisible(false);
                creditCardCompany.setVisible(false);
                creditCardNumber.setVisible(false);
                month.setVisible(false);
                year.setVisible(false);
                //refundSection
                refundAmount.setVisible(false);
                refundReason.setVisible(false);
                checkNumber.setVisible(false); //Check Number
                cashControlNumber.setVisible(false); //CCN
                break;
        }
    },

    GetRecoveryDescription: function () {
        var EntityName, EntityId, LookupFieldObject;
        var Name = "";
        var resultXml;
        LookupFieldObject = Xrm.Page.data.entity.attributes.get('cog_paymenttype');
        if (LookupFieldObject.getValue() != null) {
            EntityId = LookupFieldObject.getValue()[0].id;
            EntityName = LookupFieldObject.getValue()[0].entityType;
            resultXml = COG.Library.Recovery.GetRecoveryDetails(EntityName, EntityId);
            // Retrieve description value and set the value to name field.
            if (resultXml != null && resultXml.attributes['cog_description'] != null) {
                var description = resultXml.attributes['cog_description'].value;
                Xrm.Page.getAttribute('cog_name').setValue(description);
            }
            else
                Xrm.Page.getAttribute('cog_name').setValue(null);
        }
    },
    //gets a list of the attributes of the finding error code
    GetRecoveryDetails: function (EntityName, EntityId) {
        var cols = ["cog_name", "cog_description"];
        var retrievedResult = XrmServiceToolkit.Soap.Retrieve(EntityName, EntityId, cols);
        return retrievedResult;
    },
    __namespace: true
};