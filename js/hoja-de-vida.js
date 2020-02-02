
const verificarMovil = function(){
    let url = window.location +"";
    let index = url.lastIndexOf("/pages");
    if(index>0)
    {
        let pdf = url.substring(0,index)+ "/assets/file.pdf";
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.location.replace(pdf);
    }
    else
    {
        console.log("Error: no se encontró la ruta adecuada del archivo PDF")
    }
   }
}

verificarMovil();