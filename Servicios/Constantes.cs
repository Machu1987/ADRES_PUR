using Microsoft.AspNetCore.Mvc.Rendering;

namespace PortalUnicoRecaudo.Servicios
{
    public class Constantes
    {
      public static readonly SelectListItem[] CulturasUISoportadas = new SelectListItem[]
      {
            new SelectListItem{Value = "es", Text = "ES" },
            new SelectListItem{Value = "en", Text = "EN" }
      };
    }
}
