import React from 'react';
import ReactDOM from 'react-dom';
import Testimonials from './testimonials/testimonials';

const data = [
	{
		img: 'src/img/logos/Memories cakes marron.png',
		name: 'Pepito Perez',
		text: 'Deserunt culpa et labore reprehenderit pariatur ullamco reprehenderit elit Lorem ea anim.',
		class: 'dark-brown'
	},
	{
		img: 'src/img/logos/Memories cakes rosado.png',
		name: 'Sofía Domínguez',
		text: 'Laboris occaecat commodo pariatur elit aute do laborum aliqua aute commodo.',
		class: 'pink'
	},
	{
		img: 'src/img/logos/Memories cakes negro.png',
		name: 'Jose Daniel',
		text: 'Exercitation eu ea veniam deserunt dolore in consequat ullamco deserunt id sit.',
		class: 'light-brown'
	},
	{
		img: 'src/img/logos/Memories cakes.png',
		name: 'Alan Brito Delgado',
		text: 'Deserunt adipisicing id occaecat id fugiat pariatur nostrud laborum adipisicing.',
		class: 'dark-brown'
	}
];

const dataPresentation = {
	title: 'Aliqua aliqua occaecat do qui aliqua consequat.',
	content: 'Amet ea anim voluptate magna ex mollit anim cillum cupidatat consectetur. Ullamco enim minim duis aliqua minim. Qui ex ut eiusmod veniam elit nulla aliquip ullamco.Enim cillum exercitation velit duis sint ex cupidatat occaecat velit. Sit ea in deserunt in non et culpa ipsum duis qui. Eu adipisicing ex duis sint reprehenderit cillum ea aliqua. Ut nisi id irure tempor et fugiat culpa labore occaecat commodo. Velit velit eiusmod non sunt incididunt eiusmod aliquip reprehenderit quis est.',
	img1: 'src/img/testimonials-bg2.png',
	img2: 'src/img/testimonials-bg1.png'
};

ReactDOM.render(
	<Testimonials presentation={dataPresentation} testimonials={data} />,
	document.getElementById('testimonials')
);
