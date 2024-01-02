using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace D_App
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var data = AdminService.GetName();
            foreach (var item in data)
            {


                Console.WriteLine(item);
            }
        }
    }
}
