using EvaluationPerformanceFormsAspCore.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EvaluationPerformanceFormsAspCore.Web.Repositories
{
    public interface IUserRepository
    {
        Task<List<User>> AllUsers();
    }
}
