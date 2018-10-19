using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Infrastructure.Data.Models;
using Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace EvaluationPerformanceFormsAspCore.Web.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly IUserRepository _userFirst;

        public SampleDataController(IUserRepository userFirst)
        {
            _userFirst = userFirst;
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<User>> FirstUser()
        {
            return await _userFirst.GetFirstUser();
        }

        //public class User
        //{
        //    public string name { get; set; }
        //    public string title { get; set; }
        //    public int sap { get; set; }
        //    public string division { get; set; }
        //}
    }
}
