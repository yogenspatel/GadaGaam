import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Announcements extends Component {
	render() {
		return(
			<div className="announce">
				<h3 className="headline-2">
					Thank you Mayankbhai Kanubhai Manibhai Patel for sponsoring 2017 great picnic. Here are the <Link to="/picnic/2017">Picnic Photos</Link>
				</h3>
				<h3 className="headline-2">
				If anyone would like to sponsor next year picnic, Please <Link to="/contact">contact us</Link>.
				</h3>
			</div>
		);
	}
}