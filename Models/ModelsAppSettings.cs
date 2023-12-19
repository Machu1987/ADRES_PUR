namespace PortalUnicoRecaudo.Models
{
    public class ModelsAppSettings
    {
        public class EnlaceBoton
        {
            public string NombreBoton { get; set; } = string.Empty;
            public string UrlBoton { get; set; } = string.Empty;
            public string NombreAction { get; set; } = string.Empty;
        }

        public class MySettingsModel
        {
            public List<EnlaceBoton> EnlacesBotones { get; set; } = new List<EnlaceBoton>();
        }
    }
}
