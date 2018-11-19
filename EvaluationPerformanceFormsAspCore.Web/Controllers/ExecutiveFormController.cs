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
    public class ExecutiveFormController : Controller
    {
        private readonly IExecutiveFormRepository _executiveFormRepository;

        public ExecutiveFormController(IExecutiveFormRepository executiveFormRepository)
        {
            _executiveFormRepository = executiveFormRepository;
        }
        [HttpGet("[action]")]
        public async Task<ActionResult<List<ExecutiveForm>>> GetAllExecutiveForms()
        {
            var response = await _executiveFormRepository.AllExecutiveForms();
            return Json(response);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> SaveNewExecutiveForm([FromBody] ExecutiveForm executiveForm)
        {
            var response = await _executiveFormRepository.SaveExecutiveForm(executiveForm);
            return Json(response);
        }
    }
}