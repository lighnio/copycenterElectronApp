import React, {Fragment} from 'react'

export const SectionFive = () => {
    return (
        <Fragment>
            <div className="section-5-container section-container" id="section-5">
			        <div className="container">
			            <div className="row">
			                <div className="col section-5 section-description wow fadeIn">
			                    <h2>Portfolio</h2>
			                    <div className="divider-1 wow fadeInUp"><span></span></div>
			                    <p>We have completed 486 projects since we started back in 2013. Check them out!</p>
			                </div>
			            </div>
			            <div className="row">
		                	<div className="col-md-4 section-5-box wow fadeInUp">
		                		<div className="section-5-box-image"><img src="assets/img/portfolio/1.jpg" alt="portfolio-1"/></div>
		                		<h3><a href="#">Acme branding</a> <i className="fas fa-angle-right"></i></h3>
		                		<div className="section-5-box-date"><i className="far fa-calendar"></i> June 2019</div>
		                		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
		                    </div>
		                    <div className="col-md-4 section-5-box wow fadeInDown">
			                	<div className="section-5-box-image"><img src="assets/img/portfolio/2.jpg" alt="portfolio-2"/></div>
		                		<h3><a href="#">Created 150 flyers</a> <i className="fas fa-angle-right"></i></h3>
		                		<div className="section-5-box-date"><i className="far fa-calendar"></i> February 2019</div>
		                		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
		                    </div>
		                    <div className="col-md-4 section-5-box wow fadeInUp">
			                	<div className="section-5-box-image"><img src="assets/img/portfolio/3.jpg" alt="portfolio-3"/></div>
		                		<h3><a href="#">WordPress design</a> <i className="fas fa-angle-right"></i></h3>
		                		<div className="section-5-box-date"><i className="far fa-calendar"></i> November 2018</div>
		                		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
		                    </div>
			            </div>
			            <div className="row">
			            	<div className="col section-bottom-button wow fadeInUp">
		                        <a className="btn btn-primary btn-customized" href="#" role="button">
				            		<i className="fas fa-sync"></i> View All
				            	</a>
			            	</div>
			            </div>
			        </div>
		        </div>
        </Fragment>
    )
}
