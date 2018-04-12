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

class DolarToday extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entrada: '',
			salida: '',
			bolivarDolar: null,
			solDolar: 3.22,		
			comision: 0.0,
			subTotal: 0.0,
			total: 0.0
		};

		this.epsilon = 0.000019;
	}

	componentWillMount() {
		var respuesta;

		axios.get('https://s3.amazonaws.com/dolartoday/data.json').then(response => {
			respuesta = response.data.USD.transferencia;

			this.setState(Object.assign({}, this.state, { bolivarDolar: respuesta }));
			
		});
	}
	
	relacionBolivarDolar() {
		
		//  Bolívar a Dólar
		let bolivarDolar,
			resultado;

		bolivarDolar = (1 / parseFloat(this.state.bolivarDolar)).toFixed(12);
		
		if (bolivarDolar < this.epsilon) {
			resultado = <td>1 Bs -> {parseFloat(bolivarDolar).toExponential()} USD</td>;
		} else {
			resultado = <td>1 Bs -> {parseFloat(bolivarDolar)} USD</td>;
		}

		return resultado;
	}

	relacionbolivarDolar() {
		
		//  Dólar a Bolívar
		let bolivarDolar,
			resultado;


		bolivarDolar = parseFloat(this.state.bolivarDolar).toFixed(12);

		if (bolivarDolar < this.epsilon) {
			resultado = <td>1 USD -> {parseFloat(bolivarDolar).toExponential()} Bs</td>;
		} else {
			resultado = <td>1 USD -> {parseFloat(bolivarDolar)} Bs</td>;
		}

		return resultado;
	}

	relacionDolarSol() {
		return <td>1 USD -> 3.22 PEN</td>;
	}

	relacionSolDolar() {
		return <td>1 PEN -> {(1 / this.state.solDolar).toFixed(6)} USD</td>;
	}

	relacionSolBolivar() {
		return <td>1 PEN -> {this.state.solDolar * parseFloat(this.state.bolivarDolar)} Bs.</td>;
	}

	relacionBolivarSol() {
		let bolivarSol = (this.state.solDolar / parseFloat(this.state.bolivarDolar)).toFixed(11);

		if (bolivarSol < this.epsilon) {
			bolivarSol = parseFloat(bolivarSol).toExponential();
		}
		return <td>1 Bs -> {bolivarSol} PEN</td>;
	}

	conversion() {
		let inputCoin = document.getElementById('inputCoin').value,
			outputCoin = document.getElementById('outputCoin').value,
			valor = document.getElementById('valor').value,
			comision,
			resultado;

		if ((inputCoin != 'default' && outputCoin != 'default') && (inputCoin != outputCoin) && (valor !== null && valor !== '')) {
			switch (inputCoin) {
			case 'Bs':
				switch (outputCoin) {
				case 'USD':
					// Conversión Bs a USD
					resultado = (valor / parseFloat(this.state.bolivarDolar)).toFixed(2);
					break;
				case 'PEN':
					// Conversión de Bs a PEN
					resultado = (valor * this.state.solDolar / parseFloat(this.state.bolivarDolar)).toFixed(2);
					break;
				default:
					console.log('Error');
					break;
				}
				break;
			case 'USD':
				switch (outputCoin) {
				case 'Bs':
					// Conversión de USD a Bs
					resultado = (valor * parseFloat(this.state.bolivarDolar)).toFixed(2);
					break;
				case 'PEN':
					// Conversión de USD a PEN
					resultado = (valor * this.state.solDolar).toFixed(2);
					break;
				default:
					console.log('Error');
					break;
				}
				break;
			case 'PEN':
				switch (outputCoin) {
				case 'Bs':
					// Conversion de PEN a Bs
					resultado = (valor * this.state.solDolar * parseFloat(this.state.bolivarDolar)).toFixed(2);
					break;
				case 'USD':
					// Conversión de PEN a USD
					resultado = (valor / this.state.solDolar).toFixed(2);
					break;
				default:
					console.log('Error');
					break;
				}
				break;

			default:
				console.log('Error');
				break;
			}
			comision = parseFloat(resultado * 0.035).toFixed(2);

			this.setState(Object.assign({}, this.state, {
				entrada: inputCoin,
				salida: outputCoin,
				subTotal: parseFloat(resultado).toFixed(2),
				comision: parseFloat(comision).toFixed(2),
				total: parseFloat(parseFloat(resultado) - parseFloat(comision)).toFixed(2)
			}));
		} else {
			this.setState(Object.assign({}, this.state, {
				entrada: '',
				salida: '',
				subTotal: 0.00,
				comision: 0.00,
				total: 0.00
			}));
		}


		// document.getElementById('subTotal').innerHTML = resultado;
		// document.getElementById('comision').innerHTML = comision;
		// document.getElementById('total').innerHTML = resultado + comision;

		return;
	}

	render() {
		
		return (
			<div className='container'>
				<div className='title'>
					Valor del dolar: {this.state.bolivarDolar} Bs.
				</div>
				<div className='info'>
					<label htmlFor='inputCoin'>Moneda de entrada</label>
					<select name='inputCoin' id='inputCoin' onChange={this.conversion.bind(this)}>
						<option value='default'>Seleccione una moneda</option>
						<option value='Bs'>Bolívar (Bs)</option>
						<option value='USD'>Dólar (USD)</option>
						<option value='PEN'>Peso peruano (PEN)</option>
					</select>

					<label htmlFor='outputCoin'>Moneda de salida</label>
					<select name='outputCoin' id='outputCoin' onChange={this.conversion.bind(this)}>
						<option value='default'>Seleccione una moneda</option>
						<option value='Bs'>Bolívar (Bs)</option>
						<option value='USD'>Dólar (USD)</option>
						<option value='PEN'>Sol peruano (PEN)</option>
					</select>

					<label htmlFor='valor'>valor a transferir</label>
					<input type='number' name='valor' id='valor' step='0.01' min='0' onChange={this.conversion.bind(this)}/>
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
							{this.relacionBolivarDolar()}
						</tr>
						<tr>
							<td>Bolívar</td>
							<td>Sol Peruano</td>
							{this.relacionBolivarSol()}
						</tr>
						<tr>
							<td>Dólar</td>
							<td>Bolívar</td>
							{this.relacionbolivarDolar()}
						</tr>
						<tr>
							<td>Dólar</td>
							<td>Sol Peruano</td>
							{this.relacionDolarSol()}
						</tr>
						<tr>
							<td>Sol Peruano</td>
							<td>Dólar</td>
							{this.relacionSolDolar()}
						</tr>
						<tr>
							<td>Sol Peruano</td>
							<td>Bolívar</td>
							{this.relacionSolBolivar()}
						</tr>
					</tbody>
				</table>

				<div className='resultado'>

					<span className='subTotal'><b>Sub Total:</b> {parseFloat(this.state.subTotal).toFixed(2) + ' ' + this.state.salida}</span>
					<br/>
					<br/>
					<br/>
					<span className='comision'><b>Comisión:</b> {parseFloat(this.state.comision).toFixed(2) + ' ' + this.state.salida}(3.5%)</span>
					<br/><br/><br/>
					<span className='total'><b>Total:</b> {parseFloat(this.state.total).toFixed(2) + ' ' + this.state.salida}</span>
				
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<DolarToday />,
	document.getElementById('app')
);

