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
    
    public partial class StudentDayAttendance_03022016
    {
        public int StudentDayAttendanceID { get; set; }
        public int StudentID { get; set; }
        public int SchoolYearID { get; set; }
        public Nullable<int> AttendanceCodePL { get; set; }
        public Nullable<int> ReasonPL { get; set; }
        public Nullable<int> AttendanceTakenBy { get; set; }
        public Nullable<System.DateTime> AttendanceDate { get; set; }
        public bool IsActive { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string LegacyStudentID { get; set; }
        public string AttendanceCreatedBy { get; set; }
        public Nullable<int> STG_StudentDayAttendance_ID { get; set; }
    
        public virtual PickListDetails_Bak PickListDetails_Bak { get; set; }
    }
}
