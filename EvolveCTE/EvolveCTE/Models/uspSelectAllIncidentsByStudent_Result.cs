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
    
    public partial class uspSelectAllIncidentsByStudent_Result
    {
        public int StudentDisciplineID { get; set; }
        public Nullable<int> IncidentID { get; set; }
        public Nullable<int> StudentID { get; set; }
        public Nullable<int> TypeOfDisciplinePL { get; set; }
        public Nullable<System.DateTime> IncidentDate { get; set; }
        public Nullable<int> DisciplineReason1PL { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<decimal> LengthOfDiscipline { get; set; }
        public string Offense { get; set; }
        public string Action { get; set; }
        public Nullable<int> SchoolID { get; set; }
        public string SchoolName { get; set; }
        public Nullable<int> IncidentSchoolID { get; set; }
        public string IncidentSchoolName { get; set; }
    }
}
