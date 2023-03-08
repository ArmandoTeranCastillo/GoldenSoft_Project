using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoldenSoftAPI.Migrations
{
    /// <inheritdoc />
    public partial class newRelationshipOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "inventoryId",
                table: "purchases",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_purchases_inventoryId",
                table: "purchases",
                column: "inventoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_purchases_inventory_inventoryId",
                table: "purchases",
                column: "inventoryId",
                principalTable: "inventory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_purchases_inventory_inventoryId",
                table: "purchases");

            migrationBuilder.DropIndex(
                name: "IX_purchases_inventoryId",
                table: "purchases");

            migrationBuilder.DropColumn(
                name: "inventoryId",
                table: "purchases");
        }
    }
}
