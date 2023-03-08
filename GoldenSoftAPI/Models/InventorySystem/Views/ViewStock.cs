using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoldenSoftAPI.Models.InventorySystem.Views
{
    [Keyless]
    [NotMapped]
    public class ViewStock
    {
        
        public int inventoryId { get; set; }

        public int numberBatch { get; set; }

        public int numberPallet { get; set; }

        public string date { get; set; }
        public int noBoxes { get; set; }
        public int noIssues { get; set; }
        public int stock { get; set; }

        public string barcode { get; set; }

        public Caliber caliber { get; set; } //One To Many

        public Variety variety { get; set; } //One To Many

        public Quality quality { get; set; } //One To Many

        public TypeBox typeBox { get; set; } //One To Many

        public Client client { get; set; } //One To Many

    }
}
