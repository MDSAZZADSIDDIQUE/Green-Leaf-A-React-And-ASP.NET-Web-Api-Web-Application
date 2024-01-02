using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class ProductDto
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public Nullable<double> price { get; set; }
        public string category { get; set; }
        public string image { get; set; }
        public string status { get; set; }
        public Nullable<System.DateTime> date_added { get; set; }
        public Nullable<int> seller { get; set; }
    }
}