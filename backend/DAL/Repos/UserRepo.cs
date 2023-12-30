using DAL.Entity_Framework;

namespace DAL.Repos
{
    public class UserRepo
    {
        public static void RegisterUser(user user)
        {
            var database = new GreenLeafDatabaseEntities();
            database.users.Add(user);
            database.SaveChanges();
        }
    }
}