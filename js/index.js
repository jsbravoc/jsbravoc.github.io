document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#intro', {
        stringsElement: '#typed-intro',
        typeSpeed: 8,
        backSpeed: 8,
        startDelay: 2000,
        loop: false,
        loopCount: 1
    });
    var typed2 = new Typed('#descripcion', {
        strings: ["Soy estudiante", "Soy desarrollador web", "Soy determinado", "Soy autodidacta"],
        typeSpeed: 8,
        backSpeed: 8,
        startDelay: 2500,
        loop: true,
        loopCount: Infinity
    });
})