namespace GoldenSoftAPI
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
    }
}
