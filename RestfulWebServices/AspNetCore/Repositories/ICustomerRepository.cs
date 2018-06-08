using System.Linq;
using AspNetCore.Models;

namespace AspNetCore.Repositories
{
    public interface ICustomerRepository
    {
        void Add(Customer customer);
        void Delete(int id);
        Customer Get(int id);
        IQueryable<Customer> GetAll();
        bool Save();
        void Update(Customer customer);
    }
}