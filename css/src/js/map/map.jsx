import React from 'react';

export default class Map extends React.Component {
	constructor (props) {
		super(props);
	}

	checkForm (event) {
		var message = document.getElementById('message').value,
			phone = document.getElementById('phone').value,
			email = document.getElementById('email').value;

		// Phone validation
		if (phone === '' || phone === null || phone === undefined) {
			alert('Debes introducir un número de teléfono');
			event.preventDefault();
			return false;
		} else if (phone.validity.valid) {
			alert('Debes introducir un número de teléfono válido');
			event.preventDefault();
			return false;
		}

		// Email validation
		if (email === '' || email === null || email === undefined) {
			alert('Debes introducir un email');
			event.preventDefault();
			return false;
		} else if (email.validity.valid) {
			alert('Debes colocar un email válido');
			event.preventDefault();
			return false;
		}

		if (message === '' || message === null || message === undefined) {
			alert('Debes introducir un mensaje');
			event.preventDefault();
			return false;
		}
		
		return true;
	}

	render() {
		return (
			<div className="container flex-center">
				<div className="map" id="map" />
				<form className="form-contact flex-center" action="" method="post" onSubmit={this.checkForm}>
					<input type="tel" name="phone" id="phone" placeholder="Phone"/>
					<input type="email" name="email" id="email" placeholder="Email"/>
					<textarea name="message" id="message" placeholder="Message" />
					<input type="submit" value="Send" className="btn btn-primary"/>
				</form>
			</div>
		);
	}
}