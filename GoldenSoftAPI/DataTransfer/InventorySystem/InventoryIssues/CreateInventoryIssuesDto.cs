namespace GoldenSoftAPI.DataTransfer.InventorySystem.InventoryIssues
{
    public class CreateInventoryIssuesDto
    {
        public int numberIssues { get; set; } = 1;
        public string dateIssue { get; set; } = "05/12/2022";
        public int inventoryId { get; set; } = 1;
        public int reasonIssuesId { get; set; } = 1;
    }
}
