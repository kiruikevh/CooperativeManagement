using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Cooperatives.Models
{
    public class StatusModel
    {
        [Key]
        public int StatusId { get; set; }
        [Required]
        public string StatusName { get; set; }
        
    }
}