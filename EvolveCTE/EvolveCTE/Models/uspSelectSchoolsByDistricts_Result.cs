//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EvolveCTE.Models
{
    using System;
    
    public partial class uspSelectSchoolsByDistricts_Result
    {
        public int SchoolID { get; set; }
        public int DistrictID { get; set; }
        public Nullable<int> AlternateID { get; set; }
        public Nullable<int> PhotoID { get; set; }
        public Nullable<int> LogoID { get; set; }
        public string SchoolIRN { get; set; }
        public string SchoolName { get; set; }
        public string SchooShortlCode { get; set; }
        public string PhoneNumber { get; set; }
        public string FaxNumber { get; set; }
        public string SchoolAbbreviation { get; set; }
        public string AlternateSchoolIRN { get; set; }
        public string Grades { get; set; }
        public string HistoricalGrades { get; set; }
        public byte[] SchoolPicture { get; set; }
        public byte[] SchoolLogo { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public bool IsActive { get; set; }
        public Nullable<bool> ExcludeStateReporting { get; set; }
        public Nullable<bool> Orientation { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<bool> EvolveSchool { get; set; }
        public Nullable<int> OrgTypePL { get; set; }
        public string LegacySchoolID { get; set; }
        public string LegacyDistrictID { get; set; }
        public Nullable<int> AddressID { get; set; }
        public string LoadSource { get; set; }
        public Nullable<int> STG_TableID { get; set; }
        public string LastReportingPeriodComment { get; set; }
        public string RecordseMail { get; set; }
    }
}
