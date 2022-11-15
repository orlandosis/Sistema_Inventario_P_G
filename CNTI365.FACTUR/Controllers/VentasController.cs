using CNTI365.FACTUR.WEB.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CNTI365.FACTUR.Controllers
{
    public class VentasController : Controller
    {
        // GET: Ventas
        public ActionResult Ventas()
        {
            var session = Session.GetCurrentUser();

            if (session != null)
            {
                Response.Cache.SetCacheability(HttpCacheability.ServerAndNoCache);
                Response.Cache.SetAllowResponseInBrowserHistory(false);
                Response.Cache.SetNoStore();
                return View();
            }
            else
            {
                Response.Cache.SetCacheability(HttpCacheability.ServerAndNoCache);
                Response.Cache.SetAllowResponseInBrowserHistory(false);
                Response.Cache.SetNoStore();
                return RedirectToAction("Index", "Home");
            }
        }
    }
}