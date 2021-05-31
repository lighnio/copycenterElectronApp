import React, {Fragment} from 'react'

export const SectionTwo = () => {
    return (
        <Fragment>
            <div className="section-2-container section-container section-container-gray-bg" id="section-2">
			        <div className="container">
			            <div className="row">
			                <div className="col section-2 section-description wow fadeIn">
			                </div>
			            </div>
			            <div className="row">
			            	<div className="col-8 section-2-box wow fadeInLeft">
		                    	<h3>About Us</h3>
		                    	<p className="medium-paragraph">
		                    		Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
		                    		sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.
		                    	</p>
		                    	<p>
		                    		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
		                    		Ut wisi enim ad minim veniam, quis nostrud. 
		                    		Exerci tation ullamcorper suscipit <a href="#">lobortis nisl</a> ut aliquip ex ea commodo consequat. 
		                    		Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl. 
		                    	</p>
			                </div>
			                <div className="col-4 section-2-box wow fadeInUp">
		                    	<img src="assets/img/about-us.jpg" alt="about-us"/>
			                </div>
			            </div>
			        </div>
		        </div>
        </Fragment>
    )
}
