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
    
    public partial class uspSelectEnrollments_Result
    {
        public int EnrollmentID { get; set; }
        public int StudentID { get; set; }
        public Nullable<System.DateTime> EnrollmentDate { get; set; }
        public string EnrollmentCode { get; set; }
        public string EnrollmentDescription { get; set; }
        public Nullable<int> AdmittedFromDistrict { get; set; }
        public Nullable<int> DistrictOfResidence { get; set; }
        public string DistrictResidenceIRN { get; set; }
        public Nullable<int> RelationshipTypeCode { get; set; }
        public string RelationshipType { get; set; }
        public Nullable<int> EnrolledSchoolID { get; set; }
        public string EnrolledSchool { get; set; }
    }
}
