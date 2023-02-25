using GoldenSoftAPI.DataTransfer.InventorySystem.Client;
using GoldenSoftAPI.Models.InventorySystem;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers.InventorySystem
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly DataContext _context;
        public ClientController(DataContext context)
        {
            _context = context;
        }


        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<Client>>> GetAll()
        {
            return Ok(await _context.clients.ToListAsync());
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Client>>> Get(int id)
        {
            var client = await _context.clients
                .Where(c => c.Id == id)
                .ToListAsync();

            return client;
        }

        [HttpPost]
        public async Task<ActionResult<List<Client>>> CreateClient(CreateClientDto request)
        {
            var newClient = new Client
            {
                Name = request.Name,
            };

            _context.clients.Add(newClient);
            await _context.SaveChangesAsync();

            return Ok(await _context.clients.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Client>>> UpdateClient(UpdateClientDto request)
        {
            var dbClient = await _context.clients.FindAsync(request.Id);
            if (dbClient == null)
            {
                return BadRequest("Registro no encontrado");
            }

            dbClient.Name = request.Name;

            await _context.SaveChangesAsync();

            return Ok(await _context.clients.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Client>>> DeleteClient(int id)
        {
            var dbClient = await _context.clients.FindAsync(id);
            if (dbClient == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.clients.Remove(dbClient);
            await _context.SaveChangesAsync();

            return Ok(await _context.clients.ToListAsync());
        }
    }
}
