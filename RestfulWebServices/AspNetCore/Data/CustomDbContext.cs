namespace AspNetCore.Data
{
    using AspNetCore.Models;
    using Microsoft.EntityFrameworkCore;

    public class CustomDbContext : DbContext
    {
        public CustomDbContext(DbContextOptions<CustomDbContext> options) : base(options)
        {

        }

        public virtual DbSet<Customer> Customers { get; set; }
    }
}
