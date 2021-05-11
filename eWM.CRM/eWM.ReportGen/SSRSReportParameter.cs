using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReportGen
{
    class SSRSReportParameter
    {
        public string paramValue { get; set; }
        public string paramName { get; set; }

        public SSRSReportParameter(string parameterName, string parameterValue)
        {
            paramName = parameterName;
            paramValue = parameterValue;
        }

        public SSRSReportParameter()
        {
        }
    }
}
