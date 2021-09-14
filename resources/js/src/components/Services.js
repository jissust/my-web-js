import React from 'react';

const Services = () => {
	return (
	<section id="services" className="bg-primary py-5">
		<div className="container bg-light">
			<h1 className="w-100 text-center pt-5"> 
				Servicios
			</h1>
			<div className="row p-5">
				<div className="col-sm-4">
					<div className="text-center">
						<div className="p-4 p-xl-0">
							<i className="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:'100px'}}></i>
							<h3 className="py-3">
								E-commerce
							</h3>
						</div>
						<hr />
						<p className="px-5" style={{textAlign: 'justify'}}>
							Creamos y desarrollamos tus e-commerce. También nos encargamos de hacerla lo mas funcional&nbsp;a tus necesidades
						</p>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="text-center">
						<div className="p-4 p-xl-0">
							<i className="fa fa-globe" aria-hidden="true" style={{fontSize:'100px'}}></i>
							<h3 className="py-3">
								Desarrollo web
							</h3>
						</div>
						<hr />
						<p className="px-5" style={{textAlign: 'justify'}}>
							Diseñamos, creamos y administramos tus sitios web de la manera más óptima.
						</p>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="text-center">
						<div className="p-4 p-xl-0">
							<i className="fa fa-commenting-o" aria-hidden="true" style={{fontSize:'100px'}}></i>
							<h3 className="py-3">
								Customer experience
							</h3>
						</div>
						<hr />
						<p className="px-5" style={{textAlign: 'justify'}}>
							Hacemos que des los primeros pasos en el comercio electrónico de la mano de nosotros. Así tendrás una mejor experiencia.
						</p>
					</div>
				</div>
			</div>
		</div>	
	</section>
	);
};

export default Services;