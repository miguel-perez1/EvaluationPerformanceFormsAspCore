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
    public class UserRepository : IUserRepository
    {
        private readonly IConfiguration _config;

        public UserRepository(IConfiguration config)
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
        public async Task<List<User>> AllUsers()
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "SELECT * FROM User";
                conn.Open();
                var result = await conn.QueryAsync<User>(sQuery, null);
                return result.ToList();
            }
        }
    }
}
