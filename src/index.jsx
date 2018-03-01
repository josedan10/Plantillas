const path = require('path');

import React from 'react';
import ReactDOM from 'react-dom';
//import ModuloCompra from './modulo-de-compras';
import Nav from '../js/nav/nav';

$(document).ready(function(){

	// console.log(path.resolve(__dirname, 'js/nav/nav'));

	const redes = ['twitter', 'facebook'];
	const lista = ['Inicio', 'About Me'];

	ReactDOM.render(
		<Nav tipo='nav-default' redes={redes} lista={lista} />, 
		document.getElementById('app')
	);
});

