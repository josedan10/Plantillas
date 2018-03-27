import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class DolarTodayConversor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dolar: null
		};
	}

	componentWillMount() {    
	}
    
	componentDidMount() {
		// Obtain data from dolartoday api
		axios.get('https://s3.amazonaws.com/dolartoday/data.json').then(response => {
			const dolarValue = response.data.USD.transferencia;
			this.setState({ dolar: dolarValue });
		});
	}

	render() {
		return (
			<div>
				<form action='' method='post'>
					<label htmlFor='entry'>Entrada</label>
					<select name='entry' id='entry'>
						<option value='defaul'>Seleccione una opción</option>
						<option value='bolivar'>Bolívar (Bs)</option>
						<option value='pesos'>Pesos (Ps)</option>
						<option value='dolar'>Dólar (USD)</option>
					</select>

					<label htmlFor='exit'>Salida</label>
					<select name='exit' id='exit'>
						<option value='defaul'>Seleccione una opción</option>
						<option value='bolivar'>Bolívar (Bs)</option>
						<option value='pesos'>Pesos (Ps)</option>
						<option value='dolar'>Dólar (USD)</option>
					</select>
				</form>
			</div>
		);
	}
}

ReactDOM.render(
	<DolarTodayConversor />,
	document.getElementById('app')
);
