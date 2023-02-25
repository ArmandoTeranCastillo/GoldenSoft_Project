namespace GoldenSoftAPI.DataTransfer.InventorySystem.PurchaseDetails
{
    public class CreatePurchaseDetailsDto
    {
        public string details { get; set; } = "Producto Vendido";
        public int purchaseOrderId { get; set; } = 1;
    }
}
