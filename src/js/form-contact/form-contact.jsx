import React from 'react';

export default class FormContact extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			view: 1
		};
	}

	mostrarFormulario() {
		this.setState({
			view: 0
		});
	}

	mostrarCorreo() {
		this.setState({
			view: 1
		});
	}

	render() {
		var muestra;
		let form = (
			<div className='form-view'>
				<form className='grid-container'>
					<input type='text' placeholder='First Name and Last Name' required/>
					<input type='email' placeholder='Email' required/>
					<input type='phone' placeholder='Phone' required/>
					<input type='text' placeholder='Address' required/>
					<textarea name='comentario' placeholder='comment' id='' rows='10' required/>
					<input type='submit' value='SUBMIT'/>
				</form>
			</div>
		);
        
		let correo = (
			<div className='form-view grid-container'>
				<div className='flex-center'>
					<p>contacto@groowly.com</p>
					<i className='icon ' />
				</div>
			</div>
		);

		switch (this.state.view) {
		    case 1:
			    muestra = correo;
			    break;
            
		    default:
			    muestra = form;
			    break;
		}
        
        
		return (
			<div className='form-contact'>
				<h1>CONTACT</h1>
				<p>Comentario genial!</p>
				<div className='btn-actions'>
					<div className='btn-container'>
						<button className='flex-center' onClick={this.mostrarCorreo.bind(this)}>CONTACT</button>
						<button className='flex-center' onClick={this.mostrarFormulario.bind(this)}>FORM</button>
					</div>
				</div>
				{muestra}
			</div>
		);
        
	}

}
