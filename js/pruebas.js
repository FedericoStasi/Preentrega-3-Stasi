function agregarProducto(){
    let nombre = document.querySelector("nombreProducto").textContent
    let marca = document.querySelector("marcaProducto").textContent
    let descripcion = document.querySelector("descripcionProducto").textContent
    let precio = document.querySelector("precioProducto").textContent
    let categoria = document.querySelector("categoriaProducto").textContent
    let imagen = document.querySelector("imagenProducto").textContent
    
    productoNuevo = new producto(nombre,descripcion,precio,marca,categoria,img)
    productos.push(productoNuevo)
    armarCards()
}

let botonEnviar = document.querySelector(".botonenviar")
    botonEnviar.classList.remove("inputsOn")

    let botonEnviar = document.querySelector(".botonenviar")
botonEnviar.classList.add("inputsOn")

function borrarElemento(){
    let botonBorrar = document.querySelector(".botonBorrar")
    botonBorrar.addEventListener("click",borrarElemento)

    for (const i in productos) {
        if(productos[i]==botonBorrar.id){
            productos.pop(productos[i])
            armarCards()
        }
        else{continue}
    }
}


for (producto  in productos) {
    if (id !== producto.id) {
        contenidoHtml +=`
            <div class="card col-md-3">
            <div class="img-container ">
                <img src="./img/${producto.img}" alt="${producto.nombre}" class="card-img-top">
            </div>
            <div class="producto-info card-body">
                <h3 class="precio-producto card-title">${producto.nombre}</h3>
                <h4 class="precio-producto card-title">$${producto.precio}</h4>
                <p class="descripcion-producto card-text">${producto.descripcion}</p>
                <button class="botonBorrar" id=${producto.id} >eliminar</button>
            </div> 
            </div>`
              ;

             document.querySelector(".contenido").innerHTML = contenidoHtml
    }
    else{continue}

}