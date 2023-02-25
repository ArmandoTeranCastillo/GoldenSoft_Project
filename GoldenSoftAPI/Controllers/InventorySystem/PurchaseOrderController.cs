using GoldenSoftAPI.DataTransfer.InventorySystem.PurchaseOrder;
using GoldenSoftAPI.Models.InventorySystem;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers.InventorySystem
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseOrderController : ControllerBase
    {
        private readonly DataContext _context;
        public PurchaseOrderController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<PurchaseOrder>>> GetAll()
        {
            return Ok(await _context.purchases.ToListAsync());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<PurchaseOrder>>> Get(int id)
        {
            var purchaseorder = await _context.purchases
                .Where(c => c.Id == id)
                .ToListAsync();

            return purchaseorder;
        }

        [HttpPost]
        public async Task<ActionResult<List<PurchaseOrder>>> CreatePurchaseOrder(CreatePurchaseOrderDto request)
        {
            var newPurchaseOrder = new PurchaseOrder
            {
                producer = request.producer,
                dateOrder = request.dateOrder,
            };

            _context.purchases.Add(newPurchaseOrder);
            await _context.SaveChangesAsync();

            return Ok(await _context.purchases.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<PurchaseOrder>>> UpdatePurchaseOrder(PurchaseOrder request)
        {
            var dbPurchaseOrder = await _context.purchases.FindAsync(request.Id);
            if (dbPurchaseOrder == null)
            {
                return BadRequest("Tipo de Caja no encontrado");
            }

            dbPurchaseOrder.producer = request.producer;
            dbPurchaseOrder.dateOrder = request.dateOrder;

            await _context.SaveChangesAsync();

            return Ok(await _context.purchases.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<PurchaseOrder>>> DeletePurchaseOrder(int id)
        {
            var dbPurchaseOrder = await _context.purchases.FindAsync(id);
            if (dbPurchaseOrder == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.purchases.Remove(dbPurchaseOrder);
            await _context.SaveChangesAsync();

            return Ok(await _context.purchases.ToListAsync());
        }
    }
}
