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
    
    public partial class StudentApplicationContact
    {
        public int StudentContactId { get; set; }
        public int StudentApplicationId { get; set; }
        public Nullable<int> ChildLivesWithPL { get; set; }
        public Nullable<int> PrimaryPhoneTypePL { get; set; }
        public Nullable<int> PrimaryAlternatePhoneTypePL { get; set; }
        public Nullable<int> PrimaryContactRelationshipWithStudentPL { get; set; }
        public string PrimaryContactFirstName { get; set; }
        public string PrimaryContactLastName { get; set; }
        public Nullable<bool> PrimaryIsContactLegalCustodianOfStudent { get; set; }
        public Nullable<bool> PrimaryAddressSameAsStudentAddress { get; set; }
        public string PrimaryStreetNumber { get; set; }
        public string PrimaryStreetName { get; set; }
        public string PrimaryCity { get; set; }
        public string PrimaryStatePL { get; set; }
        public string PrimaryCountryPL { get; set; }
        public string PrimaryCountyPL { get; set; }
        public string PrimaryNeighborhood { get; set; }
        public string PrimaryPostalCode { get; set; }
        public string PrimaryApartment { get; set; }
        public string PrimaryLot { get; set; }
        public string PrimaryOther { get; set; }
        public string PrimaryEmail { get; set; }
        public Nullable<bool> PrimaryPhoneSameAsStudentPhone { get; set; }
        public string PrimaryPhoneNumber { get; set; }
        public Nullable<bool> PrimaryPPrivate { get; set; }
        public string PrimaryAlternatePhoneNumber { get; set; }
        public Nullable<bool> PrimaryPALTPrivate { get; set; }
        public Nullable<int> PrimaryPriority { get; set; }
        public Nullable<int> SecondaryPhoneTypePL { get; set; }
        public Nullable<int> SecondaryAlternatePhoneTypePL { get; set; }
        public Nullable<int> SecondaryContactRelationshipWithStudentPL { get; set; }
        public string SecondaryContactFirstName { get; set; }
        public string SecondaryContactLastName { get; set; }
        public Nullable<bool> SecondaryIsContactLegalCustodianOfStudent { get; set; }
        public Nullable<bool> SecondaryAddressSameAsStudentAddress { get; set; }
        public string SecondaryStreetNumber { get; set; }
        public string SecondaryStreetName { get; set; }
        public string SecondaryCity { get; set; }
        public string SecondaryStatePL { get; set; }
        public string SecondaryCountryPL { get; set; }
        public string SecondaryCountyPL { get; set; }
        public string SecondaryNeighborhood { get; set; }
        public string SecondaryPostalCode { get; set; }
        public string SecondaryApartment { get; set; }
        public string SecondaryLot { get; set; }
        public string SecondaryOther { get; set; }
        public string SecondaryEmail { get; set; }
        public Nullable<bool> SecondaryPhoneSameAsStudentPhone { get; set; }
        public string SecondaryPhoneNumber { get; set; }
        public Nullable<bool> SecondaryPPrivate { get; set; }
        public string SecondaryAlternatePhoneNumber { get; set; }
        public Nullable<bool> SecondaryPALTPrivate { get; set; }
        public Nullable<int> SecondaryPriority { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBY { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<bool> PrimaryIsContactLegalGuardian { get; set; }
        public Nullable<int> PrimaryPrefixPL { get; set; }
        public string PrimaryMiddleName { get; set; }
        public Nullable<int> PrimarySuffixPL { get; set; }
        public string PrimaryExtension { get; set; }
        public Nullable<int> PrimaryTypeofEmailPL { get; set; }
        public Nullable<bool> SecondaryIsContactLegalGuardian { get; set; }
        public Nullable<int> SecondaryPrefixPL { get; set; }
        public string SecondaryMiddleName { get; set; }
        public Nullable<int> SecondarySuffixPL { get; set; }
        public string SecondaryExtension { get; set; }
        public Nullable<int> SecondaryTypeofEmailPL { get; set; }
        public string PrimaryAlternateExtension { get; set; }
        public string SecondaryAlternateExtension { get; set; }
    
        public virtual PickListDetails_Bak PickListDetails_Bak { get; set; }
    }
}
