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
    
    public partial class GPADefinition
    {
        public int GPADefinitionID { get; set; }
        public int SchoolID { get; set; }
        public Nullable<short> ExcludedGroups { get; set; }
        public string MethodName { get; set; }
        public string MethodType { get; set; }
        public string Description { get; set; }
        public string Formula { get; set; }
        public string CalculationType { get; set; }
        public string GradeScale { get; set; }
        public Nullable<System.DateTime> GradeStatusDate { get; set; }
        public Nullable<bool> ExcludeCourses { get; set; }
        public Nullable<bool> Override { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}
