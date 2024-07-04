namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modelupdate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.StatusModels",
                c => new
                    {
                        StatusId = c.Int(nullable: false, identity: true),
                        StatusName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.StatusId);
            
            DropColumn("dbo.EventModels", "Status");
        }
        
        public override void Down()
        {
            AddColumn("dbo.EventModels", "Status", c => c.String(nullable: false));
            DropTable("dbo.StatusModels");
        }
    }
}
