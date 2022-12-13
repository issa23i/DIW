let cuadroBusqueda= document.querySelector(".caja");
cuadroBusqueda.addEventListener("mouseout",vaciar);
let botonBusqueda=document.querySelector(".botonBusqueda")
botonBusqueda.addEventListener("click",buscar);

function vaciar(){
    cuadroBusqueda.value="";
}

function buscar(){
    document.querySelector("#miForm").submit();
}