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
    
    public partial class StudentGradRequirement
    {
        public int StudentGradRequirementId { get; set; }
        public int StudentId { get; set; }
        public System.DateTime IEPDate { get; set; }
        public int IEPDateTypePL { get; set; }
        public int AssessmentTypePL { get; set; }
        public int AssessmentAreaPL { get; set; }
        public int ExemptionFlagPL { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}
