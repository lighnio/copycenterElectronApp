import React, { Fragment } from 'react'

export const SectionSix = () => {
    return (
        <Fragment>
            <div className="section-6-container section-container section-container-image-bg" id="section-6">
			        <div className="container">
			            <div className="row">
			                <div className="col section-6 section-description wow fadeIn">
			                    <h2>Contact Us</h2>
			                    <div className="divider-1 wow fadeInUp"><span></span></div>
			                    <p>Send us an email using the form below or follow us on our social media channels.</p>
			                </div>
			            </div>
			            <div className="row">
		                	<div className="col-md-6 section-6-box wow fadeInUp">
		                		<h3>By eMail</h3>
		                    	<div className="section-6-form">
		                    		<form role="form" action="assets/contact.php" method="post">
				                    	<div className="form-group">
				                    		<label className="sr-only" for="contact-email">Email</label>
				                        	<input type="text" name="email" placeholder="Email..." className="contact-email form-control" id="contact-email"/>
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="contact-subject">Subject</label>
				                        	<input type="text" name="subject" placeholder="Subject..." className="contact-subject form-control" id="contact-subject"/>
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="contact-message">Message</label>
				                        	<textarea name="message" placeholder="Message..." className="contact-message form-control" id="contact-message"></textarea>
				                        </div>
				                        <button type="submit" className="btn btn-primary btn-customized"><i className="fas fa-paper-plane"></i> Send Message</button>
				                    </form>
		                    	</div>
		                    </div>
		                    <div className="col-md-5 offset-md-1 section-6-box wow fadeInDown">
		                    	<h3>Follow us</h3>
		                    	<div className="section-6-social">
			                    	<a href="#"><i className="fab fa-facebook-f"></i></a>
									<a href="#"><i className="fab fa-dribbble"></i></a>
									<a href="#"><i className="fab fa-twitter"></i></a>
									<a href="#"><i className="fab fa-instagram"></i></a>
									<a href="#"><i className="fab fa-pinterest"></i></a>
		                    	</div>
		                    </div>
			            </div>
			        </div>
		        </div>
        </Fragment>
    )
}
