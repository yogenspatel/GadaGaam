import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Picnic2016 extends Component {
	render() {
		return(
			<div className="picnic content">
				<Helmet>
					<title>Gada Picnic 2016 | Gada Gaam</title>
				</Helmet>
				<h2 className="headline-1">Summer Picnic 2016, Holmdale Park, Holmdel, NJ, USA</h2>
				<h3 className="headline-2">Sponsored by: Vijaybhai Jashbhai Patel from MD, USA</h3>
				<div className="row">
				  <div className="col-sm-6">
				    <div className="card">
				     <img className="card-img-top" src="/staticContent/img/picnicSponsors/vijaybhai_jashbhai.jpg" title="Vijaybhai Jashbhai Patel Family" alt="Vijaybhai Jashbhai Patel Family" />
				      <div className="card-block">
				        <h3 className="card-title">Vijaybhai Jashbhai Patel</h3>
				      </div>
				    </div>
				  </div>
				  <div className="col-sm-6">
				    <div className="card">
				      <div className="card-block">
				        <p className="card-text">Thank you Vijaybhai Jashbhai Patel. It was a great picnic, everyone had a great time and happy with this year’s picnic.</p>
				        <a href="https://www.facebook.com/media/set/?set=a.1085529274854589.1073741832.816609235079929&type=1&l=bebc9f397e" className="btn btn-primary" target="_blank" rel="noopener">Click here for Picnic Photos</a>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}