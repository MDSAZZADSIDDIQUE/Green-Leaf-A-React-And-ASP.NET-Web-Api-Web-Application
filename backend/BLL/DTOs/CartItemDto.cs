using DAL.Entity_Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class CartItemDto
    {
        public int id { get; set; }
        public Nullable<int> cart_id { get; set; }
        public Nullable<int> product_id { get; set; }
        public Nullable<int> quantity { get; set; }
        public Nullable<double> price { get; set; }
        public string product_name { get; set; }
        public string image { get; set; }
    }
}