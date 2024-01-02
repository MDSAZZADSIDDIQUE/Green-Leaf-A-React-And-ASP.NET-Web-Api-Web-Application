using DAL.Entity_Framework;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL.Repos
{
    public class ProductRepo : Repo, IRepo<product>
    {
        public List<product> Get()
        {
            return GreenLeafDatabase.products.ToList();
        }

        public product Get(int id)
        {
            return GreenLeafDatabase.products.Find(id);
        }

        public bool Add(product obj)
        {
            GreenLeafDatabase.products.Add(obj);
            return GreenLeafDatabase.SaveChanges() > 0;
        }

        public void Edit(product obj)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}