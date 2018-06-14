using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EvolveCTE.Models;

namespace EvolveCTE.DataRepository
{
    public interface IHomeRepository
    {
        IList<uspSelectCTEProgramOptionsPL_Result> SelectCTEProgramOptionsPL();
        IList<uspSelectStudentCTEProgramStatusPL_Result> SelectStudentCTEProgramStatusPL();
        IList<uspCheckStudentCTELogin_Result> CheckStudentCTELogin(string UserName, string Pwd, DateTime currentDate);

        IList<uspCheckStudentQualifiedForCTE_Result> CheckStudentQualifiedForCTE(int StudentId);
        int InsertStudentCTESetupRequest(int StudentId, int CTEProgramOptionPL, int CTEStudentProgramStatusPL, int CreatedBy, DateTime CreatedDate);
    }

    public interface ILoginRepository
    {
        IList<uspSelectCTEProgramOptionsPL_Result> SelectCTEProgramOptionsPL();
        IList<uspSelectStudentCTEProgramStatusPL_Result> SelectStudentCTEProgramStatusPL();
        IList<uspCheckStudentCTELogin_Result> CheckStudentCTELogin(string UserName, string Pwd, DateTime currentDate);

        IList<uspCheckStudentQualifiedForCTE_Result> CheckStudentQualifiedForCTE(int StudentId);
        int InsertStudentCTESetupRequest(int StudentId, int CTEProgramOptionPL, int CTEStudentProgramStatusPL, int CreatedBy, DateTime CreatedDate);

      }
}