import React, {Fragment} from 'react'

export const Sidebar = () => {
    return (
        <Fragment>
            <nav className="sidebar">
				
				{/* <!-- close sidebar menu --> */}
				<div className="dismiss">
					<i className="fas fa-arrow-left"></i>
				</div>
				
				<div className="logo">
					<h3><a href="##">CopyCenter Evelyn</a></h3>
				</div>
				
				<ul className="list-unstyled menu-elements">
					<li className="active">
						<a className="scroll-link" href="#top-content"><i className="fas fa-home"></i> Ordenes</a>
					</li>
					<li>
						<a className="scroll-link" href="#section-1"><i className="fas fa-boxes"></i> Inventario</a>
					</li>
					<li>
						<a className="scroll-link" href="#section-2"><i className="fas fa-user"></i> Registro de Ventas</a>
					</li>
					<li>
						<a className="scroll-link" href="#section-5"><i className="fas fa-pencil-alt"></i> Agregar en Inventario</a>
					</li>
					<li>
						<a className="scroll-link" href="#section-6"><i className="fas fa-cog"></i> Ajustes</a>
					</li>
					<li>
						<a href="#otherSections" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" role="button" aria-controls="otherSections">
							<i className="fas fa-sync"></i>Otras Secciones
						</a>
						<ul className="collapse list-unstyled" id="otherSections">
							<li>
								<a className="scroll-link" href="#section-3">Texto de Relleno</a>
							</li>
							<li>
								<a className="scroll-link" href="#section-4">We think that...</a>
							</li>
						</ul>
					</li>
				</ul>
				
				<div className="to-top">
					<a className="btn btn-primary btn-customized-3" href="#" role="button">
	                    <i className="fas fa-arrow-up"></i> Top
	                </a>
				</div>
				
				<div className="dark-light-buttons">
					<a className="btn btn-primary btn-customized-4 btn-customized-dark" href="#" role="button">Dark</a>
					<a className="btn btn-primary btn-customized-4 btn-customized-light" href="#" role="button">Light</a>
				</div>
			
			</nav>
        </Fragment>
    )
}
