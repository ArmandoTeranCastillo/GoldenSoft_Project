namespace GoldenSoftAPI
{
    public class PurchaseDetails
    {
        public int Id { get; set; }

        public string details { get; set; } = string.Empty;

        //Relationships
        public PurchaseOrder purchaseOrder { get; set; }
    }
}
