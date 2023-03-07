using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Models.InventorySystem.Views
{
    [Keyless]
    public class ViewStock
    {
        
        public int inventoryId { get; set; }
        public int noBoxes { get; set; }
        public int noIssues { get; set; }
        public int stock { get; set; }
    }
}
