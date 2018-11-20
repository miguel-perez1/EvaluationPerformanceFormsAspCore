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
    public class ExecutiveFormRepository : IExecutiveFormRepository
    {
        private readonly IConfiguration _config;

        public ExecutiveFormRepository(IConfiguration config)
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
        
        public async Task<List<ExecutiveForm>> AllExecutiveForms()
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "SELECT * FROM ExecutiveForm";
                conn.Open();
                var result = await conn.QueryAsync<ExecutiveForm>(sQuery, null);
                conn.Close();
                return result.ToList();
            }
        }

        public async Task<int> SaveExecutiveForm(ExecutiveForm executiveForm)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "INSERT INTO ExecutiveForm(name, title, department,reviewType, sap, period, division, secTwoPercent, secTwoRating, secTwoResponsibility, secTwoSummary, teamworkRating, integRating, innovaRating, profRating, ladRating, stratRating, excellenceRating, decisionRating, pdpRating, secFiveTime, secFiveSummary, secSixSummary, revComments, employeeComments)" +
                   "VALUES(@name, @title, @department, @reviewType, @sap, @period, @division, @secTwoPercent, @secTwoRating, @secTwoResponsibility, @secTwoSummary, @teamworkRating, @integRating, @innovaRating, @profRating, @ladRating, @stratRating, @excellenceRating, @decisionRating, @pdpRating, @secFiveTime, @secFiveSummary, @secSixSummary, @revComments, @employeeComments)";
                conn.Open();
                var result = await conn.ExecuteAsync(sQuery, executiveForm);
                conn.Close();
                return result;
            }
        }
    }
}
