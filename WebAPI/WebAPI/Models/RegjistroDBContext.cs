using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class RegjistroDBContext:DbContext
    {
        public RegjistroDBContext(DbContextOptions<RegjistroDBContext> options) : base(options)
        { 
        
        }


        public DbSet<DRegjistrims> DRegjistrims { get; set; }
    }
}
