using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    internal class Repo
    {
        internal Green_LeafEntities db;

        internal Repo()
        {

            db = new Green_LeafEntities();
        }

    }
}
