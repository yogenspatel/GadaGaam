import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Picnic2017 extends Component {
	render() {
		return(
			<div className="picnic content">
				<Helmet>
					<title>Gada Picnic 2017 | Gada Gaam</title>
				</Helmet>
				<h2 className="headline-1">Summer Picnic 2017, Holmdale Park, Holmdel, NJ, USA</h2>
				<h3 className="headline-2">Sponsored by: Mayankbhai Kanubhai Manibhai Patel from VA, USA</h3>
				<div className="row">
				  <div className="col-sm-6">
				    <div className="card">
				     <img className="card-img-top" src="/staticContent/img/picnicSponsors/mayank_kanubhai_manibhai.png" title="Mayank Kanubhai Manibhai Patel" alt="Mayank Kanubhai Manibhai Patel" />
				      <div className="card-block">
				        <h3 className="card-title">Mayank Kanubhai Manibhai Patel</h3>
				      </div>
				    </div>
				  </div>
				  <div className="col-sm-6">
				    <div className="card">
				      <div className="card-block">
				        <p className="card-text">Thank you Mayank Kanubhai Patel. It was a great picnic, everyone had a great time and happy with this year’s picnic.</p>
				        <a href="https://www.facebook.com/media/set/?set=a.1541766325897546.1073741834.816609235079929&amp;type=1&amp;l=5fedb14f19" className="btn btn-primary" target="_blank" rel="noopener">Click here for Picnic Photos</a>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}