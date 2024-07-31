//VARIABLES
 const productos =[
    //bebidas
    {id:1,nombre:"cocacola",descripcion:"bebida de cola",precio:2500,marca:"cocacola company",categoria:"bebida",img:"cocacola"},
    {id:2,nombre:"pepsi",descripcion:"bebida de cola",precio:2500,marca:"pepsico",categoria:"bebida",img:"cocacola"},
    {id:3,nombre:"fanta",descripcion:"bebida de naranja",precio:1500,marca:"cocacola company",categoria:"bebida",img:"cocacola"},
    {id:4,nombre:"incacola",descripcion:"bebida de cola",precio:1300,marca:"arca continental lindley",categoria:"bebida",img:"cocacola"},

    //snaks
    {id:5,nombre:"papas fritas",descripcion:"chips de papa",precio:3000,marca:"pepsico",categoria:"snaks",img:"cocacola"},
    {id:6,nombre:"chisitos",descripcion:"snak de harina de maiz sabor queso",precio:2200,marca:"krachitos",categoria:"snaks",img:"cocacola"},
    {id:7,nombre:"palitos salados",descripcion:"palitos de harina de trigo sabor panceta",precio:1700,marca:"pep",categoria:"snaks",img:"cocacola"},
    {id:8,nombre:"takis",descripcion:"chips de maiz picantes",precio:3000,marca:"barcel",categoria:"snaks",img:"cocacola"},
    {id:9,nombre:"papas picantes",descripcion:"chips de papa pcantes",precio:3000,marca:"barcel",categoria:"snaks",img:"cocacola"},
]&& JSON.parse(localStorage.getItem("productos"))

class producto{
    constructor(id,nombre,descripcion,precio,marca,categoria,img){
        this.id = id
        this.nombre=nombre
        this.marca=marca
        this.precio=precio
        this.descripcion=descripcion
        this.categoria =categoria
        this.img=img
    }
}



//funciones
function armarCards(){
    

    


    contenidoHtml = ""
    productos.forEach(producto =>{

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
                
    })
    
   
   
}
let botonBorrar = document.querySelectorAll(".botonBorrar")
for (const i in botonBorrar) {
    console.log(botonBorrar[i]);
}
function borrarElemento(){
    console.log(botonBorrar)
    
}
 





function fomrOn() {
let forms = document.querySelectorAll("input")
let botonEnviar = document.querySelector(".botonenviar")
botonEnviar.classList.add("inputsOn")
for (const i in forms) {
   forms[i].classList.add("inputsOn")
}
}



function fomrOf() {
    let forms = document.querySelectorAll("input")
    let botonEnviar = document.querySelector(".botonenviar")
    botonEnviar.classList.remove("inputsOn")
    
    for (const i in forms) {
       forms[i].classList.remove("inputsOn")
    }

    
}


armarCards()

const saveArray = () =>{
    localStorage.setItem("productos",JSON.stringify(productos))
}
function agregarProducto(){
    let id = productos.slice(-1)[0]+1
    let nombre = document.querySelector(".nombreProducto").value
    let marca = document.querySelector(".marcaProducto").value
    let descripcion = document.querySelector(".descripcionProducto").value
    let precio = document.querySelector(".precioProducto").value
    let categoria = document.querySelector(".categoriaProducto").value
    let img = document.querySelector(".imagenProducto").value
    

    productoNuevo = new producto(id,nombre,descripcion,precio,marca,categoria,img)
    productos.push(productoNuevo)
    armarCards()
    
    fomrOf()
}










const botonForm = document.getElementById("botonAgregar")
botonForm.addEventListener("click",fomrOn)
botonForm.addEventListener("dblclick",fomrOf)


let botonEnviar = document.querySelector(".botonenviar")
botonEnviar.addEventListener("click",agregarProducto)


borrarElemento()
