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
    
    public partial class StudentAssessmentAccommodation
    {
        public int StudentAssessAccommodationsID { get; set; }
        public Nullable<int> StudentID { get; set; }
        public Nullable<int> AssessmentAreaAccommodationsID { get; set; }
        public Nullable<int> AccommodationPL { get; set; }
        public Nullable<System.DateTime> IEPDate { get; set; }
        public Nullable<bool> OnOff { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    
        public virtual AssessmentAreaAccommodation AssessmentAreaAccommodation { get; set; }
        public virtual PickListDetails_Bak PickListDetails_Bak { get; set; }
        public virtual Student Student { get; set; }
    }
}
