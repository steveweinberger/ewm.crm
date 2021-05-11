using System;
using System.Text;
using System.Threading;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace eWM.AutoNumber
{
    public class AutoNumberLogic
    {
        private readonly Entity _Entity;
        private readonly IOrganizationService _OrgService;
        private Entity _Case;
        private string _CaseType = string.Empty;
        private Entity _CogAutoNumber;
        private int _Number;
        private StringBuilder _SbCaseId;

        #region AutoNumber

        /// <summary>
        ///     Procedure: AutoNumber
        ///     Handles: Creating the Number for Case Id
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        public AutoNumberLogic( IOrganizationService orgService,
                                Entity entity )
        {
            _OrgService = orgService;
            _Entity = entity;
        }

        #endregion

        #region TriggerAutoNumber

        /// <summary>
        ///     Procedure: TriggerAutoNumber
        ///     Handles: Deterines CaseType and then gets next sequence by CaseType
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        public void TriggerAutoNumber( )
        {
            _CaseType = ( ( OptionSetValue ) _Entity[ "casetypecode" ] ).Value.ToString( );
            RetrieveCogSettingRecord( );
            SetCogSettingRecordDetails( );
        }

        #endregion

        #region SetAutoNumber

        /// <summary>
        ///     Procedure: SetAutoNumber
        ///     Handles: Sets the number by checking to see if it has been used first.
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        public void SetAutoNumber( )
        {
            // Only trigger plugin if it starts with  "Cog Auto Number"
            if ( !_OrgService.Retrieve( "cog_cogbasicsetting", _Entity.Id, new ColumnSet( "cog_name" ) )[ "cog_name" ].ToString( ).StartsWith( "Cog Auto Number" ) )
                return;
            IncrementCogSettingRecord( );
            SetNumberToEntity( );
            WaitRandomTime( );
            while ( RetrieveEntitiesByCaseNumber( ) )
            {
                WaitRandomTime( );
                RetrieveCogSettingRecord( );
                IncrementCogSettingRecord( );
                SetNumberToEntity( );
            }
        }

        #endregion

        #region WaitRandomTime

        /// <summary>
        ///     Procedure: WaitRandomTime
        ///     Handles: Sets a wait time to make sure another process isn't using same number
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        private void WaitRandomTime( )
        {
            var randomNumber = new Random( );
            var randomInteger = randomNumber.Next( 0, 2500 );
            Thread.Sleep( randomInteger );
        }

        #endregion

        #region RetrieveCogSettingRecord

        /// <summary>
        ///     Procedure: RetrieveCogSettingRecord
        ///     Handles: Returns Cog basic Setting to change values
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        private void RetrieveCogSettingRecord( )
        {
            var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
                           "<entity name='cog_cogbasicsetting'>" +
                           "<attribute name='cog_cogbasicsettingid' />" +
                           "<attribute name='cog_name' />" +
                           "<attribute name='cog_integervalue' />" +
                           "<attribute name='cog_stringvalue' />" +
                           "<attribute name='cog_textvalue' />" +
                           "<order attribute='cog_name' descending='false' />" +
                           "<filter type='and'>";

            //Checks the case type option set value to determine which sequence to use
            switch ( _CaseType )
            {
                case "181310000": //	Standard
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number S' />";
                    break;
                case "181310001": //	Electronic Health Record
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number H' />";
                    break;
                case "181310002": //	Estate Recovery
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number V' />";
                    break;
                case "181310003": //	Managed Care
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number C' />";
                    break;
                case "181310004": //	Medical Review
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number M' />";
                    break;
                case "181310005": //	PERM
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number P' />";
                    break;
                case "181310006": //	Self Report
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number R' />";
                    break;
                case "181310007": //	Special Projects
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number X' />";
                    break;
                case "181310008": //	State Single Audit
                    fetchXml += "<condition attribute='cog_name' operator='eq' value='Cog Auto Number A' />";
                    break;
                
                default:
                    break;
            }

            fetchXml += "</filter>" +
                        "</entity>" +
                        "</fetch>";

            var entCol = _OrgService.RetrieveMultiple( new FetchExpression( fetchXml ) );

            if ( entCol.Entities.Count == 0 )
                throw new Exception( "No record for Cog Auto Number exists in Settings" );

            _CogAutoNumber = entCol[ 0 ];
        }

        #endregion

        #region SetCogSettingRecordDetails

        /// <summary>
        ///     Procedure: SetCogSettingRecordDetails
        ///     Handles: Sets values in Cog Basic Setting
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        private void SetCogSettingRecordDetails( )
        {
            _CogAutoNumber[ "cog_stringvalue" ] = _Entity.LogicalName;
            _CogAutoNumber[ "cog_textvalue" ] = _Entity.Id.ToString( );

            _OrgService.Update( _CogAutoNumber );
        }

        #endregion

        #region IncrementCogSettingRecord

        /// <summary>
        ///     Procedure: IncrementCogSettingRecord
        ///     Handles: Gets next value from sequece
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        private void IncrementCogSettingRecord( )
        {
            _Number = ( int ) _Entity[ "cog_integervalue" ];
            _Number = _Number + 1;
            _Entity[ "cog_integervalue" ] = _Number;
            _OrgService.Update( _Entity );
        }

        #endregion

        #region SetNumberToEntity
        /// <summary>
        ///     Procedure: SetNumberToEntity
        ///     Handles: Sets title to sequence with formatting
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        private void SetNumberToEntity( )
        {
            var serialDefault = "0";

            var entity = new Entity( _Entity[ "cog_stringvalue" ].ToString( ) );
            entity.Id = new Guid( _Entity[ "cog_textvalue" ].ToString( ) );

            _Case = _OrgService.Retrieve( _Entity[ "cog_stringvalue" ].ToString( ), new Guid( _Entity[ "cog_textvalue" ].ToString( ) ), new ColumnSet( "casetypecode" ) );
            _CaseType = ( ( OptionSetValue ) _Case[ "casetypecode" ] ).Value.ToString( );

            var currentYear = DateTime.Now.Year.ToString( );
            var currentMonth = DateTime.Now.Month.ToString( );
            _SbCaseId = new StringBuilder( );
            _SbCaseId.Append( currentYear );
            _SbCaseId.Append(currentMonth);

            //Checks Option Set value to determine Case Type
            //switch ( _CaseType )
            //{
            //    case "181310000": //	Basic
            //        _SbCaseId.Append( "B" );
            //        break;
            //    case "181310001": //	Data Analytics
            //        _SbCaseId.Append( "D" );
            //        break;
            //    case "181310002": //	Electronic Health Record
            //        _SbCaseId.Append( "H" );
            //        break;
            //    case "181310003": //	Estate Recovery
            //        _SbCaseId.Append( "V" );
            //        break;
            //    case "181310004": //	External Review
            //        _SbCaseId.Append( "E" );
            //        break;
            //    case "181310005": //	Internal Review
            //        _SbCaseId.Append( "I" );
            //        break;
            //    case "181310006": //	Managed Care
            //        _SbCaseId.Append( "C" );
            //        break;
            //    case "181310007": //	Medical Review
            //        _SbCaseId.Append( "M" );
            //        break;
            //    case "181310008": //	Payment Accuracy
            //        _SbCaseId.Append( "A" );
            //        break;
            //    case "181310009": //	PERM
            //        _SbCaseId.Append( "P" );
            //        break;
            //    case "181310010": //	Self Report
            //        _SbCaseId.Append( "R" );
            //        break;
            //    case "181310011": //	Special Projects
            //        _SbCaseId.Append( "X" );
            //        break;
            //    case "181310012": //	State Single Audit
            //        _SbCaseId.Append( "S" );
            //        break;
            //    default:
            //        break;
            //}

            //Pads the sequence with zeros
            serialDefault = _Number.ToString( );
            var lenSerial = serialDefault.Length;

            if ( lenSerial < 5 )
            {
                for ( var i = lenSerial; i < 5; i++ )
                    serialDefault = "0" + serialDefault;
            }

            _SbCaseId.Append( serialDefault );

            switch ( _Entity[ "cog_stringvalue" ].ToString( ) )
            {
                case "cog_applicationticket":
                    entity[ "cog_number" ] = _Number.ToString( );
                    entity[ "subject" ] = _Number.ToString( );
                    break;
                case "cog_efi":
                    entity[ "subject" ] = _Number.ToString( );
                    break;
                default:
                    entity[ "cog_number" ] = _SbCaseId.ToString( );
                    entity[ "cog_name" ] = _SbCaseId.ToString( );
                    entity[ "title" ] = _SbCaseId.ToString( );
                    entity["ticketnumber"] = _SbCaseId.ToString();
                    break;
            }
            _OrgService.Update( entity );
        }

        #endregion

        #region RetrieveEntitiesByCaseNumber

        /// <summary>
        ///     Procedure: RetrieveEntitiesByCaseNumber
        ///     Handles: Checks value of Case Number
        ///     Created By: Steve Weinberger
        ///     Created Date: 07/22/2016
        ///     Changes By:
        ///     Changes Date:
        ///     Changes Made:
        /// </summary>
        private bool RetrieveEntitiesByCaseNumber( )
        {
            var qba = new QueryByAttribute( _Entity[ "cog_stringvalue" ].ToString( ) );
            switch ( _Entity[ "cog_stringvalue" ].ToString( ) )
            {
                case "cog_applicationticket":
                    qba.ColumnSet = new ColumnSet( "cog_number" );
                    qba.Attributes.AddRange( "cog_number" );
                    break;
                case "cog_efi":
                    qba.ColumnSet = new ColumnSet( "subject" );
                    qba.Attributes.AddRange( "subject" );
                    break;
                default:
                    qba.ColumnSet = new ColumnSet( "cog_number" );
                    qba.Attributes.AddRange( "cog_number" );
                    break;
            }
            qba.Values.Add( _SbCaseId.ToString( ) );
            var ec = _OrgService.RetrieveMultiple( qba );

            if ( ec.Entities.Count > 1 )
                return true;
            return false;
        }

        #endregion
    }
}