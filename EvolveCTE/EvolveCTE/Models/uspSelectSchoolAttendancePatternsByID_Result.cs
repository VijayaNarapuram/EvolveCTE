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
    
    public partial class uspSelectSchoolAttendancePatternsByID_Result
    {
        public int SchoolAttendancePatternId { get; set; }
        public string PatternName { get; set; }
        public string PatternDescription { get; set; }
        public string ScheduledDays { get; set; }
        public string ScheduledGradeLevels { get; set; }
        public Nullable<decimal> HoursPerDay { get; set; }
        public Nullable<System.DateTime> PatternsStartDate { get; set; }
        public Nullable<System.DateTime> PatternsEndDate { get; set; }
        public Nullable<decimal> TotalHours { get; set; }
        public Nullable<decimal> TotalDays { get; set; }
    }
}
