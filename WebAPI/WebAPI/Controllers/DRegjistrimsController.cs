using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DRegjistrimsController : ControllerBase
    {
        private readonly RegjistroDBContext _context;

        public DRegjistrimsController(RegjistroDBContext context)
        {
            _context = context;
        }

        // GET: api/DRegjistrims
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DRegjistrims>>> GetDRegjistrims()
        {
            return await _context.DRegjistrims.ToListAsync();
        }

        // GET: api/DRegjistrims/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DRegjistrims>> GetDRegjistrim(int id)
        {
            var dRegjistrim = await _context.DRegjistrims.FindAsync(id);

            if (dRegjistrim == null)
            {
                return NotFound();
            }

            return dRegjistrim;
        }

        // PUT: api/DRegjistrims/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDRegjistrim(int id, DRegjistrims dRegjistrim)
        {
            dRegjistrim.id = id;

            _context.Entry(dRegjistrim).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DRegjistrimExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DRegjistrims
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DRegjistrims>> PostDRegjistrim(DRegjistrims dRegjistrim)
        {
            _context.DRegjistrims.Add(dRegjistrim);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDRegjistrim", new { id = dRegjistrim.id }, dRegjistrim);
        }

        // DELETE: api/DRegjistrims/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDRegjistrim(int id)
        {
            var dRegjistrim = await _context.DRegjistrims.FindAsync(id);
            if (dRegjistrim == null)
            {
                return NotFound();
            }

            _context.DRegjistrims.Remove(dRegjistrim);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DRegjistrimExists(int id)
        {
            return _context.DRegjistrims.Any(e => e.id == id);
        }
    }
}
