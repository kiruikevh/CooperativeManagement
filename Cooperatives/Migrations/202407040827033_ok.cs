namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ok : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProfileModels", "UserId", c => c.String());
            AlterColumn("dbo.ContributionModels", "UserId", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ContributionModels", "UserId", c => c.Int(nullable: false));
            DropColumn("dbo.ProfileModels", "UserId");
        }
    }
}
