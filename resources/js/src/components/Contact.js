import React from 'react';
import imgContact from './img/contact/6.jpg';

const Contact = () => {
	return (
		<section id="contact">
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6 p-0">
						<img src={imgContact} className="img-fluid" />
					</div>
					<div className="col-sm-6 bg-primary text-center d-flex justify-content-center align-items-center">
						<div className="text-white">
							<h2>
								Ponete en contacto
							</h2>
							<div className="row">
								<div className="col-sm-4">
									Dirección 
								</div>
								<div className="col-sm-4">
									E-mail
								</div>
								<div className="col-sm-4">
									Número de télefono
								</div>
							</div>
							<hr />
							<div className="row">
								<div className="col-sm-4">
									Av. Libertador 223,<br />
									Martínez, C. P. 1602
								</div>
								<div className="col-sm-4">
									hola@sitioincreible.com.ar
								</div>
								<div className="col-sm-4">
									(011) 4734 5557
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;