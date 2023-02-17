using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoldenSoftAPI.Migrations
{
    /// <inheritdoc />
    public partial class Initial2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Calibers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nameCaliber = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calibers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "clients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clients", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "inventoryReasonIssues",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reasons = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inventoryReasonIssues", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "purchases",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    producer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dateOrder = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_purchases", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Quality",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nameQuality = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quality", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeBox",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nameTypeBox = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TypeBox", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Variety",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nameVariety = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Variety", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "purchasesDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    details = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    purchaseOrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_purchasesDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_purchasesDetails_purchases_purchaseOrderId",
                        column: x => x.purchaseOrderId,
                        principalTable: "purchases",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "inventory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    numberPallet = table.Column<int>(type: "int", nullable: false),
                    numberBatch = table.Column<int>(type: "int", nullable: false),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    numberBoxes = table.Column<int>(type: "int", nullable: false),
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
                    table.PrimaryKey("PK_inventory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_inventory_Calibers_caliberId",
                        column: x => x.caliberId,
                        principalTable: "Calibers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inventory_Quality_qualityId",
                        column: x => x.qualityId,
                        principalTable: "Quality",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inventory_TypeBox_typeBoxId",
                        column: x => x.typeBoxId,
                        principalTable: "TypeBox",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inventory_Variety_varietyId",
                        column: x => x.varietyId,
                        principalTable: "Variety",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inventory_clients_clientId",
                        column: x => x.clientId,
                        principalTable: "clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inventory_purchases_purchaseOrderId",
                        column: x => x.purchaseOrderId,
                        principalTable: "purchases",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "inventoryIssues",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    numberIssues = table.Column<int>(type: "int", nullable: false),
                    dateIssue = table.Column<DateTime>(type: "datetime2", nullable: false),
                    inventoryId = table.Column<int>(type: "int", nullable: false),
                    reasonIssuesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inventoryIssues", x => x.Id);
                    table.ForeignKey(
                        name: "FK_inventoryIssues_inventoryReasonIssues_reasonIssuesId",
                        column: x => x.reasonIssuesId,
                        principalTable: "inventoryReasonIssues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inventoryIssues_inventory_inventoryId",
                        column: x => x.inventoryId,
                        principalTable: "inventory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_inventory_caliberId",
                table: "inventory",
                column: "caliberId");

            migrationBuilder.CreateIndex(
                name: "IX_inventory_clientId",
                table: "inventory",
                column: "clientId");

            migrationBuilder.CreateIndex(
                name: "IX_inventory_purchaseOrderId",
                table: "inventory",
                column: "purchaseOrderId");

            migrationBuilder.CreateIndex(
                name: "IX_inventory_qualityId",
                table: "inventory",
                column: "qualityId");

            migrationBuilder.CreateIndex(
                name: "IX_inventory_typeBoxId",
                table: "inventory",
                column: "typeBoxId");

            migrationBuilder.CreateIndex(
                name: "IX_inventory_varietyId",
                table: "inventory",
                column: "varietyId");

            migrationBuilder.CreateIndex(
                name: "IX_inventoryIssues_inventoryId",
                table: "inventoryIssues",
                column: "inventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_inventoryIssues_reasonIssuesId",
                table: "inventoryIssues",
                column: "reasonIssuesId");

            migrationBuilder.CreateIndex(
                name: "IX_purchasesDetails_purchaseOrderId",
                table: "purchasesDetails",
                column: "purchaseOrderId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "inventoryIssues");

            migrationBuilder.DropTable(
                name: "purchasesDetails");

            migrationBuilder.DropTable(
                name: "inventoryReasonIssues");

            migrationBuilder.DropTable(
                name: "inventory");

            migrationBuilder.DropTable(
                name: "Calibers");

            migrationBuilder.DropTable(
                name: "Quality");

            migrationBuilder.DropTable(
                name: "TypeBox");

            migrationBuilder.DropTable(
                name: "Variety");

            migrationBuilder.DropTable(
                name: "clients");

            migrationBuilder.DropTable(
                name: "purchases");
        }
    }
}
