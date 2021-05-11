/// <reference path="Common/XrmPage-vsdoc.js" />

// CommonFormScript   

if (typeof (COG) == "undefined")
{ COG = { __namespace: true }; }

if (typeof (COG.Library) == "undefined")
{ COG.Library = { __namespace: true }; }

COG.Library.Common = {

    ActivateBusinessProcessFlow: function (bpfName) {
        var bpfId = COG.Library.Common.GetBusinessProcessFlowId(bpfName);
        var currentprocessId = Xrm.Page.getAttribute("processid").getValue();
        if (bpfId != null && bpfId != currentprocessId) {
            COG.Library.Common.ActiveProcesses(bpfId.toUpperCase());
        }
    },

    GetBusinessProcessFlowId: function (bpfName) {
        var query = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'> \
                      <entity name='workflow'> \
                        <attribute name='workflowid' /> \
                        <order attribute='name' descending='false' /> \
                        <filter type='and'> \
                          <condition attribute='type' operator='eq' value='1' /> \
                          <condition attribute='name' operator='eq' value='" + bpfName + "' /> \
                          <condition attribute='category' operator='eq' value='4' /> \
                        </filter> \
                      </entity> \
                    </fetch>";

        var process = XrmServiceToolkit.Soap.Fetch(query);

        if (process != null)
            return process[0].id;
        else
            return;
    },

    ActiveProcesses: function (activeprocessid) {
        //get all active processes for an entity (OnPageLoad())
        Xrm.Page.data.process.getEnabledProcesses(function (processes) {
            for (var processId in processes) {
                //process id
                var processId = processId;

                //process name
                var processName = processes[processId];

                //check for process and set it active
                if (processId.toUpperCase() == activeprocessid) {
                    //if the entity is has multiple active processes, the user can select which process to run
                    Xrm.Page.data.process.setActiveProcess(processId, function (status) {
                        if (status == "success") {
                            Xrm.Utility.openEntityForm("incident", Xrm.Page.data.entity.getId());
                        }
                    });
                }
            }
        });
    },

    __namespace: true
};