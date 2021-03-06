

function clickAgregarAlCarrito(evento) {
    const botonEvento = evento.target;
    const productoCarrito = botonEvento.closest('.container__fotoproducto__infoproducto__paginaproductos');

    const productoCarritoImagen = productoCarrito.querySelector('.foto__producto').src;
    const productoCarritoNombre = productoCarrito.querySelector('.info__producto').textContent;
    const productoCarritoPrecio = productoCarrito.querySelector('.precio__producto').textContent.replace('$', '');

    agregarFilaCarrito(productoCarritoImagen, productoCarritoNombre, productoCarritoPrecio);

    sumarTotalCarrito(productoCarritoPrecio);

}

function agregarFilaCarrito(productoCarritoImagen, productoCarritoNombre, productoCarritoPrecio) {

    const filaCarrito = document.createElement('div');
    filaCarrito.className = 'container__filaCarrito';
    filaCarrito.innerHTML =
        `
        <div class="fila__productoCarrito" id="fila__productoCarrito">

            <img class="imagen__productoCarrito" src="${productoCarritoImagen}">

            <div class="container__parrafosFilaProductoCarrito">
                <p class="producto__carritoNombre">Nombre: ${productoCarritoNombre} </p>
                <div class="container__precioCantidad">
                    <p class="productoCarritoPrecio">Precio: $${productoCarritoPrecio} </p>
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
        text: `Se a a??adido ${productoCarritoNombre} al carrito`,
        color: '#FFFFFF',
        background: '#1C1C1C',
        confirmButtonColor: '#3d58ce'
        })

}

    let valorCarrito = 0;
    let resultado = 0;

function sumarTotalCarrito(productoCarritoPrecio) {
    resultado = Number(valorCarrito) + Number(productoCarritoPrecio);
    valorCarrito = resultado;
    const containerValorCarrito = document.getElementById('total__carrito');
    containerValorCarrito.innerHTML = `Total: $${valorCarrito}`
}

function restarTotalCarrito(evento) {

    const clickEvento = evento.target;
    const filaProducto = clickEvento.closest('.fila__productoCarrito');

    containerFilaProductoPrecio = filaProducto.querySelector('.productoCarritoPrecio');
    filaProductoPrecio = Number(containerFilaProductoPrecio.textContent.replace('Precio: $ ', ''));

    valorCarrito = Number(document.querySelector('#total__carrito').textContent.replace('Total: $', ''));
    valorCarrito = Number(valorCarrito) - Number(filaProductoPrecio);
    const containerValorCarrito = document.getElementById('total__carrito');
    containerValorCarrito.innerHTML = `Total: $${valorCarrito}`;

}


function eliminarProductoCarrito(evento) {
    Swal.fire({
        title: '??Est?? seguro?',
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
            restarTotalCarrito(evento);
        }
    })
}

const botonComprar = document.getElementById('boton__comprar');
botonComprar.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Compra realizada',
        text: `El valor total de su compra fue de $${valorCarrito}.`,
        color: '#FFFFFF',
        background: '#1C1C1C',
        confirmButtonColor: '#3d58ce'
        })
})
