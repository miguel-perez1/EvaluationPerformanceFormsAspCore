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
    public class ProfileRepository : IProfileRepository
    {
        private readonly IConfiguration _config;

        public ProfileRepository(IConfiguration config)
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

        public async Task<int> SaveUserProfile(User user)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "INSERT INTO User(level, name, title, sap, division, email) VALUES(@level, @name, @title, @sap, @division, @email)" +
                    "ON DUPLICATE KEY UPDATE level=@level, name=@name, title=@title, division=@division, email=@email";
                conn.Open();
                var result = await conn.ExecuteAsync(sQuery, user);
                conn.Close();
                return result;
            }
        }

        public async Task<User> GetUserProfile(string key)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = "SELECT level, name, title, sap, division, email FROM User WHERE email=@KEY";
                conn.Open();
                var result = await conn.QueryAsync<User>(sQuery, new { KEY = key});
                conn.Close();
                return result.FirstOrDefault();
            }
        }
    }
}
