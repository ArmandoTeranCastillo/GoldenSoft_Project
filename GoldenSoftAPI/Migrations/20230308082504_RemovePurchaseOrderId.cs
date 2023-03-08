using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoldenSoftAPI.Migrations
{
    /// <inheritdoc />
    public partial class RemovePurchaseOrderId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_inventory_purchases_purchaseOrderId",
                table: "inventory");

            migrationBuilder.DropIndex(
                name: "IX_inventory_purchaseOrderId",
                table: "inventory");

            migrationBuilder.DropColumn(
                name: "purchaseOrderId",
                table: "inventory");

            migrationBuilder.CreateTable(
                name: "vwInventoryStock",
                columns: table => new
                {
                    inventoryId = table.Column<int>(type: "int", nullable: false),
                    numberBatch = table.Column<int>(type: "int", nullable: false),
                    numberPallet = table.Column<int>(type: "int", nullable: false),
                    date = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    noBoxes = table.Column<int>(type: "int", nullable: false),
                    noIssues = table.Column<int>(type: "int", nullable: false),
                    stock = table.Column<int>(type: "int", nullable: false),
                    barcode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    caliberId = table.Column<int>(type: "int", nullable: false),
                    varietyId = table.Column<int>(type: "int", nullable: false),
                    qualityId = table.Column<int>(type: "int", nullable: false),
                    typeBoxId = table.Column<int>(type: "int", nullable: false),
                    clientId = table.Column<int>(type: "int", nullable: false),
                    purchaseOrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_vwInventoryStock_Calibers_caliberId",
                        column: x => x.caliberId,
                        principalTable: "Calibers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_vwInventoryStock_Quality_qualityId",
                        column: x => x.qualityId,
                        principalTable: "Quality",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_vwInventoryStock_TypeBox_typeBoxId",
                        column: x => x.typeBoxId,
                        principalTable: "TypeBox",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_vwInventoryStock_Variety_varietyId",
                        column: x => x.varietyId,
                        principalTable: "Variety",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_vwInventoryStock_clients_clientId",
                        column: x => x.clientId,
                        principalTable: "clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_vwInventoryStock_purchases_purchaseOrderId",
                        column: x => x.purchaseOrderId,
                        principalTable: "purchases",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_vwInventoryStock_caliberId",
                table: "vwInventoryStock",
                column: "caliberId");

            migrationBuilder.CreateIndex(
                name: "IX_vwInventoryStock_clientId",
                table: "vwInventoryStock",
                column: "clientId");

            migrationBuilder.CreateIndex(
                name: "IX_vwInventoryStock_purchaseOrderId",
                table: "vwInventoryStock",
                column: "purchaseOrderId");

            migrationBuilder.CreateIndex(
                name: "IX_vwInventoryStock_qualityId",
                table: "vwInventoryStock",
                column: "qualityId");

            migrationBuilder.CreateIndex(
                name: "IX_vwInventoryStock_typeBoxId",
                table: "vwInventoryStock",
                column: "typeBoxId");

            migrationBuilder.CreateIndex(
                name: "IX_vwInventoryStock_varietyId",
                table: "vwInventoryStock",
                column: "varietyId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "vwInventoryStock");

            migrationBuilder.AddColumn<int>(
                name: "purchaseOrderId",
                table: "inventory",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_inventory_purchaseOrderId",
                table: "inventory",
                column: "purchaseOrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_inventory_purchases_purchaseOrderId",
                table: "inventory",
                column: "purchaseOrderId",
                principalTable: "purchases",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
