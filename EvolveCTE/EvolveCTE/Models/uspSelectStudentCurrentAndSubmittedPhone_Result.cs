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
    
    public partial class uspSelectStudentCurrentAndSubmittedPhone_Result
    {
        public int CurrentPhoneId { get; set; }
        public string CurrentPhone { get; set; }
        public Nullable<int> CurrentPhoneTypePL { get; set; }
        public Nullable<bool> CurrentPhoneListed { get; set; }
        public int PortalStudentPhoneId { get; set; }
        public string PortalStudentPhoneNumber { get; set; }
        public int PortalStudentPhoneTypePL { get; set; }
        public Nullable<bool> PortalStudentPhoneListed { get; set; }
        public Nullable<int> RejectedReasonPL { get; set; }
        public string RequestStatus { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public Nullable<System.DateTime> CurrentPhoneEndDate { get; set; }
    }
}