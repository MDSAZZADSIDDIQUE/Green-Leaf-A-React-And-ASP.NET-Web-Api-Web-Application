using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class OrderItemDto
    {
        public int id { get; set; }
        public Nullable<int> order_id { get; set; }
        public Nullable<int> product_id { get; set; }
        public Nullable<int> quantity { get; set; }
        public Nullable<double> price { get; set; }
    }
}