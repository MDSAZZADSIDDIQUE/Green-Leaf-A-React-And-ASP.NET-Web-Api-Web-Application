using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interface
{
   public  interface IAuth<Ret>
    {
        Ret Authenticate(string Admin_Name, string Admin_Password);

    
    
    
    
    }
}
