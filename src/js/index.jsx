import React from 'react';
import ReactDOM from 'react-dom';
// import Nav from './nav/nav';
import Nav from './nav/nav-menu';

// Links para el menu y las redes
const links = ['Home', 'Services', 'Selected Works', 'Own Community', 'Team', 'Clients', 'Contact'];
// const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

// Imagen del logo
const logo = 'src/img/logo.png'; 					

<<<<<<< HEAD
ReactDOM.render(
	<Nav tipo='nav-left' logo={logo} links={links} />,
	document.getElementById('nav')
);
=======
	// Links para el menu y las redes
	const links = ['Home', 'Services', 'Selected Works', 'Own Community', 'Team', 'Clients', 'Contact'];
	// const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

	// Imagen del logo
	const logo = 'src/img/logo.svg'; 					

	ReactDOM.render(
		<Nav tipo='nav-left' logo={logo} links={links} />,
		document.getElementById('nav')
	);
});
>>>>>>> b833780169326ed577f9ef548a892fcd57c1acde

