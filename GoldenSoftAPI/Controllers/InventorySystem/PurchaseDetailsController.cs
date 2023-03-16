using GoldenSoftAPI.DataTransfer.InventorySystem.PurchaseDetails;
using GoldenSoftAPI.Models.InventorySystem;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers.InventorySystem
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PurchaseDetailsController : ControllerBase
    {
        private readonly DataContext _context;
        public PurchaseDetailsController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<PurchaseDetails>>> GetAll()
        {
            return Ok(await _context.purchasesDetails.ToListAsync());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<PurchaseDetails>>> Get(int id)
        {
            var purchasedetails = await _context.purchasesDetails
                .Where(c => c.Id == id)
                .ToListAsync();

            return purchasedetails;
        }

        [HttpPost]
        public async Task<ActionResult<List<PurchaseDetails>>> CreatePurchaseDetails(CreatePurchaseDetailsDto request)
        {
            //Revisar si existe Orden de compra
            var purchaseOrder = await _context.purchases.FindAsync(request.purchaseOrderId);
            if(purchaseOrder == null)
            {
                return NotFound("Orden de Compra no encontrado");
            }

            var newPurchaseDetails = new PurchaseDetails
            {
                details = request.details,
                purchaseOrder = purchaseOrder
            };

            _context.purchasesDetails.Add(newPurchaseDetails);
            await _context.SaveChangesAsync();

            var purchasedetails = await _context.purchasesDetails.ToListAsync();
            return Ok(purchasedetails);
        }

        [HttpPut]
        public async Task<ActionResult<List<PurchaseDetails>>> UpdatePurchaseDetails(UpdatePurchaseDetailsDto request)
        {
            //Revisar si existe registro
            var dbPurchaseDetails = await _context.purchasesDetails.FindAsync(request.Id);
            if (dbPurchaseDetails == null)
            {
                return NotFound("Registro no encontrado");
            }
            //Revisar si existe Orden de compra
            var purchaseOrder = await _context.purchases.FindAsync(request.purchaseOrderId);
            if (purchaseOrder == null)
            {
                return NotFound("Orden de Compra no encontrado");
            }

            dbPurchaseDetails.details = request.details;
            dbPurchaseDetails.purchaseOrder = purchaseOrder;
            
            await _context.SaveChangesAsync();

            var purchasedetails = await _context.purchasesDetails.ToListAsync();
            return Ok(purchasedetails);
        }

        [HttpDelete]
        public async Task<ActionResult<List<PurchaseDetails>>> DeletePurchaseDetails(int id)
        {
            var dbPurchaseDetails = await _context.purchasesDetails.FindAsync(id);
            if (dbPurchaseDetails == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.purchasesDetails.Remove(dbPurchaseDetails);
            await _context.SaveChangesAsync();

            return Ok(await _context.purchasesDetails.ToListAsync());
        }
    }
}
