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
    
    public partial class uspSelectStudentTimesForApprovalByStudentId_Result
    {
        public Nullable<int> StudentTimeId { get; set; }
        public Nullable<int> StudentID { get; set; }
        public string StudentName { get; set; }
        public string CourseNumber { get; set; }
        public string CourseName { get; set; }
        public Nullable<int> ActivityPL { get; set; }
        public string Activity { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.TimeSpan> StartTime { get; set; }
        public Nullable<System.TimeSpan> EndTime { get; set; }
        public string TotalTime { get; set; }
        public Nullable<int> StatusPL { get; set; }
        public string Status { get; set; }
        public Nullable<int> RejectionReasoPL { get; set; }
        public string RejectionReason { get; set; }
        public System.DateTime CourseStartDate { get; set; }
        public string CourseEndDate { get; set; }
    }
}
