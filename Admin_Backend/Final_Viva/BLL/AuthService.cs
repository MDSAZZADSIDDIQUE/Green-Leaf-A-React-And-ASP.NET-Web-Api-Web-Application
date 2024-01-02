using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class AuthService
    {
        public static bool Authenticate(string Admin_Name, string Admin_Password)
        {


            return DataAccessFactory.AuthData().Authenticate(Admin_Name, Admin_Password);   


        }

    }
}
