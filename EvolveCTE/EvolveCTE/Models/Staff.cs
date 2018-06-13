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
    
    public partial class Staff
    {
        public Staff()
        {
            this.DistrictAreas = new HashSet<DistrictArea>();
            this.OrientationSchedules = new HashSet<OrientationSchedule>();
            this.SectionStaffMappings = new HashSet<SectionStaffMapping>();
            this.StudentInterventionStaffs = new HashSet<StudentInterventionStaff>();
            this.StudentOrientationSchedules = new HashSet<StudentOrientationSchedule>();
            this.StudentOrientationSchedules1 = new HashSet<StudentOrientationSchedule>();
            this.StudentPrograms = new HashSet<StudentProgram>();
        }
    
        public int StaffID { get; set; }
        public Nullable<int> PersonID { get; set; }
        public Nullable<int> StaffTypePL { get; set; }
        public Nullable<int> StaffFlag { get; set; }
        public string LicenseNumber { get; set; }
        public Nullable<bool> Status { get; set; }
        public string StaffMedicalAlert { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string LegacyStaffID { get; set; }
        public string TypeOfUser { get; set; }
        public Nullable<int> SchoolID { get; set; }
        public string AssociatedSchool { get; set; }
        public string LegacySchoolID { get; set; }
        public string LegacyDistrictID { get; set; }
        public string BuildingAssignmentID { get; set; }
        public string DefaultSchoolID { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<bool> Teacher { get; set; }
        public Nullable<bool> HomeRoomAdvisor { get; set; }
        public Nullable<bool> Counselor { get; set; }
        public Nullable<bool> ManagesAttendance { get; set; }
        public Nullable<bool> StateReporting { get; set; }
        public Nullable<bool> ActiveStatus { get; set; }
    
        public virtual ICollection<DistrictArea> DistrictAreas { get; set; }
        public virtual ICollection<OrientationSchedule> OrientationSchedules { get; set; }
        public virtual Person Person { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak { get; set; }
        public virtual School School { get; set; }
        public virtual ICollection<SectionStaffMapping> SectionStaffMappings { get; set; }
        public virtual ICollection<StudentInterventionStaff> StudentInterventionStaffs { get; set; }
        public virtual ICollection<StudentOrientationSchedule> StudentOrientationSchedules { get; set; }
        public virtual ICollection<StudentOrientationSchedule> StudentOrientationSchedules1 { get; set; }
        public virtual ICollection<StudentProgram> StudentPrograms { get; set; }
    }
}
