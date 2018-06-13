using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EvolveCTE.Models;

namespace EvolveCTE.DataRepository
{
    public class IDataRepository
    {
       
    }

    public interface ILoginRepository
    {
        IList<uspSelectCTEProgramOptionsPL_Result> SelectCTEProgramOptionsPL();
        IList<uspSelectStudentCTEProgramStatusPL_Result> SelectStudentCTEProgramStatusPL();
        //IList<uspCheckStudentQualifiedForCTE> uspCheckStudentCTELogin();
    }
}