using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class CartDto
    {
        public int id { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<System.DateTime> created_at { get; set; }
        public Nullable<int> order_id { get; set; }
    }
}