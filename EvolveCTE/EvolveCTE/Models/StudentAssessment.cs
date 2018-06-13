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
    using System.Collections.Generic;
    
    public partial class StudentAssessment
    {
        public int StudentAssessmentID { get; set; }
        public int StudentID { get; set; }
        public int AssessmentPL { get; set; }
        public int AssessmentAreaPL { get; set; }
        public int DistrictID { get; set; }
        public int SchoolID { get; set; }
        public System.DateTime AssessmentDate { get; set; }
        public string Score { get; set; }
        public Nullable<int> RequiredTestTypePL { get; set; }
        public Nullable<int> TypeOfAccommodationPL { get; set; }
        public Nullable<int> ScoreNotReportedPL { get; set; }
        public Nullable<int> TestGradeLevelPL { get; set; }
        public Nullable<int> StudentGradeLevelPL { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<int> DiagnosticsResultPL { get; set; }
        public Nullable<int> ValidScoreTypePL { get; set; }
        public Nullable<int> GradPerformance { get; set; }
    
        public virtual District District { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak1 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak2 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak3 { get; set; }
        public virtual School School { get; set; }
        public virtual Student Student { get; set; }
    }
}