namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class sss : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProfileModels", "Email", c => c.String(nullable: false));
            DropColumn("dbo.ProfileModels", "MyProperty");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ProfileModels", "MyProperty", c => c.Int(nullable: false));
            DropColumn("dbo.ProfileModels", "Email");
        }
    }
}
