using DAL.Entity_Framework;

namespace DAL.Repos
{
    public class Repo
    {
        protected GreenLeafDatabaseEntities GreenLeafDatabase;

        protected Repo()
        {
            GreenLeafDatabase = new GreenLeafDatabaseEntities();
        }
    }
}