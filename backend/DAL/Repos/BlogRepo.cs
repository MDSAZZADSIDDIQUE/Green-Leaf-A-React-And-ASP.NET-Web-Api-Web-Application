using DAL.Entity_Framework;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL.Repos
{
    public class BlogRepo : Repo, IRepo<blog>
    {
        public List<blog> Get()
        {
            return GreenLeafDatabase.blogs.ToList();
        }

        public blog Get(int id)
        {
            var blog = GreenLeafDatabase.blogs.Find(id);
            blog.views += 0.5;
            GreenLeafDatabase.SaveChanges();
            return blog;
        }

        public bool Add(blog obj)
        {
            GreenLeafDatabase.blogs.Add(obj);
            return GreenLeafDatabase.SaveChanges() > 0;
        }

        public void Edit(blog obj)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}