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
    public class ProfileController : Controller
    {
        private readonly IProfileRepository _userProfile;

        public ProfileController(IProfileRepository userProfile)
        {
            _userProfile = userProfile;
        }

        [HttpGet("GetUserProfileDetails/{key}")]
        public async Task<ActionResult<User>> GetUserProfileDetails(string key)
        {
            var response = await _userProfile.GetUserProfile(key);
            return Json(response);
        }
    }
}