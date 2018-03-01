import React from 'react';

export default class Nav extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		var nav;

		switch(this.props.tipo){
			case 'nav-movil':

				nav = (
					<nav className="nav-movil">
						<Logo />
						<Menu tipo={this.props.tipo} />
						<Social tipo={this.props.tipo} />
					</nav>
				);

				break;

			default:

				nav = (
					<nav className="nav-default">
						<Logo />
						<Menu tipo={this.props.tipo} lista={this.props.lista}/>
						<Social tipo={this.props.tipo} redes={this.props.redes}/>
					</nav>
				);

				break;
		}

		return nav;
	}

}


class Logo extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		return <img src={this.props.imagen} />;
	}
}



class Menu extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		const lista = this.props.lista;

		return (

			<ul>
				{
					lista.map(elemento => <li><a href={elemento}>{elemento}</a></li>)
				}
			</ul>

		);
	}
}

class Social extends React.Component{
	constructor(props){
		super(props);

	}

	detectarRed(red){
		// Recibe el nombre de la red social para devolver el icono y el link

		var link;

		switch(red){
			case 'twitter':
				link = "twiter.com";
				break;

			case 'facebook':
				link = "facebook.com";
				break;

			case 'instagram':
				link = "instagram.com";
				break;

			default:
				link = "#";
				break;
		}

		return <li><a href={link}> {red} </a></li>;
	}

	render(){

		const redes = this.props.redes;


		return(
			<ul>
				{redes.map(this.detectarRed)}
			</ul>
		);

	}
}