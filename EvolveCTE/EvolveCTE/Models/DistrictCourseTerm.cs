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
    
    public partial class DistrictCourseTerm
    {
        public int DistrictCourseTermID { get; set; }
        public int DistrictID { get; set; }
        public int CourseTermLengthPL { get; set; }
        public Nullable<System.DateTime> CourseTermStartDate { get; set; }
        public Nullable<System.DateTime> CourseTermEndDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<int> SchoolYearPL { get; set; }
    }
}
