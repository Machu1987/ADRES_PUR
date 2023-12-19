// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//BARRA ACCESIBILIDAD.
document.addEventListener("keyup", detectTabKey);

function detectTabKey(e) {
    if (e.keyCode == 9) {
        if (document.getElementById("botoncontraste").classList.contains("active-barra-accesibilidad-govco")) {
            document.getElementById("botoncontraste").classList.toggle("active-barra-accesibilidad-govco");
        }
        if (document.getElementById("botonaumentar").classList.contains("active-barra-accesibilidad-govco")) {
            document.getElementById("botonaumentar").classList.toggle("active-barra-accesibilidad-govco");
        }
        if (document.getElementById("botondisminuir").classList.contains("active-barra-accesibilidad-govco")) {
            document.getElementById("botondisminuir").classList.toggle("active-barra-accesibilidad-govco");
        }
    }
}

function cambiarContexto() {

    var botoncontraste = document.getElementById("botoncontraste");
    var botonaumentar = document.getElementById("botonaumentar");
    var botondisminuir = document.getElementById("botondisminuir");

    if (!botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
        botoncontraste.classList.toggle("active-barra-accesibilidad-govco");
        document.getElementById("titleaumentar").style.display = "";
        document.getElementById("titledisminuir").style.display = "";
        document.getElementById("titlecontraste").style.display = "none";
    }
    if (botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
        botondisminuir.classList.remove("active-barra-accesibilidad-govco");
    }
    if (botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
        botonaumentar.classList.remove("active-barra-accesibilidad-govco");
    }

    const elementos = document.querySelectorAll("button, h1");
   

    // Agregar la clase a cada botón
   

    if (document.body.classList.contains('dark-theme')) {       
        document.body.classList.remove('dark-theme');      
        elementos.forEach(function (boton) {
            boton.classList.remove("dark-theme");
        });

        localStorage.setItem('theme', 'light');
    } else {   
        document.body.classList.add('dark-theme');

        elementos.forEach(function (boton) {
            boton.classList.add("dark-theme");
        });
        localStorage.setItem('theme', 'dark');     
    }
}

function disminuirTamanio(operador) {

    var botoncontraste = document.getElementById("botoncontraste");
    var botonaumentar = document.getElementById("botonaumentar");
    var botondisminuir = document.getElementById("botondisminuir");

    if (!botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
        botondisminuir.classList.toggle("active-barra-accesibilidad-govco");
        document.getElementById("titleaumentar").style.display = "";
        document.getElementById("titledisminuir").style.display = "none";
        document.getElementById("titlecontraste").style.display = "";
    }
    if (botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
        botonaumentar.classList.remove("active-barra-accesibilidad-govco");
    }
    if (botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
        botoncontraste.classList.remove("active-barra-accesibilidad-govco");
    }

    let div1 = document.getElementById("carouselExampleGovco2");
    const elementos = div1.querySelectorAll("button, h1");

    for (let element of elementos) {
        const total = tamanioElemento(element);
        if (total <= 64) {
            const nuevoTamanio = (operador === 'aumentar' ? (total + 1) : (total - 1)) + 'px';
            element.style.fontSize = nuevoTamanio;
        }
    }  
}

function aumentarTamanio(operador) {

    var botoncontraste = document.getElementById("botoncontraste");
    var botonaumentar = document.getElementById("botonaumentar");
    var botondisminuir = document.getElementById("botondisminuir");

    if (!botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
        botonaumentar.classList.toggle("active-barra-accesibilidad-govco");
        document.getElementById("titleaumentar").style.display = "none";
        document.getElementById("titledisminuir").style.display = "";
        document.getElementById("titlecontraste").style.display = "";
    }
    if (botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
        botondisminuir.classList.remove("active-barra-accesibilidad-govco");
    }
    if (botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
        botoncontraste.classList.remove("active-barra-accesibilidad-govco");
    }



    let div1 = document.getElementById("carouselExampleGovco2");
    const elementos = div1.querySelectorAll("button, h1");

    for (let element of elementos) {
        const total = tamanioElemento(element);
        if (total <= 64) {
            const nuevoTamanio = (operador === 'aumentar' ? (total + 1) : (total - 1)) + 'px';
            element.style.fontSize = nuevoTamanio
        }
    }
}

function tamanioElemento(element) {
    const tamanioParrafo = window.getComputedStyle(element, null).getPropertyValue('font-size');
    return parseFloat(tamanioParrafo);
}

//CARUSEL

window.addEventListener("load", function (event) {
    window.addEventListener('resize', windowSizeCarrusel);
    windowSizeCarrusel();
});

var carousels = document.querySelectorAll('.carrusel-govco');
var configurationCarousel = {};
for (const carousel of carousels) {
    configurationCarousel[carousel.id] = new bootstrap.Carousel(carousel, {
        pause: false
    });

    var controlsCarrusel = carousel.querySelectorAll('.control-start-pause .controls');
    methodAssign("click", startStopCarousel, controlsCarrusel);

    carousel.addEventListener('slid.bs.carousel', function () {
        this.querySelectorAll('.carousel-item:not(.active) a').forEach(x => x.tabIndex = -1);
        this.querySelectorAll('.carousel-item.active a').forEach(x => x.tabIndex = 0);
    });
}

function windowSizeCarrusel() {
    let containerInputsFile = document.querySelectorAll('.carrusel-govco');
    for (let e of containerInputsFile) {
        if (e.offsetWidth < 652) {
            e.classList.add('responsive-carrusel-govco');
        } else {
            e.classList.remove('responsive-carrusel-govco');
        }
    }
}

function methodAssign(e, f, a) {
    for (let i of a) {
        i.addEventListener(e, f, false);
    }
}

function startStopCarousel() {
    const container = this.parentNode.parentNode;
    this.classList.remove("active");

    if (this.classList.contains("start")) {
        this.nextElementSibling.classList.add("active");
        configurationCarousel[container.id].cycle();
    } else {
        this.previousElementSibling.classList.add("active");
        configurationCarousel[container.id].pause();
    }
}




document.querySelectorAll('.btn-govco').forEach(function (button) {
    button.addEventListener('click', function () {       
        const url = this.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

function cambiarIdioma(cultura) {
    var form = document.getElementById('cultura');
    form.value = cultura;
    form.form.submit();
}


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
});


