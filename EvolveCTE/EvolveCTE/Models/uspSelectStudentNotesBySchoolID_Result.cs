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
    
    public partial class uspSelectStudentNotesBySchoolID_Result
    {
        public int StudentNoteID { get; set; }
        public Nullable<int> StaffID { get; set; }
        public Nullable<int> StudentID { get; set; }
        public Nullable<int> CategoryPL { get; set; }
        public Nullable<int> SubjectPL { get; set; }
        public Nullable<int> MethodPL { get; set; }
        public string Description { get; set; }
        public string FilePath { get; set; }
        public string DocumentExtension { get; set; }
        public string DocumentSize { get; set; }
        public string DocumentType { get; set; }
        public string DocumentName { get; set; }
        public byte[] DocumentData { get; set; }
        public Nullable<System.DateTime> OpenDate { get; set; }
        public Nullable<System.DateTime> ClosedDate { get; set; }
        public Nullable<System.DateTime> FollowUpDate { get; set; }
        public Nullable<bool> IsFollowUp { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string CategoryName { get; set; }
        public string SubjectName { get; set; }
        public string MethodName { get; set; }
        public string StudentName { get; set; }
        public string StaffName { get; set; }
    }
}
