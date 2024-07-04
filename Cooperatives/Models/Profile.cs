using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Cooperatives.Models
{
    public class ProfileModel
    {
        [Key]
        public int ID { get; set; }
        public string UserId { get; set; }
        [Required]
        [DisplayName ("Phone Number")]
        public string  PhoneNumber  { get; set; }
        [Required]
        [DisplayName("Email Address")]
        public string Email { get; set; }
        [Required]
        [MaxLength (10)]
        [DisplayName("ID Number")]
        public string  IDnumber { get; set; }
        [Required]
        [DisplayName("Address")]
        public string Address  { get; set; }
    }
}