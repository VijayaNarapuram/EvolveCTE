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
    
    public partial class ClassStudent
    {
        public int ClassStudentID { get; set; }
        public int StudentID { get; set; }
        public Nullable<int> GradeScaleID { get; set; }
        public int SchoolCourseSectionID { get; set; }
        public Nullable<short> SortOrder { get; set; }
        public Nullable<System.DateTime> LastUpdateDate { get; set; }
        public bool IsActive { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}
