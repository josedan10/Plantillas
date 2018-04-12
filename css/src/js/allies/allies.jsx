import React from 'react';

export default class Allies extends React.Component {
	constructor(props) {
		super(props);
		this.slides = Math.floor(this.props.allies.length / 4) + 1;
		this.totalAllies = this.props.allies.length;
        
		this.state = {
			active: 0
		};
	}
    
	slideByControl(e) {
		
		let controls,
			indice;

		var slideActive,
			slides = document.getElementsByClassName('slideshow-element');

		// Verificamos que el control no sea el que está activo
		if (!e.target.classList.contains('control-active')) {
			// Cambiamos el control
			
			document.getElementsByClassName('control-active')[0].classList.remove('control-active');
			e.target.classList.add('control-active');
			
			// Cambiamos el slide
			for (let i = 0; i < slides.length; i++) {
				if (slides[i].classList.contains('slideshow-active-element'))
					slides[i].classList.remove('slideshow-active-element');
			}
			controls = document.getElementsByClassName('slideshow-control');
	
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
	
			slideActive = document.getElementsByClassName('slideshow-element')[indice];
			slideActive.classList.add('slideshow-active-element');
		}
	}


	render() {
		let slidesAllies = [];
		let slide = [];
		let index = 0;

		for (let i = 0; i <= this.totalAllies; i++) {
            
			// Add slides 4 by 4
			if (i % 4 == 0 && i != 0) {
				slidesAllies[index++] = slide;
				slide = [];
			} else if (i == this.totalAllies) {
				slidesAllies[index] = slide;
				break;
			}

			slide[i % 4] = <img key={"allie-" + i} src={this.props.allies[i]} />;
		}

		return (

			<div className="cover-bg flex-center">
				<div className="container flex-center">
					<div className="title-section flex-center">
						<h1>Allies</h1>
						<span className="line-decorator" />
					</div>

					<div className="slideshow-container-slides allies-container flex-center">
						{slidesAllies.map((element, key) => {
							if (key == this.state.active) {
								return <div className="slideshow-element slideshow-active-element flex-around" key={"element-" + key}>{element}</div>;
							}
                            
							return <div className="slideshow-element flex-around" key={"element-" + key}>{element}</div>;
						})}
					</div>

					<ContainerControls active={this.state.active} length={this.slides} onClick={this.slideByControl.bind(this)}/>
                    
				</div>
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
