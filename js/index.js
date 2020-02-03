document.addEventListener('DOMContentLoaded', function() {
    let typed = new Typed('#intro', {
        stringsElement: '#typed-intro',
        typeSpeed: 35,
        startDelay: 2000,
        loop: false,
        loopCount: 1,
        cursorChar: ''
    });
    let typed2 = new Typed('#descripcion', {
        strings: ["Soy Estudiante", "Soy Desarrollador Web", "Soy determinado", "Soy autodidacta"],
        typeSpeed: 35,
        backSpeed: 20,
        startDelay: 2500,
        loop: true,
        loopCount: Infinity
    });
})