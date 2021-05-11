using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReportGen.ReportExecution;
using System.IO;

namespace ReportGen
{
    class SSRSReport
    {
        public string reportServerURL { get; set; }
        public string reportLocation { get; set; }
        public string reportOutputFormat { get; set; }
        public string reportExecutionSession { get; set; }
        public string reportDestination { get; set; }
        public string reportDestinationName { get; set; }
        public string reportDestinationExtension { get; set; }
        public List<SSRSReportParameter> reportParameters { get; set; }
        public SSRSReport()
        {
            reportParameters = new List<SSRSReportParameter>();

        }

        //public void GenerateReport()
        //{
        //    byte[] reportFile = null;
        //    string reportPath = reportLocation;
        //    string format = reportOutputFormat;
        //    string historyID = null;
        //    string devInfo = @"<DeviceInfo><Toolbar>False</Toolbar></DeviceInfo>";
        //    string encoding;
        //    string mimeType;
        //    string extension = reportDestinationExtension;
        //    Warning[] warnings = null;
        //    string[] streamIDs = null;

        //    ReportExecutionService rs = new ReportExecutionService();
        //    ExecutionInfo execInfo = new ExecutionInfo();
        //    ExecutionHeader execHeader = new ExecutionHeader();

        //    //rs.Credentials = new System.Net.NetworkCredential("adm_ea", "", "az");
        //    rs.Credentials = System.Net.CredentialCache.DefaultNetworkCredentials;

        //    rs.Url = reportServerURL;

        //    ParameterValue[] parameters = new ParameterValue[reportParameters.Count()];
        //    for (int i = 0; i < parameters.Count(); i++)
        //    {
        //        parameters[i] = new ParameterValue();
        //        parameters[i].Name = reportParameters[i].paramName;
        //        parameters[i].Value = reportParameters[i].paramValue;
        //    }

        //    rs.ExecutionHeaderValue = execHeader;
        //    execInfo = rs.LoadReport(reportPath, historyID);
        //    String SessionId = rs.ExecutionHeaderValue.ExecutionID;
        //    rs.SetExecutionParameters(parameters, "en-us");

        //    reportFile = rs.Render(format, devInfo, out extension, out encoding, out mimeType, out warnings, out streamIDs);
        //    saveReport(reportFile);
        //}

        //private void saveReport(byte[] reportFile)
        //{
        //    FileStream stream = File.Create(reportDestination + reportDestinationName, reportFile.Length);
        //    stream.Write(reportFile, 0, reportFile.Length);
        //    stream.Close();
        //}
    }
}
