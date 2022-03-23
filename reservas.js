
let contenedor=document.getElementById("contenedor")
contenedor.addEventListener("click",function(evento){

    if(evento.target.classList.contains("w-100")){
        evento.target.src="img/rojo.png"
        
    }
})

//recibir datos del teclado//
let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("hizo click");
    let peliculas=document.getElementById("peliculas").value;
    console.log(peliculas);
    let asientos=document.getElementById("asientos").value;
    console.log(asientos);
    let tipoasiento=document.getElementById("tipoasiento").value;
    console.log(tipoasiento);


    if(tipoasiento=="Preferencial"){
        let preferencial= 15000;
        let valor1=preferencial*asientos;
        alert("por querer ver tu pelicula tendars que pagar:$"+valor1)
    }else{
        let general= 10000;
        let valor2=general*asientos;
        alert("por querer ver tu pelicula tendars que pagar:$"+valor2)
    }
}

