using GoldenSoftAPI.DataTransfer.InventorySystem.Inventory;
using GoldenSoftAPI.Models.InventorySystem;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoldenSoftAPI.Controllers.InventorySystem
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

        //Obtener todos los registros
        [HttpGet]
        public async Task<ActionResult<List<Inventory>>> GetAll()
        {
            var inventory = await _context.inventory
                .Include(i => i.caliber)
                .Include(i => i.variety)
                .Include(i => i.quality)
                .Include(i => i.typeBox)
                .Include(i => i.purchaseOrder)
                .Include(i => i.client)
                .ToListAsync();

            return Ok(inventory);
        }


        //Obtener un solo registro
        [HttpGet("id")]
        public async Task<ActionResult<List<Inventory>>> Get(int id)
        {
            var inventories = await _context.inventory
                .Where(i => i.Id == id)
                .ToListAsync();

            return inventories;
        }

        //Ingresar entrada de inventario
        [HttpPost]
        public async Task<ActionResult<List<Inventory>>> Create(CreateInventoryDto request)
        {
            //Revisar si existe calibre
            var caliber = await _context.Calibers.FindAsync(request.caliberId);
            if (caliber == null)
            {
                return NotFound("Este tipo de calibre no existe");
            }
            //Revisar si existe variedad
            var variety = await _context.Variety.FindAsync(request.varietyId);
            if (variety == null)
            {
                return NotFound("Este tipo de variedad no existe");
            }
            //Revisar si existe calidad
            var quality = await _context.Quality.FindAsync(request.qualityId);
            if (quality == null)
            {
                return NotFound("Este tipo de calidad no existe");
            }
            //Revisar si existe tipo de caja
            var typebox = await _context.TypeBox.FindAsync(request.typeBoxId);
            if (typebox == null)
            {
                return NotFound("Este tipo de caja no existe");
            }
            //Revisar si existe cliente
            var client = await _context.clients.FindAsync(request.clientId);
            if (client == null)
            {
                return NotFound("Este cliente no existe");
            }
            //Revisar si existe orden de compra
            var purchaseorder = await _context.purchases.FindAsync(request.purchaseOrderId);
            if (purchaseorder == null)
            {
                return NotFound("Esta orden de compra no existe");
            }

            var newInventory = new Inventory
            {
                numberPallet = request.numberPallet,
                numberBatch = request.numberBatch,
                date = request.date,
                numberBoxes = request.numberBoxes,
                barcode = request.barcode,
                caliber = caliber,
                variety = variety,
                quality = quality,
                typeBox = typebox,
                client = client,
                purchaseOrder = purchaseorder
            };

            _context.inventory.Add(newInventory);
            await _context.SaveChangesAsync();

            var inventories = await _context.inventory.ToListAsync();


            return Ok(inventories);
        }

        [HttpPut]
        public async Task<ActionResult<List<Inventory>>> UpdateInventory(UpdateInventoryDto request)
        {
            //Revisar si existe registro de inventario
            var dbInventory = await _context.inventory.FindAsync(request.Id);
            if (dbInventory == null)
            {
                return BadRequest("Registro no encontrado");
            }
            //Revisar si existe calibre
            var caliber = await _context.Calibers.FindAsync(request.caliberId);
            if (caliber == null)
            {
                return NotFound("Este tipo de calibre no existe");
            }
            //Revisar si existe variedad
            var variety = await _context.Variety.FindAsync(request.varietyId);
            if (variety == null)
            {
                return NotFound("Este tipo de variedad no existe");
            }
            //Revisar si existe calidad
            var quality = await _context.Quality.FindAsync(request.qualityId);
            if (quality == null)
            {
                return NotFound("Este tipo de calidad no existe");
            }
            //Revisar si existe tipo de caja
            var typebox = await _context.TypeBox.FindAsync(request.typeBoxId);
            if (typebox == null)
            {
                return NotFound("Este tipo de caja no existe");
            }
            //Revisar si existe cliente
            var client = await _context.clients.FindAsync(request.clientId);
            if (client == null)
            {
                return NotFound("Este cliente no existe");
            }
            //Revisar si existe orden de compra
            var purchaseorder = await _context.purchases.FindAsync(request.purchaseOrderId);
            if (purchaseorder == null)
            {
                return NotFound("Esta orden de compra no existe");
            }

            dbInventory.numberPallet = request.numberPallet;
            dbInventory.numberBatch = request.numberBatch;
            dbInventory.date = request.date;
            dbInventory.numberBoxes = request.numberBoxes;
            dbInventory.barcode = request.barcode;
            dbInventory.caliber = caliber;
            dbInventory.quality = quality;
            dbInventory.variety = variety;
            dbInventory.typeBox = typebox;
            dbInventory.client = client;
            dbInventory.purchaseOrder = purchaseorder;

            await _context.SaveChangesAsync();

            return Ok(await _context.inventory.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Inventory>>> DeleteInventory(int id)
        {
            var dbInventory = await _context.inventory.FindAsync(id);
            if (dbInventory == null)
            {
                return NotFound("Registro no encontrado");
            }

            _context.inventory.Remove(dbInventory);
            await _context.SaveChangesAsync();

            return Ok(await _context.inventory.ToListAsync());
        }


    }
}
