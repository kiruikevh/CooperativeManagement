using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
using System;

[assembly: OwinStartup(typeof(Cooperatives.Startup))]

namespace Cooperatives
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = "ApplicationCookie",
                LoginPath = new PathString("/Home/Login"),
                ExpireTimeSpan = TimeSpan.FromMinutes(30), // Adjust the session timeout as needed
                SlidingExpiration = true
            });
        }
    }
}
