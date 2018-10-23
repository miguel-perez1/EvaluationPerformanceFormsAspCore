using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Infrastructure.Data.Models;
using Infrastructure.Data.Sql;

namespace Infrastructure.Data.Repositories
{
    public class UserRepository : SqlRepository<User>, IUserRepository
    {
        public UserRepository(ISqlConnectionFactory connectionFactory) : base(connectionFactory)
        { }

        public Task<User> GetFirstUser()
        {
            var sqlQuery = $@"SELECT * FROM User";
            try
            {
                var result = FindAsync(sqlQuery, null);
                return result;
            } catch (Exception e)
            {
                throw;
            }
        }

        public Task<IEnumerable<User>> GetUsers()
        {
            var sqlQuery = $@"SELECT * FROM User";
            try
            {
                var result = GetAsync(sqlQuery, null);
                return result;
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
