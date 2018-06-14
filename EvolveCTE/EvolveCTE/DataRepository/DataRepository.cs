using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using EvolveCTE.Models;

namespace EvolveCTE.DataRepository
{
    public class HomeRepository : IHomeRepository, IDisposable
    {
        // Creating object for Database entities
        private NGSISEntities objEntities = new NGSISEntities();

        ///Maintaining objEntities Object dispose value
        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    // objEntities.Dispose();
                }
            }
            this.disposed = true;
        }

        /// <summary>
        /// Dispose the object by calling GC
        /// </summary>       
        /// <returns></returns>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        #region LOGIN
        /// <summary>
        /// Created By Vijaya
        /// Created on 2018/06/13
        /// Validates the login credentials 
        /// </summary>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <param name="currentDate"></param>
        /// <returns></returns>
        public IList<uspCheckStudentCTELogin_Result> CheckStudentCTELogin(string UserName, string password, DateTime currentDate)
        {
            IList<uspCheckStudentCTELogin_Result> ResultItems = new List<uspCheckStudentCTELogin_Result>();
            foreach (uspCheckStudentCTELogin_Result ResultItem in objEntities.uspCheckStudentCTELogin(UserName, password, currentDate))
            {
                ResultItems.Add(ResultItem);

            }
            return ResultItems;
        }

        public IList<uspCheckStudentQualifiedForCTE_Result> CheckStudentQualifiedForCTE(int StudentId)
        {
            IList<uspCheckStudentQualifiedForCTE_Result> ResultItems = new List<uspCheckStudentQualifiedForCTE_Result>();
            foreach (uspCheckStudentQualifiedForCTE_Result ResultItem in objEntities.uspCheckStudentQualifiedForCTE(StudentId))
            {
                ResultItems.Add(ResultItem);

            }
            return ResultItems;
        }
        #endregion

        #region DASHBOARD
        public IList<uspSelectCTEProgramOptionsPL_Result> SelectCTEProgramOptionsPL()
        {
            IList<uspSelectCTEProgramOptionsPL_Result> ResultItems = new List<uspSelectCTEProgramOptionsPL_Result>();
            foreach (uspSelectCTEProgramOptionsPL_Result ResultItem in objEntities.uspSelectCTEProgramOptionsPL())
            {
                ResultItems.Add(ResultItem);
            }
            return ResultItems;
        }

        public IList<uspSelectStudentCTEProgramStatusPL_Result> SelectStudentCTEProgramStatusPL()
        {
            IList<uspSelectStudentCTEProgramStatusPL_Result> ResultItems = new List<uspSelectStudentCTEProgramStatusPL_Result>();
            foreach (uspSelectStudentCTEProgramStatusPL_Result ResultItem in objEntities.uspSelectStudentCTEProgramStatusPL())
            {
                ResultItems.Add(ResultItem);
            }
            return ResultItems;
        }

        public int InsertStudentCTESetupRequest(int StudentId, int CTEProgramOptionPL, int CTEStudentProgramStatusPL, int CreatedBy, DateTime CreatedDate)
        {
            int finalResult = 0;
            try
            {
                System.Data.Objects.ObjectResult<int?> requestId = objEntities.uspInsertStudentCTESetupRequest(StudentId,
                                                                                                                          CTEProgramOptionPL,
                                                                                                                          CTEStudentProgramStatusPL,
                                                                                                                          CreatedBy,
                                                                                                                          CreatedDate);

                var result = requestId.FirstOrDefault<int?>();
                if (result.HasValue)
                {
                    if (result > 0)
                    {
                        //on Success
                        finalResult = result.Value;
                    }
                }
                else
                {
                    // on failure 
                    finalResult = 0;
                }
                return finalResult;
            }
            catch (Exception ex)
            {
                finalResult = 0;
                throw ex;
            }
        }

        //public IList<uspCheckStudentQualifiedForCTE_Result> CheckStudentQualifiedForCTE(int StudentId)
        //{
        //    IList<uspCheckStudentQualifiedForCTE_Result> ItemsList = new List<uspCheckStudentQualifiedForCTE_Result>();
        //    foreach (uspCheckStudentQualifiedForCTE_Result Item in objEntities.uspCheckStudentQualifiedForCTE(StudentId))
        //    {
        //        ItemsList.Add(Item);
        //    }
        //    return ItemsList;
        //}
        #endregion
    }    

    public class LoginRepository : ILoginRepository, IDisposable
        {
            // Creating object for Database entities
            private NGSISEntities objEntities = new NGSISEntities();

            ///Maintaining objEntities Object dispose value
            private bool disposed = false;

            protected virtual void Dispose(bool disposing)
            {
                if (!this.disposed)
                {
                    if (disposing)
                    {
                        // objEntities.Dispose();
                    }
                }
                this.disposed = true;
            }

            /// <summary>
            /// Dispose the object by calling GC
            /// </summary>       
            /// <returns></returns>
            public void Dispose()
            {
                Dispose(true);
                GC.SuppressFinalize(this);
            }

            #region LOGIN
            /// <summary>
            /// Created By Vijaya
            /// Created on 2018/06/13
            /// Validates the login credentials 
            /// </summary>
            /// <param name="email"></param>
            /// <param name="password"></param>
            /// <param name="currentDate"></param>
            /// <returns></returns>
            public IList<uspCheckStudentCTELogin_Result> CheckStudentCTELogin(string UserName, string password, DateTime currentDate)
            {
                IList<uspCheckStudentCTELogin_Result> ResultItems = new List<uspCheckStudentCTELogin_Result>();
                foreach (uspCheckStudentCTELogin_Result ResultItem in objEntities.uspCheckStudentCTELogin(UserName, password, currentDate))
                {
                    ResultItems.Add(ResultItem);

                }
                return ResultItems;
            }

            public IList<uspCheckStudentQualifiedForCTE_Result> CheckStudentQualifiedForCTE(int StudentId)
            {
                IList<uspCheckStudentQualifiedForCTE_Result> ResultItems = new List<uspCheckStudentQualifiedForCTE_Result>();
                foreach (uspCheckStudentQualifiedForCTE_Result ResultItem in objEntities.uspCheckStudentQualifiedForCTE(StudentId))
                {
                    ResultItems.Add(ResultItem);

                }
                return ResultItems;
            }
            #endregion

            #region DASHBOARD
            public IList<uspSelectCTEProgramOptionsPL_Result> SelectCTEProgramOptionsPL()
            {
                IList<uspSelectCTEProgramOptionsPL_Result> ResultItems = new List<uspSelectCTEProgramOptionsPL_Result>();
                foreach (uspSelectCTEProgramOptionsPL_Result ResultItem in objEntities.uspSelectCTEProgramOptionsPL())
                {
                    ResultItems.Add(ResultItem);
                }
                return ResultItems;
            }

            public IList<uspSelectStudentCTEProgramStatusPL_Result> SelectStudentCTEProgramStatusPL()
            {
                IList<uspSelectStudentCTEProgramStatusPL_Result> ResultItems = new List<uspSelectStudentCTEProgramStatusPL_Result>();
                foreach (uspSelectStudentCTEProgramStatusPL_Result ResultItem in objEntities.uspSelectStudentCTEProgramStatusPL())
                {
                    ResultItems.Add(ResultItem);
                }
                return ResultItems;
            }

            public int InsertStudentCTESetupRequest(int StudentId, int CTEProgramOptionPL, int CTEStudentProgramStatusPL, int CreatedBy, DateTime CreatedDate)
            {
                int finalResult = 0;
                try
                {
                    System.Data.Objects.ObjectResult<int?> requestId = objEntities.uspInsertStudentCTESetupRequest(StudentId,
                                                                                                                              CTEProgramOptionPL,
                                                                                                                              CTEStudentProgramStatusPL,
                                                                                                                              CreatedBy,
                                                                                                                              CreatedDate);

                    var result = requestId.FirstOrDefault<int?>();
                    if (result.HasValue)
                    {
                        if (result > 0)
                        {
                            //on Success
                            finalResult = result.Value;
                        }
                    }
                    else
                    {
                        // on failure 
                        finalResult = 0;
                    }
                    return finalResult;
                }
                catch (Exception ex)
                {
                    finalResult = 0;
                    throw ex;
                }
            }

            //public IList<uspCheckStudentQualifiedForCTE_Result> CheckStudentQualifiedForCTE(int StudentId)
            //{
            //    IList<uspCheckStudentQualifiedForCTE_Result> ItemsList = new List<uspCheckStudentQualifiedForCTE_Result>();
            //    foreach (uspCheckStudentQualifiedForCTE_Result Item in objEntities.uspCheckStudentQualifiedForCTE(StudentId))
            //    {
            //        ItemsList.Add(Item);
            //    }
            //    return ItemsList;
            //}
            #endregion


        }    
}