﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Token
    {
        [Key]
        public int Id {  get; set; }
        [Required]
        [StringLength(100)]
        public string TKey { get; set; }
        [Required]
        public DateTime CreateAt { get; set; }

        public DateTime? DeleteAt { get; set; }
        [Required]
        public string  admin_Id {  get; set; }





    }
}
