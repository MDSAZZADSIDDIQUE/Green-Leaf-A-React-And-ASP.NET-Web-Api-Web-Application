using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class PostDto
    {
        public int id { get; set; }
        public Nullable<System.DateTime> created_at { get; set; }
        public string caption { get; set; }
        public Nullable<int> user_id { get; set; }
        public string image { get; set; }
    }
}