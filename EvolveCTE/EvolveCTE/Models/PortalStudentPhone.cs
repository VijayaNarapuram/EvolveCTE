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
    
    public partial class PortalStudentPhone
    {
        public int PortalStudentPhoneID { get; set; }
        public int StudentID { get; set; }
        public int CurrentPhoneID { get; set; }
        public int PhoneTypePL { get; set; }
        public string CountryCode { get; set; }
        public string PhoneNumber { get; set; }
        public Nullable<int> SubmittedBy { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<bool> Unlisted { get; set; }
        public Nullable<int> ReviewerId { get; set; }
        public Nullable<System.DateTime> ReviewedDate { get; set; }
        public Nullable<int> Approved { get; set; }
        public Nullable<int> RejectedReasonPL { get; set; }
        public Nullable<System.DateTime> CurrentPhoneEndDate { get; set; }
        public string EditOrRemovePhone { get; set; }
        public Nullable<int> IsActive { get; set; }
    }
}
