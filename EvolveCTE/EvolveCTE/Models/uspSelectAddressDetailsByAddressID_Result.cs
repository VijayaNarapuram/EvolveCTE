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
    
    public partial class uspSelectAddressDetailsByAddressID_Result
    {
        public int AddressID { get; set; }
        public int AddressTypePL { get; set; }
        public string CountyPL { get; set; }
        public string StatePL { get; set; }
        public string CountryPL { get; set; }
        public string StreetNumber { get; set; }
        public string StreetName { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Apartment { get; set; }
        public string Lot { get; set; }
        public string Other { get; set; }
        public Nullable<bool> isActive { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string LookupValue { get; set; }
        public string LoadSource { get; set; }
        public string LegacySchoolID { get; set; }
        public string LegacyDistrictID { get; set; }
        public string LegacyStudentID { get; set; }
        public string LegacyContactID { get; set; }
        public string StudentStatus { get; set; }
        public Nullable<int> STG_TableID { get; set; }
    }
}
