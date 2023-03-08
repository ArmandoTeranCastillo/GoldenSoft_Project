using System.Text.Json.Serialization;

namespace GoldenSoftAPI.Models.InventorySystem
{
    public class PurchaseOrder
    {
        public int Id { get; set; }

        public string producer { get; set; }

        public string dateOrder { get; set; }

        [JsonIgnore]
        public Inventory inventory { get; set; }

        public int inventoryId { get; set; }
    }
}
