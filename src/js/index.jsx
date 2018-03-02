const path = require('path');

import React from 'react';
import ReactDOM from 'react-dom';
//import ModuloCompra from './modulo-de-compras';
import Nav from './nav/nav';

$(document).ready(function(){


	// Links para el menu y las redes
	const lista = ['Inicio', 'About Me', 'Contacto', 'Blog'];
	const redes = [
		"twitter": "twitter.com",
		"facebook": "facebook.com",
		"instagram": "instagram.com",

	];

	const imagen = "src/img/meCaricautre.jpg"; //Imagen del logo

	ReactDOM.render(
		<Nav imagen={imagen} tipo='nav-default' redes={redes} lista={lista} />, 
		document.getElementById('app')
	);
});

