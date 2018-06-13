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
    
    public partial class SchoolCourseSection
    {
        public SchoolCourseSection()
        {
            this.SchoolCourseSectionStaffHistories = new HashSet<SchoolCourseSectionStaffHistory>();
            this.SectionPeriodMappings = new HashSet<SectionPeriodMapping>();
            this.SectionStaffMappings = new HashSet<SectionStaffMapping>();
            this.StudentAttendances = new HashSet<StudentAttendance>();
            this.StudentSchedules = new HashSet<StudentSchedule>();
        }
    
        public int SchoolCourseSectionID { get; set; }
        public int SchoolID { get; set; }
        public Nullable<int> SchoolTermID { get; set; }
        public Nullable<int> SchoolYearID { get; set; }
        public Nullable<int> SchoolDayID { get; set; }
        public Nullable<int> SchoolCourseID { get; set; }
        public Nullable<int> StaffRolePL { get; set; }
        public Nullable<int> GradeScaleID { get; set; }
        public Nullable<int> StudentPopulationPL { get; set; }
        public Nullable<int> DeliveryMethodPL { get; set; }
        public Nullable<int> CreditFlexPL { get; set; }
        public Nullable<int> EducationOptionPL { get; set; }
        public Nullable<int> CurriculumTypePL { get; set; }
        public Nullable<int> LanguageUsedPL { get; set; }
        public Nullable<int> CTECollegeCreditPL { get; set; }
        public Nullable<int> CourseLevelPL { get; set; }
        public Nullable<int> LengthOfInstruction { get; set; }
        public Nullable<int> DefaultMaximumEnrollment { get; set; }
        public Nullable<int> CurrentEnrollment { get; set; }
        public Nullable<int> AvailableSeats { get; set; }
        public Nullable<int> StateSubjectCodePL { get; set; }
        public Nullable<int> SubjectAreaForCreditPL { get; set; }
        public Nullable<int> MaximunSeats { get; set; }
        public string RoomID { get; set; }
        public string SectionNumber { get; set; }
        public string LocationIRN { get; set; }
        public Nullable<decimal> GPAAddedValue { get; set; }
        public Nullable<decimal> DualEnrollment { get; set; }
        public Nullable<decimal> Credithours { get; set; }
        public Nullable<System.DateTime> SectionStartDate { get; set; }
        public Nullable<System.DateTime> SectionEndDate { get; set; }
        public Nullable<bool> Status { get; set; }
        public Nullable<bool> IsPrintonReportCard { get; set; }
        public Nullable<bool> IsAttendance { get; set; }
        public Nullable<bool> IsRequiredFinalGrade { get; set; }
        public Nullable<bool> IsHIghSchoolCredit { get; set; }
        public Nullable<bool> IsGPA { get; set; }
        public Nullable<bool> IsClassRank { get; set; }
        public Nullable<bool> IsHonorRoll { get; set; }
        public Nullable<bool> IsPrintOnTranscript { get; set; }
        public Nullable<bool> IsPortal { get; set; }
        public Nullable<bool> IsHomeRoomCourse { get; set; }
        public Nullable<bool> IsLunchCourse { get; set; }
        public Nullable<bool> IsStudyHallCourse { get; set; }
        public Nullable<bool> IsRosterVerification { get; set; }
        public Nullable<bool> IsStateReporting { get; set; }
        public Nullable<bool> Open { get; set; }
        public Nullable<bool> isActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string LegacySchoolID { get; set; }
        public string LegacyCourseSectionID { get; set; }
        public string LegacyCourseID { get; set; }
        public string LegacyGradeScaleID { get; set; }
        public Nullable<int> SchoolTermPL { get; set; }
        public Nullable<int> CoreAreaCodePL { get; set; }
    
        public virtual PickListDetails_Bak PickListDetails_Bak { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak1 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak2 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak3 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak4 { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak5 { get; set; }
        public virtual School School { get; set; }
        public virtual SchoolDay SchoolDay { get; set; }
        public virtual SchoolTerm SchoolTerm { get; set; }
        public virtual ICollection<SchoolCourseSectionStaffHistory> SchoolCourseSectionStaffHistories { get; set; }
        public virtual ICollection<SectionPeriodMapping> SectionPeriodMappings { get; set; }
        public virtual ICollection<SectionStaffMapping> SectionStaffMappings { get; set; }
        public virtual ICollection<StudentAttendance> StudentAttendances { get; set; }
        public virtual ICollection<StudentSchedule> StudentSchedules { get; set; }
    }
}
