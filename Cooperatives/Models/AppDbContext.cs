using System.Data.Entity;

namespace Cooperatives.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("CooperativeManagement")
        {
        }

        public DbSet<RegisterModel> Users { get; set; }
        public DbSet<EventModel> Events { get; set; }
        public DbSet<ContributionModel> Contributions { get; set; }
    }
}
