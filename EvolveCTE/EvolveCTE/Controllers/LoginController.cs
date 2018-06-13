using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EvolveCTE.Models;
using EvolveCTE.DataRepository;
using System.Web.Script.Serialization;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Configuration;
using System.Web.Security;

namespace EvolveCTE.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }
    }
}
