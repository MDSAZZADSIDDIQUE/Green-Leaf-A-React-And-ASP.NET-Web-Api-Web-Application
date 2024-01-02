using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class OrderDto
    {
        public int id { get; set; }
        public Nullable<int> cart_id { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public string status { get; set; }
        public string user_name { get; set; }
        public string amount { get; set; }
        public string shipping_address { get; set; }
    }
}