using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    internal class PostContext : Green_LeafEntities
    {

        public DbSet<Token> Tokens { get; set; }


    }
}
