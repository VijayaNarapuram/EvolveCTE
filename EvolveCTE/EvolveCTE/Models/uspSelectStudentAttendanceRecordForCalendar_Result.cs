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
    
    public partial class uspSelectStudentAttendanceRecordForCalendar_Result
    {
        public int StudentDayAttendanceID { get; set; }
        public Nullable<int> StudentID { get; set; }
        public int SchoolYearID { get; set; }
        public int AttendanceCodePL { get; set; }
        public int ReasonPL { get; set; }
        public Nullable<System.TimeSpan> TimeIn { get; set; }
        public Nullable<System.TimeSpan> TimeOuts { get; set; }
        public Nullable<int> IsAbsenceNoticeSubmitted { get; set; }
    }
}
