using DAL.Entity_Framework;
using System.Diagnostics;
using System.Linq;

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

        public static user LoginUser(string emailAddress, string password)
        {
            var database = new GreenLeafDatabaseEntities();
            return database.users.FirstOrDefault(u => u.email_address.Equals(emailAddress) && u.password.Equals(password));
        }

        public static user GetUserProfile(string id)
        {
            var database = new GreenLeafDatabaseEntities();
            Trace.WriteLine(id);
            var userId = int.Parse(id);
            return database.users.FirstOrDefault(u => u.id == userId);
        }
    }
}