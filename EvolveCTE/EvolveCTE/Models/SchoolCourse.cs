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
    
    public partial class SchoolCourse
    {
        public SchoolCourse()
        {
            this.StudentCourseRequests = new HashSet<StudentCourseRequest>();
        }
    
        public int SchoolCourseID { get; set; }
        public Nullable<int> SchoolID { get; set; }
        public Nullable<int> DistrictCourseID { get; set; }
        public Nullable<int> SchoolYearID { get; set; }
        public Nullable<int> GradeScaleID { get; set; }
        public Nullable<int> DeliveryMethodsPL { get; set; }
        public Nullable<int> StateSubjectCode { get; set; }
        public Nullable<int> EducationOptionPL { get; set; }
        public Nullable<int> CurriculumTypePL { get; set; }
        public Nullable<int> LanguageUsedPL { get; set; }
        public Nullable<int> CreditFlexPL { get; set; }
        public Nullable<int> CTECollegeCreditPL { get; set; }
        public Nullable<int> Department { get; set; }
        public Nullable<int> CourseLevel { get; set; }
        public Nullable<int> COREAreaCode { get; set; }
        public Nullable<int> SemesterCode { get; set; }
        public Nullable<int> LengthOfScheduledInstruction { get; set; }
        public Nullable<int> SuggestedMinimumGradeLevel { get; set; }
        public Nullable<int> SubjectAreaForCredit { get; set; }
        public Nullable<short> DefaultMaximumEnrollment { get; set; }
        public Nullable<short> MaximumTimesForCredit { get; set; }
        public Nullable<int> StudentPopulation { get; set; }
        public Nullable<int> TermLengthPL { get; set; }
        public string CourseNumber { get; set; }
        public string CourseName { get; set; }
        public string LocationIRN { get; set; }
        public Nullable<decimal> CreditHours { get; set; }
        public Nullable<decimal> AddedGPAValue { get; set; }
        public Nullable<bool> IsAttendance { get; set; }
        public Nullable<bool> IsRequiresFinalGrade { get; set; }
        public Nullable<bool> IsHighSchoolCredit { get; set; }
        public Nullable<bool> IsGPA { get; set; }
        public Nullable<bool> IsClassRank { get; set; }
        public Nullable<bool> HonorRoll { get; set; }
        public Nullable<bool> IsPrintOnReportCard { get; set; }
        public Nullable<bool> IsPrintOnTranscript { get; set; }
        public Nullable<bool> IsPortal { get; set; }
        public Nullable<bool> IsHomeroomCourse { get; set; }
        public Nullable<bool> IsLunchCourse { get; set; }
        public Nullable<bool> IsStudyHallCourse { get; set; }
        public Nullable<bool> IsStateReporting { get; set; }
        public bool IsActive { get; set; }
        public Nullable<bool> IsRosterVerification { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<int> SubjectCodePL { get; set; }
        public string LegacySchoolID { get; set; }
        public string LegacySchoolCourseID { get; set; }
        public Nullable<int> SchoolYearPL { get; set; }
        public string SchoolCourseName { get; set; }
    
        public virtual DistrictCourse DistrictCourse { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak1 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak2 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak3 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak4 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak5 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak6 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak7 { get; set; }
        public virtual School School { get; set; }
        public virtual ICollection<StudentCourseRequest> StudentCourseRequests { get; set; }
    }
}
