import React, {Component} from 'react';
import Announcements from './announcements';
import { Helmet } from 'react-helmet';

export default class SPAnnouncements extends Component {
	render() {
		return(
			<div className="announce content">
				<Helmet>
					<title>Special Announcements | Gada Gaam</title>
				</Helmet>
				<Announcements />
				<p>
					Gada Clinic account Fixed deposit: We are excited to announce that we deposited $1000 as a fixed deposit in Gada Clinic Account. Thank you all for contributing this amount. (Out of $1000, $720 is contributed by people who joined Gada Picnic 2015 and $280 by Vrajeshbhai Jayant)
				</p>
				<a target="_blank" href="http://gadagaam.org/wp-content/uploads/2012/02/gada-nirmalaben-trust.pdf">gada nirmalaben trust</a>
			</div>
		);
	}
}