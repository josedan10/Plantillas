import React from 'react';

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dias: 0,
			horas: 0,
			minutos: 0,
			segundos: 0,
			fecha: this.props.fecha, 			// Fecha en la que culmina el timer
			horaFinal: this.props.horaFinal		// Hora en la que termina el timer
		};

	}

	tiempoRestante() {
		var date = this.state.fecha + 'T' + this.state.horaFinal + ':00-04:00';

		var diaEvento = new Date(date),
			hoy = new Date();

		return diaEvento.getTime() - hoy.getTime();

	}

	render() {


		const diferencia = this.tiempoRestante();
		var dias, horas, minutos, segundos, timer,
			fecha = {
				dias: '',
				horas: '',
				minutos: '',
				segundos: ''
			};

		if (diferencia <= 0) {
			// El timer llegó a su fin
			location.reload();
			return;
		}

		// Milisegundos a segundos
		segundos = Math.floor(diferencia / 1000);

		// Segundos a minutos
		minutos = Math.floor(segundos / 60);

		// Segundos restantes
		segundos = segundos % 60;

		// Minutos a horas
		horas = Math.floor(minutos / 60);

		// Minutos restantes
		minutos = minutos % 60;

		// Horas a dias
		dias = Math.floor(horas / 24);

		// Horas restantes
		horas = horas % 24;

		// Apariencia
		
		if (dias < 10) fecha.dias = '0' + dias;

		else fecha.dias = dias;


		if (horas < 10) fecha.horas = '0' + horas;

		else fecha.horas = horas;


		if (minutos < 10) fecha.minutos = '0' + minutos;

		else fecha.minutos = minutos;


		if (segundos < 10) fecha.segundos = '0' + segundos;

		else fecha.segundos = segundos;



		timer = (

			<table className='timer-container'>
				<thead>
					<tr>
						<th>DÍAS</th>
						<th>HORAS</th>
						<th>MINUTOS</th>
						<th>SEGUNDOS</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{fecha.dias}</td>
						<td>{fecha.horas}</td>
						<td>{fecha.minutos}</td>
						<td>{fecha.segundos}</td>
					</tr>
				</tbody>
			</table>
		);

		return timer;
	}
}