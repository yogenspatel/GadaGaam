import React, {Component} from 'react';

export default class Header extends Component {
	render() {
		return(
			<footer className="footer navbar navbar-inverse bg-inverse">
			    <div className="container">
        			<div className="d-flex justify-content-center">
            			<h6>{'\u00A9'} {new Date().getFullYear()} Gada Gaam.
            			<a href="https://www.facebook.com/gadagaam" target="_blank" title="Follow US on Facebook">
                			<button className="btn btn-facebook">
								<i className="fa fa-facebook"></i>
							</button>
						</a>
            			</h6>
            		</div>
                </div>
            </footer>
		);
	}
}