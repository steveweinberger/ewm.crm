using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;
using System.IO;
using System.Data;
using DocumentFormat;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.Text.RegularExpressions;

namespace ReportGen
{
    class WordLetter
    {
        public string spServerURL { get; set; }
        public string templateLocation { get; set; }
        public string destination { get; set; }
        public string destinationName { get; set; }
        public string letterDataProcedure { get; set; }
        public string connectionString { get; set; }
        public List<SSRSReportParameter> letterParameters { get; set; }

        public WordLetter()
        {
            letterParameters = new List<SSRSReportParameter>();

        }
        public string getWordTemplate()
        {

            using (var clientContext = new ClientContext(spServerURL))
            {
                //clientContext.Credentials = new NetworkCredential("adm_ea", "@k7c579m", "az");

                //var fileRef = listItem.File.ServerRelativeUrl;
                var fileRef = templateLocation;
                FileInformation letterTemplate = Microsoft.SharePoint.Client.File.OpenBinaryDirect(clientContext, fileRef);

                string fileName = Path.Combine(destination, destinationName);
                using (var fileStream = System.IO.File.Create(fileName))
                {
                    letterTemplate.Stream.CopyTo(fileStream);
                }

                return fileName;
            }

        }

        public void generateLetter()
        {
            //string templatelocation = spServerURL + templateLocation;
            //retreive parameters
            string letterTemplate = getWordTemplate();
            DataController letterDataController = new DataController();
            DataSet letterdata = letterDataController.getLetterData(connectionString, letterDataProcedure, letterParameters);
            DataColumnCollection letterdataColumns = letterdata.Tables[0].Columns;

            foreach (DataColumn dc in letterdataColumns)
            {
                string replacetext = letterdata.Tables[0].Rows[0][dc.ColumnName].ToString();
                string findtext = dc.ColumnName;
                findreplace2(letterTemplate, findtext, replacetext);
            }
            findreplace2(letterTemplate, "[", "");
            findreplace2(letterTemplate, "]", "");
        }

        public void findreplace(string letterTemplate, string findText, string replaceText)
        {
            using (WordprocessingDocument letter = WordprocessingDocument.Open(letterTemplate, true))
            {
                string letterText = null;
                using (StreamReader sr = new StreamReader(letter.MainDocumentPart.GetStream()))
                {
                    letterText = sr.ReadToEnd();
                }

                Regex regexText = new Regex(findText);
                letterText = regexText.Replace(letterText, replaceText);

                using (StreamWriter sw = new StreamWriter(letter.MainDocumentPart.GetStream(FileMode.Create)))
                {
                    sw.Write(letterText);
                }
            }
        }

        public void findreplace2(string letterTemplate, string findText, string replaceText)
        {
            using (WordprocessingDocument letter = WordprocessingDocument.Open(letterTemplate, true))
            {
                var body = letter.MainDocumentPart.Document.Body;

                if (replaceText == "Remove")
                {
                    foreach (var run in body.Descendants<Run>())
                    {
                        if (run.InnerText.Contains(findText))
                        {
                            run.Remove();
                        }
                    }
                }
                else
                {
                    foreach (var text in body.Descendants<Text>())
                    {
                        if (text.Text.Contains(findText))
                        {
                            text.Text = text.Text.Replace(findText, replaceText);
                        }
                    }
                }
            }
        }
    }
}
