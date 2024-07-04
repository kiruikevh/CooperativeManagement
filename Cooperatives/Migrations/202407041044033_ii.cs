namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ii : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProfileModels", "IDnumber", c => c.String(nullable: false));
            AddColumn("dbo.ProfileModels", "Address", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ProfileModels", "Address");
            DropColumn("dbo.ProfileModels", "IDnumber");
        }
    }
}
