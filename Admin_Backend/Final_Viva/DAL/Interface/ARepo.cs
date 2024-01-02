using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interface
{
    public  interface ARepo<Type,ID ,RET>
    { 

        RET Create(Type obj);
        List<Type> Read();

        Type Read(ID id);

        RET Update(Type obj);
        RET Delete(ID id);

    }
}           
