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
    
    public partial class uspSelectSchoolGradeScales_Result
    {
        public int SchoolGradeScaleID { get; set; }
        public int SchoolID { get; set; }
        public string GradeScaleName { get; set; }
        public Nullable<bool> Default { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string LegacyDistrictID { get; set; }
        public Nullable<int> DistrictGradeScaleID { get; set; }
        public Nullable<bool> CanEditAtSchool { get; set; }
    }
}
