using GoldenSoftAPI.DataTransfer.InventorySystem.InventoryIssues;
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
    public class InventoryIssuesController : ControllerBase
    {
        private readonly DataContext _context;
        public InventoryIssuesController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<InventoryIssues>>> GetAll()
        {
            var inventoryissues = await _context.inventoryIssues
                .Include(i => i.reasonIssues)
                .ToListAsync();

            return Ok(inventoryissues);
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<InventoryIssues>>> Get(int id)
        {
            var inventoryIssues = await _context.inventoryIssues
                .Where(c => c.Id == id)
                .ToListAsync();

            return inventoryIssues;
        }

        [HttpPost]
        public async Task<ActionResult<List<InventoryIssues>>> CreateInventoryIssues(CreateInventoryIssuesDto request)
        {
            //Revisar que exista registro en el inventario
            var inventory = await _context.inventory.FindAsync(request.inventoryId);
            if (inventory == null)
            {
                return NotFound("Registro de inventario no encontrado");
            }
            //Revisar que exista registros de razones de inventario
            var issuesReason = await _context.inventoryReasonIssues.FindAsync(request.reasonIssuesId);
            if (issuesReason == null)
            {
                return NotFound("Razon de baja no encontrada");
            }

            var newInventoryIssues = new InventoryIssues
            {
                numberIssues = request.numberIssues,
                dateIssue = request.dateIssue,
                inventory = inventory,
                reasonIssues = issuesReason
            };

            _context.inventoryIssues.Add(newInventoryIssues);
            await _context.SaveChangesAsync();

            var inventoriesIssues = await _context.inventoryIssues.ToListAsync();

            return Ok(inventoriesIssues);
        }

        [HttpPut]
        public async Task<ActionResult<List<InventoryIssues>>> UpdateInventoryIssues(UpdateInventoryIssuesDto request)
        {
            //Revisar que exista registro en bajas de inventario
            var dbInventoryIssues = await _context.inventoryIssues.FindAsync(request.Id);
            if (dbInventoryIssues == null)
            {
                return NotFound("Registro de baja no encontrado");
            }
            //Revisar que exista registro en el inventario
            var inventory = await _context.inventory.FindAsync(request.inventoryId);
            if (inventory == null)
            {
                return NotFound("Registro de inventario no encontrado");
            }
            //Revisar que exista registros de razones de baja de inventario
            var issuesReason = await _context.inventoryReasonIssues.FindAsync(request.reasonIssuesId);
            if (issuesReason == null)
            {
                return NotFound("Razon de baja no encontrada");
            }

            dbInventoryIssues.numberIssues = request.numberIssues;
            dbInventoryIssues.dateIssue = request.dateIssue;
            dbInventoryIssues.inventory = inventory;
            dbInventoryIssues.reasonIssues = issuesReason;
         

            await _context.SaveChangesAsync();

            var inventoriesIssues = await _context.inventoryIssues.ToListAsync();

            return Ok(inventoriesIssues);
        }

        [HttpDelete]
        public async Task<ActionResult<List<InventoryIssues>>> DeleteInventoryIssues(int id)
        {
            var dbInventoryIssues = await _context.inventoryIssues.FindAsync(id);
            if (dbInventoryIssues == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.inventoryIssues.Remove(dbInventoryIssues);
            await _context.SaveChangesAsync();

            return Ok(await _context.inventoryIssues.ToListAsync());
        }
    }
}
