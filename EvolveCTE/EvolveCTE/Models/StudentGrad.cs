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
    
    public partial class StudentGrad
    {
        public int StudentGradID { get; set; }
        public int StudentID { get; set; }
        public Nullable<System.DateTime> C1stAdmissionToCurrentHSDate { get; set; }
        public Nullable<int> OGTGraduationAlternativePL { get; set; }
        public Nullable<int> COREEconFinLitPL { get; set; }
        public Nullable<int> COREFineArtPL { get; set; }
        public Nullable<int> ExemptFromPEPL { get; set; }
        public Nullable<int> GradRequirementPL { get; set; }
        public Nullable<System.DateTime> COREGradReqExDate { get; set; }
        public Nullable<int> COREGradReqMetPL { get; set; }
        public Nullable<int> MilitaryCompactGradPL { get; set; }
        public Nullable<System.DateTime> ExpectedGradDate { get; set; }
        public Nullable<int> ForExGradPlanPL { get; set; }
        public Nullable<int> CTEProgramPL { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
