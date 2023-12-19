using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using PortalUnicoRecaudo.Models;
using System.Diagnostics;
using static PortalUnicoRecaudo.Models.ModelsAppSettings;

namespace PortalUnicoRecaudo.Controllers
{
    public class HomeController : Controller
    {
       
        private readonly IConfiguration configuration;
        private readonly IStringLocalizer<HomeController> localizer;

        public HomeController(IConfiguration configuration, IStringLocalizer<HomeController> localizer)
        {            
            this.configuration = configuration;
            this.localizer = localizer;
        }

        public IActionResult Index()
        {
            var enlacesBotones = configuration.GetSection("EnlacesBotones").Get<List<EnlaceBoton>>() ?? new List<EnlaceBoton>();          
            return View(enlacesBotones);
        }
       

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public IActionResult CambiarIdioma(string cultura, string urlRetorno)
        {
            Response.Cookies.Append(CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(cultura)),
                new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(5) }
                );

            return LocalRedirect(urlRetorno);
        }
    }
}