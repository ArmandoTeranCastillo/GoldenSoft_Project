using System.Text.Json.Serialization;

namespace GoldenSoftAPI.Models.InventorySystem
{
    public class InventoryIssues
    {
        public int Id { get; set; }

        public int numberIssues { get; set; }

        public string dateIssue { get; set; }

        //Relationships
        [JsonIgnore] 
        public Inventory inventory { get; set; }
       
        public InventoryReasonIssues reasonIssues { get; set; }

        public int inventoryId { get; set; }
    }
}
