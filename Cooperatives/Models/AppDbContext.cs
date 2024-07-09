using PayPal.Models;
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
        ////public DbSet<ConfirmedViewData> ConfirmedViews { get; set; }
        ////public DbSet<PayPalViewData> payPalViews { get; set; }
        public DbSet<ProfileModel> Profiles { get; set; }
        public DbSet<StatusModel> Statuses { get; set; }
        public class AppDbInitializer : CreateDatabaseIfNotExists<AppDbContext>
        {
            protected override void Seed(AppDbContext context)
            {
                // Seed an admin user
                context.Users.Add(new RegisterModel
                {
                    Email = "admin@gmail.com",
                    FirstName = "Admin",
                    Surname = "User",
                    Password = "admin@123#", // Use hashed passwords in real applications
                    ConfirmPassword = "admin@123#",
                    Role = "Admin"
                });

                base.Seed(context);
            }
        }
    }
}
