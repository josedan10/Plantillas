import React from 'react';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var nav;

		switch (this.props.tipo) {
			case 'nav-movil':

				nav = (
					<nav className='nav-movil'>
						<Logo />
						<Menu tipo={this.props.tipo} />
						<Social tipo={this.props.tipo} />
					</nav>
				);

				break;

			default:

				nav = (
					<nav className='nav-default'>
						<Logo logo={this.props.logo}/>
						<Menu tipo={this.props.tipo} links={this.props.links}/>
						<Social tipo={this.props.tipo} redes={this.props.redes}/>
					</nav>
				);

				break;
		}

		return nav;
	}

}


class Logo extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return <img src={this.props.logo} />;
	}
}


class Menu extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const links = this.props.links;

		return (

			<ul>
				{
					links.map(elemento => <li key={'li' + elemento}><a href={elemento}>{elemento}</a></li>)
				}
			</ul>

		);
	}
}

class Social extends React.Component {
	constructor(props) {
		super(props);

	}

	detectarRed(red) {
		// Recibe el nombre de la red social para devolver el icono y el link

		var link,
			icon;

		switch (red) {
			case 'twitter':
				link = 'https://twitter.com';
				icon = 'icon-twitter';
				break;

			case 'facebook':
				link = 'https://facebook.com';
				icon = 'icon-facebook';
				break;

			case 'instagram':
				link = 'https://instagram.com';
				icon = 'icon-instagram';
				break;

			case 'youtube':
				link = 'https://instagram.com';
				icon = 'icon-youtube';
				break;

			default:
				link = '#';
				icon = '';
				break;
		}

		return <li key={'li' + link}><a href={link} ><i className={'icon ' + icon} /></a></li>;
	}

	render() {

		const redes = this.props.redes;


		return (
			<ul>
				{redes.map(this.detectarRed)}
			</ul>
		);

	}
}