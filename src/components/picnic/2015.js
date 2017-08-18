import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Picnic2015 extends Component {
	render() {
		return(
			<div className="picnic content">
				<Helmet>
					<title>Gada Picnic 2015 | Gada Gaam</title>
				</Helmet>
				<h2 className="headline-1">Summer Picnic 2015, Holmdale Park, Holmdel, NJ, USA</h2>
				<h3 className="headline-2">Sponsored by: Jayshreeben Narendrabhai, Urvashiben Chetanbhai, Smitaben Tarunbhai, Parulben – Daughters of Kanubhai Motibhai Master</h3>
				
				<div className="card-columns">
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/picnicSponsors/Daughters_Kanubhai_Motibhai_Master_1.jpg" alt="Daughters of Kanubhai Motibhai Master" />
				    <div className="card-block">
				      <h4 className="card-title">Daughters of Kanubhai Motibhai Master</h4>
				    </div>
				  </div>
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/picnicSponsors/Daughters_Kanubhai_Motibhai_Master_2.jpg" alt="Daughter of Kanubhai Motibhai Master" />
				    <div className="card-block">
				      <h4 className="card-title">Daughter of Kanubhai Motibhai Master</h4>
				    </div>
				  </div>
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/picnicSponsors/Kanubhai_Motibhai_Master.jpg" alt="Kanubhai Motibhai Master" />
				    <div className="card-block">
				      <h4 className="card-title">Kanubhai Motibhai Master</h4>
				    </div>
				  </div>
				  <div className="card">
					  <div className="card-block">
					    <p className="card-text">Thank you Jayshreeben Narendrabhai, Urvashiben Chetanbhai, Smitaben Tarunbhai, Parulben. It was a great picnic, everyone was happy with this year’s picnic.</p>
					    <a href="https://www.facebook.com/media/set/?set=a.864767030264149.1073741830.816609235079929&type=1&l=d4d44db398" className="btn btn-primary" target="_blank" rel="noopener">Click here for Picnic Photos</a>
					  </div>
				  </div>
				</div>
			</div>
		);
	}
}