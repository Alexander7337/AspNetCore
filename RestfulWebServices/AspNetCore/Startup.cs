namespace AspNetCore
{
    using AspNetCore.Data;
    using AspNetCore.DTOs;
    using AspNetCore.Middlewares;
    using AspNetCore.Models;
    using AspNetCore.Repositories;
    using AspNetCore.Services;
    using IdentityServer4.AccessTokenValidation;
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

            //AY: ASP.NET Core Identity Authentication. If configured, it changes the programming flow.
            //URL changes noticed, which might be a problem ({{domain}}/account/login?RedirectUri...). NB!!!
            //services.AddIdentity<Models.ApplicationUser, IdentityRole>()
            //  .AddEntityFrameworkStores<CustomDbContext>()
            //  .AddDefaultTokenProviders();

            //AYL Identity Server Authentication
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = IdentityServerAuthenticationDefaults.AuthenticationScheme;
            })
            .AddIdentityServerAuthentication(options =>
            {
                options.Authority = "http://localhost:57131/";
                options.RequireHttpsMetadata = false;
                options.ApiName = "resourcesScope";
            });

            //AY: Policy Requirements
            services.AddAuthorization(options =>
            {
                options.AddPolicy("resourcesAdmin", policyAdmin =>
                {
                    policyAdmin.RequireClaim("role", "resources.admin");
                });
                options.AddPolicy("resourcesUser", policyUser =>
                {
                    policyUser.RequireClaim("role", "resources.user");
                });
            });

            //AY: Allow Cross Origin Requests
            services.AddCors(policy => policy.AddPolicy("AllowCors", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            //
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

            //JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
            app.UseAuthentication();
            //AY: Obsolete
            //app.UseIdentity();

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

            //AY: Custom Middleware
            app.UseCustomMiddleware();

            //AY: Add Swagger
            app.UseSwagger();
            app.UseSwaggerUI(config => {
                config.SwaggerEndpoint("/swagger/v1/swagger.json", "My WebAPI");
            });

            //AY: Map classes
            AutoMapper.Mapper.Initialize(mapper =>
            {
                mapper.CreateMap<Customer, CustomerDto>().ReverseMap();
                mapper.CreateMap<Customer, CustomerCreateDto>().ReverseMap();
                mapper.CreateMap<Customer, CustomerUpdateDto>().ReverseMap();
            });

            //AY: Insert Data in DB
            app.AddSeedData();

            //AY: Allow Cross Origin Requests
            app.UseCors("AllowCors");

            //
            app.UseMvc(routes =>
                routes.MapRoute("default", "api/{controller=Customers}/{action?}/{id?}")
            );
        }
    }
}
