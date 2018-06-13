namespace SecurityService.UserServices
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class UserRepository : IUserRepository
    {
        private readonly List<CustomUser> _users = new List<CustomUser>()
        {
            new CustomUser
            {
                SubjectId = "123",
                UserName = "postmanadmin",
                Password = "postmanadmin",
                Email = "postmanadmin@email.bg"
            },
            new CustomUser
            {
                SubjectId = "456",
                UserName = "postmanuser",
                Password = "postmanuser",
                Email = "postmanadmin@email.bg"
            }
        };

        public bool ValidateCredentials(string username, string password)
        {
            var user = FindByUsername(username);
            if (user != null)
            {
                return user.Password.Equals(password);
            }

            return false;
        }

        public CustomUser FindBySubjectId(string subjectId)
        {
            return _users.FirstOrDefault(x => x.SubjectId == subjectId);
        }

        public CustomUser FindByUsername(string username)
        {
            return _users.FirstOrDefault(x => x.UserName.Equals(username, StringComparison.OrdinalIgnoreCase));
        }
    }
}
