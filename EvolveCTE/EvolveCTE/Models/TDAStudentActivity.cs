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
    
    public partial class TDAStudentActivity
    {
        public int StudentID { get; set; }
        public string ActivityType { get; set; }
        public string ActivityName { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public int Minutes { get; set; }
    }
}