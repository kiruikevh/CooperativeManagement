namespace Cooperatives.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ii1 : DbMigration
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.StatusModels");
        }
    }
}
