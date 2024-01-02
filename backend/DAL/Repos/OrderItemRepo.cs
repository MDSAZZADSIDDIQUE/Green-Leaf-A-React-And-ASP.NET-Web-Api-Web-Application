using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Entity_Framework;
using DAL.Interfaces;

namespace DAL.Repos
{
    internal class OrderItemRepo : Repo, IRepo<order_items>
    {
        public List<order_items> Get()
        {
            throw new NotImplementedException();
        }

        public order_items Get(int id)
        {
            throw new NotImplementedException();
        }

        public bool Add(order_items obj)
        {
            throw new NotImplementedException();
        }

        public void Edit(order_items obj)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}