namespace SecurityService.UserServices
{
    public interface IUserRepository
    {
        CustomUser FindBySubjectId(string subjectId);
        CustomUser FindByUsername(string username);
        bool ValidateCredentials(string username, string password);
    }
}