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
    
    public partial class DistrictAttendancePatternEvent
    {
        public int DistrictAttendancePatternEventID { get; set; }
        public int CalendarEventPL { get; set; }
        public int DistrictAttendancePatternID { get; set; }
        public decimal Hours { get; set; }
        public string ScheduledGradeLevels { get; set; }
        public string PatternDescription { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    
        public virtual DistrictAttendancePattern DistrictAttendancePattern { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak { get; set; }
    }
}