namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class Roles : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.RegisterModels", "Role", c => c.String());
        }

        public override void Down()
        {
            DropColumn("dbo.RegisterModels", "Role");
        }
    }
}
