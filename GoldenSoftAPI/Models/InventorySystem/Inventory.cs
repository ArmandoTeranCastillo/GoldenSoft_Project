using System.Text.Json.Serialization;

namespace GoldenSoftAPI.Models.InventorySystem
{
    public class Inventory
    {
        public int Id { get; set; }
        public int numberPallet { get; set; }

        public int numberBatch { get; set; }

        public string date { get; set; }

        public int numberBoxes { get; set; }

        public string barcode { get; set; } = string.Empty;

        //Relationships
    
        public Caliber caliber { get; set; } //One To Many
     
        public Variety variety { get; set; } //One To Many
        
        public Quality quality { get; set; } //One To Many
       
        public TypeBox typeBox { get; set; } //One To Many
       
        public Client client { get; set; } //One To Many
        
        public PurchaseOrder purchaseOrder { get; set; } //One To Many


        // Método para calcular la propiedad "AvailableBoxes" sin usar un DataContext
        public int GetStock(IEnumerable<InventoryIssues> inventoryIssues)
        {
            int totalBoxes = numberBoxes;
            int issues = inventoryIssues.Where(ii => ii.inventoryId == Id).Sum(ii => ii.numberIssues);
            int stock = totalBoxes - issues;
            return stock;
        }

        public int GetSumIssues(IEnumerable<InventoryIssues> inventoryIssues)
        {
            int issues = inventoryIssues.Where(ii => ii.inventoryId == Id).Sum(ii => ii.numberIssues);
            return issues;
        }

    }
}
