import React from 'react';
import imgPresentation1 from './img/presentation/4.jpg';

const Presentation = () => {
	return (
		<section id="presentation" className="position-relative" style={{overflow:'hidden'}}>
			<div className="row">
				<div className="col-12 px-5 pt-5 pb-3">
					<div className="container">
						<div className="row text-justify">
							<div className="col-lg-6">
								<p>
									Somos una empresa dedicada a hacer crecer tu negocio, con innovación, desarrollo y compromiso como pilares fundamentales de nuestro trabajo.
									¿De qué manera?
									Mediante el desarrollo de herramientas que te permiten optimizar tus ventas.<br />Elegirnos es tu mejor opción
								</p>
							</div>
						</div>
					</div>
				</div>
				<img src={imgPresentation1} className="d-none d-xl-block" style={{width:'550px',height:'350px',position:'absolute',right: '90px', top: '50px'}} />
				<div className="col-12 px-5 pt-3 pb-5 bg-primary text-white">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<p>
									¿Por qué?<br />
									- Alta confiabilidad y compromiso en todos los trabajos realizados mediante la implementación&nbsp;de tecnologías&nbsp;totalmente innovadoras<br />
									- Beneficios&nbsp;comprobables desde el comienzo de la utilización&nbsp;de nuestras herramientas<br />
									- Asesoramiento y seguimiento de cada trabajo realizado&nbsp;<br />
								</p>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</section>
	);
};

export default Presentation;