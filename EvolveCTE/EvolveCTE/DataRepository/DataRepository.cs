using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EvolveCTE.Models;
using System.Data;
using System.Data.SqlClient;

namespace EvolveCTE.DataRepository
{
    public class DataRepository
    {
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
            #endregion


        }
    }
}