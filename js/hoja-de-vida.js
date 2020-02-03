/*
Función para cargar el PDF de la Hoja de Vida en un celular. Dado que varios celulares no soportan el elemento <object data=../>
Se utiliza esta función para que los rediriga (inmediatamente cargue la página) a la descarga del archivo.
pre: El archivo existe en la ruta y el usuario navega a la página hoja-de-vida.
post: Si el usuario se encuentra visitando la página desde un celular, se redirigirá a la descarga de la hoja de vida. En caso contrario,
el navegador mostrará de manera normal el PDF según la integración propia del mismo. 
 */
const verificarMovil = function() {
    let url = window.location + "";
    let index = url.lastIndexOf("/pages");
    if (index > 0) {
        let pdf = url.substring(0, index) + "/assets/file.pdf";
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.replace(pdf);
        } else {
            console.log("Error: no se encontró la ruta adecuada del archivo PDF")
        }
    }
}

verificarMovil();