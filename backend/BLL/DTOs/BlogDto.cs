using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class BlogDto
    {
        public int id { get; set; }
        public string title { get; set; }
        public Nullable<int> author_id { get; set; }
        public string sub_title { get; set; }
        public string content_body { get; set; }
        public Nullable<System.DateTime> published_at { get; set; }
        public string image { get; set; }
        public double views { get; set; }
    }
}