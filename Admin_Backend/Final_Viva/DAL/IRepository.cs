using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public  interface IRepository<T,ID>
    {

        void Add(T e);
        void Edit(T e);
        

        List<T> Get();
        T Get(ID id);
        object GetById(int admin_ID);
        void Delete(ID id);


    }
}
