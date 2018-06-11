namespace AspNetCore.Middlewares
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.Extensions.DependencyInjection;

    public static class MiddlewareExtentions
    {
        public static IApplicationBuilder UseCustomMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<CustomMiddleware>();
        }

        public static void AddSeedData(this IApplicationBuilder app)
        {
            var seedDataService = app.ApplicationServices.GetService<Services.ISeedDataService>();
            seedDataService.EnsureSeedData();
        }
    }
}
