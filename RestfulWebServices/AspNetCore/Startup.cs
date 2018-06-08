namespace AspNetCore
{
    using AspNetCore.Data;
    using AspNetCore.Middlewares;
    using AspNetCore.Repositories;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using System.Diagnostics;
    using System.IO;

    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                //.SetBasePath(Directory.GetCurrentDirectory())
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();

            Configuration = builder.Build();

            Debug.WriteLine($" ---> From Config: {Configuration["wholename"]}");
            Debug.WriteLine($" ---> From Config: {Configuration["addresses:permanent"]}");
            Debug.WriteLine($" ---> From Config: {Configuration["addresses:temporary"]}");
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //AY: Injects the services in the application ---> Dependency Injection 
            services.AddMvc();
            services.AddOptions();
            //services.Configure<MyConfiguration>(Configuration);
            services.AddDbContext<CustomDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<ICustomerRepository, CustomerRepository>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            if (env.IsEnvironment("MyEnvironment"))
            {
                //
            }

            if (env.IsProduction())
            {
                //
            }
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc();
            app.UseCustomMiddleware();

            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");

            //});
        }
    }
}
