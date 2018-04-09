import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './slideshow/slideshow';


const slideshow = [
	{
		title: 'Cake #001',
		text: 'Ipsum deserunt ea occaecat elit nisi irure ipsum dolor aliquip aliquip.',
		price: '70.000',
		image: 'src/img/postres/postre1.png',
		id: 0
	},
	{
		title: 'Cake #002',
		text: 'Aute mollit ullamco ullamco aliqua consequat tempor adipisicing laboris consequat in labore.',
		price: '95.000',
		image: 'src/img/postres/postre2.png',
		id: 0
	},
	{
		title: 'Cake #003',
		text: 'Sunt in nostrud ad consectetur reprehenderit Lorem fugiat minim ut incididunt exercitation.',
		price: '83.000',
		image: 'src/img/postres/postre3.png',
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
