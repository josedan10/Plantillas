import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/nav';

$(document).ready(function () {


	// Links para el menu y las redes
	const links = ['Inicio', 'About Me', 'Contacto', 'Blog', 'Catálogo'];
	const redes = ['twitter', 'facebook', 'instagram'];

	// Imagen del logo
	const logo = 'src/img/meCaricautre.jpg'; 					

	ReactDOM.render(
		<div id='main'>
			<header>
				<Nav tipo='nav-default' logo={logo} redes={redes} links={links} />
			</header>
		</div>
		,
		document.getElementById('app')
	);
});

