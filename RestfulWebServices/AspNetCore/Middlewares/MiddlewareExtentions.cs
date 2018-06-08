namespace AspNetCore.Middlewares
{
    using Microsoft.AspNetCore.Builder;

    public static class MiddlewareExtentions
    {
        public static IApplicationBuilder UseCustomMiddleware(this IApplicationBuilder app)
        {
            return app.UseMiddleware<CustomMiddleware>();
        }
    }
}
