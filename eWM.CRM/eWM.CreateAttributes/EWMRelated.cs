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
    public class EWMRelated
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

        #region CreateEWMGlobalOptionSets
        /// <summary>
        /// Procedure: CreateEWMGlobalOptionSets
        /// Handles: 
        /// Created By: Steve Weinberger
        /// Created Date: 06/07/2016
        /// Changes By: 
        /// Changes Date: 
        /// Changes Made: 
        /// </summary>
        public void CreateEWMGlobalOptionSets()
        {
            #region Provider Option Sets
            ////License Types
            //pf.CreateGlobalOptionSet(service, "Provider", "cog_licensetype", "License Type", languageCode, new string[] {
            //            "1-State, county, or municipality professional or business license"
            //            ,"2-DEA license"
            //            ,"3-Professional society accreditation"
            //            ,"4-CLIA accreditation"
            //            ,"5-Other"});

            ////Provider Type Codes
            //pf.CreateGlobalOptionSet(service, "Provider", "cog_providertypecode", "Provider Type Code", languageCode, new string[] {
            //            "1-Physician"
            //            ,"2-Speech Language Pathologist"
            //            ,"3-Oral Surgery (Dentist only)"
            //            ,"4-Cardiac Rehabilitation and Intensive Cardiac Rehabilitation"
            //            ,"5-Anesthesiology Assistant"
            //            ,"6-Chiropractic"
            //            ,"7-Optometry"
            //            ,"8-Certified Nurse Midwife"
            //            ,"9-Certified Registered Nurse Anesthetist (CRNA)"
            //            ,"10-Mammography Center"
            //            ,"11-Independent Diagnostic Testing Facility (IDTF)"
            //            ,"12-Podiatry"
            //            ,"13-Ambulatory Surgical Center"
            //            ,"14-Nurse Practitioner"
            //            ,"15-Medical Supply Company with Orthotist"
            //            ,"16-Medical Supply Company with Prosthetist"
            //            ,"17-Medical Supply Company with Orthotist-Prosthetist"
            //            ,"18-Other Medical Supply Company"
            //            ,"19-Individual Certified Orthotist"
            //            ,"20-Individual Certified Prosthetist"
            //            ,"21-Individual Certified Prosthetist-Orthotist"
            //            ,"22-Medical Supply Company with Pharmacist"
            //            ,"23-Ambulance Service Provider"
            //            ,"24-Public Health or Welfare Agency"
            //            ,"25-Voluntary Health or Charitable Agency"
            //            ,"26-Psychologist, Clinical"
            //            ,"27-Portable X-Ray Supplier"
            //            ,"28-Audiologist"
            //            ,"29-Physical Therapist in Private Practice"
            //            ,"30-Occupational Therapist in Private Practice"
            //            ,"31-Clinical Laboratory"
            //            ,"32-Clinic or Group Practice"
            //            ,"33-Registered Dietitian or Nutrition Professional"
            //            ,"34-Mass Immunizer Roster Biller"
            //            ,"35-Radiation Therapy Center"
            //            ,"36-Slide Preparation Facility"
            //            ,"37-Licensed Clinical Social Worker"
            //            ,"38-Certified Clinical Nurse Specialist"
            //            ,"39-Advance Diagnostic Imaging"
            //            ,"40-Optician"
            //            ,"41-Physician Assistant"
            //            ,"42-Hospital-General"
            //            ,"43-Skilled Nursing Facility"
            //            ,"44-Intermediate Care Nursing Facility"
            //            ,"45-Other Nursing Facility"
            //            ,"46-Home Health Agency"
            //            ,"47-Pharmacy"
            //            ,"48-Medical Supply Company with Respiratory Therapist"
            //            ,"49-Department Store"
            //            ,"50-Grocery Store"
            //            ,"51-Indian Health Service facility"
            //            ,"52-Oxygen supplier"
            //            ,"53-Pedorthic personnel"
            //            ,"54-Medical supply company with pedorthic personnel"
            //            ,"55-Rehabilitation Agency"
            //            ,"56-Ocularist"
            //            ,"57-All Other" });

            ////Provider Specialty Codes
            //pf.CreateGlobalOptionSet(service, "Provider", "cog_providerspecialtycode", "Provider Specialty Code", languageCode, new string[] {
            //             "1-General Practice"
            //            ,"2-General Surgery"
            //            ,"3-Allergy/Immunology"
            //            ,"4-Otolaryngology"
            //            ,"5-Anesthesiology"
            //            ,"6-Cardiology"
            //            ,"7-Dermatology"
            //            ,"8-Family Practice"
            //            ,"9-Interventional Pain Management"
            //            ,"10-Gastroenterology"
            //            ,"11-Internal Medicine"
            //            ,"12-Osteopathic Manipulative Therapy"
            //            ,"13-Neurology"
            //            ,"14-Neurosurgery"
            //            ,"15-Speech Language Pathologist"
            //            ,"16-Obstetrics/Gynecology"
            //            ,"17-Hospice and Palliative Care"
            //            ,"18-Ophthalmology"
            //            ,"19-Oral Surgery (dentists only)"
            //            ,"20-Orthopedic Surgery"
            //            ,"21-Cardiac Electrophysiology"
            //            ,"22-Pathology"
            //            ,"23-Sports Medicine"
            //            ,"24-Plastic and Reconstructive Surgery"
            //            ,"25-Physical Medicine and Rehabilitation"
            //            ,"26-Psychiatry"
            //            ,"27-Geriatric Psychiatry"
            //            ,"28-Colorectal Surgery (formerly proctology)"
            //            ,"29-Pulmonary Disease"
            //            ,"30-Diagnostic Radiology"
            //            ,"31-Cardiac Rehabilitation & Intensive Cardiac Rehabilitation"
            //            ,"32-Anesthesiologist Assistant"
            //            ,"33-Thoracic Surgery"
            //            ,"34-Urology"
            //            ,"35-Chiropractic"
            //            ,"36-Nuclear Medicine"
            //            ,"37-Pediatric Medicine"
            //            ,"38-Geriatric Medicine"
            //            ,"39-Nephrology"
            //            ,"40-Hand Surgery"
            //            ,"41-Optometry"
            //            ,"42-Certified Nurse Midwife"
            //            ,"43-Certified Registered Nurse Anesthetist (CRNA)"
            //            ,"44-Infectious Disease"
            //            ,"45-Mammography Center"
            //            ,"46-Endocrinology"
            //            ,"47-Independent Diagnostic Testing Facility (IDTF)"
            //            ,"48-Podiatry"
            //            ,"49-Ambulatory Surgical Center"
            //            ,"50-Nurse Practitioner"
            //            ,"51-Medical Supply Company with Orthitist"
            //            ,"52-Medical Supply Company with Prosthetist"
            //            ,"53-Medical Supply Company with Orthitist-Prosthetist"
            //            ,"54-Other Medical Supply Company"
            //            ,"55-Individual Certified Orthotist"
            //            ,"56-Individual Certified Prosthetist"
            //            ,"57-Individual Certified Orthitist-Prosthetist"
            //            ,"58-Medical Supply Company with Pharmacist"
            //            ,"59-Ambulance Service Provider"
            //            ,"60-Public Health or Welfare Agency"
            //            ,"61-Voluntary Health or Charitable Agency"
            //            ,"62-Psychologist, Clinical"
            //            ,"63-Portable X-Ray Supplier"
            //            ,"64-Audiologist"
            //            ,"65-Physical Therapist in Private Practice"
            //            ,"66-Rheumatology"
            //            ,"67-Occupational Therapist in Private Practice"
            //            ,"68-Psychologist, Clinical"
            //            ,"69-Clinical Laboratory"
            //            ,"70-Single or Multispecialty Clinic or Group Practice"
            //            ,"71-Registered Dietitian or Nutrition Professional"
            //            ,"72-Pain Management"
            //            ,"73-Mass Immunization Roster Biller"
            //            ,"74-Radiation Therapy Center"
            //            ,"75-Slide Preparation Facility"
            //            ,"76-Peripheral Vascular Disease"
            //            ,"77-Vascular Surgery"
            //            ,"78-Cardiac Surgery"
            //            ,"79-Addiction Medicine"
            //            ,"80-Licensed Clinical Social Worker"
            //            ,"81-Critical Care (Intensivists)"
            //            ,"82-Hematology"
            //            ,"83-Hematology/Oncology"
            //            ,"84-Preventive Medicine"
            //            ,"85-Maxillofacial Surgery"
            //            ,"86-Neuropsychiatry"
            //            ,"87-All Other Suppliers"
            //            ,"89-Certified Clinical Nurse Specialist"
            //            ,"90-Medical Oncology"
            //            ,"91-Surgical Oncology"
            //            ,"92-Radiation Oncology"
            //            ,"93-Emergency Medicine"
            //            ,"94-Interventional Radiology"
            //            ,"95-Advance Diagnostic Imaging"
            //            ,"96-Optician"
            //            ,"97-Physician Assistant"
            //            ,"98-Gynecological/Oncology"
            //            ,"A0-Hospital-General"
            //            ,"A1-Skilled Nursing Facility"
            //            ,"A2-Intermediate Care Nursing Facility"
            //            ,"A3-Other Nursing Facility"
            //            ,"A4-Home Health Agency"
            //            ,"A5-Pharmacy"
            //            ,"A6-Medical Supply Company with Respiratory Therapist"
            //            ,"A7-Department Store"
            //            ,"A8-Grocery Store"
            //            ,"A9-Indian Health Service facility"
            //            ,"B1-Oxygen supplier"
            //            ,"B2-Pedorthic personnel"
            //            ,"B3-Medical supply company with pedorthic personnel"
            //            ,"B4-Rehabilitation Agency"
            //            ,"B5-Ocularist"});
            #endregion

            #region Recipient Option Sets
            //MCPlanTypes
            //pf.CreateGlobalOptionSet(service, "Recipient", "cog_managedcareplantype", "Managed Care Plan Type", languageCode, new string[] {
            //             "1 - Comprehensive MCO"
            //            ,"2 - Traditional PCCM Provider"
            //            ,"3 - Enhanced PCCM Provider"
            //            ,"4 - HIO"
            //            ,"5 - Medical - only PIHP(risk or non - risk / non - comprehensive / with inpatient hospital or   institutional services)"
            //            ,"6 - Medical - only PAHP(risk or non - risk / non - comprehensive / no inpatient hospital or institutional services)"
            //            ,"7 - Long Term Care (LTC)PIHP"
            //            ,"8 - Mental Health(MH) PIHP"
            //            ,"9 - Mental Health(MH) PAHP"
            //            ,"10 - Substance Use Disorders(SUD) PIHP"
            //            ,"11 - Substance Use Disorders(SUD) PAHP"
            //            ,"12 - Mental Health(MH) and Substance Use Disorders(SUD) PIHP"
            //            ,"13 - Mental Health(MH) and Substance Use Disorders(SUD) PAHP"
            //            ,"14 - Dental PAHP"
            //            ,"15 - Transportation PAHP"
            //            ,"16 - Disease Management PAHP"
            //            ,"17 - PACE"
            //            ,"18 - Pharmacy PAHP"
            //            ,"60 - Accountable Care Organization"
            //            ,"70 - Health / Medical Home"
            //            ,"80 - Integrated Care For Dual Eligibles"
            //            ,"99 - Unknown" });

            //Dual - Eligibility - Code
            //pf.CreateGlobalOptionSet(service, "Recipient", "cog_dualeligibilitycode", "Dual - Eligibility - Code", languageCode, new string[] {
            //            "Eligible is not a Medicare beneficiary"
            //            ,"Eligible is entitled to Medicare-QMB only"
            //            ,"Eligible is entitled to Medicare-QMB AND Medicaid coverage"
            //            ,"Eligible is entitled to Medicare-SLMB only"
            //            ,"Eligible is entitled to Medicare-SLMB AND Medicaid coverage"
            //            ,"Eligible is entitled to Medicare-QDWI"
            //            ,"Eligible is entitled to Medicare-Qualifying individuals"
            //            ,"Eligible is entitled to Medicare-Other Dual Eligibles (Non QMB, SLMB, QDWI or QI)"
            //            ,"Eligible is entitled to Medicare – Other(This code is to be used only with specific CMS approval)"
            //            ,"Separate CHIP Eligible is entitled to Medicare"
            //            ,"Eligible's Medicare status is unknown"});

            //Lockin - Provider - Type
            //pf.CreateGlobalOptionSet(service, "Recipient", "cog_lockinprovidertypecode", "Lockin Provider Type Code", languageCode, new string[] {
            //            "1-Physician"
            //            ,"2-Speech Language Pathologist"
            //            ,"3-Oral Surgery (Dentist only)"
            //            ,"4-Cardiac Rehabilitation and Intensive Cardiac Rehabilitation"
            //            ,"5-Anesthesiology Assistant"
            //            ,"6-Chiropractic"
            //            ,"7-Optometry"
            //            ,"8-Certified Nurse Midwife"
            //            ,"9-Certified Registered Nurse Anesthetist (CRNA)"
            //            ,"10-Mammography Center"
            //            ,"11-Independent Diagnostic Testing Facility (IDTF)"
            //            ,"12-Podiatry"
            //            ,"13-Ambulatory Surgical Center"
            //            ,"14-Nurse Practitioner"
            //            ,"15-Medical Supply Company with Orthotist"
            //            ,"16-Medical Supply Company with Prosthetist"
            //            ,"17-Medical Supply Company with Orthotist-Prosthetist"
            //            ,"18-Other Medical Supply Company"
            //            ,"19-Individual Certified Orthotist"
            //            ,"20-Individual Certified Prosthetist"
            //            ,"21-Individual Certified Prosthetist-Orthotist"
            //            ,"22-Medical Supply Company with Pharmacist"
            //            ,"23-Ambulance Service Provider"
            //            ,"24-Public Health or Welfare Agency"
            //            ,"25-Voluntary Health or Charitable Agency"
            //            ,"26-Psychologist, Clinical"
            //            ,"27-Portable X-Ray Supplier"
            //            ,"28-Audiologist"
            //            ,"29-Physical Therapist in Private Practice"
            //            ,"30-Occupational Therapist in Private Practice"
            //            ,"31-Clinical Laboratory"
            //            ,"32-Clinic or Group Practice"
            //            ,"33-Registered Dietitian or Nutrition Professional"
            //            ,"34-Mass Immunizer Roster Biller"
            //            ,"35-Radiation Therapy Center"
            //            ,"36-Slide Preparation Facility"
            //            ,"37-Licensed Clinical Social Worker"
            //            ,"38-Certified Clinical Nurse Specialist"
            //            ,"39-Advance Diagnostic Imaging"
            //            ,"40-Optician"
            //            ,"41-Physician Assistant"
            //            ,"42-Hospital-General"
            //            ,"43-Skilled Nursing Facility"
            //            ,"44-Intermediate Care Nursing Facility"
            //            ,"45-Other Nursing Facility"
            //            ,"46-Home Health Agency"
            //            ,"47-Pharmacy"
            //            ,"48-Medical Supply Company with Respiratory Therapist"
            //            ,"49-Department Store"
            //            ,"50-Grocery Store"
            //            ,"51-Indian Health Service facility"
            //            ,"52-Oxygen supplier"
            //            ,"53-Pedorthic personnel"
            //            ,"54-Medical supply company with pedorthic personnel"
            //            ,"55-Rehabilitation Agency"
            //            ,"56-Ocularist"
            //            ,"57-All Other" });
            #endregion

            #region Eligibility Group Option Sets
            //Eligibility Group Code
            //pf.CreateGlobalOptionSet(service, "Recipient", "cog_eligibilitygroupcode", "Eligibility Group Code", languageCode, new string[] {
            //            "01"
            //            ,"02"
            //            ,"03"
            //            ,"04"
            //            ,"05"
            //            ,"06"
            //            ,"07"
            //            ,"08"
            //            ,"09"
            //            ,"11"
            //            ,"12"
            //            ,"13"
            //            ,"14"
            //            ,"15"
            //            ,"16"
            //            ,"17"
            //            ,"18"
            //            ,"19"
            //            ,"20"
            //            ,"21"
            //            ,"22"
            //            ,"23"
            //            ,"24"
            //            ,"25"
            //            ,"26"
            //            ,"27"
            //            ,"28"
            //            ,"29"
            //            ,"30"
            //            ,"31"
            //            ,"32"
            //            ,"33"
            //            ,"34"
            //            ,"35"
            //            ,"36"
            //            ,"37"
            //            ,"38"
            //            ,"39"
            //            ,"40"
            //            ,"41"
            //            ,"42"
            //            ,"43"
            //            ,"44"
            //            ,"45"
            //            ,"46"
            //            ,"47"
            //            ,"48"
            //            ,"49"
            //            ,"50"
            //            ,"51"
            //            ,"52"
            //            ,"53"
            //            ,"54"
            //            ,"55"
            //            ,"56"
            //            ,"59"
            //            ,"60"
            //            ,"61"
            //            ,"62"
            //            ,"63"
            //            ,"64"
            //            ,"65"
            //            ,"66"
            //            ,"67"
            //            ,"68"
            //            ,"69"
            //            ,"70"
            //            ,"71"
            //            ,"72"
            //            ,"73"
            //            ,"74"
            //            ,"75"});

            //Eligibility Group Type
            //pf.CreateGlobalOptionSet(service, "Recipient", "cog_eligibilitygrouptype", "Eligibility Group Type", languageCode, new string[] {
            //            "Aged Blind Disabled"
            //            ,"Children"
            //            ,"Pregnant Women"
            //            ,"Family/Adult"});

            //Eligibility Group Parent Category
            //pf.CreateGlobalOptionSet(service, "Recipient", "cog_eligibilitygroupparentcategory", "Eligibility Group Parent Category", languageCode, new string[] {
            //            "Medicaid Mandatory Coverage"
            //            ,"Medicaid Options for Coverage"
            //            ,"Medicaid Medically Needy"
            //            ,"Chip Coverage"
            //            ,"Chip Additional Options for Coverage"
            //            ,"1115 Expansion Eligibility Groups"});

            //Eligibility Group Category
            //pf.CreateGlobalOptionSet(service, "Recipient", "cog_eligibilitygroupcategory", "Eligibility Group Category", languageCode, new string[] {
            //            "Mandatory Coverage"
            //            ,"Options for Coverage"
            //            ,"Medically Needy"
            //            ,"Family/Adult"
            //            ,"Optional"});
            #endregion

            #region Case Option Sets
            //Case Type
            //pf.CreateGlobalOptionSet(service, "Case", "cog_casetype", "Case Type", languageCode, new string[] {
            //    "Basic"
            //    ,"Data Analytics"
            //    ,"Electronic Health Record"
            //    ,"Estate Recovery"
            //    ,"External Review"
            //    ,"Internal Review"
            //    ,"Managed Care"
            //    ,"Medical Review"
            //    ,"Payment Accuracy"
            //    ,"PERM"
            //    ,"Self Report"
            //    ,"Special Projects"
            //    ,"State Single Audit" });

            //Case Status            
            //pf.CreateGlobalOptionSet(service, "Case", "cog_casestatus", "Case Status", languageCode, new string[] {
            //    "Open"
            //    ,"Planning/Preparation"
            //    ,"Test Work/In Progress"
            //    ,"Closed"
            //    ,"Awaiting Case Review"
            //    ,"Case Review In Progress"
            //    ,"Cancelled"
            //    ,"Reporting"
            //    ,"Appeals"
            //    ,"Recovery"
            //    ,"Corrective Action"
            //    ,"Complete" });

            //Case Source
            //InsertGlobalOptionSet(service, "Case", "incident_caseorigincode", "Case Origin", languageCode, new string[] {
            //    //"Email"
            //    //,"Facebook"
            //    "Fax"
            //    ,"Letter"
            //    ,"Other"
            //    //,"Phone"
            //    ,"Referral"
            //    ,"Supervised Analytics"
            //    //,"Twitter"
            //    ,"Un - Supervised Analytics"
            //    ,"Walk in"
            //    //,"Web"
            //});
            #endregion

            #region Contact Option Sets
            ////State/Province
            //pf.CreateGlobalOptionSet(service, "Contact", "cog_stateprovince", "State/Province", languageCode, new string[] {
            //    "Alberta"
            //    ,"British Columbia"
            //    ,"Manitoba"
            //    ,"New Brunswick"
            //    ,"Newfoundland"
            //    ,"Nova Scotia"
            //    ,"Nunavut"
            //    ,"Ontario"
            //    ,"Prince Edward Island"
            //    ,"Quebec"
            //    ,"Saskatchewan"
            //    ,"Northwest Territories"
            //    ,"Yukon Territory"
            //    ,"Armed Forces Americas"
            //    ,"Armed Forces Europe, Middle East, &Canada"
            //    ,"Alaska"
            //    ,"Alabama"
            //    ,"Armed Forces Pacific"
            //    ,"Arkansas"
            //    ,"American Samoa"
            //    ,"Arizona"
            //    ,"California"
            //    ,"Colorado"
            //    ,"Connecticut"
            //    ,"District of Columbia"
            //    ,"Delaware"
            //    ,"Florida"
            //    ,"Federated States of Micronesia"
            //    ,"Georgia"
            //    ,"Guam"
            //    ,"Hawaii"
            //    ,"Iowa"
            //    ,"Idaho"
            //    ,"Illinois"
            //    ,"Indiana"
            //    ,"Kansas"
            //    ,"Kentucky"
            //    ,"Louisiana"
            //    ,"Massachusetts"
            //    ,"Maryland"
            //    ,"Maine"
            //    ,"Marshall Islands"
            //    ,"Michigan"
            //    ,"Minnesota"
            //    ,"Missouri"
            //    ,"Northern Mariana Islands"
            //    ,"Mississippi"
            //    ,"Montana"
            //    ,"North Carolina"
            //    ,"North Dakota"
            //    ,"Nebraska"
            //    ,"New Hampshire"
            //    ,"New Jersey"
            //    ,"New Mexico"
            //    ,"Nevada"
            //    ,"New York"
            //    ,"Ohio"
            //    ,"Oklahoma"
            //    ,"Oregon"
            //    ,"Pennsylvania"
            //    ,"Puerto Rico"
            //    ,"Palau"
            //    ,"Rhode Island"
            //    ,"South Carolina"
            //    ,"South Dakota"
            //    ,"Tennessee"
            //    ,"Texas"
            //    ,"Utah"
            //    ,"Virginia"
            //    ,"Virgin Islands"
            //    ,"Vermont"
            //    ,"Washington"
            //    ,"West Virginia"
            //    ,"Wisconsin"
            //    ,"Wyoming"});

            ////Contact Type
            //pf.CreateGlobalOptionSet(service, "Contact", "cog_contacttype", "Contact Type", languageCode, new string[] {
            //    "Contact"
            //    ,"Information Source"
            //    ,"Lead"
            //    ,"Provider"
            //    ,"Recipient"
            //    ,"Referral"
            //    ,"Subscriber"});

            ////Phone Type
            //pf.CreateGlobalOptionSet(service, "Contact", "cog_phonetype", "Phone Type", languageCode, new string[] {
            //    "Home"
            //    ,"Cell"
            //    ,"Fax"
            //    ,"Business"});
            #endregion
        }
        #endregion

        #region sample code
        ////  memo fields
        //atts.Add(pf.CreateMemo("cog_SampleMemo", "Sample Memo", languageCode, AttributeRequiredLevel.None, defaultMemoSize));

        ////  Date fields
        //atts.Add(pf.CreateDate("cog_SampleDate", "Sample Date", languageCode, AttributeRequiredLevel.None));

        ////// time fields
        ////atts.Add(pf.CreateDateTime("cog_SampleTime", "Sample Time", languageCode, AttributeRequiredLevel.None));

        ////// currency fields
        ////atts.Add(pf.CreateMoney("cog_SampleMoney", "Sample Money", languageCode, AttributeRequiredLevel.None,defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));

        ////// decimal fields
        ////atts.Add(pf.CreateQuantityDecimal("cog_SampleQuantity2", "Sample Quantity 2", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));

        ////  string fields
        //atts.Add(pf.CreateString("cog_SampleString", "Sample String", languageCode, AttributeRequiredLevel.None, defaultStringSize));

        ////  boolean fields
        //atts.Add(pf.CreateBoolean("cog_SampleBoolean", "Sample Boolean", languageCode, AttributeRequiredLevel.None));

        ////  integer fields
        //atts.Add(pf.CreateInteger("cog_SampleInteger", "Sample Integer", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));

        ////  optionsets from global
        //atts.Add(pf.CreateOptionSetFromGlobal("cog_SampleGlobal", "Sample Global", languageCode, "cog_1095tier", AttributeRequiredLevel.None));
        #endregion

        #region Claims Related Entities
        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Claims entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateClaimsAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            ////  memo fields
            //atts.Add(pf.CreateMemo("cog_SampleMemo", "Sample Memo", languageCode, AttributeRequiredLevel.None, defaultMemoSize));

            ////  Date fields
            //atts.Add(pf.CreateDate("cog_", "", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_ClaimServiceDateFrom837", "Claim Service Date From 837", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_AdmissionDate", "Admission Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_BilledDate", "Billed Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_DischargeDate", "Discharge Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_DispenseDate", "Dispense Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_FinalIssueDate", "Final Issue Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_FirstServiceDate", "First Service Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_ICD9Procedure1Date", "ICD9 Procedure 1 Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_ICD9Procedure2Date", "ICD9 Procedure 2 Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_ICD9Procedure3Date", "ICD9 Procedure 3 Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_ICD9Procedure4Date", "ICD9 Procedure 4 Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_ICD9Procedure5Date", "ICD9 Procedure 5 Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_ICD9Procedure6Date", "ICD9 Procedure 6 Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_LastServiceDate", "Last Service Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_PaidDate", "Paid Date", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDate("cog_PrescribeDate", "Prescribe Date", languageCode, AttributeRequiredLevel.None));

            ////// time fields
            ////atts.Add(pf.CreateDateTime("cog_SampleTime", "Sample Time", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDateTime("cog_AdmissionTime", "Admission Time", languageCode, AttributeRequiredLevel.None));
            atts.Add(pf.CreateDateTime("cog_DischargeTime", "Discharge Time", languageCode, AttributeRequiredLevel.None));

            ////// currency fields
            ////atts.Add(pf.CreateMoney("cog_SampleMoney", "Sample Money", languageCode, AttributeRequiredLevel.None,defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_AllowedAmount", "Allowed Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_BaseAmount", "Base Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_BilledAmount", "Billed Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_BloodDeductibleAmount", "Blood Deductible Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_CoInsuranceAmount", "Co Insurance Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_CoPayAmount", "Co Pay Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_DeductibleAmount", "Deductible Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_EncounterAmount", "Encounter Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_MedicareAllowedAmount", "Medicare Allowed Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_NDCProfeeAmount", "NDC Pro fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_PaidAmount", "Paid Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_MedicarePaidAmount", "Medicare Paid Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_PatientUb92PaidAmount", "Patient Ub92 Paid Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_ReimbursedAmount", "Reimbursed Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalReimbursedAmount", "Total Reimbursed Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TplAmount", "Tpl Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_WarrantAmount", "Warrant Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_ApprovedDispenseAmount", "Approved Dispense Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_ApprovedGrossAmount", "Approved Gross Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_ApprovedNetAmount", "Approved Net Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_ApprovedProfessionalFeeAmount", "Approved Professional Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_ApprovedServiceFeeAmount", "Approved Service Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_DispenseFee", "Dispense Fee", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_PaymentDispenseFeeAmount", "Payment Dispense Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_PaymentSubmittedNetAmount", " Payment Submitted Net Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_PatientResponsibilityPaymentAmount", "Patient Responsibility Payment Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_SubmittedDispenseFeeAmount", "Submitted Dispense Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_SubmittedGrossAmount", "Submitted Gross Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_SubmittedProfessionalFeeAmount", "Submitted Professional Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_SubmittedServiceFeeAmount", "Submitted Service Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalApprovedScriptDispenseFeeAmount", "Total Approved Script Dispense Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalApprovedScriptProfessionalFeeAmount", "Total Approved Script Professional Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalApprovedScriptServiceFeeAmount", "Total Approved Script Service Fee Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimChargePayment", "Total Claim Charge Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimCopayAmountPayment", "Total Claim Copay Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimOtherInsuranceAmountPayment", "Total Claim Other Insurance Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimPatientLiabilityAmountPayment", "Total Claim Patient Liability Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimPatientPaidAmountPayment", "Total Claim Patient Paid Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimReimbursementAmountPayment", "Total Claim Reimbursement Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalNetClaimChargePayment", "Total Net Claim Charge Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));

            ////// decimal fields
            ////atts.Add(pf.CreateQuantityDecimal("cog_SampleQuantity2", "Sample Quantity 2", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            atts.Add(pf.CreateQuantityDecimal("cog_QuantityAllowed", "Quantity Allowed", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            atts.Add(pf.CreateQuantityDecimal("cog_QuantityBilled", "Quantity Billed", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            atts.Add(pf.CreateQuantityDecimal("cog_QuantityPaid", "Quantity Paid", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            atts.Add(pf.CreateQuantityDecimal("cog_QuantityRefill", "Quantity Refill", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            atts.Add(pf.CreateQuantityDecimal("cog_QuantityUnitsAllowed", "Quantity Units Allowed", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            atts.Add(pf.CreateQuantityDecimal("cog_SubmittedNdcCodeQuantity", "Submitted Ndc Code Quantity", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            atts.Add(pf.CreateQuantityDecimal("cog_QuantityDispense", "Quantity Dispense", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));

            ////  string fields
            //atts.Add(pf.CreateString("cog_", "", languageCode, AttributeRequiredLevel.None, defaultStringSize));
            atts.Add(pf.CreateString("cog_AmbulanceTransportationCode", "Ambulance Transportation Code", languageCode, AttributeRequiredLevel.None, 1));
            atts.Add(pf.CreateString("cog_AmbulanceTransportationReason", "Ambulance Transportation Reason", languageCode, AttributeRequiredLevel.None, 1));
            atts.Add(pf.CreateString("cog_POACode", "POA Code", languageCode, AttributeRequiredLevel.None, 1));
            atts.Add(pf.CreateString("cog_ToothSurfaceCode1", "Tooth Surface Code 1", languageCode, AttributeRequiredLevel.None, 1));
            atts.Add(pf.CreateString("cog_ToothSurfaceCode2", "Tooth Surface Code 2", languageCode, AttributeRequiredLevel.None, 1));
            atts.Add(pf.CreateString("cog_ToothSurfaceCode3", "Tooth Surface Code 3", languageCode, AttributeRequiredLevel.None, 1));
            atts.Add(pf.CreateString("cog_ToothSurfaceCode4", "Tooth Surface Code 4", languageCode, AttributeRequiredLevel.None, 1));
            atts.Add(pf.CreateString("cog_ToothSurfaceCode5", "Tooth Surface Code 5", languageCode, AttributeRequiredLevel.None, 1));
            atts.Add(pf.CreateString("cog_EmergencyIndicatorFrom837", "Emergency Indicator From 837", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_AdmitHourCode", "Admit Hour Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_AdmitSourceCode", "Admit Source Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_AdmitTypeCode", "Admit Type Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_AttachmentIndicator", "Attachment Indicator", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_AttendingServiceLocationCode", "Attending Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_BillingServiceLocationCode", "Billing Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_CliaNumber", "Clia Number", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_DetailStatusCode", "Detail Status Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_DrugFormCode", "Drug Form Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_EpsdtFpCode", "Epsdt Fp Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_EpsdtReferralIndicator", "Epsdt Referral Indicator", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_FacilityServiceLocationCode", "Facility Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ForcedClaimIndicatorPayment", "Forced Claim Indicator Payment", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_MedicalRecordNumberCode", "Medical Record Number Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_MedicaidId", "Medicaid Id", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_NPIBillingId", "NPI Billing Id", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_OrderingServiceLocationCode", "Ordering Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_OtherServiceLocationCode", "Other Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_OtherServiceLocationCode2", "Other Service Location Code 2", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_PatientAccountNumber", "Patient Account Number", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_PregnancyIndicator", "Pregnancy Indicator", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_PrescribingServiceLocationCode", "Prescribing Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_PrescriptionNumber", "Prescription Number", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_PricingIndicator", "Pricing Indicator", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_PriorAuthorizationNumber", "Prior Authorization Number", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ProcedureModifierCode1", "Procedure Modifier Code 1", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ProcedureModifierCode2", "Procedure Modifier Code 2", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ProcedureModifierCode3", "Procedure Modifier Code 3", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ProcedureModifierCode4", "Procedure Modifier Code 4", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ProgramHealthCode", "Program Health Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ReferringServiceLocationCode", "Referring Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ReferringServiceLocationCode2", "Referring Service Location Code 2", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_RenderingServiceLocationCode", "Rendering Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_ServiceLocationCode", "Service Location Code", languageCode, AttributeRequiredLevel.None, 10));
            atts.Add(pf.CreateString("cog_PermId", "Perm Id", languageCode, AttributeRequiredLevel.None, 11));
            atts.Add(pf.CreateString("cog_NdcGcnCode", "Ndc Gcn Code", languageCode, AttributeRequiredLevel.None, 12));
            atts.Add(pf.CreateString("cog_SubmittedNdcCode", "Submitted Ndc Code", languageCode, AttributeRequiredLevel.None, 12));
            atts.Add(pf.CreateString("cog_AuthorizationNumberFrom837", "Authorization Number From 837", languageCode, AttributeRequiredLevel.None, 15));
            atts.Add(pf.CreateString("cog_ICDVersionCode", "ICD Version Code", languageCode, AttributeRequiredLevel.None, 15));
            atts.Add(pf.CreateString("cog_RecipientCaseNumber", "Recipient Case Number", languageCode, AttributeRequiredLevel.None, 16));
            atts.Add(pf.CreateString("cog_MdcCode", "Mdc Code", languageCode, AttributeRequiredLevel.None, 2));
            atts.Add(pf.CreateString("cog_QuadrantCode", "Quadrant Code", languageCode, AttributeRequiredLevel.None, 2));
            atts.Add(pf.CreateString("cog_TheraClsFdaCode", "Thera Cls Fda Code", languageCode, AttributeRequiredLevel.None, 2));
            atts.Add(pf.CreateString("cog_ToothNumberCode", "Tooth Number Code", languageCode, AttributeRequiredLevel.None, 2));
            atts.Add(pf.CreateString("cog_DiagnosisCode1", "Diagnosis Code 1", languageCode, AttributeRequiredLevel.None, 25));
            atts.Add(pf.CreateString("cog_DiagnosisCode2", "Diagnosis Code 2", languageCode, AttributeRequiredLevel.None, 25));
            atts.Add(pf.CreateString("cog_DiagnosisCode3", "Diagnosis Code 3", languageCode, AttributeRequiredLevel.None, 25));
            atts.Add(pf.CreateString("cog_DiagnosisCode4", "Diagnosis Code 4", languageCode, AttributeRequiredLevel.None, 25));
            atts.Add(pf.CreateString("cog_DiagnosisCode5", "Diagnosis Code 5", languageCode, AttributeRequiredLevel.None, 25));
            atts.Add(pf.CreateString("cog_Icn", "Icn", languageCode, AttributeRequiredLevel.None, 25));
            atts.Add(pf.CreateString("cog_DetailMatchCode", "Detail Match Code", languageCode, AttributeRequiredLevel.None, 3));
            atts.Add(pf.CreateString("cog_ClaimDetailMatchCode", "Claim Detail Match Code", languageCode, AttributeRequiredLevel.None, 3));
            atts.Add(pf.CreateString("cog_LTCRecipientLocationIndicator", "LTC Recipient Location Indicator", languageCode, AttributeRequiredLevel.None, 3));
            atts.Add(pf.CreateString("cog_ConditionCode", "Condition Code", languageCode, AttributeRequiredLevel.None, 30));
            atts.Add(pf.CreateString("cog_FundCode", "Fund Code", languageCode, AttributeRequiredLevel.None, 30));
            atts.Add(pf.CreateString("cog_DrgCode", "Drg Code", languageCode, AttributeRequiredLevel.None, 4));
            atts.Add(pf.CreateString("cog_RevenueCode", "Revenue Code", languageCode, AttributeRequiredLevel.None, 4));
            atts.Add(pf.CreateString("cog_BrandMedicalNecessityIndicator", "Brand Medical Necessity Indicator", languageCode, AttributeRequiredLevel.None, 5));
            atts.Add(pf.CreateString("cog_ClaimIndicatorTypeCode", "Claim Indicator Type Code", languageCode, AttributeRequiredLevel.None, 5));
            atts.Add(pf.CreateString("cog_ClaimStatusCode", "Claim Status Code", languageCode, AttributeRequiredLevel.None, 5));
            atts.Add(pf.CreateString("cog_ClaimTypeCode", "Claim Type Code", languageCode, AttributeRequiredLevel.None, 5));
            atts.Add(pf.CreateString("cog_DetailPlaceOfServiceCode", "Detail Place Of Service Code", languageCode, AttributeRequiredLevel.None, 5));
            atts.Add(pf.CreateString("cog_PatientStatusCode", "Patient Status Code", languageCode, AttributeRequiredLevel.None, 5));
            atts.Add(pf.CreateString("cog_EOBCode", "EOB Code", languageCode, AttributeRequiredLevel.None, 60));
            atts.Add(pf.CreateString("cog_ICD9ProcedureCode1", "ICD9 Procedure Code 1", languageCode, AttributeRequiredLevel.None, 7));
            atts.Add(pf.CreateString("cog_ICD9ProcedureCode2", "ICD9 Procedure Code 2", languageCode, AttributeRequiredLevel.None, 7));
            atts.Add(pf.CreateString("cog_ICD9ProcedureCode3", "ICD9 Procedure Code 3", languageCode, AttributeRequiredLevel.None, 7));
            atts.Add(pf.CreateString("cog_ICD9ProcedureCode4", "ICD9 Procedure Code 4", languageCode, AttributeRequiredLevel.None, 7));
            atts.Add(pf.CreateString("cog_ICD9ProcedureCode5", "ICD9 Procedure Code 5", languageCode, AttributeRequiredLevel.None, 7));
            atts.Add(pf.CreateString("cog_ICD9ProcedureCode6", "ICD9 Procedure Code 6", languageCode, AttributeRequiredLevel.None, 7));
            atts.Add(pf.CreateString("cog_WarrantNumber", "Warrant Number", languageCode, AttributeRequiredLevel.None, 9));
            atts.Add(pf.CreateString("cog_ClaimsCategory", "Claims Category", languageCode, AttributeRequiredLevel.None, 10));

            ////  boolean fields
            //atts.Add(pf.CreateBoolean("cog_SampleBoolean", "Sample Boolean", languageCode, AttributeRequiredLevel.None));

            ////  integer fields
            //atts.Add(pf.CreateInteger("cog_", "", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakClaim", "SakClaim", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakClaimDetail", "SakClaimDetail", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_DetailLineNumber", "Detail Line Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakSource", "SakSource", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakProcess", "SakProcess", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakAdmittingProvider", "SakAdmittingProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakAssistingProvider", "SakAssistingProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakAttendingProvider", "SakAttendingProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakBillingProvider", "SakBillingProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakFacilityProvider", "SakFacilityProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_Msis", "Msis", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_NumberOfItems", "Number Of Items", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakOrderingProvider", "SakOrderingProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakOtherProvider", "SakOtherProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakOtherProvider2", "SakOtherProvider2", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakPay2Provider", "SakPay2Provider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakPrescribingProvider", "SakPrescribingProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakProcedure", "SakProcedure", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakProvider", "SakProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakRecipient", "SakRecipient", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakRecipientEligibility", "SakRecipientEligibility", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakReferringProvider", "SakReferringProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakReferringProvider2", "SakReferringProvider2", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakRenderingProvider", "SakRenderingProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_RowNumber", "Row Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_StratumNumber", "Stratum Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakSubmitterProvider", "SakSubmitterProvider", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_TheraClsAhfsCode", "Thera Cls Ahfs Code", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_Year", "Year", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakBaseClaimDetail", "SakBaseClaimDetail", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_NumberDaysCovered", "Number Days Covered", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_NumberDaysCoveredPaid", "Number Days Covered Paid", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_NumberDaysNonCovered", "Number Days Non-Covered", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_NumberDaySupply", "Number Day Supply", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));

            ////  optionsets from global
            //atts.Add(pf.CreateOptionSetFromGlobal("cog_SampleGlobal", "Sample Global", languageCode, "cog_1095tier", AttributeRequiredLevel.None));

            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateClaimEobAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //SakClaim
            atts.Add(pf.CreateInteger("cog_SakClaim", "SakClaim", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //ClaimItemNumber
            atts.Add(pf.CreateInteger("cog_ClaimItemNumber", "Claim Item Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //EobCode1
            atts.Add(pf.CreateString("cog_EobCode1", "Eob Code 1", languageCode, AttributeRequiredLevel.None, 15));
            //EobCode2
            atts.Add(pf.CreateString("cog_EobCode2", "Eob Code 2", languageCode, AttributeRequiredLevel.None, 15));
            //OverrideExceptionCode
            atts.Add(pf.CreateString("cog_OverrideExceptionCode", "Override Exception Code", languageCode, AttributeRequiredLevel.None, 5));
            //OverrideLocationCode
            atts.Add(pf.CreateString("cog_OverrideLocationCode", "Override Location Code", languageCode, AttributeRequiredLevel.None, 5));
            //CurrentLocationCode
            atts.Add(pf.CreateString("cog_CurrentLocationCode", "Current Location Code", languageCode, AttributeRequiredLevel.None, 5));
            //CurrentDateEntryLocation
            atts.Add(pf.CreateString("cog_CurrentDateEntryLocation", "Current Date Entry Location", languageCode, AttributeRequiredLevel.None, 5));
            //PreviousLocationCode
            atts.Add(pf.CreateString("cog_PreviousLocationCode", "Previous Location Code", languageCode, AttributeRequiredLevel.None, 5));
            //PreviousDateEntryLocation
            atts.Add(pf.CreateString("cog_PreviousDateEntryLocation", "Previous Date Entry Location", languageCode, AttributeRequiredLevel.None, 5));
            //PASequenceNumber
            atts.Add(pf.CreateInteger("cog_PASequenceNumber", "PA Sequence Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateClaimRuleAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //SakClaim
            atts.Add(pf.CreateInteger("cog_SakClaim", "SakClaim", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //ClaimItemNumber
            atts.Add(pf.CreateInteger("cog_ClaimItemNumber", "Claim Item Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //ClaimRuleSequenceNumber
            atts.Add(pf.CreateInteger("cog_ClaimRuleSequenceNumber", "Claim Rule Sequence Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //RuleCode
            atts.Add(pf.CreateString("cog_RuleCode", "Rule Code", languageCode, AttributeRequiredLevel.None, 10));
            //RuleIssueNumber
            atts.Add(pf.CreateInteger("cog_RuleIssueNumber", "Rule Issue Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //ItemCode
            atts.Add(pf.CreateString("cog_ItemCode", "Item Code", languageCode, AttributeRequiredLevel.None, 10));
            //ItemTypeCode
            atts.Add(pf.CreateString("cog_ItemTypeCode", "ItemTypeCode", languageCode, AttributeRequiredLevel.None, 10));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateClaimStatusCodeAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //ClaimStatusCode
            atts.Add(pf.CreateString("cog_ClaimStatusCode", "Claim Status Code", languageCode, AttributeRequiredLevel.None, 5));
            //ClaimStatusDescription
            atts.Add(pf.CreateString("cog_Description", "Claim Status Description", languageCode, AttributeRequiredLevel.None, 100));
            //EffectiveDate
            atts.Add(pf.CreateDate("cog_EffectiveDate", "Effective Date", languageCode, AttributeRequiredLevel.None));
            //EndDate
            atts.Add(pf.CreateDate("cog_EndDate", "End Date", languageCode, AttributeRequiredLevel.None));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateClaimTypeCodeAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            atts.Add(pf.CreateString("cog_ClaimTypeCode", "Claim Type Code", languageCode, AttributeRequiredLevel.None, 5));

            atts.Add(pf.CreateString("cog_Description", "Claim Type Description", languageCode, AttributeRequiredLevel.None, 50));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateDiagnosisAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //SakClaim
            atts.Add(pf.CreateInteger("cog_SakClaim", "SakClaim", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //ClaimItemNumber
            atts.Add(pf.CreateInteger("cog_ClaimItemNumber", "Claim Item Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //DiagnosisPrimaryInd
            atts.Add(pf.CreateString("cog_DiagnosisPrimaryInd", "Diagnosis Primary Indicator", languageCode, AttributeRequiredLevel.None, 5));
            //DiagnosisSequenceNumber
            atts.Add(pf.CreateInteger("cog_DiagnosisSequenceNumber", "Diagnosis Sequence Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //DiagnosisCode
            atts.Add(pf.CreateString("cog_DiagnosisCode", "Diagnosis Code", languageCode, AttributeRequiredLevel.None, 25));
            //DiagnosisTypeCode
            atts.Add(pf.CreateString("cog_DiagnosisTypeCode", "Diagnosis Type Code", languageCode, AttributeRequiredLevel.None, 10));
            //DiagnosisFamilyPlanIndicator
            atts.Add(pf.CreateString("cog_DiagnosisFamilyPlanIndicator", "Diagnosis Family Plan Indicator", languageCode, AttributeRequiredLevel.None, 10));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateDiagnosisTypeCodeAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //DiagnosisTypeCode
            atts.Add(pf.CreateString("cog_DiagnosisTypeCode", "Diagnosis Type Code", languageCode, AttributeRequiredLevel.None, 10));
            //DiagnosisDescription
            atts.Add(pf.CreateString("cog_DiagnosisTypeDescription", "Diagnosis Type Description", languageCode, AttributeRequiredLevel.None, 255));
            //DiagnosisTypeDescription
            atts.Add(pf.CreateString("cog_DiagnosisTypeDescription", "Diagnosis Type Description", languageCode, AttributeRequiredLevel.None, 100));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateDrugAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //NDC
            atts.Add(pf.CreateString("cog_NDC", "NDC", languageCode, AttributeRequiredLevel.None, 12));
            //BrandName
            atts.Add(pf.CreateString("cog_BrandName", "Brand Name", languageCode, AttributeRequiredLevel.None, 30));
            //Strength
            atts.Add(pf.CreateString("cog_Strength", "Strength", languageCode, AttributeRequiredLevel.None, 10));
            //AHFSTherapeuticClass
            atts.Add(pf.CreateString("cog_AHFSTherapeuticClass", "AHFS Therapeutic Class", languageCode, AttributeRequiredLevel.None, 6));
            //TherapeuticClassCodeGEN
            atts.Add(pf.CreateString("cog_TherapeuticClassCodeGEN", "Therapeutic Class Code GEN", languageCode, AttributeRequiredLevel.None, 2));
            //TherapeuticClassCodeSTD
            atts.Add(pf.CreateString("cog_TherapeuticClassCodeSTD", "Therapeutic Class Code STD", languageCode, AttributeRequiredLevel.None, 2));
            //TherapeuticClassCodeSPC
            atts.Add(pf.CreateString("cog_TherapeuticClassCodeSPC", "Therapeutic Class Code SPC", languageCode, AttributeRequiredLevel.None, 3));
            //GSN
            atts.Add(pf.CreateInteger("cog_GSN", "GSN", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //GCN
            atts.Add(pf.CreateString("cog_GCN", "GCN", languageCode, AttributeRequiredLevel.None, 5));
            //USANGenericName
            atts.Add(pf.CreateString("cog_USANGenericName", "USAN Generic Name", languageCode, AttributeRequiredLevel.None, 30));
            //PackageDescription
            atts.Add(pf.CreateString("cog_PackageDescription", "Package Description", languageCode, AttributeRequiredLevel.None, 10));
            //PackageSize
            atts.Add(pf.CreateQuantityDecimal("cog_PackageSize", "Package Size", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            //StandardPackageIndicator
            atts.Add(pf.CreateString("cog_StandardPackageIndicator", "Standard Package Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //DrugFormCode
            atts.Add(pf.CreateString("cog_DrugFormCode", "DrugFormCode", languageCode, AttributeRequiredLevel.None, defaultStringSize));
            //DosageFormDescription
            atts.Add(pf.CreateString("cog_DosageFormDescription", "Dosage Form Description", languageCode, AttributeRequiredLevel.None, 10));
            //UnitDoseIndicator
            atts.Add(pf.CreateString("cog_UnitDoseIndicator", "Unit Dose Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //DEACode
            atts.Add(pf.CreateString("cog_DEACode", "DEA Code", languageCode, AttributeRequiredLevel.None, 1));
            //MMAMaxDailyUnits
            atts.Add(pf.CreateQuantityDecimal("cog_MMAMaxDailyUnits", "MMA Max Daily Units", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            //MMAMaxDailyUnitForm
            atts.Add(pf.CreateString("cog_MMAMaxDailyUnitForm", "MMAMaxDailyUnitForm", languageCode, AttributeRequiredLevel.None, 2));
            //RouteDescription
            atts.Add(pf.CreateString("cog_RouteDescription", "Route Description", languageCode, AttributeRequiredLevel.None, 10));
            //HICLSequenceNumber
            atts.Add(pf.CreateString("cog_HICLSequenceNumber", "HICL Sequence Number", languageCode, AttributeRequiredLevel.None, 6));
            //InnovatorIndicator
            atts.Add(pf.CreateString("cog_InnovatorIndicator", "Innovator Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //HCFAUnitPackageSize
            atts.Add(pf.CreateQuantityDecimal("cog_HCFAUnitPackageSize", "HCFA Unit Package Size", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            //HCFAUnitType
            atts.Add(pf.CreateString("cog_HCFAUnitType", "HCFA Unit Type", languageCode, AttributeRequiredLevel.None, 3));
            //HCFADESICodeCurrent
            atts.Add(pf.CreateString("cog_HCFADESICodeCurrent", "HCFA DESI Code Current", languageCode, AttributeRequiredLevel.None, 1));
            //HCFATerminationDate
            atts.Add(pf.CreateDate("cog_HCFATerminationDate", "HCFA Termination Date", languageCode, AttributeRequiredLevel.None));
            //DrugSexCode
            atts.Add(pf.CreateString("cog_DrugSexCode", "Drug Sex Code", languageCode, AttributeRequiredLevel.None, 1));
            //DrugRefillAllowed
            atts.Add(pf.CreateString("cog_DrugRefillAllowed", "Drug Refill Allowed", languageCode, AttributeRequiredLevel.None, 2));
            //EffectiveDate
            atts.Add(pf.CreateDate("cog_EffectiveDate", "Effective Date", languageCode, AttributeRequiredLevel.None));
            //EndDate
            atts.Add(pf.CreateDate("cog_EndDate", "End Date", languageCode, AttributeRequiredLevel.None));
            //DrugControlNumber
            atts.Add(pf.CreateString("cog_DrugControlNumber", "Drug Control Number", languageCode, AttributeRequiredLevel.None, 1));
            //AWPPrice
            atts.Add(pf.CreateMoney("cog_AWPPrice", "AWP Price", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            //EACPrice
            atts.Add(pf.CreateMoney("cog_EACPrice", "EAC Price", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            //MACPrice
            atts.Add(pf.CreateMoney("cog_MACPrice", "MAC Price", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            //DrugCVMinAge
            atts.Add(pf.CreateInteger("cog_DrugCVMinAge", "Drug CV Min Age", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //DrugCVMaxAge
            atts.Add(pf.CreateInteger("cog_DrugCVMaxAge", "Drug CV Max Age", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //MaximumSupply
            atts.Add(pf.CreateQuantityDecimal("cog_MaximumSupply", "Maximum Supply", languageCode, AttributeRequiredLevel.None, defaultMaxQuantity, defaultMinQuantity, defaultQuantityPrecision));
            //MaximumDays
            atts.Add(pf.CreateInteger("cog_MaximumDays", "Maximum Days", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //DrugMACIndicator
            atts.Add(pf.CreateString("cog_DrugMACIndicator", "Drug MAC Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //DispenseFeeIndicator
            atts.Add(pf.CreateString("cog_DispenseFeeIndicator", "Dispense Fee Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //DrugPriorAuthCode
            atts.Add(pf.CreateString("cog_DrugPriorAuthCode", "Drug Prior Auth Code", languageCode, AttributeRequiredLevel.None, 1));
            //FamilyPlanIndicator
            atts.Add(pf.CreateString("cog_FamilyPlanIndicator", "Family Plan Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //NursingHomeIndicator
            atts.Add(pf.CreateString("cog_NursingHomeIndicator", "Nursing Home Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //CopayIndicator
            atts.Add(pf.CreateString("cog_CopayIndicator", "Copay Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //MCareIndicator
            atts.Add(pf.CreateString("cog_MCareIndicator", "M Care Indicator", languageCode, AttributeRequiredLevel.None, 1));
            //PrevEffectiveDate
            atts.Add(pf.CreateDate("cog_PrevEffectiveDate", "Preventative Effective Date", languageCode, AttributeRequiredLevel.None));
            //PrevEndDate
            atts.Add(pf.CreateDate("cog_PrevEndDate", "Preventative End Date", languageCode, AttributeRequiredLevel.None));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateProcedureAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //ProcedureCode
            atts.Add(pf.CreateString("cog_ProcedureCode", "Procedure Code", languageCode, AttributeRequiredLevel.None, 25));
            //ProcedureDescription
            atts.Add(pf.CreateString("cog_ProcedureDescription", "Procedure Description", languageCode, AttributeRequiredLevel.None, 200));
            //EffectiveDate
            atts.Add(pf.CreateDate("cog_EffectiveDate", "Effective Date", languageCode, AttributeRequiredLevel.None));
            //EndDate
            atts.Add(pf.CreateDate("cog_EndDate", "End Date", languageCode, AttributeRequiredLevel.None));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateSurgicalProcedureAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //SakClaim
            atts.Add(pf.CreateInteger("cog_SakClaim", "SakClaim", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //ClaimItemNumber
            atts.Add(pf.CreateInteger("cog_ClaimItemNumber", "Claim Item Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //SurgicalProcedureRecordNumber
            atts.Add(pf.CreateInteger("cog_SurgicalProcedureRecordNumber", "Surgical Procedure Record Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //SurgicalProcedureCode
            atts.Add(pf.CreateString("cog_SurgicalProcedureCode", "Surgical Procedure Code", languageCode, AttributeRequiredLevel.None, 15));
            //SurgicalProcedureModifierPrice 
            atts.Add(pf.CreateMoney("cog_SurgicalProcedureModifierPrice", "Surgical Procedure Modifier Price", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            //SurgicalProcedureModifierInformation
            atts.Add(pf.CreateString("cog_SurgicalProcedureModifierInformation", "Surgical Procedure Modifier Information", languageCode, AttributeRequiredLevel.None, defaultStringSize));
            //SurgicalTypeService
            atts.Add(pf.CreateString("cog_SurgicalTypeService", "Surgical Type Service", languageCode, AttributeRequiredLevel.None, 25));
            //SurgeryDate
            atts.Add(pf.CreateDate("cog_SurgeryDate", "Surgery Date", languageCode, AttributeRequiredLevel.None));
            //KeySurgicalPaAttendingIndicator
            atts.Add(pf.CreateString("cog_KeySurgicalPaAttendingIndicator", "Key Surgical Pa Attending Indicator", languageCode, AttributeRequiredLevel.None, 10));
            //L3SurgicalPaAttendingIndicator
            atts.Add(pf.CreateString("cog_L3SurgicalPaAttendingIndicator", "L3 Surgical Pa Attending Indicator", languageCode, AttributeRequiredLevel.None, 10));
            //HistoryRetentionIndicator
            atts.Add(pf.CreateString("cog_HistoryRetentionIndicator", "History Retention Indicator", languageCode, AttributeRequiredLevel.None, 10));
            return atts;
        }

        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateUBOccurrenceAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            //SakClaim
            atts.Add(pf.CreateInteger("cog_SakClaim", "SakClaim", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //ClaimItemNumber
            atts.Add(pf.CreateInteger("cog_ClaimItemNumber", "Claim Item Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //UBOccurrencesRecordNumber
            atts.Add(pf.CreateInteger("cog_UBOccurrencesRecordNumber", "UB Occurrences Record Number", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            //UBOccurrencesCode
            atts.Add(pf.CreateString("cog_UBOccurrencesCode", "UB Occurrences Code", languageCode, AttributeRequiredLevel.None, 25));
            //UBOccurrencesDate
            atts.Add(pf.CreateDate("cog_UBOccurrencesDate", "UB Occurrences Date", languageCode, AttributeRequiredLevel.None));

            return atts;
        }
        #endregion

        #region Header Claim
        /// <summary>
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public List<AttributeMetadata> CreateHeaderClaimAttributeList()
        {
            List<AttributeMetadata> atts = new List<AttributeMetadata>();

            atts.Add(pf.CreateInteger("cog_SakClaim", "SakClaim", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakSource", "SakSource", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateInteger("cog_SakProcess", "SakProcess", languageCode, AttributeRequiredLevel.None, defaultIntegerSize));
            atts.Add(pf.CreateMoney("cog_AllowedAmount", "Allowed Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_BilledAmount", "Billed Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_CoPayAmount", "Co Pay Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_EncounterAmount", "Encounter Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_PaidAmount", "Paid Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TplAmount", "Tpl Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalReimbursedAmount", "Total Reimbursed Amount", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimOtherInsuranceAmountPayment", "Total Claim Other Insurance Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimPatientLiabilityAmountPayment", "Total Claim Patient Liability Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimPatientPaidAmountPayment", "Total Claim Patient Paid Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalClaimReimbursementAmountPayment", "Total Claim Reimbursement Amount Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            atts.Add(pf.CreateMoney("cog_TotalNetClaimChargePayment", "Total Net Claim Charge Payment", languageCode, AttributeRequiredLevel.None, defaultMaxCurrency, defaultMinCurrency, defaultCurrencyPrecision));
            return atts;
        }
        #endregion

        #region Findings Related Entities
        /// <summary> 
        /// Main function that creates the list of attributes to add to the CRM Case entity
        /// </summary>
        /// <returns></returns>
        public void CreateFindingsGlobalOptionSets()
        {
            //string serverName = "http://azdev81npi04:5555/WorkflowManager";
            string serverName = "https://pidev.crm.dynamics.com";
            Uri organizationUri = new Uri(string.Format("{0}/XRMServices/2011/Organization.svc", serverName));
            Uri homeRealmUri = null;
            ClientCredentials credentials = new ClientCredentials();
            PublicFunctions pf = new PublicFunctions();
            //  use UserName object for CRM Online
            credentials.UserName.UserName = "steve.weinberger@cognosante.com";
            credentials.UserName.Password = "Ramstein35530";

            //  use default for OnPrem...
            //credentials.Windows.ClientCredential = System.Net.CredentialCache.DefaultNetworkCredentials;

            IOrganizationService service = new OrganizationServiceProxy(organizationUri, homeRealmUri, credentials, null);

            //Finding Category
            pf.InsertGlobalOptionSet(service, "Findings", "cog_findingcategory", "Finding Category", languageCode, new string[] {
            "Noncompliance with Federal Statute"
            ,"Noncompliance with State Statute"
            ,"Noncompliance with Policy"
            ,"Noncompliance with Defined Processes or Procedures"
            ,"Noncompliance - Other"
            ,"Override Internal Controls - Management"
            ,"Override Internal Controls - Staff"
            ,"Impaired Control Environment"
            ,"Lack of / Insufficient Monitoring"
            ,"Lack of / Insufficient Communication"
            ,"Lack of / Insufficient Operational Efficiency"
            ,"Lack of / Insufficient Operational Effectiveness"
            ,"Lack of / Insufficient Physical Security"
            ,"Lack of / Insufficient Financial Controls"
            ,"Lack of / Insufficient Process or Procedural Controls"
            ,"Lack of / Insufficient Documentation"
            ,"Lack of / Insufficient Internal Controls"
            ,"Other"});

            //Finding Criteria
            pf.InsertGlobalOptionSet(service, "Findings", "cog_findingcriteria", "Finding Criteria", languageCode, new string[] {
            "Federal"
            ,"State"
            ,"Policy"
            ,"Industry Standards"
            ,"Best Practices"
            ,"Other"});

            //Finding Error
            //Form

            //FindingGroup
            pf.InsertGlobalOptionSet(service, "Findings", "cog_findinggroup", "Finding Group", languageCode, new string[] {
            "Billing in Excess of Services Provided"
            ,"Eligibility Issue"
            ,"Lack of Documentation"
            ,"Missing Physician Orders"
            ,"Missing Prior Authorization"
            ,"Non-Covered Services"
            ,"Provider Compliance Issues"
            ,"Wrong Codes Submitted"
            ,"No Findings"});


            //FindingLevel
            pf.InsertGlobalOptionSet(service, "Findings", "cog_findinglevel", "Finding Level", languageCode, new string[] {
            "Significant Deficiency"
            ,"Material Weakness"
            ,"Compliance"});

            //FindingReference
            pf.InsertGlobalOptionSet(service, "Findings", "cog_findingreference", "Finding Reference", languageCode, new string[] {
            });

            //FindingStage
            pf.InsertGlobalOptionSet(service, "Findings", "cog_findingstage", "Finding Stage", languageCode, new string[] {
            "Initial Audit"
            ,"Reconsideration/Discrepancy"
            ,"Additional Reconsideration"
            ,"MAC Appeal"
            ,"CEO Appeal"});

            //FindingType
            pf.InsertGlobalOptionSet(service, "Findings", "cog_findingtype", "Finding Type", languageCode, new string[] {
            "Reportable"
            ,"Non-Reportable"});
        }
        #endregion
    }
}
