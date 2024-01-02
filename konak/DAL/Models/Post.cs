using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Post
    {
        public int Id { get; set; }
        [Required]
        public string Tytle { get; set; }
        [Required]
        public string Description { get; set; }
        [ForeignKey("User")]
        public string PostedBy { get; set; }
        public DateTime Date { get; set; }  
        public virtual User User { get; set; }
        public virtual ICollection<Comment> Posts { get; set;}
        public Post()
        {
            Posts = new List<Comment>();
        }


    }
}
