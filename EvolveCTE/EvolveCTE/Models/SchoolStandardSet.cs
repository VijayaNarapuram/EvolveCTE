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
    
    public partial class SchoolStandardSet
    {
        public int StandardSetID { get; set; }
        public int SchoolID { get; set; }
        public string DisplayName { get; set; }
        public Nullable<short> Rank { get; set; }
        public Nullable<int> StandardSetType { get; set; }
        public Nullable<int> LocalStandardSetId { get; set; }
        public bool ShowStandardSet { get; set; }
        public int CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}
