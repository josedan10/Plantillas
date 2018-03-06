import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/nav';
import SlideShow from './slideshow/slideshow';
import Timer from './timer/timer';

$(document).ready(function () {


	// Links para el menu y las redes
	const links = ['Inicio', 'About Me', 'Contacto', 'Blog', 'Catálogo'];
	const redes = ['twitter', 'facebook', 'instagram'];

	// Imagen del logo
	const logo = 'src/img/meCaricautre.jpg'; 					

	// Datos para el timer
	const timer = {
		fecha: '2018-06-22', horaFinal: '00:00'					
	};

	const slideshow = [
		{
			titulo: 'Titulo del Evento 1',
			texto: 'Lorem Ipsum Dolor',
			imagen: '',
			id: 0
		},
		{
			titulo: 'Titulo del Evento 2',
			texto: 'Lorem Ipsum Dolor 2',
			imagen: '',
			id: 0
		},
		{
			titulo: 'Titulo del Evento 3',
			texto: 'Lorem Ipsum Dolor 3',
			imagen: '',
			id: 0
		}
	];

	const configSlideShow = {
		intervalo: 5000,	// Tiempo que demora en cambiar de un slide a otro (milisegundos)
		efecto: 'fade',		// Opciones: fade, slide
		delayEfecto: 1000	// Tiempo del efecto
		
	};

	var i = 0;

	for (let index in slideshow) {
		slideshow[index].id = i++;
	}

	ReactDOM.render(
		<div id='main'>
			<Nav tipo='nav-default' logo={logo} redes={redes} links={links} />
			<SlideShow elementos={slideshow} config={configSlideShow}/>
		</div>
		,
		document.getElementById('app')
	);

	function tick() {
		ReactDOM.render(
			<Timer fecha={timer.fecha} horaFinal={timer.horaFinal} />,
			document.getElementById('timer')
		);
	}

	setInterval(tick, 1000);
});

