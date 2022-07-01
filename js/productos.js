const filtroProducto = document.querySelector('#categoria__productos');
const contenedorProductos = document.querySelector('#contenedor__productos__pagProductos')

traerDatosProductos();

filtroProducto.addEventListener('click', () => {
    traerDatosProductos();
})

async function traerDatosProductos() {
    const respuesta = await fetch('../js/productos.json');
    const data = await respuesta.json();
    crearCartaProducto(filtrarCategoria(data))

    const botonAgregarAlCarrito = document.querySelectorAll('.boton__agregarAlCarrito');

    botonAgregarAlCarrito.forEach((agregarAlCarrito) => {
    agregarAlCarrito.addEventListener('click', clickAgregarAlCarrito)
})
}

function crearCartaProducto(array) {
    contenedorProductos.innerHTML = ''
    array.forEach((producto) => {
        let contenedor = document.createElement('div');
        contenedor.className = 'container__fotoproducto__infoproducto__paginaproductos';
        contenedor.innerHTML =
        `
        <div class="container__foto__producto">
            <img src="${producto.imagen}" alt="imagen producto" class="foto__producto"
        </div>
        <div class="container__infoproducto">
            <p class="precio__producto"> $${producto.precio} </p>
            <p class="info__producto"> ${producto.nombre} </p>
            <div class="container__botonAgregarAlCarrito">
                <button class="boton__agregarAlCarrito" id="boton__agregarAlCarrito">Agregar al carrito</button>
            </div>
        </div>
        `;

        document.getElementById('contenedor__productos__pagProductos').appendChild(contenedor);

    });
}

function filtrarCategoria(array) {
    let categoria = filtroProducto.value;
    if (!categoria) {
        return array;
    } else {
        resultado = array.filter((e) => e.categoria == categoria);
        return resultado;
    }
}