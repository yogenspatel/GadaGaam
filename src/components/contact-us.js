import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class ContactUs extends Component {
	render() {
		return(
			<div className="contact-us content">
				<Helmet>
					<title>Contact US | Gada Gaam</title>
				</Helmet>
				<h3>PLEASE SEND US YOUR INFORMATION TO UP DATE ON WEBSITE at yogenspatel@gmail.com</h3>
				<h3>To stay up to date with latest news, <a target="_blank" href="http://facebook.com/gadagaam">Like Our Gada Gaam Page on Facebook</a></h3>

				<div className="card-columns">
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/contact/Vrajeshbhai.jpg" alt="Vrajesh Jayantbhai Patel" />
				    <div className="card-block">
				      <h4 className="card-title">Vrajesh Patel</h4>
				      <p className="card-text">Contact No: (413) 275 4503</p>
				      <p className="card-text">Email: vrajayant@gmail.com</p>
				    </div>
				  </div>
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/contact/Atulbhai.jpg" alt="Atulbhai Narayanbhai Patel (Bade)" />
				    <div className="card-block">
				      <h4 className="card-title">Atulbhai Narayanbhai Patel (Bade)</h4>
				      <p className="card-text">Home No: (201) 798 1721</p>
				      <p className="card-text">Email: atulbade1@gmail.com</p>
				    </div>
				  </div>
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/contact/Rajubhai.jpg" alt="Raju Patel" />
				    <div className="card-block">
				      <h4 className="card-title">Raju Patel</h4>
				      <p className="card-text">Contact No: (732) 407 8414</p>
				    </div>
				  </div>
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/contact/Yogen.jpg" alt="Yogen Suryakant Patel" />
				    <div className="card-block">
				      <h4 className="card-title">Yogen Patel</h4>
				      <p className="card-text">Cell No: (201) 397 2680</p>
				      <p className="card-text">Email: yogenspatel@gmail.com</p>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}

export default ContactUs;