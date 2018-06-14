using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using System.Collections;
using System.Collections.Specialized;

namespace EvolveCTE.Models
{
    #region Login Forgot ChangePWD Model

    /// <summary>
    /// Created by Ram Mohan     
    /// Fields are used for logging into the application
    /// </summary>    
    public class LoginModel
    {
        [Required(ErrorMessage = "User ID is required.")]
        [DataType(DataType.Text)]
        [Display(Name = "User ID")]
        //[RegularExpression(@"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}", ErrorMessage = "Please enter a valid Email Address.")]
        public string ID { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string PWD { get; set; }

        public Boolean RememberMe { get; set; }
    }

    #endregion
}