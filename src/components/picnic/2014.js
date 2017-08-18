import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Picnic2014 extends Component {
	render() {
		return(
			<div className="picnic content">
				<Helmet>
					<title>Gada Picnic 2014 | Gada Gaam</title>
				</Helmet>
				<h2 className="headline-1">Summer Picnic 2014, Holmdale Park, Holmdel, NJ, USA</h2>
				<h3 className="headline-2">Sponsored by: Kokilaben Jagdishbhai Patel (Daughter of Biharibhai Ichchabhai Patel), Jersey City, NJ</h3>
				<div className="row">
				  <div className="col-sm-6">
				    <div className="card">
				     <img className="card-img-top" src="/staticContent/img/picnicSponsors/Jagdishbhai_Kokilaben_Patel.jpg" title="Jagdishbhai and Kokilaben Patel" alt="Jagdishbhai and Kokilaben Patel" />
				      <div className="card-block">
				        <h3 className="card-title">Jagdishbhai & Kokilaben Patel</h3>
				      </div>
				    </div>
				  </div>
				  <div className="col-sm-6">
				    <div className="card">
				      <div className="card-block">
				        <p className="card-text">Thank you Kokilaben Jagdishbhai Patel. It was a great picnic, everyone had a great time and happy with this year’s picnic.</p>
				        <a href="https://www.facebook.com/media/set/?set=a.839778922762960.1073741829.816609235079929&type=1&l=1d76ed0a46" className="btn btn-primary" target="_blank" rel="noopener">Click here for Picnic Photos</a>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}