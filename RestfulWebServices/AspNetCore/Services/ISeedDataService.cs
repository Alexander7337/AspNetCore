namespace AspNetCore.Services
{
    using System.Threading.Tasks;

    public interface ISeedDataService
    {
        void EnsureSeedData();
    }
}