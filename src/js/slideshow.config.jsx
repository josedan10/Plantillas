import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './slideshow/slideshow';

$(document).ready(function () {
	const slideshow = [
		{
			titulo: 'Titulo del Evento 1',
			texto: 'Deserunt ullamco aliquip culpa labore culpa ea non magna sunt nulla aliquip. Dolor non adipisicing ut magna dolor adipisicing occaecat minim est duis laborum elit nisi. Adipisicing eiusmod non ex sit ut qui laborum id occaecat eu est pariatur mollit. Consequat reprehenderit eu do enim ullamco fugiat. Duis labore dolore fugiat ex aliqua in aliqua anim qui nisi veniam deserunt. Adipisicing enim incididunt eu aliqua cupidatat reprehenderit ad minim tempor id dolore elit.',
			imagen: '',
			id: 0
		},
		{
			titulo: 'Titulo del Evento 2',
			texto: 'In sit commodo sunt velit proident minim irure exercitation nostrud. Irure ad tempor ipsum qui cillum laboris. Labore amet est cillum magna anim laboris. Culpa duis ea ea occaecat in officia ex. Laboris elit cupidatat veniam qui enim dolor eiusmod magna amet ullamco. Commodo in eiusmod aute consectetur irure eiusmod mollit voluptate voluptate ad deserunt non. Deserunt nostrud minim eiusmod laborum excepteur.',
			imagen: '',
			id: 0
		},
		{
			titulo: 'Titulo del Evento 3',
			texto: 'Sit non deserunt tempor cillum fugiat elit officia. Laboris cillum quis enim ut nisi et ex. Adipisicing pariatur magna proident aliqua reprehenderit nisi. Eiusmod ex veniam velit ut sint nulla aliqua tempor culpa enim.',
			imagen: '',
			id: 0
		}
	];
    
	const configSlideShow = {
		intervalo: 5000,	// Tiempo que demora en cambiar de un slide a otro (milisegundos)
		efecto: 'fade',		// Opciones: fade, slide
		delayEfecto: 700	// Tiempo del efecto
		
	};

	var i = 0;

	for (let index in slideshow) {
		slideshow[index].id = i++;
	}

	ReactDOM.render(
		<SlideShow elementos={slideshow} config={configSlideShow}/>,
		document.getElementById('slideshow')
	);
});
