namespace GoldenSoftAPI.DataTransfer.InventorySystem.PurchaseDetails
{
    public class UpdatePurchaseDetailsDto
    {
        public int Id { get; set; } = 1;
        public string details { get; set; } = "Producto Vendido";
        public int purchaseOrderId { get; set; } = 1;
    }
}
