import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Announcements extends Component {
	render() {
		return(
			<div className="announce">
				<strong className="h3">Picnic 2018</strong>
				<blockquote className="blockquote">
					Thank you Bade Family for sponsoring the Picnic. We all had a great time and enjoyed it.
					<p className="headline-2">Photos are coming soon. Stay tuned ! </p>
				</blockquote>
				<hr />
			</div>
		);
	}
}