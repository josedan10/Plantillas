import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery/gallery';


const data = [
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '50.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '80.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '90.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '100.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '90.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '100.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '50.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '80.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '90.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '50.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '80.000',
		img: null
	},
	{
		name: null,
		text: 'Magna proident dolore ipsum ullamco ex non elit officia proident.',
		price: '90.000',
		img: null
	}
];

data.forEach((item, index) => {
	data[index].name = (index + 1 < 10) ? 'Cake #00' + (index + 1) : 'Cake #0' + (index + 1);
	data[index].img = 'src/img/postres/postre' + ((index % 4) + 1) + '.png'; 
});

ReactDOM.render(
	<Gallery items={data} />,
	document.getElementById('gallery')  
);
