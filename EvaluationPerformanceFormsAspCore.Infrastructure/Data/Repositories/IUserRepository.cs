using Infrastructure.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetFirstUser();
        Task<IEnumerable<User>> GetUsers();
    }
}
