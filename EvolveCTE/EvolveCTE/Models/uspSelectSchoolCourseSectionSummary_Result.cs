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
    
    public partial class uspSelectSchoolCourseSectionSummary_Result
    {
        public int SchoolCourseID { get; set; }
        public int SchoolCourseSectionID { get; set; }
        public string CourseName { get; set; }
        public string CourseNumber { get; set; }
        public string SectionNumber { get; set; }
        public string StaffName { get; set; }
        public Nullable<int> MaxSeats { get; set; }
        public Nullable<int> AvailableSeats { get; set; }
    }
}
