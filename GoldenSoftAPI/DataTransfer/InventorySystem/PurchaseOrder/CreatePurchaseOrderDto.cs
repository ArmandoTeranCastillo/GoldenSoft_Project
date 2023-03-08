namespace GoldenSoftAPI.DataTransfer.InventorySystem.PurchaseOrder
{
    public class CreatePurchaseOrderDto
    {
        public string producer { get; set; } = string.Empty;

        public string dateOrder { get; set; } = string.Empty;

        public int inventoryId { get; set; } = 1;
    }
}
