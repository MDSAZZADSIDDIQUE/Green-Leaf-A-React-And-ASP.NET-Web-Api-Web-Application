using DAL.Entity_Framework;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repos
{
    internal class PostRepo : Repo, IRepo<post>
    {
        public List<post> Get()
        {
            return GreenLeafDatabase.posts.ToList();
        }

        public post Get(int id)
        {
            throw new NotImplementedException();
        }

        public bool Add(post obj)
        {
            GreenLeafDatabase.posts.Add(obj);
            return GreenLeafDatabase.SaveChanges() > 0;
        }

        public void Edit(post obj)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}