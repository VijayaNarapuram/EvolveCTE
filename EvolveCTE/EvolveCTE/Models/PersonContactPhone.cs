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
    
    public partial class PersonContactPhone
    {
        public int PersonContactPhoneID { get; set; }
        public Nullable<int> StudentID { get; set; }
        public Nullable<int> PhoneTypePL { get; set; }
        public string PhoneNumber { get; set; }
        public string Extension { get; set; }
        public Nullable<bool> IsPrivate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<int> ContactType { get; set; }
    }
}
