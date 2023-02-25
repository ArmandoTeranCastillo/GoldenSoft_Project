using GoldenSoftAPI.DataTransfer.InventorySystem.Caliber;
using GoldenSoftAPI.Models.InventorySystem;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers.InventorySystem
{
    [Route("api/[controller]")]
    [ApiController]
    public class CaliberController : ControllerBase
    {
        private readonly DataContext _context;
        public CaliberController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<Caliber>>> GetAll()
        {
            return Ok(await _context.Calibers.ToListAsync());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Caliber>>> Get(int id)
        {
            var calibers = await _context.Calibers
                .Where(c => c.Id == id)
                .ToListAsync();

            return calibers;
        }

        [HttpPost]
        public async Task<ActionResult<List<Caliber>>> CreateCaliber(CreateCaliberDto request)
        {
            var newCaliber = new Caliber
            {
                nameCaliber = request.nameCaliber,
            };

            _context.Calibers.Add(newCaliber);
            await _context.SaveChangesAsync();
            
            return Ok(await _context.Calibers.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Caliber>>> UpdateCaliber(Caliber request)
        {
            var dbCalibers = await _context.Calibers.FindAsync(request.Id);
            if(dbCalibers == null)
            {
                return BadRequest("Calibre no encontrado");
            }

            dbCalibers.nameCaliber = request.nameCaliber;

            await _context.SaveChangesAsync();

            return Ok(await _context.Calibers.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Caliber>>> DeleteCaliber(int id)
        {
            var dbCalibers = await _context.Calibers.FindAsync(id);
            if (dbCalibers == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.Calibers.Remove(dbCalibers);
            await _context.SaveChangesAsync();

            return Ok(await _context.inventory.ToListAsync());
        }
    }
}
