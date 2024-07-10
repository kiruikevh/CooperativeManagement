namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class jk : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.EventModels", "StatusId", c => c.String());
            AddColumn("dbo.EventModels", "Status_StatusId", c => c.Int());
            CreateIndex("dbo.EventModels", "Status_StatusId");
            AddForeignKey("dbo.EventModels", "Status_StatusId", "dbo.StatusModels", "StatusId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.EventModels", "Status_StatusId", "dbo.StatusModels");
            DropIndex("dbo.EventModels", new[] { "Status_StatusId" });
            DropColumn("dbo.EventModels", "Status_StatusId");
            DropColumn("dbo.EventModels", "StatusId");
        }
    }
}
