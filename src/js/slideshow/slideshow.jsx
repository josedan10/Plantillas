import React from 'react';

export default class Slideshow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			active: 0
		};
		this.tick = null;
	}

	componentDidMount() {
		this.tick = setInterval(this.avanzarSlide.bind(this), 5000);
	}

	componentDidUpdate() {
		clearInterval(this.tick);
		this.tick = setInterval(this.avanzarSlide.bind(this), 5000);
	}

	componentWillUnmount() {
		clearInterval(this.tick);
	}

	devolverSlide() {
		
		let cambio,
			controls = $('.slideshow-control'),
			indice,
			siguiente,
			slideActual = $('.slideshow-active-element'),
			slides = $('.slideshow-element');
		
		for (indice = 0; indice < slides.length; indice++) {
			if (slides[indice].classList.contains('slideshow-active-element'))
				break;
		}

		cambio = indice - 1;

		if (cambio == -1) {
			siguiente = slides.length - 1;
		} else {
			siguiente = cambio;
		}

		this.setState({
			active: siguiente
		});

		// Efectos
		// slideActual.fadeOut(0);
		slideActual.removeClass('slideshow-active-element');
		controls.removeClass('control-active');

		slides[siguiente].classList.add('slideshow-active-element');
		controls[siguiente].classList.add('control-active');
		// $('.slideshow-active-element').fadeIn(700);
	}

	avanzarSlide() {
		let cambio,
			controls = $('.slideshow-control'),
			indice,
			siguiente,
			slideActual = $('.slideshow-active-element'),
			slideSiguiente,
			slides = $('.slideshow-element');
		
		for (indice = 0; indice < slides.length; indice++) {
			if (slides[indice].classList.contains('slideshow-active-element'))
				break;
		}

		cambio = indice + 1;

		if (cambio == slides.length) {
			siguiente = 0;
		} else {
			siguiente = cambio;
		}

		// Efectos
		this.setState({
			active: siguiente
		});

		// slideActual.fadeOut(0);
		slideActual.removeClass('slideshow-active-element');
		controls.removeClass('control-active');

		slides[siguiente].classList.add('slideshow-active-element');
		controls[siguiente].classList.add('control-active');
		// slideSiguiente = $('.slideshow-active-element');
		// slideSiguiente.fadeIn(700);
	}

	slideByArrow(e) {
		if (e.target.classList.contains('icon-navigate_before'))
			this.devolverSlide();
		else
			this.avanzarSlide();

		this.componentDidUpdate();
	}

	slideByControl(e) {
		
		let controls,
			indice;

		var slideActive,
			slides = $('.slideshow-element');

		// clearInterval(this.tick);

		// Verificamos que el control no sea el que está activo
		if (!e.target.classList.contains('control-active')) {
			// Cambiamos el control
			$('.control-active').removeClass('control-active');
			e.target.classList.add('control-active');
	
			// slides.fadeOut(0);	// Efecto del slideshow
			
			// Cambiamos el slide
			slides.removeClass('slideshow-active-element');
			controls = $('.slideshow-control');
	
			// Buscamos el índice del control activo
			for (let i = 0; i < controls.length; i++) {
				if (controls[i].classList.contains('control-active')) {
					indice = i;
					break;
				}
			}

			this.setState({
				active: indice
			});

			// this.autoSlide();
	
			slideActive = $('.slideshow-element')[indice];
			slideActive.classList.add('slideshow-active-element');
			
			// slideActive = $('.slideshow-active-element');
			// slideActive.fadeIn(700);	// Efectos para el slideshow

			this.componentDidUpdate();
		}
	}

	render() {

		let slideshow;

		// this.autoSlide();

		slideshow = (
			<div className='slideshow'>
				<SlideContainer elementos={this.props.elementos} active={this.state.active} delayEfecto={this.props.config.delayEfecto}/>
				<SlideArrows onClick={this.slideByArrow.bind(this)}/>
				<ContainerControls length='3' active={this.state.active} onClick={this.slideByControl.bind(this)}/>
			</div>
		);

		return (slideshow);
	}

}

class SlideContainer extends React.Component {
	
	// Contenedor de los SlideElements
	constructor(props) {
		super(props);
	}

	render() {
		let i = 0;
		let slide;
		const container = (
			<div className='slideshow-container-slides'>
				{this.props.elementos.map(elemento => {
					if (i == this.props.active) {
						slide = <SlideElement active={' slideshow-active-element'} key={'unique-' + i++} datos={elemento} delayEfecto={this.props.efecto}/>;
					} else {
						slide = <SlideElement active={''} key={'unique-' + i++} datos={elemento} delayEfecto={this.props.efecto}/>;
					}

					return slide;
				})}
			</div>
		);

		return container;
	}
}

class SlideElement extends React.Component {

	// Elementos del SlideContainer
	constructor(props) {
		super(props);

		// Estos elementos tienen una imagen, un título, y un texto
		this.datos = this.props.datos;

	}

	render() {

		let disp,
			info,
			texto = null,
			titulo = null;

		if (this.props.active != '') {
			disp = 'block';
		} else {
			disp = 'none';
		}

		const styles = {
			backgroundImage: this.datos.imagen
			// display: disp
		};

		if (!(this.datos.titulo === null)) {
			titulo = <h3 key={'h3-' + this.datos.id}>{this.datos.titulo}</h3>;	
		}

		if (!(this.datos.texto === null)) {
			texto = <p key={'p-' + this.datos.id}>{this.datos.texto}</p>;
		}

		info = [titulo, texto];


		return (
			<div className={'slideshow-element' + this.props.active} style={styles}>
				<div className='slide-element-info'>
					{info}
				</div>
			</div>
		);
	}

}

class ContainerControls extends React.Component {
	constructor(props) {
		super(props);
	}

	crearControles() {

		let controles = [];

		for (let i = 0; i < this.props.length; i++) {
			if (i == this.props.active) {
				controles.push(<SlideControl key={'control-' + i.toString()} estado='active' onClick={this.props.onClick}/>);
			} else {
				controles.push(<SlideControl key={'control-' + i.toString()} estado='disable' onClick={this.props.onClick}/>);
			}
		}

		return controles;
	}

	render() {

		return (
			<div className='slideshow-container-controls'>
				<ul>
					{this.crearControles()}
				</ul>
			</div>
		);
	}

}

class SlideControl extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const estado = (this.props.estado == 'active') ? 'control-active ' : '';

		return <li className={estado + 'slideshow-control'} onClick={this.props.onClick} />;
	}
}

class SlideArrows extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className='slideshow-arrows'>
				<i className='icon icon-navigate_before' onClick={this.props.onClick}/>
				<i className='icon icon-navigate_next' onClick={this.props.onClick}/>
			</div>
		);
	}
}
