using EvaluationPerformanceFormsAspCore.Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Models
{
    //public class User
    //{
    //    public string name { get; set; }
    //    public string title { get; set; }
    //    public int sapNum { get; set; }
    //    public string division { get; set; }
    //    public string department { get; set; }
    //}
    public class UserContext:DbContext
    {
        public DbSet<User> Users { get; set; }
    }
}
