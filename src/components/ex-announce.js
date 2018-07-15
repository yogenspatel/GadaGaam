import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ExAnnouncements extends Component {
	render() {
		return(
			<div className="announce">
				<strong className="h3">Picnic 2017</strong>
				<blockquote className="blockquote">
				<h3 className="headline-2">
					Thank you Mayankbhai Kanubhai Manibhai Patel for sponsoring 2017 great picnic. Here are the <Link to="/picnic/2017">Picnic Photos</Link>
				</h3>
				</blockquote>
				<hr />
			</div>
		);
	}
}