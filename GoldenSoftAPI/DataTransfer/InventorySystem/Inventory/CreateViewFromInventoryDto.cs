using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.DataTransfer.InventorySystem.Inventory
{
    
    public class CreateViewFromInventoryDto
    {
        public int inventoryId { get; set; }
        public int noBoxes { get; set; }
    }
}
