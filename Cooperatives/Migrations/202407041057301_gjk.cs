namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class gjk : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ProfileModels", "IDnumber", c => c.String(nullable: false, maxLength: 10));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ProfileModels", "IDnumber", c => c.String(nullable: false));
        }
    }
}
