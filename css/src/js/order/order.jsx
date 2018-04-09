import React from 'react';

export default class Order extends React.Component {
	constructor(props) {
		super(props);
	}

	checkForm (event) {
		var name = document.getElementById('name').value,
			lastName = document.getElementById('last_name').value,
			address = document.getElementById('address').value,
			story = document.getElementById('story').value,
			phone = document.getElementById('phone').value,
			email = document.getElementById('email').value;

		// Regular expressions
		var nameReg = /\d/;
		
		// Name validation
		if (name === '' || name === undefined || name === null){
			// Customize alert 
			alert('Debes colocar tu nombre');
			event.preventDefault();
			return false;
		} else if (nameReg.test(name)) {
			
			alert('Caracteres inválidos en el nombre');
			event.preventDefault();
			return false;
		}

		// Last Name validation
		if (lastName === '' || lastName === undefined || lastName === null){
			// Customize alert 
			alert('Debes colocar tu Apellido');
			event.preventDefault();
			return false;
		} else if (nameReg.test(lastName)) {
			
			alert('Caracteres inválidos en el Apellido');
			event.preventDefault();
			return false;
		}

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

		if (address === '' || address === null || address === undefined) {
			alert('Debes introducir una dirección');
			event.preventDefault();
			return false;
		}
		
		return true;
	}

	render() {
		return (
			<form action="" method="post" className="flex-center" onSubmit={this.checkForm}>
				<div className="data flex-center">
					<div className="container flex-between">
						<input type="text" name="name" id="name" placeholder="Name"/>
						<input type="text" name="last_name" id="last_name" placeholder="Last name"/>
						<textarea name="address" id="address" placeholder="Address" />
						<textarea name="story" id="story" placeholder="Story" />
						<input type="tel" name="phone" id="phone" placeholder="Phone"/>
						<input type="email" name="email" id="email" placeholder="Email"/>
					</div>
				</div>
				<div className="order flex-center">
					<div className="container flex-between">
						<h2>Order</h2>
						<input type="text" name="cakes_cupcakes" id="cakes_cupcakes" placeholder="Cakes & cupcakes"/>
						<input type="text" name="candy_bar" id="candy_bar" placeholder="Candy bar"/>
						<input type="submit" value="Send" className="btn btn-search"/>

						<div className="title-section">
							<h2>We will contact you</h2>
							<span className="line-decorator" />
						</div>
					</div>
				</div>
			</form>
		);
	}
}
