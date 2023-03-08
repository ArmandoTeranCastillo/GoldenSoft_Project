namespace GoldenSoftAPI.DataTransfer.InventorySystem.Inventory
{
    public class UpdateInventoryDto
    {
        public int Id { get; set; } = 1;
        public int numberPallet { get; set; } = 1;

        public int numberBatch { get; set; } = 1;

        public string date { get; set; } = "05/10/2022";

        public int numberBoxes { get; set; } = 1;

        public string barcode { get; set; } = "00000000";

        public int caliberId { get; set; } = 1; //One To Many

        public int varietyId { get; set; } = 1; //One To Many

        public int qualityId { get; set; } = 1; //One To Many

        public int typeBoxId { get; set; } = 1;  //One To Many

        public int clientId { get; set; } = 1; //One To Many

    }
}
