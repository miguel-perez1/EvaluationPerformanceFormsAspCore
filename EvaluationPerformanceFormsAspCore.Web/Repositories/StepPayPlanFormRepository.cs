using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using EvaluationPerformanceFormsAspCore.Web.Models;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace EvaluationPerformanceFormsAspCore.Web.Repositories
{
    public class StepPayPlanRepository : IStepPayPlanFormRepository
    {
        private readonly IConfiguration _config;

        public StepPayPlanRepository(IConfiguration config)
        {
            _config = config;
        }
        public IDbConnection Connection
        {
            get
            {
                return new MySqlConnection(_config.GetConnectionString("MyConnectionString"));
            }
        }

        public async Task<List<StepPayPlanForm>> AllStepPayPlanForms()
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "SELECT * FROM StepPayPlan";
                conn.Open();
                var result = await conn.QueryAsync<StepPayPlanForm>(sQuery, null);
                conn.Close();
                return result.ToList();
            }
        }

        public async Task<int> SaveStepPayPlanForm(StepPayPlanForm stepPayPlanForm)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "INSERT INTO StepPayPlan(name, title, department, review, sap, period, division, teamwork, integrity, innovation, professionalism)" +
                               "VALUES(@name, @title, @department, @review, @sap, @period, @division, @teamwork, @integrity, @innovation, @professionalism)";
                conn.Open();
                var result = await conn.ExecuteAsync(sQuery, stepPayPlanForm);
                conn.Close();
                return result;
            }
        }
    }
}
