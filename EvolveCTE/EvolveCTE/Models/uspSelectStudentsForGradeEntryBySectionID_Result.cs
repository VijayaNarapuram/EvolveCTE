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
    
    public partial class uspSelectStudentsForGradeEntryBySectionID_Result
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public Nullable<int> FinalGradePercentage { get; set; }
        public string FinalGradeAlpha { get; set; }
        public Nullable<decimal> CreditAttempted { get; set; }
        public Nullable<decimal> CreditEarned { get; set; }
        public int StudentGradeID { get; set; }
        public string CourseComments { get; set; }
        public Nullable<int> CoreAreaCode { get; set; }
        public Nullable<bool> IsHighSchoolCredit { get; set; }
        public Nullable<bool> IsGPA { get; set; }
        public Nullable<bool> IsClassRank { get; set; }
        public Nullable<bool> IsHonorRoll { get; set; }
        public Nullable<bool> IsPrintOnTranscript { get; set; }
        public Nullable<bool> IsPrintOnReportCard { get; set; }
        public int Year { get; set; }
        public string YearName { get; set; }
        public int SchoolCourseSectionID { get; set; }
        public string SectionNumber { get; set; }
        public Nullable<System.DateTime> CourseEndDate { get; set; }
        public Nullable<int> SubjectAreaForCredit { get; set; }
        public string Term { get; set; }
        public Nullable<int> IsStudentHasGradReqId { get; set; }
        public Nullable<int> GradeLevel { get; set; }
        public string SchoolYearEnd { get; set; }
        public Nullable<int> GradReqDetailId { get; set; }
    }
}