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
    
    public partial class CTESetup
    {
        public int CTESetupId { get; set; }
        public int DistrictId { get; set; }
        public int SchoolId { get; set; }
        public string MinimumAttendancePercent { get; set; }
        public Nullable<int> SYForCTEFullYearPL { get; set; }
        public Nullable<int> SYForCTEMidYearPL { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}
