using DAL.Entity_Framework;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class CartRepo : Repo, IRepo<cart>, IAddRepo<cart, int>
    {
        public List<cart> Get()
        {
            throw new NotImplementedException();
        }

        public cart Get(int id)
        {
            return GreenLeafDatabase.carts.Find(id);
        }

        public bool Add(cart obj)
        {
            GreenLeafDatabase.carts.Add(obj);
            return GreenLeafDatabase.SaveChanges() > 0;
        }

        public void Edit(cart obj)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            var cart = Get(id);
            GreenLeafDatabase.carts.Remove(cart);
        }

        public cart AddToClass(cart obj)
        {
            var cart = GreenLeafDatabase.carts.Add(obj);
            GreenLeafDatabase.SaveChanges();
            return cart;
        }

        public cart GetTheClass(int obj)
        {
            var cart = GreenLeafDatabase.carts.FirstOrDefault(c => c.user_id == obj);
            return cart;
        }
    }
}