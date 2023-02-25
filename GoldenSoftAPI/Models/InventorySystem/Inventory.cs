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
        [JsonIgnore]
        public Caliber caliber { get; set; } //One To Many
        [JsonIgnore]
        public Variety variety { get; set; } //One To Many
        [JsonIgnore]
        public Quality quality { get; set; } //One To Many
        [JsonIgnore]
        public TypeBox typeBox { get; set; } //One To Many
        [JsonIgnore]
        public Client client { get; set; } //One To Many
        [JsonIgnore]
        public PurchaseOrder purchaseOrder { get; set; } //One To Many

        public int caliberId { get; set; }
        public int varietyId { get; set; }
        public int qualityId { get; set; }
        public int typeBoxId { get; set; }
        public int clientId { get; set; }
        public int purchaseOrderId { get; set; }
    }
}
