namespace AspNetCore
{
    using AspNetCore.Data;
    using AspNetCore.DTOs;
    using AspNetCore.Middlewares;
    using AspNetCore.Models;
    using AspNetCore.Repositories;
    using AspNetCore.Services;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Diagnostics;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc.Formatters;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;
    using NLog.Web;
    using Swashbuckle.AspNetCore.Swagger;
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
            env.ConfigureNLog("nlog.config");

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
            
            services.AddOptions();
            //services.Configure<MyConfiguration>(Configuration);
            services.AddDbContext<CustomDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<ICustomerRepository, CustomerRepository>();
            services.AddScoped<ISeedDataService, SeedDataService>();

            services.AddSwaggerGen(config =>
            {
                config.SwaggerDoc("v1", new Info { Title = "My WebAPI", Version = "v1" });
            });

            services.AddMvc(config => {
                config.ReturnHttpNotAcceptable = true;
                config.OutputFormatters.Add(new XmlSerializerOutputFormatter());
                config.InputFormatters.Add(new XmlSerializerInputFormatter());
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //AY: It is possible to add Configuration.GetSection("") in the method;
            loggerFactory.AddConsole();
            //AY: Different levels of logging
            loggerFactory.AddDebug();
            //AY: Add NLog to ASP.NET Core
            //app.AddNLogWeb(); -----> obsolete

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(errorApp =>
                {
                    errorApp.Run(async context =>
                    {
                        context.Response.StatusCode = 500;
                        context.Response.ContentType = "text/plain";
                        var errorFeature = context.Features.Get<IExceptionHandlerFeature>();
                        if (errorFeature != null)
                        {
                            var logger = loggerFactory.CreateLogger("Global exception logger");
                            logger.LogError(500, errorFeature.Error, errorFeature.Error.Message);
                        }

                        await context.Response.WriteAsync("There was an error");
                    });
                });
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
            
            app.UseCustomMiddleware();

            //AY: Add Swagger
            app.UseSwagger();
            app.UseSwaggerUI(config => {
                config.SwaggerEndpoint("/swagger/v1/swagger.json", "My WebAPI");
            });

            AutoMapper.Mapper.Initialize(mapper =>
            {
                mapper.CreateMap<Customer, CustomerDto>().ReverseMap();
                mapper.CreateMap<Customer, CustomerCreateDto>().ReverseMap();
                mapper.CreateMap<Customer, CustomerUpdateDto>().ReverseMap();
            });

            app.AddSeedData();

            app.UseMvc();

            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");

            //});
        }
    }
}
