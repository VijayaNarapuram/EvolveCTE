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
    
    public partial class uspSelectDistrictAttendancePatternsForExceptions_Result
    {
        public int DistrictAttendancePatternId { get; set; }
        public string PatternName { get; set; }
        public Nullable<System.DateTime> PatternsStartDate { get; set; }
        public Nullable<System.DateTime> PatternsEndDate { get; set; }
        public Nullable<System.TimeSpan> FromTime { get; set; }
        public Nullable<System.TimeSpan> ToTime { get; set; }
        public Nullable<int> AttendancePatternsExceptionReasonPL { get; set; }
        public string Schools { get; set; }
        public string GradeLevels { get; set; }
    }
}