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
    
    public partial class TechnologySurvey
    {
        public int TechnologySurveyID { get; set; }
        public int StudentID { get; set; }
        public Nullable<bool> NeedPC { get; set; }
        public Nullable<bool> NeedPrinter { get; set; }
        public Nullable<bool> InternetServiceAtHome { get; set; }
        public string InternetServiceTypePL { get; set; }
        public string Survey1 { get; set; }
        public string Survey2 { get; set; }
        public string Survey3 { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}