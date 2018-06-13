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
    
    public partial class Attendance
    {
        public int AttendanceID { get; set; }
        public Nullable<int> CalendarID { get; set; }
        public Nullable<int> StudentID { get; set; }
        public Nullable<int> AttendanceRecordedBy { get; set; }
        public Nullable<short> AttendanceMarkingPeriodID { get; set; }
        public Nullable<short> Minutes { get; set; }
        public Nullable<System.DateTime> AttendanceDate { get; set; }
        public string AttendanceTitle { get; set; }
        public string AttendanceCode { get; set; }
        public string AttendanceComment { get; set; }
        public string AttendanceReason { get; set; }
        public string AttendedClass { get; set; }
        public string Block { get; set; }
        public Nullable<bool> isWeekday { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}
