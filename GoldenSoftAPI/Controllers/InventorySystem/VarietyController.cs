using GoldenSoftAPI.DataTransfer.InventorySystem.Variety;
using GoldenSoftAPI.Models.InventorySystem;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers.InventorySystem
{
    [Route("api/[controller]")]
    [ApiController]
    public class VarietyController : ControllerBase
    {
        private readonly DataContext _context;
        public VarietyController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<Variety>>> GetAll()
        {
            return Ok(await _context.Variety.ToListAsync());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Variety>>> Get(int id)
        {
            var variety = await _context.Variety
                .Where(c => c.Id == id)
                .ToListAsync();

            return variety;
        }

        [HttpPost]
        public async Task<ActionResult<List<Variety>>> CreateVariety(CreateVarietyDto request)
        {
            var newVariety = new Variety
            {
                nameVariety = request.nameVariety
            };

            _context.Variety.Add(newVariety);
            await _context.SaveChangesAsync();

            return Ok(await _context.Variety.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Variety>>> UpdateVariety(Variety request)
        {
            var dbVariety = await _context.Variety.FindAsync(request.Id);
            if (dbVariety == null)
            {
                return BadRequest("Variedad no encontrada");
            }

            dbVariety.nameVariety = request.nameVariety;

            await _context.SaveChangesAsync();

            return Ok(await _context.Variety.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Variety>>> DeleteVariety(int id)
        {
            var dbVariety = await _context.Variety.FindAsync(id);
            if (dbVariety == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.Variety.Remove(dbVariety);
            await _context.SaveChangesAsync();

            return Ok(await _context.Variety.ToListAsync());
        }
    }
}
