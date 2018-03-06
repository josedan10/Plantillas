import ReactDOM from 'react-dom';
import React from 'react';
import Timer from './timer/timer';

$(document).ready(function () {

    	// Datos para el timer
	const timer = {
		fecha: '2018-06-22', horaFinal: '00:00'					
	};

	function tick() {
		ReactDOM.render(
			<Timer fecha={timer.fecha} horaFinal={timer.horaFinal} />,
			document.getElementById('timer')
		);
	}

	setInterval(tick, 1000);

});
