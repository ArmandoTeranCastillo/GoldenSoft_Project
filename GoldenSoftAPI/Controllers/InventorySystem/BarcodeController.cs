using BarcodeLib;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;

namespace GoldenSoftAPI.Controllers.InventorySystem
{
    [Route("api/[controller]")]
    [ApiController]
    public class BarcodeController : ControllerBase
    {
        [HttpGet]
        public IActionResult GenerateBarcode()
        {
            Barcode barcode = new Barcode();
            Image img = barcode.Encode(TYPE.CODE39, "234567", Color.Black, Color.White, 250, 100);
            var data = ConvertImageToBites(img);
            return File(data, "image/jpeg");
        }

        private byte[] ConvertImageToBites(Image img)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                img.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                return ms.ToArray();
            }

        }
    }
}
