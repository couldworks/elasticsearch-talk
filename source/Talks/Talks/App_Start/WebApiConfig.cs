using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Talks
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "Search",
                routeTemplate: "api/{controller}/{query}/{from}/{take}"
            );

            //config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new { id = RouteParameter.Optional, action = "DefaultAction" });

        }
    }
}
