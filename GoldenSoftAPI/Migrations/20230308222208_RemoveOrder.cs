using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoldenSoftAPI.Migrations
{
    /// <inheritdoc />
    public partial class RemoveOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_vwInventoryStock_purchases_purchaseOrderId",
                table: "vwInventoryStock");

            migrationBuilder.DropIndex(
                name: "IX_vwInventoryStock_purchaseOrderId",
                table: "vwInventoryStock");

            migrationBuilder.DropColumn(
                name: "purchaseOrderId",
                table: "vwInventoryStock");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "purchaseOrderId",
                table: "vwInventoryStock",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_vwInventoryStock_purchaseOrderId",
                table: "vwInventoryStock",
                column: "purchaseOrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_vwInventoryStock_purchases_purchaseOrderId",
                table: "vwInventoryStock",
                column: "purchaseOrderId",
                principalTable: "purchases",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
