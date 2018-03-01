import React from 'react';
import ReactDOM from 'react-dom';

export default class ModuloCompra extends React.Component{

	super(props){
		this.props = props;
	}

	render(){

		//Imagenes de muestra para seleccionar y colocar como imagen principal

		const imagenesDeMuestra = (
			<div className='img-muestras'>
				<img src='http://conceptodefinicion.de/wp-content/uploads/2015/01/libro.jpg' />
				<img src='http://significadosdelossuenos.net/wp-content/uploads/2016/11/So%C3%B1ar-con-libros.png' />
			</div>
		);

		//Imagen de muestra principal en el objeto de compra

		const imagenPpal = 
			<div className='img-ppal'>
				<img src='http://conceptodefinicion.de/wp-content/uploads/2015/01/libro.jpg' />
			</div>;

		//Detalles del objeto: precio, cantidad disponible, cantidad a agregar al carrito

		const detallesDelProducto = (
			<div className='detalles-producto'>
				<h2 id='nombre-producto'>Nombre del Producto</h2>
				<select id='talla-producto'>
					<option value="S">S</option>
				 	<option value="M">M</option>
				 	<option value="L">L</option>
				  	<option value="XL">XL</option>
				</select>
				<p id='color-producto'>Negro</p>
				<h1 id='precio-producto'>50000</h1>
				Cantidad <input id="cantidad-producto" type="number" name="cantidad" min="1" max="10" defaultValue="1" />
			</div>

			//Agregar opciones para las tallas y los colores
		);

		return (
			<div id='moduloCompra' className='grid'>
				{imagenesDeMuestra}
				{imagenPpal}
				{detallesDelProducto}
				<BtnAgregarAlCarrito />
			</div>
		);
	}
}


class BtnAgregarAlCarrito extends React.Component{

	super(props){
		this.props = props;
		this.enviarOrden = enviarOrden;
	}

	enviarOrden(){

		//Este metodo crea un objeto para agregar al carrito

		var json, orden;

		var xmlhttp = new XMLHttpRequest();

		var nombre = document.getElementById('nombre-producto').innerHTML,
			precio = document.getElementById('precio-producto').innerHTML,
			talla = document.getElementById('talla-producto').value,
			color = document.getElementById('color-producto').innerHTML,
			cantidad = document.getElementById('cantidad-producto').value;

		//Consulta con AJAX

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

            	//Creamos el objeto, y lo convertimos en string para enviarlo al carrito
            	orden = new OrdenDeCompra(nombre, talla, color, cantidad);
            	json = JSON.stringify(orden);
            	alert('Se han agregado ' + cantidad + ' ' + nombre + ' talla ' + talla + ' de color ' + color + ' al carrito. \n TOTAL: ' + cantidad * precio);
            }
        };

        xmlhttp.open("GET", "src/php/cargarCarrito.php?orden=" + orden, true);
        xmlhttp.send();

        //alert('Se han agregado ' + cantidad + ' ' + nombre + ' talla ' + talla + ' de color ' + color + ' al carrito. \n TOTAL: ' + cantidad * precio);

	}



	render(){
		return <button onClick={this.enviarOrden}>Agregar al Carrito </button>
	}

}

class OrdenDeCompra{

	//Objeto de la orden de compra

	constructor(nombre, talla, color, cantidad){
		this.nombre = nombre;
		this.talla = talla;
		this.color = color;
		this.cantidad = cantidad;
	}

}