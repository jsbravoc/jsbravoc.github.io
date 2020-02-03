document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#intro', {
        stringsElement: '#typed-intro',
        typeSpeed: 15,
        backSpeed: 15,
        startDelay: 3000,
        loop: false,
        loopCount: Infinity
    });
    var typed2 = new Typed('#descripcion', {
        strings: ["Soy estudiante", "Soy desarrollador web", "Soy determinado", "Soy autodidacta"],
        typeSpeed: 15,
        backSpeed: 15,
        startDelay: 4000,
        loop: true,
        loopCount: Infinity
    });
})