using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class IntialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DRegjistrims",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    emri = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    mbiemri = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    nrtel = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    tabelat = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    tipiVetures = table.Column<string>(type: "nvarchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DRegjistrims", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DRegjistrims");
        }
    }
}
