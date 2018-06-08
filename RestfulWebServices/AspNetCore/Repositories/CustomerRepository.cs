namespace AspNetCore.Repositories
{
    using AspNetCore.Data;
    using AspNetCore.Models;
    using System.Linq;

    public class CustomerRepository : ICustomerRepository
    {
        private CustomDbContext _context;

        public CustomerRepository(CustomDbContext context)
        {
            this._context = context;
        }

        public IQueryable<Customer> GetAll()
        {
            return this._context.Customers;
        }

        public Customer Get(int id)
        {
            return this._context.Customers.FirstOrDefault(c => c.ID == id);
        }

        public void Add(Customer customer)
        {
            this._context.Customers.Add(customer);
        }

        public void Delete(int id)
        {
            Customer customer = Get(id);
            this._context.Customers.Remove(customer);
        }

        public void Update(Customer customer)
        {
            this._context.Customers.Update(customer);
        }

        public bool Save()
        {
            return this._context.SaveChanges() >= 0;
        }
    }
}
