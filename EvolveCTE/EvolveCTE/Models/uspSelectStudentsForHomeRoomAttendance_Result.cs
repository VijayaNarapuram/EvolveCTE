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
    
    public partial class uspSelectStudentsForHomeRoomAttendance_Result
    {
        public Nullable<int> StudentDayAttendanceID { get; set; }
        public Nullable<int> StudentID { get; set; }
        public string StudentName { get; set; }
        public Nullable<int> AttendanceCodePL { get; set; }
        public Nullable<int> ReasonPL { get; set; }
        public string ReasonName { get; set; }
        public Nullable<System.DateTime> AttendanceDate { get; set; }
        public Nullable<bool> HasEventDate { get; set; }
        public Nullable<bool> HasAvailableDate { get; set; }
        public string TimeIn { get; set; }
        public string TimeOuts { get; set; }
        public string AttendanceCodeText { get; set; }
    }
}
