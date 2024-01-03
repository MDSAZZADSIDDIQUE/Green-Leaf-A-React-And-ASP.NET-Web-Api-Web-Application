using DAL.Entity_Framework;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class OrderRepo : Repo, IRepo<order>, IAddRepo<order, int>
    {
        public List<order> Get()
        {
            return GreenLeafDatabase.orders.ToList();
        }

        public order Get(int id)
        {
            var order = GreenLeafDatabase.orders.Find(id);
            if (order.status.Equals("pending"))
            {
                order.status = "shipped";
            }
            else
            {
                order.status = "delivered";
            }

            GreenLeafDatabase.SaveChanges();
            return order;
        }

        public bool Add(order obj)
        {
            throw new NotImplementedException();
        }

        public void Edit(order obj)
        {
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public order AddToClass(order obj)
        {
            throw new NotImplementedException();
        }

        public order GetTheClass(int obj)
        {
            var order = GreenLeafDatabase.orders.FirstOrDefault(c => c.user_id == obj);
            return order;
        }
    }
}