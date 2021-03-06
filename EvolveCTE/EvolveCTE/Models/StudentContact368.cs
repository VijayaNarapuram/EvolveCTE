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
    
    public partial class StudentContact368
    {
        public int StudentContactId { get; set; }
        public Nullable<int> AddressId { get; set; }
        public int StudentID { get; set; }
        public Nullable<int> ChildLivesWithPL { get; set; }
        public Nullable<int> PhoneTypePL { get; set; }
        public Nullable<int> AlternatePhoneTypePL { get; set; }
        public Nullable<int> ContactRelationshipWithStudentPL { get; set; }
        public string ContactFirstName { get; set; }
        public string ContactLastName { get; set; }
        public Nullable<bool> IsContactLegalCustodianOfStudent { get; set; }
        public Nullable<bool> AddressSameAsStudentAddress { get; set; }
        public string Email { get; set; }
        public Nullable<bool> PhoneSameAsStudentPhone { get; set; }
        public string PhoneNumber { get; set; }
        public Nullable<bool> PPrivate { get; set; }
        public string AlternatePhoneNumber { get; set; }
        public Nullable<bool> PALTPrivate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> Priority { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBY { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string LegacyContactID { get; set; }
        public Nullable<bool> LegalGuardian { get; set; }
        public string Extension { get; set; }
        public string AltExtension { get; set; }
        public Nullable<int> EmailTypePL { get; set; }
        public Nullable<int> PersonID { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<int> ContactType { get; set; }
    }
}
