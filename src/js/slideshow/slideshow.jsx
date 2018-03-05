import React from 'react';

export default class Slideshow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			active: 0
		}
	}

	render() {

		let slideshow;

		slideshow = (
			<div className='slideshow'>
				<SlideContainer elementos={this.props.elementos} active={this.state.active}/>
				<SlideArrows />
				<ContainerControls length='3' active={this.state.active} />
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
			<div className='slideshow-container'>
				{this.props.elementos.map(elemento => {
					if (i == this.props.active) {
						slide = <SlideElement active={'active '} key={'unique-' + i++} datos={elemento}/>;
					} else {
						slide = <SlideElement active={''} key={'unique-' + i++} datos={elemento}/>
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

		let texto = null,
			titulo = null;

		if (!(this.datos.titulo === null)) {
			titulo = <h3 key={'h3-' + this.datos.id}>{this.datos.titulo}</h3>;	
		}

		if (!(this.datos.texto === null)) {
			texto = <p key={'p-' + this.datos.id}>{this.datos.texto}</p>;
		}

		return (
			<div className={this.props.active + 'slideshow-element'}>
				<img src={this.datos.imagen} />
				<div className='slide-element-info'>
					{[titulo, texto]}
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
				controles.push(<SlideControl key={'control-' + i.toString()} estado='active' />);
			} else {
				controles.push(<SlideControl key={'control-' + i.toString()} estado='disable' />);
			}
		}

		return controles;
	}

	render() {

		return (
			<div className='slideshow-controls'>
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

		return <li><i className={estado + 'slideshow-control'} /></li>;
	}
}

class SlideArrows extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className='slideshow-arrows'>
				<i className='icon icon-chevron-left' />
				<i className='icon icon-chevron-right' />
			</div>
		);
	}
}
