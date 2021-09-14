import React from 'react';
import imgSpecialities from './img/specialties/5.jpg';

const Specialities = () => {
	return (
		<section id="specialties" className="position-relative">
			<img src={imgSpecialities} className="img-fluid w-100" />
			<div className="row col-10 offset-1 position-absolute bg-primary text-white" style={{bottom:'20px'}}>
				<div className="col-xl-3 p-2 p-xl-4 d-xl-flex">
					<label className="h3 w-100 text-center">
						Especialidades 
					</label>
					<i className="d-none d-xl-block fa fa-arrow-right" style={{marginTop:'12px',marginLeft:'12px'}} ></i>
					<i className="fa fa-arrow-down d-block d-xl-none text-center" aria-hidden="true"></i>
				</div>
				<div className="col-xl-3 p-2 p-xl-4 d-xl-flex">
					<label className="w-100 text-center">
						Diseño y Desarrollo Web
					</label>
					<i className="d-none d-xl-block fa fa-arrow-right mt-1 mx-2" aria-hidden="true"></i>
					<i className="fa fa-arrow-down d-block d-xl-none text-center" aria-hidden="true"></i>
				</div>
				<div className="col-xl-3 p-2 p-xl-4 d-xl-flex">
					<label className="w-100 text-center"> 
						Diseño y Desarrollo E-commerce
					</label>
					<i className="d-none d-xl-block fa fa-arrow-right  mt-1 mx-2" aria-hidden="true"></i>
					<i className="fa fa-arrow-down d-block d-xl-none text-center" aria-hidden="true"></i>
				</div>
				<div className="col-xl-3 p-2 p-xl-4">
					<label className="w-100 text-center">
						Seguimiento y atención personalizada al cliente
					</label>
				</div>
			</div>		
		</section>
	);
};

export default Specialities;