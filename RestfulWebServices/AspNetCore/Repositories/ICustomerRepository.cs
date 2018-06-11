namespace AspNetCore.Repositories
{
    using System.Linq;
    using AspNetCore.Models;
    using AspNetCore.QueryParameters;

    public interface ICustomerRepository
    {
        void Add(Customer customer);
        void Delete(int id);
        Customer Get(int id);
        IQueryable<Customer> GetAll(CustomerQueryParameters customerQueryParameters);
        bool Save();
        void Update(Customer customer);
        int Count();
    }
}