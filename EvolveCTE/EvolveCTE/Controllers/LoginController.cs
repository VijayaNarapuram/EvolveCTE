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
        private ILoginRepository _LoginRepository;

        //public LoginController()
        //{

        //}
        //Dependency Injection constructor method
        public LoginController(ILoginRepository _repo)
        {
            _LoginRepository = _repo;
        }

        //CommonFunctions.CommonFunctions objCommonFns = new CommonFunctions.CommonFunctions();  

        public ActionResult Index()
        {
            LoginModel model = new LoginModel();
            HttpCookie cookieUserInfo;
            cookieUserInfo = (HttpCookie)Request.Cookies["UserInfo"];
            if (cookieUserInfo != null)
            {
                string strUserName, strPassword;
                strUserName = cookieUserInfo.Values["UserName"].ToString();
                strPassword = cookieUserInfo.Values["Password"].ToString();
                model.ID = strUserName;
                model.PWD = strPassword;
                model.RememberMe = true;
            }
            else
            {
                Session["LoggedIn"] = false;
                Session["UserId"] = "";
                //  return View();
                model.ID = "";
                model.PWD = "";
                model.RememberMe = false;
            }
            return View(model);
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult CTEOption()
        {
            return View();
        }

        /// <summary>
        /// Created By:Vijaya
        /// Creaated on: 2018/06/13
        /// To Check Login Credentials
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CheckStudentCTELogin(LoginModel model)
        {
            ActionResult response = null;
            string strUnencryptedPWD = string.Empty;

            try
            {
                // TODO: Add insert logic here
                if (ModelState.IsValid)
                {
                    //save strUnencryptedPWD to save in cookie
                    strUnencryptedPWD = model.PWD;

                    DateTime currentDate = DateTime.Now;
                    IList<uspCheckStudentCTELogin_Result> LoginUserEntity = _LoginRepository.CheckStudentCTELogin(model.ID, model.PWD, currentDate);
                    if (LoginUserEntity.Count > 0)
                    {
                        Session["StartTime"] = DateTime.Now; /* get the current time here */

                        foreach (var item in LoginUserEntity)
                        {
                            if (item.StudentId > 0 || item.Name != string.Empty)
                            {
                                Session["LoggedIn"] = true;
                                Session["StudentId"] = item.StudentId;
                                Session["SchoolId"] = item.SchoolID;
                                Session["username"] = model.ID; //added newly for changepwd
                                Session["Grade"] = item.GradePL;

                                //Creating a COOKIE for user...
                                FormsAuthentication.SetAuthCookie("ESP", false);

                                if (model.RememberMe == true)
                                {
                                    HttpCookie cookieUserInfo = new HttpCookie("UserInfo");
                                    cookieUserInfo.Values["UserName"] = model.ID;
                                    cookieUserInfo.Values["Password"] = model.PWD;
                                    cookieUserInfo.Expires = DateTime.Now.AddDays(14); // two weeks 
                                    Response.Cookies.Add(cookieUserInfo);
                                }
                                else
                                {
                                    if (Request.Cookies["UserInfo"] != null)
                                    {
                                        HttpCookie myCookie = new HttpCookie("UserInfo");
                                        myCookie.Expires = DateTime.Now.AddDays(-1d);
                                        Response.Cookies.Add(myCookie);
                                    }
                                }
                                // return RedirectToAction("Index", "Admin");
                                response = Json(new
                                {
                                    result = "Success",
                                    schoolId = item.SchoolID,
                                    schoolYearPL = item.SchoolYearPL,
                                    studentId = item.StudentId,
                                    studentName = item.Name,
                                    SchoolName = item.SchoolName,
                                    Grade = item.GradePL,
                                    url = Url.Action("CTEOption", "Login")
                                });
                            }
                            else
                            {
                                Session["LoggedIn"] = false;
                                response = Json(new { result = "InvalidLogin", url = Url.Action("Login", "Login") });
                            }
                        }
                    }
                    else
                    {
                        Session["LoggedIn"] = false;
                        response = Json(new { result = "InvalidLogin", url = Url.Action("Login", "Login") });
                    }
                }
            }
            catch (Exception ex)
            {
                ViewBag.MSG = ex.Message.ToString();
                return View(ViewBag.MSG);
            }

            return response;
        }

        /// <summary>
        /// CreatedBy: Vijaya
        /// Created Date: 13-12-2014 
        /// TO GET COREAREACODES FROM PICKLIST...
        /// </summary>
        //private void SelectCTEProgramOptionsPL()
        //{
        //    var StudentCTEProgramStatusInfo = _LoginRepository.SelectCTEProgramOptionsPL();

        //    List<SelectListItem> StudentCTEProgramStatusInfoList = new List<SelectListItem>();
        //    foreach (var item in StudentCTEProgramStatusInfo)
        //    {
        //        StudentCTEProgramStatusInfoList.Add(new SelectListItem()
        //        {
        //            Text = item.ValueDescription,
        //            Value = item.PickListDetailsID.ToString(),
        //            Selected = (item.DefaultValue == "Yes" ? true : false)
        //        });
        //    }
        //}
        [AcceptVerbs(HttpVerbs.Get)]
        public JsonResult SelectCTEProgramOptionsPL()
        {
            JsonResult result = null;
            try
            {
                var dt1 = _LoginRepository.SelectCTEProgramOptionsPL();
                var CoursesList = (from dr in dt1.AsEnumerable()
                                   select new SelectListItem
                                   {
                                       // Selected = bselected,
                                       Text = dr.ValueDescription,
                                       Value = dr.PickListDetailsID.ToString()
                                   }).ToList();              

                result = Json(CoursesList, JsonRequestBehavior.AllowGet);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// CreatedBy: Vijaya
        /// Created Date: 2018/06/12
        /// To Insert School's CTE Setup Details...
        /// </summary>
        /// <param name="model"></param>                
        /// <returns></returns>
        [HttpPost]
        public ActionResult InsertStudentCTESetupRequest(int StudentId, int CTEProgramOptionPL, int CreatedBy)
        {
            ActionResult response = null;
            try
            {
                int intResult = 0;
                DateTime CreatedDate = DateTime.Now;                

                intResult = _LoginRepository.InsertStudentCTESetupRequest(StudentId, CTEProgramOptionPL, 46990, CreatedBy, CreatedDate);

                if (intResult == 1) //inserted successfully
                {
                    //response = Json(new { result = "Inserted successfully", url = Url.Action("AttendancePatterns", "Admin") });
                    response = Json(new { result = "Inserted successfully", JsonRequestBehavior.AllowGet });
                }
                else if (intResult == 2) //Updated Successfully
                {
                    // stay on the same form to and render the message as cannot insert duplicate record
                    response = Json(new { result = "Updated successfully" }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return response;
        }

        [HttpPost]
        public ActionResult CheckStudentQualifiedForCTE(int StudentId)
        {
            ActionResult response = null;
            IList<uspCheckStudentQualifiedForCTE_Result> ResultList = _LoginRepository.CheckStudentQualifiedForCTE(StudentId);

            string strStatus = string.Empty;

            if (ResultList.Count > 0)
            {
                strStatus = (Convert.ToString(ResultList[0].Status));

                response = Json(new
                {
                    result = "Found",
                    strStatus = strStatus
                });
            }
            else
            {
                response = Json(new
                {
                    result = "NotFound",
                    strStatus = strStatus
                });
            }
            return response;
        }

        //Killing cookie when user logout...
        public ActionResult Logout()
        {
            try
            {
                if (User.Identity.IsAuthenticated)
                {
                    // if you need to validate any user as authenticated you can use this instead of [Authorize] 
                }
                FormsAuthentication.SignOut();
                HttpCookie c = Request.Cookies[FormsAuthentication.FormsCookieName];
                c.Expires = DateTime.Now.AddDays(-1);
                // Update the amended cookie! so that it will be reflected at the Client end
                Response.Cookies.Set(c);
            }
            catch (Exception ex)
            {
                throw ex;
            }

            //Displaying Login Page for Login
            return RedirectToAction("Login", "Login");
        }
    }
}
