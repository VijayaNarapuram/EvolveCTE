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
    
    public partial class uspSelectStudentTimeSummary_Result
    {
        public int StudentTimeId { get; set; }
        public Nullable<int> StudentID { get; set; }
        public Nullable<int> SchoolCourseID { get; set; }
        public Nullable<int> StatusPL { get; set; }
        public Nullable<int> RejectionReasonPL { get; set; }
        public Nullable<int> Activity { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.TimeSpan> StartTime { get; set; }
        public Nullable<System.TimeSpan> EndTime { get; set; }
        public string TotalTime { get; set; }
        public string Status { get; set; }
        public string RejectionReason { get; set; }
    }
}