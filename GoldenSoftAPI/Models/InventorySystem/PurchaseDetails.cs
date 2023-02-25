using System.Text.Json.Serialization;

namespace GoldenSoftAPI.Models.InventorySystem
{
    public class PurchaseDetails
    {
        public int Id { get; set; }

        public string details { get; set; } = string.Empty;

        //Relationships
        [JsonIgnore]
        public PurchaseOrder purchaseOrder { get; set; }
        public int purchaseOrderId { get; set; } 
    }
}
