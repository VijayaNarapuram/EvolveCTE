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
    
    public partial class uspSelectSchoolAttendancePatternEventsForPortal_Result
    {
        public int SchoolAttendancePatternEventID { get; set; }
        public string PatternDescription { get; set; }
        public int CalendarEventPL { get; set; }
        public string Event { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public decimal Hours { get; set; }
        public Nullable<int> EventDays { get; set; }
        public Nullable<long> GradeLevelCount { get; set; }
        public string ScheduledGradeLevels { get; set; }
        public Nullable<bool> IsStudentDays { get; set; }
    }
}
