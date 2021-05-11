using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace ReportGen
{
    class DataController
    {
        public DataController()
        {
        }

        public DataSet getLetterData(string connString, string letterSQL, List<SSRSReportParameter> letterParameters)
        {
            DataSet letterData = new DataSet();

            using (SqlConnection crmDBConn = new SqlConnection(connString))
            {
                SqlCommand sqlComm = new SqlCommand(letterSQL, crmDBConn);

                foreach (SSRSReportParameter param in letterParameters)
                {
                    sqlComm.Parameters.AddWithValue(param.paramName, param.paramValue);
                }

                sqlComm.CommandType = CommandType.StoredProcedure;

                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = sqlComm;

                da.Fill(letterData);
            }

            return letterData;
        }

    }
}
