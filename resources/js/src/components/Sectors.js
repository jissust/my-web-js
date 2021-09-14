import React from 'react';

const Sectors = () => {
	return (
		<section id="sectors" className="position-relative">
			<div className="container bg-light">
				<h1 className="w-100 text-center pt-5"> 
					Sectores
				</h1>
				<div className="row p-5">
					<div className="fil-sm-4">
						<div className="text-center">
							<i className="fa fa-truck" aria-hidden="true" style={{fontSize:'100px'}}></i>
							<h3 className="py-3">
								Distribuidores
							</h3>
							<p className="px-5" style={{textAlign:'justify'}}>
								La distribución requiere de un gran manejo de volúmenes&nbsp;de ventas, así como una elevada y compleja gestión&nbsp;administrativa. Todo eso se ve facilitado mediante la implementación&nbsp;de herramientas digitales como por ejemplo una e-commerce propia, reportándote&nbsp;entre ortos beneficios los siguientes:<br />
								<div  className="px-5">
									<ul className="text-start">
										<li>
											Control y gestión de mercadería
										</li>
										<li>
											Facilidad hacia el cliente en el momento de la compra
										</li>
										<li>
											Transparencia en las cobranzas
										</li>
										<li>
											Coordinación en la logística
										</li>
									</ul>
								</div>
							</p>

						</div>
					</div>
					<div className="fil-sm-4">
						<div className="text-center">
							<i className="fa fa-industry" aria-hidden="true" style={{fontSize:'100px'}}></i>
							<h3 className="py-3">
								Pymes
							</h3>
							<p className="px-5" style={{textAlign:'justify'}}>
								Las pequeñas y medianas empresas muchas veces se ven limitadas a su crecimiento, ya sea por el poco incremento en sus volúmenes&nbsp;de ventas debido a las herramientas que posee, o bien por la imposibilidad muchas veces de incorporar nuevo personal.

								Entre las soluciones que te brindamos se encuentran la creación de un sitio web personalizado y una tienda electrónica&nbsp;para:<br />            
								<div  className="px-5">
									<ul className="text-start">
										<li>
											Poder aumentar tus ventas mediante un mayor alcance		
										</li>
										<li>
											Facilitar la gestión, y centrar la atención&nbsp;en tareas que tal vez requieran mas&nbsp;supervisión		
										</li>
										<li>
											Establecer tu marca y mostrar un mayor afianzamiento en el mercado		
										</li>
									</ul>
								</div>
							</p>
						</div>
					</div>
					<div className="fil-sm-4">
						<div className="text-center">
							<i className="fa fa-users" aria-hidden="true" style={{fontSize:'100px'}}></i>
							<h3 className="py-3">
								Emprendedores
							</h3>
							<hr />
							<p className="px-5" style={{textAlign:'justify'}}>
								Tuviste una idea y además la valentía de ponerla en practica. Es fundamental que en los primeros pasos tengas seguridad y confianza en tu proyecto. Para eso nosotros te ofrecemos la creación&nbsp;y desarrollo de tu sitio web, y además&nbsp;una e-commerce en caso de que lo desees, para que tu marca desde un inicio logre tomar un posicionamiento considerable y poco a poco logres escalar en tus proyectos.
							</p>
						</div>
					</div>
				</div>
			</div>	
		</section>
	);
};

export default Sectors;