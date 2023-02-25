using GoldenSoftAPI.DataTransfer.InventorySystem.TypeBox;
using GoldenSoftAPI.Models.InventorySystem;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers.InventorySystem
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeBoxController : ControllerBase
    {
        private readonly DataContext _context;
        public TypeBoxController(DataContext context)
        {
            _context = context;
        }

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<TypeBox>>> GetAll()
        {
            return Ok(await _context.TypeBox.ToListAsync());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<TypeBox>>> Get(int id)
        {
            var typebox = await _context.TypeBox
                .Where(c => c.Id == id)
                .ToListAsync();

            return typebox;
        }

        [HttpPost]
        public async Task<ActionResult<List<TypeBox>>> CreateTypeBox(CreateTypeBoxDto request)
        {
            var newTypeBox = new TypeBox
            {
                nameTypeBox = request.nameTypeBox
            };

            _context.TypeBox.Add(newTypeBox);
            await _context.SaveChangesAsync();

            return Ok(await _context.TypeBox.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<TypeBox>>> UpdateTypeBox(TypeBox request)
        {
            var dbTypeBox = await _context.TypeBox.FindAsync(request.Id);
            if (dbTypeBox == null)
            {
                return BadRequest("Tipo de Caja no encontrado");
            }

            dbTypeBox.nameTypeBox = request.nameTypeBox;

            await _context.SaveChangesAsync();

            return Ok(await _context.TypeBox.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<TypeBox>>> DeleteTypeBox(int id)
        {
            var dbTypeBox = await _context.TypeBox.FindAsync(id);
            if (dbTypeBox == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.TypeBox.Remove(dbTypeBox);
            await _context.SaveChangesAsync();

            return Ok(await _context.TypeBox.ToListAsync());
        }
    }
}
