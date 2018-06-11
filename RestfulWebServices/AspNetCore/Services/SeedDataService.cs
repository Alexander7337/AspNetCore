namespace AspNetCore.Services
{
    using AspNetCore.Data;
    using AspNetCore.Models;
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    public class SeedDataService : ISeedDataService
    {
        private CustomDbContext _context;

        public SeedDataService(CustomDbContext context)
        {
            _context = context;
        }

        public void EnsureSeedData()
        {
            _context.Database.EnsureCreated();

            if (!_context.Customers.Any())
            {
                _context.Customers.RemoveRange(_context.Customers);
                _context.SaveChanges();

                Customer customer = new Customer();
                customer.FirstName = "Dimitar";
                customer.LastName = "Ivanov";
                customer.Age = 35;

                Customer customer_2 = new Customer();
                customer_2.FirstName = "Alexander";
                customer_2.LastName = "Yanev";
                customer_2.Age = 31;

                _context.Add(customer);
                _context.Add(customer_2);

                _context.SaveChanges();
            }
        }
    }
}
