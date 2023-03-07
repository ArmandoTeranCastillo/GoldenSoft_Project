using GoldenSoftAPI.DataTransfer.InventorySystem.Inventory;
using GoldenSoftAPI.Models.InventorySystem;
using GoldenSoftAPI.Models.InventorySystem.Views;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers.InventorySystem.Views
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViewStockController : ControllerBase
    {
        private readonly DataContext _context;
        public ViewStockController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ViewStock>>> GetStock()
        {
            var vwstock = await _context.viewStock
                .Select(i => new
                {
                    i.inventoryId,
                    i.noBoxes,
                    i.noIssues,
                    i.stock
                })
                .ToListAsync();

            return Ok(vwstock);
        }

        

    }
}
