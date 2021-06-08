using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class DRegjistrims
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string emri { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string mbiemri { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string nrtel { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string tabelat { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string tipiVetures { get; set; }
    }
}
