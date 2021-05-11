#region Using Statements
using System;
using System.Linq;
using System.Xml.Linq;
using System.ServiceModel;
using System.Collections.Generic;
using System.ServiceModel.Description;

// These namespaces are found in the Microsoft.Xrm.Sdk.dll assembly
// found in the SDK\bin folder.
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Discovery;
using Microsoft.Xrm.Sdk.Messages;

// This namespace is found in Microsoft.Crm.Sdk.Proxy.dll assembly
// found in the SDK\bin folder.
using Microsoft.Crm.Sdk.Messages;
#endregion

namespace CreateAttributes
{
    public class MissouriRelated
    {
        #region Variables
        PublicFunctions pf = new PublicFunctions();
        public const int languageCode = 1033;
        //memo
        const int defaultMemoSize = 500;

        //integer
        const int defaultIntegerSize = 100;

        //money
        const double defaultMaxCurrency = 1000000000;
        const double defaultMinCurrency = 0;
        const int defaultCurrencyPrecision = 4;

        //quantity
        const decimal defaultMaxQuantity = 100;
        const decimal defaultMinQuantity = 0;
        const int defaultQuantityPrecision = 3;

        //decimal
        const decimal defaultMaxDecimal = 100;
        const decimal defaultMinDecimal = 0;
        const int defaultDecimalPrecision = 2;

        //string
        const int defaultStringSize = 100;
        #endregion

