

function clickAgregarAlCarrito(evento) {
    const botonEvento = evento.target;
    const productoCarrito = botonEvento.closest('.container__fotoproducto__infoproducto__paginaproductos');

    const productoCarritoImagen = productoCarrito.querySelector('.foto__producto').src;
    const productoCarritoNombre = productoCarrito.querySelector('.info__producto').textContent;
    const productoCarritoPrecio = productoCarrito.querySelector('.precio__producto').textContent;

    agregarFilaCarrito(productoCarritoImagen, productoCarritoNombre, productoCarritoPrecio);

}

function agregarFilaCarrito(productoCarritoImagen, productoCarritoNombre, productoCarritoPrecio) {
    const filaCarrito = document.createElement('div');
    filaCarrito.className = 'container__filaCarrito';
    filaCarrito.innerHTML =
        `
        <div class="fila__productoCarrito" id="fila__productoCarrito">

            <img class="imagen__productoCarrito" src="${productoCarritoImagen}">

            <div class="container__parrafosFilaProductoCarrito">
                <p>Nombre: ${productoCarritoNombre} </p>
                <div class="container__precioCantidad">
                    <p>Precio: ${productoCarritoPrecio} </p>
                    <p>cantidad: <input class="input__cantidadProducto" type="number" value="1" id="" mira min="1" mira max="9" pattern="^[0-9]+" onpaste="return false;" onDrop="return false;" autocomplete=off></p>
                </div>
            </div>
                
            <div class="container__botonEliminarProducto">
                <button class="boton__eliminarProducto" id="boton__eliminarProducto">Eliminar</button>
            </div>

        </div>
        `;

    document.getElementById('container__carritoTemporal').appendChild(filaCarrito);

    const botonEliminarProductoCarrito = filaCarrito.querySelector('#boton__eliminarProducto');

    botonEliminarProductoCarrito.addEventListener('click', eliminarProductoCarrito)

    Swal.fire({
        imageUrl: `${productoCarritoImagen}`,
        text: `Se a añadido ${productoCarritoNombre} al carrito`,
        color: '#FFFFFF',
        background: '#1C1C1C',
        confirmButtonColor: '#3d58ce'
        })

}


function eliminarProductoCarrito(evento) {
    Swal.fire({
        title: '¿Está seguro?',
        text: "Si pulsa en eliminar se removera el producto de su carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00BB2D',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        color: '#FFFFFF',
        background: '#1C1C1C'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Eliminado!',
                text: 'Su producto a sido eliminado del carrito',
                icon: 'success',
                color: '#FFFFFF',
                background: '#1C1C1C',
                confirmButtonColor: '#3d58ce'
            })
            const botonEliminar = evento.target;
            botonEliminar.closest('.container__filaCarrito').remove();
        }
    })
}