import React from 'react';
import ReactDOM from 'react-dom';
// import Nav from './nav/nav';
import Nav from './nav/nav-menu';

$(document).ready(function () {


	// Links para el menu y las redes
	const links = ['Home', 'Services', 'Selected Works', 'Own Community', 'Team', 'Clients', 'Contact'];
	// const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

	// Imagen del logo
	const logo = 'src/img/logo.svg'; 					

	ReactDOM.render(
		<Nav tipo='nav-left' logo={logo} links={links} />,
		document.getElementById('nav')
	);
});

