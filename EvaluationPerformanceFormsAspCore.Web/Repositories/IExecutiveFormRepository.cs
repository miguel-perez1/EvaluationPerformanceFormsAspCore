using EvaluationPerformanceFormsAspCore.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EvaluationPerformanceFormsAspCore.Web.Repositories
{
    public interface IExecutiveFormRepository
    {

        Task<ExecutiveForm> FindById(int searchId);
        Task<List<ExecutiveForm>> AllExecutiveForms();
        Task<int> SaveExecutiveForm(ExecutiveForm executiveForm);
    }
}
