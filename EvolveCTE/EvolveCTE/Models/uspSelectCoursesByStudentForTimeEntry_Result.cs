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
    
    public partial class uspSelectCoursesByStudentForTimeEntry_Result
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public Nullable<int> SchoolCourseId { get; set; }
        public string CourseName { get; set; }
        public string CourseNumber { get; set; }
        public Nullable<int> StaffID { get; set; }
        public System.DateTime CourseStartDate { get; set; }
        public Nullable<System.DateTime> CourseEndDate { get; set; }
    }
}
