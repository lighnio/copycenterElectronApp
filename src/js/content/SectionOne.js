import React, { Fragment } from 'react'

export const SectionOne = () => {
    return (
        <Fragment>
             {/* <!-- Section 1 --> */}
		        <div className="section-1-container section-container" id="section-1">
			        <div className="container">
			            <div className="row">
			                <div className="col section-1 section-description wow fadeIn">
			                    <h2>Inventario</h2>
			                    <div className="divider-1 wow fadeInUp"><span></span></div>
			                </div>
			            </div>
			            <div className="row">
		                	<div className="col-md-4 section-1-box wow fadeInUp">
		                		<div className="row">
		                			<div className="col-md-4">
					                	<div className="section-1-box-icon">
					                		<i className="fas fa-magic"></i>
					                	</div>
				                	</div>
			                		<div className="col-md-8">
			                    		<h3>Branding</h3>
			                    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
			                    	</div>
			                    </div>
		                    </div>
		                    <div className="col-md-4 section-1-box wow fadeInDown">
			                	<div className="row">
		                			<div className="col-md-4">
					                	<div className="section-1-box-icon">
					                		<i className="fas fa-cog"></i>
					                	</div>
				                	</div>
			                		<div className="col-md-8">
			                    		<h3>Web design</h3>
			                    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
			                    	</div>
			                    </div>
		                    </div>
		                    <div className="col-md-4 section-1-box wow fadeInUp">
			                	<div className="row">
		                			<div className="col-md-4">
					                	<div className="section-1-box-icon">
					                		<i className="fab fa-twitter"></i>
					                	</div>
				                	</div>
			                		<div className="col-md-8">
			                    		<h3>Social media</h3>
			                    		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
			                    	</div>
			                    </div>
		                    </div>
			            </div>
			        </div>
		        </div>
        </Fragment>
    )
}
