import ReactDOM from 'react-dom';
import React from 'react';
import Timer from './timer/timer';


// Datos para el timer
const timer = {
	fecha: '2018-03-22', horaFinal: '02:29'					
};

function tick() {
	ReactDOM.render(
		<Timer fecha={timer.fecha} horaFinal={timer.horaFinal} />,
		document.getElementById('timer')
	);
}

setInterval(tick, 1000);

