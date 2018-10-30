using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EvaluationPerformanceFormsAspCore.Web.Models;
using EvaluationPerformanceFormsAspCore.Web.Repositories;
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
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            var response = await _userFirst.AllUsers();
            return Json(response);
        }

        [HttpPost("[action]")]
        public async Task AddNewUser(User user)
        {
            await _userFirst.AddUser(user);
        }
        //[HttpGet("[action]")]
        //public async Task<ActionResult<User>> FirstUser()
        //{
        //    return await _userFirst.GetFirstUser();
        //}
        //[HttpGet]
        //public async Task<IEnumerable<User>> GetAllUsers()
        //{
        //    return await _userFirst.GetUsers();
        //}

        //public class User
        //{
        //    public string name { get; set; }
        //    public string title { get; set; }
        //    public int sap { get; set; }
        //    public string division { get; set; }
        //}
    }
}
