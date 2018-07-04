namespace AspNetCore.Data
{
    using AspNetCore.Models;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class CustomDbContext : IdentityDbContext<ApplicationUser>
    {
        public CustomDbContext(DbContextOptions<CustomDbContext> options) : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
    }
}
