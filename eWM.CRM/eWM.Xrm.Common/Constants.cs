using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eWM.Xrm.Common
{
    public class Constants
    {

        #region Imagealias
        public const string POSTIMAGE_ALIAS_NAME = "PostImage";
        public const string PREIMAGE_ALIAS_NAME = "PreImage";
        #endregion

        #region Common Fields
        public const string STATUSREASON_FIELD = "statuscode";
        public const string STATUS_FIELD = "statecode";
        public const string MODIFIEDDATE_FIELD = "modifiedon";
        public const string CREATEDDATE_FIELD = "createdon";
        public const string MODIFIEDBY_FIELD = "modifiedby";
        public const string CREATEDBY_FIELD = "createdby";
        public const string REGARDING_FIELD = "regardingobjectid";
        public const string ACTIVITYSTATUS_FIELD = "activitystatus";
        public const string OWNERID_FIELD = "ownerid";
        public const string OWNINGBUSINESSUNIT_FIELD = "owningbusinessunit";
        public const string STAGEID_FIELD = "stageid";
        public const string PROCESSID_FIELD = "processid";
        #endregion

        #region Context
        public const string CONTEXT_CREATE = "create";
        public const string CONTEXT_UPDATE = "update";
        public const string CONETXT_DELETE = "delete";
        #endregion

        #region EntityFields

        #region account
        public const string ACCOUNT_ENTITY_NAME = "account";
        #endregion

        #region case
        public const string CASE_ENTITY_NAME = "incident";
        public const string CASE_ID_FIELD = "incidentid";
        public const string CASE_CUSTOMERID_FIELD = "customerid";
        public const string CASE_OWNER_FIELD = "ownerid";
        public const string CASE_PROCESSID_FIELD = "processid";
        public const string CASE_TITLE_FIELD = "title";
        public const string CASE_QUEUE_FIELD = "cog_casequeue";

        //recovery amounts
        public const string CASE_TOTALRECOVEREDAMOUNT_FIELD = "cog_totalrecoveredamount"; //currency
        public const string CASE_TOTALREMAININGRECOVERYAMOUNT_FIELD = "cog_totalremainingrecoveryamount"; //currency
        public const string CASE_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD = "cog_totalidentifiedrecoveryamount"; //currency 
        //timetracking fields
        public const string CASE_TOTALMINUTES_FIELD = "cog_totalminutes";
        public const string CASE_TOTALTIME_FIELD = "cog_totaltime";
        #endregion

        #region queue
        public const string QUEUEITEM_ENTITY_NAME = "queueitem";
        public const string QUEUEID_FIELD = "queueid";
        #endregion

        #region case providers
        public const string CASEPROVIDER_ENTITY_NAME = "cog_caseprovider";
        public const string CASEPROVIDER_NAME_FIELD = "cog_name";
        public const string CASEPROVIDER_CASEID_FIELD = "cog_caseprovidercaseid";
        public const string CASEPROVIDER_CONTACTID_FIELD = "cog_caseprovidercontactid";
        public const string CASEPROVIDER_TRANSACTIONCURRENCYID_FIELD = "transactioncurrencyid";
        public const string CASEPROVIDER_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD = "cog_totalidentifiedrecoveryamount";
        public const string CASEPROVIDER_TOTALRECOVEREDAMOUNT_FIELD = "cog_totalrecoveredamount";
        public const string CASEPROVIDER_TOTALREMAININGRECOVERYAMOUNT_FIELD = "cog_totalremainingrecoveryamount";

        #endregion

        #region claim
        public const string CLAIM_ENTITY_NAME = "cog_headerclaim";
        public const string CLAIM_ID_FIELD = "cog_headerclaimid";
        public const string CLAIM_CASEPROVIDERID_FIELD = "cog_claimcaseproviderid";
        //finding amounts
        public const string CLAIM_TOTALCORRECTQUANTITY_FIELD = "cog_findingtotalcorrectquantity";  //rollup decimal
        public const string CLAIM_TOTALCORRECTAMOUNT_FIELD = "cog_findingtotalcorrectamount"; //rollup currency
        public const string CLAIM_TOTALEXCEPTIONAMOUNT_FIELD = "cog_findingtotalexceptionamount"; //rollup currency
        //recovery amounts
        public const string CLAIM_TOTALRECOVEREDAMOUNT_FIELD = "cog_totalrecoveredamount"; //currency
        public const string CLAIM_TOTALREMAININGRECOVERYAMOUNT_FIELD = "cog_totalremainingrecoveryamount"; //currency
        public const string CLAIM_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD = "cog_totalidentifiedrecoveryamount"; //currency        
        #endregion

        #region contact
        public const string CONTACT_ENTITY_NAME = "contact";
        public const string CONTACT_ID_FIELD = "contactid";
        public const string CONTACT_FULLNAME_FIELD = "fullname";
        #endregion

        #region detailclaim
        public const string DETAILCLAIM_ENTITY_NAME = "cog_detailclaim";
        public const string DETAILCLAIM_ID_FIELD = "cog_detailclaimid";
        public const string DETAILCLAIM_SAKCLAIMID_FIELD = "cog_sakclaim";
        //finding amounts
        public const string DETAILCLAIM_TOTALCORRECTQUANTITY_FIELD = "cog_findingtotalcorrectquantity";  //rollup decimal
        public const string DETAILCLAIM_TOTALCORRECTAMOUNT_FIELD = "cog_findingtotalcorrectamount"; //rollup currency
        public const string DETAILCLAIM_TOTALEXCEPTIONAMOUNT_FIELD = "cog_findingtotalexceptionamount"; //rollup currency
        //recovery amounts
        public const string DETAILCLAIM_TOTALRECOVEREDAMOUNT_FIELD = "cog_totalrecoveredamount"; //currency
        public const string DETAILCLAIM_TOTALREMAININGRECOVERYAMOUNT_FIELD = "cog_totalremainingrecoveryamount"; //currency
        public const string DETAILCLAIM_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD = "cog_totalidentifiedrecoveryamount"; //currency
        #endregion

        #region finding
        public const string FINDING_ENTITY_NAME = "cog_finding";
        public const string FINDING_ID_FIELD = "cog_findingid";
        public const string FINDING_CORRECTQUANTITY_FIELD = "cog_correctquantity";  //rollup decimal
        public const string FINDING_CORRECTAMOUNT_FIELD = "cog_correctamount"; //rollup currency
        public const string FINDING_EXCEPTIONAMOUNT_FIELD = "cog_exceptionamount"; //rollup currency
        public const string FINDING_DETAILCLAIMID_FIELD = "cog_detailclaimfindingid";
        #endregion

        #region transaction currency
        public const string TRANSACTIONCURRENCY_ENTITY_NAME = "transactioncurrency";
        public const string TRANSACTIONCURRENCY_ID_FIELD = "transactioncurrencyid";
        public const string TRANSACTIONCURRENCY_ISOCURRENCYCODE_FIELD = "isocurrencycode";
        #endregion

        #region recovery
        public const string RECOVERY_ENTITY_NAME = "cog_recovery";
        public const string RECOVERY_ID_FIELD = "cog_recoveryid";
        public const string RECOVERY_DETAILCLAIM_FIELD = "cog_detailclaim";
        public const string RECOVERY_PAIDAMOUNT_FIELD = "cog_paidamount";
        //public const string RECOVERY_TOTALRECOVEREDAMOUNT_FIELD = "cog_totalrecoveredamount";  //rollup currency
        //public const string RECOVERY_TOTALREMAININGRECOVERYAMOUNT_FIELD = "cog_totalremainingrecoveryamount"; //rollup currency
        //public const string RECOVERY_TOTALIDENTIFIEDRECOVERYAMOUNT_FIELD = "cog_totalidentifiedrecoveryamount"; //rollup currency
        #endregion

        #region timetracking
        public const string TIMETRACKING_ENTITY_NAME = "cog_timetracking";
        public const string TIMETRACKING_ID_FIELD = "cog_timetrackingid";
        public const string TIMETRACKING_CASE_FIELD = "cog_case";
        //tracking fields
        public const string TIMETRACKING_MINUTESSPENT_FIELD = "cog_minutesspent"; //int
        public const string TIMETRACKING_HOURSSPENT_FIELD = "cog_hoursspent"; //int
        #endregion

        #endregion
    }
}
