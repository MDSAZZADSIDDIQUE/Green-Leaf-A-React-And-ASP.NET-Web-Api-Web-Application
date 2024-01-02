using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DepartmentRepo : IRepository<ProductTable, int>
    {
        public void Add(DepartmentRepo e)
        {
            throw new NotImplementedException();
        }

        public void Add(ProductTable e)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Edit(DepartmentRepo e)
        {
            throw new NotImplementedException();
        }

        public void Edit(ProductTable e)
        {
            throw new NotImplementedException();
        }

        public List<DepartmentRepo> Get()
        {
            throw new NotImplementedException();
        }

        public DepartmentRepo Get(int id)
        {
            throw new NotImplementedException();
        }

        public object GetById(int admin_ID)
        {
            throw new NotImplementedException();
        }

        List<ProductTable> IRepository<ProductTable, int>.Get()
        {
            throw new NotImplementedException();
        }

        ProductTable IRepository<ProductTable, int>.Get(int id)
        {
            throw new NotImplementedException();
        }
    }
}
