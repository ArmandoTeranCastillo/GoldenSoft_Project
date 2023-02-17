using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        private readonly DataContext _context;
        public InventoryController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros del inventario
        [HttpGet]
        public async Task<ActionResult<List<Inventory>>> Get()
        {
            return Ok(await _context.inventory.ToListAsync());
        }


    }
}
