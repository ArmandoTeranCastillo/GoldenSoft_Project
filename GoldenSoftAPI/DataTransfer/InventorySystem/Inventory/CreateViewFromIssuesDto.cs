using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.DataTransfer.InventorySystem.Inventory
{
    [Keyless]
    public class CreateViewFromIssuesDto
    {
        public int inventoryId { get; set; }

        public int noIssues { get; set; }
    }
}
