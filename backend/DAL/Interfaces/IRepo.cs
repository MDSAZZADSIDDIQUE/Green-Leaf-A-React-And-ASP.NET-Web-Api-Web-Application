using System.Collections.Generic;

namespace DAL.Interfaces
{
    public interface IRepo<CLASS>
    {
        List<CLASS> Get();

        CLASS Get(int id);

        bool Add(CLASS obj);

        void Edit(CLASS obj);

        void Delete(int id);
    }
}