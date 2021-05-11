/// <reference path="Common/XrmPage-vsdoc.js" />

// TimeTrackingFormScript   

if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.TimeTracking = {

    FormOnLoad: function () {
        COG.Library.TimeTracking.AttachEvents();
        COG.Library.TimeTracking.SetAlerts();
    },

    SetAlerts: function () {
    },

    AttachEvents: function () {
        Xrm.Page.data.entity.addOnSave(COG.Library.TimeTracking.CalculateTotalTime);
    },

    CalculateTotalTime: function (context) {

        var sttime = Xrm.Page.getAttribute("cog_starttime").getValue();
        var endtime = Xrm.Page.getAttribute("cog_endtime").getValue();

        var st = sttime.getTime();
        var et = endtime.getTime();
        var sdiff = (et - st);
        var h = (sdiff / 60 / 1000);
        var p = parseInt(h);
        var tm = p.toString();

        var totaltime = COG.Library.TimeTracking.MinutesToStr(tm);
        Xrm.Page.getAttribute("cog_totalminutes").setValue(tm);
        Xrm.Page.getAttribute("cog_totaltime").setValue(totaltime);
    },

    MinutesToStr: function (minutes) {
        var sign = '';
        if (minutes < 0) {
            sign = '-';
        }

        var hours = COG.Library.TimeTracking.LeftPad(Math.floor(Math.abs(minutes) / 60));
        var minutes = COG.Library.TimeTracking.LeftPad(Math.abs(minutes) % 60);

        return sign + hours + 'hrs ' + minutes + 'min';
    },

    LeftPad: function (number) {
        return ((number < 10 && number >= 0) ? '0' : '') + number;
    },

    __namespace: true
};