namespace AspNetCore.Middlewares
{
    using AspNetCore.Models;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Options;
    using System.Diagnostics;
    using System.Text;
    using System.Threading.Tasks;

    public class CustomMiddleware
    {
        private readonly RequestDelegate _nextDelegate;
        private readonly MyConfiguration _myconfig;

        public CustomMiddleware(RequestDelegate next, IOptions<MyConfiguration> myconfig)
        {
            this._nextDelegate = next;
            this._myconfig = myconfig.Value;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            if (httpContext.Request.Path.ToString().ToLower() == "/middleware")
            {
                await httpContext.Response.WriteAsync("This is from the custom middleware", Encoding.UTF8);
            }
            else
            {
                Debug.WriteLine($" ---> Request asked for {httpContext.Request.Path} from {_myconfig.Wholename} living in {_myconfig.Addresses.Permanent}");

                await _nextDelegate.Invoke(httpContext);
            }
        }
    }
}
