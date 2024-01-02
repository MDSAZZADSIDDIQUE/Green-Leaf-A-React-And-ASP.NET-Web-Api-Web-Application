using DAL.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public  class DataAccessFactory
    {
        static Green_LeafEntities db;
        static DataAccessFactory()
        {
            db = new Green_LeafEntities();  
        }

        public static  IRepository<AdminTable,int> AdminDataAccess()
        {
            return new AdminRepo(db);     
        }

     //   public static IRepository<ProductTable, int> ProductDataAccess() => new ProductRepo(db);
    
     public static IAuth<bool> AuthData()
        {

            return new AdminRepo(db);

        }
    
    
    
    }
}
