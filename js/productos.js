
//Objetos
class Producto {
    constructor(nombre, precio, categoria, imagen) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria.toUpperCase();
        this.imagen = imagen;
    }
}

//Array
const productos = []

productos.push(new Producto('Aceite Motul 5100 4t 15w50 Semisintetico', 1724, 'aceite', `<img src="../images/aceite_motul.jpg" alt="imagen producto" class="foto__producto" >`));

productos.push(new Producto('Bateria Yuasa Ytx5l Bs Gel Honda Cg 150 Titan Xr', 4598, 'bateria', `<img src="../images/bateria_yuasa.jpg" alt="imagen producto" class="foto__producto" >`));

productos.push(new Producto('Casco para moto Punto Extremo XR650 negro mate talle XL', 17438, 'casco', `<img src="../images/casco_negro.jpg" alt="imagen producto" class="foto__producto" >`));

productos.push(new Producto('Cubierta 130 90 15 Vee Rubber Indiana Custom 250 Hd 254', 15798, 'cubierta', `<img src="../images/cubierta.jpg" alt="imagen producto" class="foto__producto" >`));

productos.push(new Producto('Cubiertas Metzeler 90 90 21 + 120 80 18 Enduro 3 Full', 45035, 'cubierta', `<img src="../images/cubiertas_metzeler.jpg" alt="imagen producto" class="foto__producto" >`));

productos.push(new Producto('Guantes Probiker Racing Pb-4 Cuero Protecciones', 1999, 'guantes', `<img src="../images/guantes_moto.jpg" alt="imagen producto" class="foto__producto" >`));

productos.push(new Producto('Kit Cilindro Vedamotors 293 Honda Twister Tornado 250', 14613, 'cilindro', `<img src="../images/kit_cilindro.jpg" alt="imagen producto" class="foto__producto" >`));

productos.push(new Producto('Kit Transmision Did Tornado Honda 250 C Orring Full', 14609, 'transmision', `<img src="../images/kit_transmision.jpg" alt="imagen producto" class="foto__producto" >`));

productos.push(new Producto('Lubricante Cadena Valvoline Chain Lube 400 Ml', 2050, 'lubricante', `<img src="../images/lubricante_cadena.jpg" alt="imagen producto" class="foto__producto" >`));



for (const producto of productos) {
    let contenedor = document.createElement('div');
    contenedor.className = 'container__fotoproducto__infoproducto__paginaproductos';
    contenedor.innerHTML =
        `
        <div class="container__foto__producto">
            ${producto.imagen}
        </div>
        <div class="container__infoproducto">
            <p class="precio__producto">$ ${producto.precio} </p>
            <p class="info__producto"> ${producto.nombre} </p>
            <div class="container__botonAgregarAlCarrito">
                <button class="boton__agregarAlCarrito" id="boton__agregarAlCarrito">Agregar al carrito</button>
            </div>
        </div>
        `;

    document.getElementById('contenedor__productos__pagProductos').appendChild(contenedor);
}