        #region CreateMissouriGlobalOptionSets
        /// <summary>
        /// Procedure: CreateMissouriGlobalOptionSets
        /// Handles: 
        /// Created By: Steve Weinberger
        /// Created Date: 06/07/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        public void CreateMissouriGlobalOptionSets()
        {
            //string serverName = "http://azdev81npi04:5555/WorkflowManager";
            string serverName = "https://pidev.crm.dynamics.com";
            Uri organizationUri = new Uri(string.Format("{0}/XRMServices/2011/Organization.svc", serverName));
            Uri homeRealmUri = null;
            ClientCredentials credentials = new ClientCredentials();

            PublicFunctions pf = new PublicFunctions();
            //  use UserName object for CRM Online
            credentials.UserName.UserName = "steve.weinberger@cognosante.com";
            credentials.UserName.Password = "Ramstein55530";

            //  use default for OnPrem...
            //credentials.Windows.ClientCredential = System.Net.CredentialCache.DefaultNetworkCredentials;

            IOrganizationService service = new OrganizationServiceProxy(organizationUri, homeRealmUri, credentials, null);

            pf.InsertGlobalOptionSet(service, "us29628", "cog_providerspecialtycode", "Provider Specialty Code", languageCode, new string[] {
            "01 - General/Family Practice"
            ,"02 - General Surgery"
            ,"03 - Allergy/Immunology"
            ,"04 - Otolaryngology/Rhinology"
            ,"05 - Anesthesiology"
            ,"06 - State-Institution/Clinic"
            ,"07 - Dermatology"
            ,"09 - Proctology/Rectal and Colon Surgery"
            ,"10 - Preventive Medicine"
            ,"11 - Rehabilitation Center"
            ,"12 - Physical/Rehabilitative Medicine"
            ,"13 - Private Duty Nurse"
            ,"14 - Neurology"
            ,"15 - Nurse-Midwife"
            ,"16 - OB - Gynecology"
            ,"17 - Neurological Surgery"
            ,"18 - Ophthalmology"
            ,"19 - Dentists (DMD and DDS)"
            ,"20 - Orthopedic Surgery"
            ,"21 - Speech Therapist"
            ,"22 - Pathology"
            ,"23 - Occupational Therapist"
            ,"24 - Reconstructive/Plastic Surgery"
            ,"25 - Air Ambulance"
            ,"26 - MRDD Waiver State Inst - Public"
            ,"27 - Psychiatry"
            ,"28 - Advanced Practice Nurse Prescriber"
            ,"29 - Nurse Practitioner"
            ,"30 - Radiology/Radiation Therapy"
            ,"31 - Nurse Practitioner - Other"
            ,"32 - Provisional Review"
            ,"33 - Cardio/Thoracic Surgery"
            ,"34 - Urology/Nephrology"
            ,"35 - Chiropractors"
            ,"36 - Nuclear Medicine"
            ,"37 - Pediatrics"
            ,"38 - Alcohol & Drug Rehabilitation – Public"
            ,"39 - Alcohol & Drug Rehabilitation – Private"
            ,"40 - Emergency Medicine"
            ,"41 - Internal Medicine"
            ,"42 - Psychiatric Rehabilitation – Public"
            ,"43 - Psychiatric Rehabilitation – Private"
            ,"44 - Physical Therapist"
            ,"45 - Psychologist"
            ,"46 - QMB Only – Christian Science"
            ,"47 - QMB – MO HealthNet Unlisted"
            ,"48 - Podiatrist - Surgical Chiropody"
            ,"50 - Adult Day Care"
            ,"51 - Homemaker/Chore"
            ,"52 - Respite-In home"
            ,"53 - Respite-Institutional"
            ,"54 - Medical Supply Company"
            ,"55 - Adult Family Home"
            ,"56 - Mental Health Regional Centers"
            ,"57 - Hospice - Free Standing"
            ,"58 - Hospice - Provider Affiliated"
            ,"59 - Ambulance Service Supplier"
            ,"60 - County Public Health Clinics"
            ,"61 - Prenatal Services – Global"
            ,"62 - Nutrition Consultant"
            ,"63 - Portable X-Ray Supplier (Billing Independently)"
            ,"64 - Audiologist"
            ,"65 - For Profit Public Transportation"
            ,"66 - Nonprofit Public Transportation"
            ,"67 - Home Health Agency"
            ,"68 - Private Individual"
            ,"69 - Independent Laboratory"
            ,"70 - Clinic"
            ,"71 - Dental Public Health"
            ,"72 - Dental Home Health"
            ,"73 - Oral Pathologist"
            ,"74 - Oral Surgeon"
            ,"75 - Prosthodontist"
            ,"76 - Personal Care Clinic"
            ,"77 - Volunteer Transportation"
            ,"78 - CRNA Services"
            ,"79 - Swing Bed Hospitals"
            ,"80 - Hospitals and Nursing Homes"
            ,"81 - Optician/Optometrist"
            ,"82 - Certified Optometrist"
            ,"83 - Orthodontist"
            ,"84 - Pedodontist"
            ,"85 - Periodontist"
            ,"86 - Endodontist"
            ,"87 - Drug and Department Stores"
            ,"88 - LTC Pharmacy Control Dose Delivery Sys."
            ,"89 - Naturopath"
            ,"90 - Case Management"
            ,"91 - E.P.S.D.T."
            ,"92 - Full Service PHP Clinic"
            ,"93 - Partial Service PHP Clinic"
            ,"94 - Pharmacology"
            ,"95 - MRDD Waiver Program - Private"
            ,"96 - Comprehensive Day Rehab"
            ,"97 - Care Coordinator"
            ,"98 - Other EPSDT"
            ,"A0 - DESE First Steps"
            ,"A1 - Rural Health Clinic Per Diem"
            ,"A2 - Psychology - Social Worker"
            ,"A3 - Psychology - Professional Counselor"
            ,"A4 - Targeted Case Mgt - MRDD"
            ,"A5 - Targeted Case Mgt - MI State"
            ,"A6 - Targeted Case Mgt - MI Private"
            ,"A7 - Targeted Case Management – Children EPSDT"
            ,"A8 - Targeted Case Management – Pregnant Women"
            ,"A9 - TCM - Other"
            ,"AA - Anesthesiologist Assistants"
            ,"B1 - Rural Health Clinic Percentage"
            ,"B2 - TCM Other"
            ,"B3 - Targeted Case Mgt - Foster Care"
            ,"B4 - Respiratory Therapist"
            ,"B5 - Ambulatory Surgical Center"
            ,"B6 - Birthing Centers"
            ,"B7 - Public Entity"
            ,"B8 - Local Health Department or Social Service Agency"
            ,"B9 - Hotel, Restaurant, or Oil Company"
            ,"C1 - Family Preservation – Private"
            ,"C2 - Family Preservation - DFS"
            ,"C3 - Family Preservation - Day Treatment"
            ,"C4 - Cardiology"
            ,"C5 - Head Injury Waiver"
            ,"C6 - DHSS Consumer Directed PC"
            ,"C7 - Department of Mental Health (DMH) Personal Care"
            ,"C8 - FQHC Provider"
            ,"C9 - MHC - Clinic"
            ,"D1 - MHC - FQHC"
            ,"D2 - FSD Rehab Initiative Provider"
            ,"D3 - Telephone Reassurance"
            ,"D4 - Home Delivered Meals"
            ,"D5 - OHCDS - State"
            ,"D6 - OHCDS - Private"
            ,"D7 - Disease Management"
            ,"D8 - Dialysis Centers"
            ,"D9 - Non-Administrative Agent"
            ,"E1 - Broker, Direct Service Program"
            ,"E2 - School Based Transportation"
            ,"E3 - Children's Therapeutic Day Treatment"
            ,"E4 - Fixed Wing Transport"
            ,"E5 - General Pharmacist"
            ,"E6 - Provisionally Licensed Psychologist"
            ,"E7 - Chronic Care Improvement Program"
            ,"E8 - Licensed Masters Social Worker or Provisionally Licensed Clinical Social Workers"
            ,"E9 - Provisionally Licensed Professional Counselor"
            ,"EH - Eligible Hospital"
            ,"EP - Eligible Professional"
            ,"F1 - Certified Diabetes Educator"
            ,"F2 - Licensed Dietician"
            ,"F3 - Registered Pharmacist"
            ,"F4 - DOH Certified Diabetes Educator"
            ,"G1 - Augmentative Communication Device Evaluations"
            ,"H1 - Independent Diagnostic Testing Facility"
            ,"HS - Hearing Aid Specialist"
            ,"L1 - Lead Assessment - Public"
            ,"L2 - Lead Assessment - Private"
            ,"M1 - Managed Care"
            ,"P1 - Clinical Nurse Specialist"
            ,"P2 - Clinical Nurse Specialist - Psych"
            ,"S2 - Occupational, Physical, Speech Therapy"
            ,"T1 - School Districts - IEP Therapy"});

            //Provider Type Codes
            pf.InsertGlobalOptionSet(service, "us29628", "cog_providertypecode", "Provider Type Code", languageCode, new string[] {
            "01 - General Hospital"
            ,"02 - Mental Hospital"
            ,"03 - TB Hospital"
            ,"05 - State Institution - LTC"
            ,"06 - State Institution Gen Hosp"
            ,"10 - Nursing Home"
            ,"11 - Private Home ICF/MR HOME"
            ,"12 - Nursing Home ICF"
            ,"13 - Nursing Home ICF/MR"
            ,"14 - Nursing Home SNF"
            ,"15 - Targeted Case Management - MR/MI"
            ,"17 - Targeted Case Mngmnt - Foster Care"
            ,"18 - Case Management"
            ,"19 - EHR"
            ,"20 - Physician, M.D."
            ,"24 - Physician, D.O."
            ,"25 - Nurse Midwife"
            ,"26 - Personal Care"
            ,"27 - Primary Care Provider (PCP)"
            ,"28 - Aged and Disabled"
            ,"29 - Adult Day Health Care"
            ,"30 - Podiatrist"
            ,"31 - Optometrist"
            ,"32 - Optician"
            ,"33 - Audiologist"
            ,"34 - Hearing Aid Specialist"
            ,"35 - Disease Management"
            ,"36 - Podiatry Clinic"
            ,"39 - Lead Environmental Assessment"
            ,"40 - Dentist"
            ,"42 - Advanced Practice Nurse"
            ,"45 - HCY Screener"
            ,"46 - Speech Therapist"
            ,"47 - Occupational Therapist"
            ,"48 - Physical Therapist"
            ,"49 - Psychologist"
            ,"50 - Independent Clinic"
            ,"51 - Public Health Dept Clinic"
            ,"52 - Planned Parenthood Clinic"
            ,"53 - Professional Optometry Clinic"
            ,"54 - Teaching Institution Dept"
            ,"55 - Teaching Institution"
            ,"56 - Community Mental Health Center"
            ,"57 - Rehabilitation Center"
            ,"58 - Home Health Agency"
            ,"59 - Rural Health Clinic"
            ,"60 - Pharmacy"
            ,"61 - Birthing Center"
            ,"62 - Durable Medical Equip Supplier"
            ,"65 - Non-Emergency Transportation"
            ,"70 - Independent Laboratory"
            ,"71 - Independent X-Ray Service/Independent Diagnostic Testing Facility"
            ,"74 - Dental Hygienist"
            ,"75 - QMB Only Services"
            ,"76 - Comprehensive Rehab"
            ,"80 - Ambulance"
            ,"81 - Managed Care Health Plan"
            ,"82 - Hospice"
            ,"83 - Provider Eligibility Verification Only"
            ,"84 - Part D Preferred Drug Plan (PDP)"
            ,"85 - MRDD Waiver"
            ,"86 - Alcohol and Drug Rehabilitation -CSTAR"
            ,"87 - Psychiatric Rehabilitation"
            ,"89 - Pgm of All-Incl Care for Eld"
            ,"90 - Permanently and Totally Disabled"
            ,"91 - Certified Registered Nurse/Anesthesiologist Assistants"
            ,"92 - Full-Service PHP"
            ,"93 - Partial-Service PHP"
            ,"94 - Private Duty Nurse"
            ,"96 - School Based Services" });
        }
        #endregion
    }
}

