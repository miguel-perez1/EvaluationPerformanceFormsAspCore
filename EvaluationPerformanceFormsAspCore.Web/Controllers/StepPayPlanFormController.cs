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
    public class StepPayPlanController : Controller
    {
        private readonly IStepPayPlanFormRepository _stepPayPlanFormRepository;

        public StepPayPlanController(IStepPayPlanFormRepository stepPayPlanFormRepository)
        {
            _stepPayPlanFormRepository = stepPayPlanFormRepository;
        }
        [HttpGet("[action]")]
        public async Task<ActionResult<List<StepPayPlanForm>>> GetAllStepPayPlanForms()
        {
            var response = await _stepPayPlanFormRepository.AllStepPayPlanForms();
            return Json(response);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> SaveNewStepPayPlanForm([FromBody] StepPayPlanForm stepPayPlanForm)
        {
            var response = await _stepPayPlanFormRepository.SaveStepPayPlanForm(stepPayPlanForm);
            return Json(response);
        }
    }
}