import React from 'react';
import ReactDOM from 'react-dom';
import Allies from './allies/allies';


const data = [1,2,3,4,5,6,7];

ReactDOM.render(
	<Allies allies={data} />,
	document.getElementById('allies')
);
