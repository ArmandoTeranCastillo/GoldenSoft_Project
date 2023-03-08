﻿// <auto-generated />
using GoldenSoftAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GoldenSoftAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230308225002_newRelationshipOrder2")]
    partial class newRelationshipOrder2
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.Caliber", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("nameCaliber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Calibers");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.Client", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("clients");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.Inventory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("barcode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("caliberId")
                        .HasColumnType("int");

                    b.Property<int>("clientId")
                        .HasColumnType("int");

                    b.Property<string>("date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("numberBatch")
                        .HasColumnType("int");

                    b.Property<int>("numberBoxes")
                        .HasColumnType("int");

                    b.Property<int>("numberPallet")
                        .HasColumnType("int");

                    b.Property<int>("qualityId")
                        .HasColumnType("int");

                    b.Property<int>("typeBoxId")
                        .HasColumnType("int");

                    b.Property<int>("varietyId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("caliberId");

                    b.HasIndex("clientId");

                    b.HasIndex("qualityId");

                    b.HasIndex("typeBoxId");

                    b.HasIndex("varietyId");

                    b.ToTable("inventory");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.InventoryIssues", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("dateIssue")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("inventoryId")
                        .HasColumnType("int");

                    b.Property<int>("numberIssues")
                        .HasColumnType("int");

                    b.Property<int>("reasonIssuesId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("inventoryId");

                    b.HasIndex("reasonIssuesId");

                    b.ToTable("inventoryIssues");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.InventoryReasonIssues", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Reasons")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("inventoryReasonIssues");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.PurchaseDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("details")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("purchaseOrderId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("purchaseOrderId");

                    b.ToTable("purchasesDetails");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.PurchaseOrder", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("dateOrder")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("inventoryId")
                        .HasColumnType("int");

                    b.Property<string>("producer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("inventoryId");

                    b.ToTable("purchases");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.Quality", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("nameQuality")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Quality");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.TypeBox", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("nameTypeBox")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TypeBox");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.Variety", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("nameVariety")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Variety");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.Views.ViewStock", b =>
                {
                    b.Property<string>("barcode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("caliberId")
                        .HasColumnType("int");

                    b.Property<int>("clientId")
                        .HasColumnType("int");

                    b.Property<string>("date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("inventoryId")
                        .HasColumnType("int");

                    b.Property<int>("noBoxes")
                        .HasColumnType("int");

                    b.Property<int>("noIssues")
                        .HasColumnType("int");

                    b.Property<int>("numberBatch")
                        .HasColumnType("int");

                    b.Property<int>("numberPallet")
                        .HasColumnType("int");

                    b.Property<int>("qualityId")
                        .HasColumnType("int");

                    b.Property<int>("stock")
                        .HasColumnType("int");

                    b.Property<int>("typeBoxId")
                        .HasColumnType("int");

                    b.Property<int>("varietyId")
                        .HasColumnType("int");

                    b.HasIndex("caliberId");

                    b.HasIndex("clientId");

                    b.HasIndex("qualityId");

                    b.HasIndex("typeBoxId");

                    b.HasIndex("varietyId");

                    b.ToTable("vwInventoryStock");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.Inventory", b =>
                {
                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Caliber", "caliber")
                        .WithMany()
                        .HasForeignKey("caliberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Client", "client")
                        .WithMany()
                        .HasForeignKey("clientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Quality", "quality")
                        .WithMany()
                        .HasForeignKey("qualityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.TypeBox", "typeBox")
                        .WithMany()
                        .HasForeignKey("typeBoxId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Variety", "variety")
                        .WithMany()
                        .HasForeignKey("varietyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("caliber");

                    b.Navigation("client");

                    b.Navigation("quality");

                    b.Navigation("typeBox");

                    b.Navigation("variety");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.InventoryIssues", b =>
                {
                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Inventory", "inventory")
                        .WithMany()
                        .HasForeignKey("inventoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.InventoryReasonIssues", "reasonIssues")
                        .WithMany()
                        .HasForeignKey("reasonIssuesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("inventory");

                    b.Navigation("reasonIssues");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.PurchaseDetails", b =>
                {
                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.PurchaseOrder", "purchaseOrder")
                        .WithMany()
                        .HasForeignKey("purchaseOrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("purchaseOrder");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.PurchaseOrder", b =>
                {
                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Inventory", "inventory")
                        .WithMany()
                        .HasForeignKey("inventoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("inventory");
                });

            modelBuilder.Entity("GoldenSoftAPI.Models.InventorySystem.Views.ViewStock", b =>
                {
                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Caliber", "caliber")
                        .WithMany()
                        .HasForeignKey("caliberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Client", "client")
                        .WithMany()
                        .HasForeignKey("clientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Quality", "quality")
                        .WithMany()
                        .HasForeignKey("qualityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.TypeBox", "typeBox")
                        .WithMany()
                        .HasForeignKey("typeBoxId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GoldenSoftAPI.Models.InventorySystem.Variety", "variety")
                        .WithMany()
                        .HasForeignKey("varietyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("caliber");

                    b.Navigation("client");

                    b.Navigation("quality");

                    b.Navigation("typeBox");

                    b.Navigation("variety");
                });
#pragma warning restore 612, 618
        }
    }
}
