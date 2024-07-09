using Cooperatives.Migrations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Cooperatives.Models
{
    public class EventModel
    {
        [Key]
        public int EventId { get; set; }
        [Required]
        public string EventName { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public DateTime EventDate { get; set; }
        //[ForeignKey("Status")]
        //public int StatusId { get; set; }
        //public StatusModel Status { get; set; }
    }
}