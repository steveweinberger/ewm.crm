/// <reference path="Common/XrmPage-vsdoc.js" />

// FindingFormScript  
if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.Finding = {

    FormOnLoad: function () {
        COG.Library.Finding.AttachEvents();
        COG.Library.Finding.SetAlerts();
    },

    SetAlerts: function () {
    },

    AttachEvents: function () {
        Xrm.Page.getAttribute("cog_findingerrorcode").addOnChange(COG.Library.Finding.GetFindingErrorCodeDescription);
    },

    GetFindingErrorCodeDescription: function () {
        var EntityName, EntityId, LookupFieldObject;
        var Name = "";
        var resultXml;
        LookupFieldObject = Xrm.Page.data.entity.attributes.get('cog_findingerrorcode');
        if (LookupFieldObject.getValue() != null) {
            EntityId = LookupFieldObject.getValue()[0].id;
            EntityName = LookupFieldObject.getValue()[0].entityType;
            resultXml = COG.Library.Finding.GetFindingErrorDetails(EntityName, EntityId);
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
    GetFindingErrorDetails: function (EntityName, EntityId) {
        var cols = ["cog_name", "cog_description"];
        var retrievedResult = XrmServiceToolkit.Soap.Retrieve(EntityName, EntityId, cols);
        return retrievedResult;
    },
    __namespace: true
};