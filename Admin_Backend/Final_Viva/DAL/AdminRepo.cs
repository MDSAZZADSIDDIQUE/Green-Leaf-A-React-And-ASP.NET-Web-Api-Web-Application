using DAL.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class AdminRepo : IRepository<AdminTable, int> , IAuth<bool>
    {

        Green_LeafEntities db;
        public AdminRepo(Green_LeafEntities db)
        {
            this.db = db;
        }
        

        public void Add(AdminTable e)
        {
            db.AdminTables.Add(e);
            db.SaveChanges();
            
        }

        public bool Authenticate(string Admin_Name, string Admin_Password)
        {
            var data = db.AdminTables.FirstOrDefault(a => a.Admin_Name.Equals(Admin_Name) && Admin_Password.Equals(Admin_Password) );
            if (data != null) return true;
            return false;
        }

        public void Delete(int id)
        {
            var s = db.AdminTables.FirstOrDefault(e=> e.Admin_ID == id);
            db.AdminTables.Remove(s);
            db.SaveChanges();   
        }

        public void Edit(AdminTable e)
        {
            var s = db.AdminTables.FirstOrDefault(en => en.Admin_ID == e.Admin_ID);
            db.Entry(s).CurrentValues.SetValues(e);
            db.SaveChanges();
        }

        public List<AdminTable> Get()
        {
            return db.AdminTables.ToList();

        }

        public AdminTable Get(int id)
        {
            return db.AdminTables.FirstOrDefault(e=>e.Admin_ID == id);
        }

        public object GetById(int admin_ID)
        {
            throw new NotImplementedException();
        }
    }
}
