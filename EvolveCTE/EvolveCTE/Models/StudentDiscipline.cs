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
    
    public partial class StudentDiscipline
    {
        public int StudentDisciplineID { get; set; }
        public Nullable<int> IncidentID { get; set; }
        public Nullable<int> StudentID { get; set; }
        public Nullable<int> TypeOfDisciplinePL { get; set; }
        public Nullable<int> DisciplineReason1PL { get; set; }
        public Nullable<int> DisciplineReason2PL { get; set; }
        public Nullable<int> DisciplineReason3PL { get; set; }
        public Nullable<int> DisciplineReason4PL { get; set; }
        public Nullable<int> DisciplineReason5PL { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<decimal> LengthOfDiscipline { get; set; }
        public Nullable<int> ReferToAltEd { get; set; }
        public Nullable<int> IsDisciplineModifiedPL { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string IncidentDescription { get; set; }
    }
}
