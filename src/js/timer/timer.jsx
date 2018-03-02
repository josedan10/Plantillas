import React from 'react';

export default Timer extends React.Componet{
	constructor(props){
		super(props);
		this.state = {
			dias: 0;
			horas: 0,
			minutos: 0,
			segundos: 0,
			fecha: this.props.fecha,
			horaInicio: this.props.horaInicio,
			contador: null,
		}

	}

	tiempoRestante(){
		var date = this.state.fecha+"T"+this.state.horaInicio+":00-04:00";

		var diaEvento = new Date(date),
			hoy = new Date();

		return diaEvento.getTime() - hoy.getTime();

	}

	iniciarConteo(){
		const diferencia = this.tiempoRestante();

		if(diferencia <= 0){
			location.reload();
			return;
		}

		//Milisegundos a segundos
		this.setState({segundos: Math.floor(diferencia / 1000)});

		//Segundos a minutos
		this.setState({minutos: Math.floor(this.state.segundos / 60)});

		//Segundos restantes
		this.setState({segundos: this.segundos % 60});

		//Minutos a horas
		this.setState({horas: Math.floor(this.state.minutos / 60)});

		//Minutos restantes
		this.setState({minutos: this.state.minutos % 60});

		//Horas a dias
		this.setState({dias: Math.floor(this.state.horas / 24)});

		//Horas restantes
		this.setState({horas: this.state.horas % 24});


		var dias = $('#dias'),
			horas = $('#horas'),
			minutos = $('#minutos'),
			segundos = $('#segundos');


		//Apariencia
		
		if(this.state.dias < 10) dias.text("0" + this.state.dias);

		else dias.text(this.state.dias);


		if(this.state.horas < 10) horas.text("0" + this.state.horas);

		else dias.text(this.state.horas);


		if(this.state.minutos < 10) minutos.text("0" + this.state.minutos);

		else minutos.text(this.state.minutos);


		if(this.state.segundos < 10) segundos.text("0" + this.state.segundos);

		else segundos.text(this.state.segundos);

	}

	render(){

	}
}