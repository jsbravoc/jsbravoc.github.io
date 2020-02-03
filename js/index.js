document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#intro', {
        stringsElement: '#typed-intro',
        typeSpeed: 35,
        startDelay: 2000,
        loop: false,
        loopCount: 1,
        cursorChar: ''
    });
    var typed2 = new Typed('#descripcion', {
        strings: ["Soy estudiante", "Soy desarrollador Web", "Soy determinado", "Soy autodidacta"],
        typeSpeed: 35,
        startDelay: 2500,
        loop: true,
        loopCount: Infinity
    });
})