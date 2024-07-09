namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.EventModels", "StatusId", c => c.Int(nullable: false));
            CreateIndex("dbo.EventModels", "StatusId");
            AddForeignKey("dbo.EventModels", "StatusId", "dbo.StatusModels", "StatusId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.EventModels", "StatusId", "dbo.StatusModels");
            DropIndex("dbo.EventModels", new[] { "StatusId" });
            DropColumn("dbo.EventModels", "StatusId");
        }
    }
}
