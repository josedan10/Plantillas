import React from 'react';

export default class PresentationFrame extends React.Component {

	constructor(props) {
		super(props);
	}

	cambiarVista(ev) {
		let images = document.getElementsByClassName('img'),
			index,        
			vistaAbierta = document.getElementsByClassName('display-content'),
			vistas;
        

		// Cerramos las vistas si hay alguna abierta
		if (vistaAbierta[0]) {
			vistaAbierta[0].classList.add('reduce-content');
			vistaAbierta[0].classList.remove('display-content');
            
			document.getElementsByClassName('target')[0].classList.remove('target');

			// El target es la imagen
			ev.target.classList.add('target');        
            
			for (let i = 0; i < images.length; i++) {
				if (images[i].classList.contains('target')) {
					index = i;
					break;
				}
			}
            
			// Abrimos la vista
			document.getElementsByClassName('content-container')[index].classList.remove('reduce-content');
			document.getElementsByClassName('content-container')[index].classList.add('display-content');
                 
		} else {
            
			// El target es la imagen
			ev.target.classList.add('target');        
            
			for (let i = 0; i < images.length; i++) {
				if (images[i].classList.contains('target')) {
					index = i;
					break;
				}
			}
            
			// Abrimos la vista
			document.getElementsByClassName('content-container')[index].classList.remove('default-content');
			document.getElementsByClassName('content-container')[index].classList.add('display-content');

			// Minimizamos las otras vistas
			vistas = document.getElementsByClassName('default-content');
			while (vistas.length > 0) {
				vistas[0].classList.add('reduce-content');
				vistas[0].classList.remove('default-content');
			}
		}        
        
		return;
	}

	render() {
		let i = 0;
		return (
			<div className='presentation-container flex-center'>
				<h1>APRENDE, TRANSFORMA Y CONECTA</h1>

				<div className='flex-presentation'>
					{this.props.datos.map(item => <PresentationItem datos={item} key={item.nombre + i++} onClick={this.cambiarVista.bind(this)}/>)}
				</div>

			</div>
		);
        
	}

}

class PresentationItem extends React.Component {

	constructor(props) {
		super(props);

	}
    
	cerrarVista() {
		// Colocamos todas las vistas por defecto
		let vistaAbierta = document.getElementsByClassName('display-content'),
			vistas = document.getElementsByClassName('reduce-content');

		vistaAbierta[0].classList.add('default-content');
		vistaAbierta[0].classList.remove('display-content');
        
		vistas.forEach(vista => {
			vista.classList.add('reduce-content');
			vista.classList.remove('default-content');
		});
	}

	render() {
		return (
			<div className='content-container default-content'>
				<div className='view-content'>
					<div className='img' style={{ backgroundImage: 'url(' + this.props.datos.img + ')' }} onClick={this.props.onClick} />

					<div className='content'>

						<i className='icon icon-' onClick={this.cerrarVista}/>

						<div className='info'>
							<h2>{this.props.datos.nombre}</h2>
							<h3>{this.props.datos.cargo}</h3>
							<p>{this.props.datos.descripcion}</p>
						</div>

						<div className='redes' />
						<div className='logo' />

					</div>
				</div>

				<div className='view-screen' />
			</div>
		);
	}
}
