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
    
    public partial class uspSelectPortalSetupByDistrictId_Result
    {
        public int DistrictPortalID { get; set; }
        public int DistrictID { get; set; }
        public int PortalPL { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> CanSchoolsUpdate { get; set; }
        public Nullable<bool> CanParentUpdate { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string ValueDescription { get; set; }
        public Nullable<int> PickListDetailsID { get; set; }
    }
}