/// <reference path="Common/XrmPage-vsdoc.js" />

// ExpenseFormScript   

if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.Expense = {

    FormOnLoad: function () {
        COG.Library.Expense.AttachEvents();
    },

    AttachEvents: function () {
        Xrm.Page.getAttribute("cog_expensetype").addOnChange(COG.Library.Expense.ToggleExpenseType);
    },

    ToggleExpenseType: function () {
        
        var optionset = Xrm.Page.getAttribute("cog_expensetype");
        var other = Xrm.Page.getControl("cog_other");
        var miles = Xrm.Page.getControl("cog_miles");
        var hotelName = Xrm.Page.getControl("cog_name");

        switch (optionset.getValue()) {
            case 181310009:	//Other
                other.setVisible(true); //Other
                miles.setVisible(false); //Miles
                break;
            case 181310001: //Mileage
                other.setVisible(false); //Other
                miles.setVisible(true); //Miles
            case 181310005: //Hotel
                hotelName.setLabel("Hotel Name");
                other.setVisible(false); //Other
                miles.setVisible(false); //Miles
            default:
                other.setVisible(false); //Other
                miles.setVisible(false); //Miles
                break;
        }
    },

    MinutesToStr: function (minutes) {
        var sign = '';

        if (minutes < 0) {
            sign = '-';
        }

        var hours = COG.Library.Expense.LeftPad(Math.floor(Math.abs(minutes) / 60));
        var minutes = COG.Library.Expense.LeftPad(Math.abs(minutes) % 60);

        return sign + hours + 'hrs ' + minutes + 'min';
    },

    LeftPad: function (number) {
        return ((number < 10 && number >= 0) ? '0' : '') + number;
    },

    __namespace: true
};

