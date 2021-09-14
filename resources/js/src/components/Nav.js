import React from 'react';
import logo from './img/logo.jpg';

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={logo} />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item" tabIndex="1">
							<a className="nav-link text-white" href="#presentation">
								Presentacións
							</a>
						</li>
						<li className="nav-item" tabIndex="2">
							<a className="nav-link text-white" href="#specialties">
								Especialidades
							</a>
						</li>
						<li className="nav-item" tabIndex="3">
							<a className="nav-link text-white" href="#services" aria-disabled="true">
								Servicios
							</a>
						</li>
						<li className="nav-item" tabIndex="4">
							<a className="nav-link text-white" href="#sectors" aria-disabled="true">
								Sectores
							</a>
						</li>
						<li className="nav-item" tabIndex="5">
							<a className="nav-link text-white" href="#contact" aria-disabled="true">
								Contacto
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;