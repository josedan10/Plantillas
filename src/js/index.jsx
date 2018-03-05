const path = require('path');

import React from 'react';
import ReactDOM from 'react-dom';
//import ModuloCompra from './modulo-de-compras';
import Nav from './nav/nav';
import Timer from './timer/timer';

$(document).ready(function(){


	// Links para el menu y las redes
	const links = ['Inicio', 'About Me', 'Contacto', 'Blog', 'Catálogo'];
	const redes = [
		"twitter": "twitter.com",
		"facebook": "facebook.com",
		"instagram": "instagram.com",
	];

	const logo = "src/img/meCaricautre.jpg"; 					//Imagen del logo

	const timer = {fecha: "2018-06-22", horaFinal: "00:00"};	//Datos para el timer

	ReactDOM.render(
		<div id='main'>
			<Nav tipo='nav-default' logo={logo} redes={redes} links={links} />
		</div>
		, 
		document.getElementById('app')
	);

	function tick(){
		ReactDOM.render(
			<Timer fecha={timer.fecha}  horaFinal={timer.horaFinal} />,
			document.getElementById('timer')
		);
	}

	setInterval(tick, 1000);
});

