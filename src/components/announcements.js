import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Announcements extends Component {
	render() {
		return(
			<div className="announce">
				<strong className="h3">Diwali Function 2017</strong>
				<blockquote className="blockquote">
					<h4>We have organized a Diwali function on Saturday, 4th November at <strong><Link to="https://goo.gl/maps/kScprRdcr2J2" target="_blank">277 Johnson Ln, Parlin, NJ 08859</Link>.</strong></h4>
					<hr />
					<h4>
					Please <strong><Link to="http://evite.me/Dw98Humxk6" target="_blank">RSVP here</Link></strong>. So, we get the head counts and it helps us to organize this function !
					</h4>
				</blockquote>
				<hr />
			</div>
		);
	}
}