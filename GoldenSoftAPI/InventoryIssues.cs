namespace GoldenSoftAPI
{
    public class InventoryIssues
    {
        public int Id { get; set; }

        public int numberIssues { get; set; }

        public string dateIssue { get; set; }

        //Relationships
        public Inventory inventory { get; set; }

        public InventoryReasonIssues reasonIssues { get; set; }
    }
}
