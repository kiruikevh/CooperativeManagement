namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Status : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.EventModels", "Status", c => c.String(nullable: false));
            AlterColumn("dbo.EventModels", "EventName", c => c.String(nullable: false));
            AlterColumn("dbo.EventModels", "Description", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.EventModels", "Description", c => c.String());
            AlterColumn("dbo.EventModels", "EventName", c => c.String());
            DropColumn("dbo.EventModels", "Status");
        }
    }
}
