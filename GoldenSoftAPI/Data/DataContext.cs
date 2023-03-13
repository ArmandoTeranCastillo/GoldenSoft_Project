using GoldenSoftAPI.Models;
using GoldenSoftAPI.Models.InventorySystem;
using GoldenSoftAPI.Models.InventorySystem.Views;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {
            
        }

        //Caracteristicas de la Caja
        public DbSet<Caliber> Calibers { get; set; }
        public DbSet<Variety> Variety { get; set; }
        public DbSet<Quality> Quality { get; set; }
        public DbSet<TypeBox> TypeBox { get; set; }

        //Cliente
        public DbSet<Client> clients { get; set; }

        //Orden de Compra
        public DbSet<PurchaseOrder> purchases { get; set; }
        public DbSet<PurchaseDetails> purchasesDetails { get; set;}

        //Inventario
        public DbSet<Inventory> inventory { get; set; }

        //Salidas de Inventario
        public DbSet<InventoryIssues> inventoryIssues { get; set; }
        public DbSet<InventoryReasonIssues> inventoryReasonIssues { get; set; }

        //Usuarios
        public DbSet<User> users { get; set; }

        //Vistas--------------------------
        //StockDifference
        public DbSet<ViewStock> vwInventoryStock2 { get; set; }
    }
}
