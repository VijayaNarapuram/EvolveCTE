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
    
    public partial class uspSelectStudentsForPeriodAttendance_Result
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public Nullable<int> AttendanceCodePL { get; set; }
        public Nullable<int> ReasonPL { get; set; }
        public int SectionID { get; set; }
        public Nullable<System.DateTime> AttendanceDate { get; set; }
    }
}
