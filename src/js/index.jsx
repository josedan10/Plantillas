import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import Nav from './nav/nav';
// import Nav from './nav/nav-menu';

// // Links para el menu y las redes
// const links = ['Home', 'Services', 'Selected Works', 'Own Community', 'Team', 'Clients', 'Contact'];
// // const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

// // Imagen del logo
// const logo = 'src/img/logo.png'; 					

// ReactDOM.render(
// 	<Nav tipo='nav-left' logo={logo} links={links} />,
// 	document.getElementById('nav')
// );

class ButtonRequest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entrada: 'default',
			salida: 'default',
			dolarToday: null
		};
		this.bolivarDolar = null;
	}

	componentWillMount() {
		var respuesta,
			// stateCopy,
			bolivarDollar;

		axios.get('https://s3.amazonaws.com/dolartoday/data.json').then(response => {
			respuesta = response.data.USD.transferencia;
			document.getElementById('dolarToday').innerHTML = respuesta;

			//  Bolívar a Dólar
			bolivarDollar = (1 / parseFloat(respuesta)).toFixed(12);
			document.getElementById('bsToDollar').innerHTML = '1Bs -> ' + parseFloat(bolivarDollar).toExponential() + '$';
		});
	}

	conversion() {
		 
	}

	render() {

		return (
			<div>
				{/* <button style={{ height: '50px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					Realizar conversión
				</button> */}

				<label htmlFor='entryCoin'>Moneda de entrada</label>
				<select name='entryCoin' id='entryCoin' onChange={this.conversion}>
					<option value='default'>Seleccione una moneda</option>
					<option value='bolivar'>Bolívar (Bs)</option>
					<option value='dolar'>Dólar (USD)</option>
					<option value='peso'>Peso peruano (S)</option>
				</select>

				<label htmlFor='entryCoin'>Moneda de salida</label>
				<select name='entryCoin' id='entryCoin' onChange={this.conversion}>
					<option value='default'>Seleccione una moneda</option>
					<option value='bolivar'>Bolívar (Bs)</option>
					<option value='dolar'>Dólar (USD)</option>
					<option value='peso'>Sol peruano (S)</option>
				</select>

				<div style={{ height: '100px', width: '200px' }}>
					Valor del dolar: <span id='dolarToday' />
				</div>

				<table>
					<thead>
						<tr>
							<th>Entrada</th>
							<th>Salida</th>
							<th>Relación</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Bolívar</td>
							<td>Dólar</td>
							<td id='bsToDollar'/>
						</tr>
						<tr>
							<td>Bolívar</td>
							<td>Sol Peruano</td>
							<td id='bsToSol'/>
						</tr>
						<tr>
							<td>Dólar</td>
							<td>Bolívar</td>
							<td id=''/>
						</tr>
						<tr>
							<td>Dólar</td>
							<td>Sol Peruano</td>
							<td id=''/>
						</tr>
						<tr>
							<td>Sol Peruano</td>
							<td>Dólar</td>
							<td id=''/>
						</tr>
						<tr>
							<td>Sol Peruano</td>
							<td>Bolívar</td>
							<td id=''/>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

ReactDOM.render(
	<ButtonRequest />,
	document.getElementById('app')
);

