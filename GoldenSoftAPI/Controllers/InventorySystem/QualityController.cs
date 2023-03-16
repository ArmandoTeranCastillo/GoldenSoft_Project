using GoldenSoftAPI.DataTransfer.InventorySystem.Quality;
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
    public class QualityController : ControllerBase
    {
        private readonly DataContext _context;
        public QualityController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<Quality>>> GetAll()
        {
            return Ok(await _context.Quality.ToListAsync());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Quality>>> Get(int id)
        {
            var quality = await _context.Quality
                .Where(c => c.Id == id)
                .ToListAsync();

            return quality;
        }

        [HttpPost]
        public async Task<ActionResult<List<Quality>>> CreateQuality(CreateQualityDto request)
        {
            var newQuality = new Quality
            {
                nameQuality = request.nameQuality
            };

            _context.Quality.Add(newQuality);
            await _context.SaveChangesAsync();

            return Ok(await _context.Quality.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Quality>>> UpdateQuality(Quality request)
        {
            var dbQuality = await _context.Quality.FindAsync(request.Id);
            if (dbQuality == null)
            {
                return BadRequest("Calidad no encontrada");
            }

            dbQuality.nameQuality = request.nameQuality;

            await _context.SaveChangesAsync();

            return Ok(await _context.Quality.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Quality>>> DeleteQuality(int id)
        {
            var dbQuality = await _context.Quality.FindAsync(id);
            if (dbQuality == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.Quality.Remove(dbQuality);
            await _context.SaveChangesAsync();

            return Ok(await _context.Quality.ToListAsync());
        }
    }
}
