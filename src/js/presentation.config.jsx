import React from 'react';
import ReactDOM from 'react-dom';
import PresentationFrame from './presentation-container/presentation';

const datos = [
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	}
];

ReactDOM.render(
	<PresentationFrame datos={datos} />,
	document.getElementById('Team')
);
