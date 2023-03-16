using GoldenSoftAPI.DataTransfer.InventorySystem.InventoryIssues;
using GoldenSoftAPI.DataTransfer.InventorySystem.InventoryReasonIssues;
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
    public class InventoryReasonIssuesController : ControllerBase
    {
        private readonly DataContext _context;
        public InventoryReasonIssuesController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<InventoryReasonIssues>>> GetAll()
        {
            return Ok(await _context.inventoryReasonIssues.ToListAsync());
        }


        [HttpGet("id")]
        public async Task<ActionResult<List<InventoryReasonIssues>>> Get(int id)
        {
            var inventoryreasonissues = await _context.inventoryReasonIssues
                .Where(c => c.Id == id)
                .ToListAsync();

            return inventoryreasonissues;
        }

        [HttpPost]
        public async Task<ActionResult<List<InventoryReasonIssues>>> CreateInventoryReasonIssues(CreateInventoryReasonIssuesDto request)
        {
            var newInventoryReasonIssues = new InventoryReasonIssues
            {
                Reasons = request.Reasons
            };

            _context.inventoryReasonIssues.Add(newInventoryReasonIssues);
            await _context.SaveChangesAsync();

            return Ok(await _context.inventoryReasonIssues.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<InventoryReasonIssues>>> UpdateInventoryReasonIssues(InventoryReasonIssues request)
        {
            var dbInventoryReasonIssues = await _context.inventoryReasonIssues.FindAsync(request.Id);
            if (dbInventoryReasonIssues == null)
            {
                return BadRequest("Variedad no encontrada");
            }

            dbInventoryReasonIssues.Reasons = request.Reasons;

            await _context.SaveChangesAsync();

            return Ok(await _context.inventoryReasonIssues.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<InventoryReasonIssues>>> DeleteInventoryReasonIssues(int id)
        {
            var dbInventoryReasonIssues = await _context.inventoryReasonIssues.FindAsync(id);
            if (dbInventoryReasonIssues == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.inventoryReasonIssues.Remove(dbInventoryReasonIssues);
            await _context.SaveChangesAsync();

            return Ok(await _context.inventoryReasonIssues.ToListAsync());
        }
    }
}
