using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    internal class ProductRepo
    {

        Green_LeafEntities db;
        public ProductRepo(Green_LeafEntities db)
        {
            this.db = db;
        }


        public void Add(ProductTable p)
        {
            db.ProductTables.Add(p);
            db.SaveChanges();

        }

        public void Delete(int id)
        {
            var s = db.ProductTables.FirstOrDefault(p => p.PlantProductID == id);
            db.ProductTables.Remove(s);
            db.SaveChanges();
        }

        public void Edit(ProductTable e)
        {
            var s = db.ProductTables.FirstOrDefault(en => en.PlantProductID == e.PlantProductID);
            db.Entry(s).CurrentValues.SetValues(e);
            db.SaveChanges();
        }

        public List<ProductTable> Get()
        {
            return db.ProductTables.ToList();

        }

        public ProductTable Get(int id)
        {
            return db.ProductTables.FirstOrDefault(e => e.PlantProductID == id);
        }

        public object GetById(int PlantID)
        {
            throw new NotImplementedException();
        }
    }
}
