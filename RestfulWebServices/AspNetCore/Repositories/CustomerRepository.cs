﻿namespace AspNetCore.Repositories
{
    using AspNetCore.Data;
    using AspNetCore.Models;
    using AspNetCore.QueryParameters;
    using System.Linq;

    public class CustomerRepository : ICustomerRepository
    {
        private CustomDbContext _context;

        public CustomerRepository(CustomDbContext context)
        {
            this._context = context;
        }

        public IQueryable<Customer> GetAll(CustomerQueryParameters customerQueryParameters)
        {
            return this._context.Customers.OrderBy(x => x.FirstName)
                .Skip(customerQueryParameters.PageCount * (customerQueryParameters.Page - 1))
                .Take(customerQueryParameters.PageCount);
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

        public int Count()
        {
            return _context.Customers.Count();
        }

        public bool Save()
        {
            return this._context.SaveChanges() >= 0;
        }
    }
}
