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

        }
    }
}