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
				</nav>
			);

			break;

		default:

			nav = (
				<nav className={this.props.tipo}>
					<Logo logo={this.props.logo}/>
					<Menu tipo={this.props.tipo} links={this.props.links}/>
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
			<div>
				<ul>
					{
						links.map(elemento => <li key={'li' + elemento}><a href={'#' + elemento.replace(' ', '_')}>{elemento.toUpperCase()} <span/></a></li>)
					}
				</ul>
			</div>
		);
	}
}
