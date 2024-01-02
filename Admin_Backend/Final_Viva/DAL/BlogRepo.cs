using DAL.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    internal class BlogRepo : Repo, ARepo<AdminBlog_Model, string, AdminBlog_Model>

    {
        public AdminBlog_Model Create(AdminBlog_Model obj)
        {
            throw new NotImplementedException();
        }

        public AdminBlog_Model Delete(string id)
        {
            throw new NotImplementedException();
        }

        public List<AdminBlog_Model> Read()
        {
            throw new NotImplementedException();
        }

        public AdminBlog_Model Read(string id)
        {
            throw new NotImplementedException();
        }

        public AdminBlog_Model Update(AdminBlog_Model obj)
        {
            throw new NotImplementedException();
        }
    }
}
