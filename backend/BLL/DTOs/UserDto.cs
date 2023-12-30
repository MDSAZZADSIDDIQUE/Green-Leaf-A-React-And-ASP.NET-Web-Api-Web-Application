namespace BLL.DTOs
{
    public class UserDto
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public System.DateTime date_of_birth { get; set; }
        public string email_address { get; set; }
        public string password { get; set; }
        public string picture { get; set; }
    }
}