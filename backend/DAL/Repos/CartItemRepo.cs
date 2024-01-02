using DAL.Entity_Framework;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class CartItemRepo : Repo, IRepo<cart_items>
    {
        public List<cart_items> Get()
        {
            return GreenLeafDatabase.cart_items.ToList();
        }

        public cart_items Get(int id)
        {
            throw new NotImplementedException();
        }

        public bool Add(cart_items obj)
        {
            GreenLeafDatabase.cart_items.Add(obj);
            return GreenLeafDatabase.SaveChanges() > 0;
        }

        public void Edit(cart_items obj)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}