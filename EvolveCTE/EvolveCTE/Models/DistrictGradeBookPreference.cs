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
    
    public partial class DistrictGradeBookPreference
    {
        public int DistrictGradeBookPreferenceID { get; set; }
        public int DistrictID { get; set; }
        public int SchoolYearPL { get; set; }
        public string AssignmentCategoryPL { get; set; }
        public string GradeReasonTypePL { get; set; }
        public bool IsMissingScore { get; set; }
        public int RoundToDecimalPL { get; set; }
        public string DistrictCommentPL { get; set; }
        public bool IsSchoolCreateNewComments { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string AssignmentCategoryColorCode { get; set; }
    }
}
