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
    
    public partial class DistrictCalendarEndSetup
    {
        public int DistrictCalendarEndSetupID { get; set; }
        public Nullable<int> DIstrictID { get; set; }
        public Nullable<int> SchoolYearPL { get; set; }
        public Nullable<bool> Courses { get; set; }
        public Nullable<bool> Students { get; set; }
        public Nullable<bool> Retention { get; set; }
        public Nullable<bool> Fees { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}
