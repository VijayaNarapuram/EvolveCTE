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
    
    public partial class TestLocation
    {
        public int TestLocationID { get; set; }
        public Nullable<int> DistrictID { get; set; }
        public Nullable<int> AddressID { get; set; }
        public Nullable<int> TestingRoomID { get; set; }
        public Nullable<int> AssessmentTypePL { get; set; }
        public Nullable<int> AssessmentAreaCodePL { get; set; }
        public string LocationDescription { get; set; }
        public Nullable<System.DateTime> TestDate { get; set; }
        public Nullable<System.DateTime> TestTime { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> Modifiedby { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public int TestLocationId { get; set; }
        public int SchoolId { get; set; }
        public int AddressId { get; set; }
        public int RegionId { get; set; }
        public string LocationContact { get; set; }
        public string LocationContactPhone { get; set; }
        public string LocationContactEmail { get; set; }
        public Nullable<bool> IsFee { get; set; }
        public Nullable<decimal> FeeAmount { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public Nullable<int> IsActive { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
    }
}
