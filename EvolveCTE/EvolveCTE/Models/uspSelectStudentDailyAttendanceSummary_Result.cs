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
    
    public partial class uspSelectStudentDailyAttendanceSummary_Result
    {
        public int StudentDayAttendanceId { get; set; }
        public int StudentID { get; set; }
        public Nullable<System.DateTime> AttendanceDate { get; set; }
        public int SchoolYearID { get; set; }
        public Nullable<int> AttendanceCodePL { get; set; }
        public string AttendanceCodeName { get; set; }
        public Nullable<int> ReasonPL { get; set; }
        public string ReasonName { get; set; }
        public Nullable<System.TimeSpan> TimeIn { get; set; }
        public Nullable<System.TimeSpan> TimeOuts { get; set; }
        public Nullable<int> IsAbsenceNoticeSubmitted { get; set; }
    }
}
