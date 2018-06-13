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
    
    public partial class EMISReportPeriodLookup
    {
        public EMISReportPeriodLookup()
        {
            this.EMISReportPeriods = new HashSet<EMISReportPeriod>();
            this.EMISReports = new HashSet<EMISReport>();
        }
    
        public int ReportPeriodID { get; set; }
        public string ReportPeriodCode { get; set; }
        public string ReportPeriodName { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    
        public virtual ICollection<EMISReportPeriod> EMISReportPeriods { get; set; }
        public virtual ICollection<EMISReport> EMISReports { get; set; }
    }
}
