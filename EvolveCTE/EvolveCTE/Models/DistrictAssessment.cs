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
    
    public partial class DistrictAssessment
    {
        public int DistrictAssessmentID { get; set; }
        public string AssessmentName { get; set; }
        public Nullable<int> DistrictID { get; set; }
        public Nullable<int> GradeLevelAssessed { get; set; }
        public Nullable<int> LocalAssessmentNumber { get; set; }
        public Nullable<short> NumberTested { get; set; }
        public Nullable<short> NumberWithDisability { get; set; }
        public Nullable<short> NumberOfTestsAdministered { get; set; }
        public Nullable<short> NumberOfAlternativeAssessmentsOffered { get; set; }
        public Nullable<bool> WereAlternateAssessmentsOffered { get; set; }
        public Nullable<bool> WereAdministered { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<int> SchoolYearPL { get; set; }
    
        public virtual District District { get; set; }
    }
}
