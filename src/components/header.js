import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return(
			<div>
			<div className="header"><h1>Welcome to Gada Gaam</h1></div>
			<nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon"></span>
  			  	</button>
			    <Link className="navbar-brand" to="/">Gada Gaam</Link>
			    <div className="collapse navbar-collapse" id="navbarNavDropdown">
			      <ul className="navbar-nav">
			        <li className="nav-item"><Link to="/phone-dir" className="nav-link">Phone Directory</Link></li>
			        <li className="nav-item"><Link to="/news" className="nav-link">News</Link></li>
			        <li className="nav-item dropdown">
			          <Link className="nav-link dropdown-toggle" to="/nivasi/usa" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nivasi</Link>
			          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			            <Link to="/nivasi/usa" className="dropdown-item">USA</Link>
			            <Link to="/nivasi/uk" className="dropdown-item">UK</Link>
			            <Link to="/nivasi/Africa" className="dropdown-item">Africa</Link>
			          </div>
			        </li>
			        
			        <li className="nav-item dropdown">
			          <Link className="nav-link dropdown-toggle" to="/picnic/2017" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Annual Program</Link>
			          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			            <Link to="/picnic/2017" className="dropdown-item">Picnic 2017</Link>
			            <Link to="/picnic/2016" className="dropdown-item">Picnic 2016</Link>
			            <Link to="/picnic/2015" className="dropdown-item">Picnic 2015</Link>
			            <Link to="/picnic/2014" className="dropdown-item">Picnic 2014</Link>
			            <Link to="/picnic/2013" className="dropdown-item">Picnic 2013</Link>
			            <Link to="/picnic/2012" className="dropdown-item">Picnic 2012</Link>
			            <Link to="/picnic/2011" className="dropdown-item">Picnic 2011</Link>
			            <Link to="/picnic/2010" className="dropdown-item">Picnic 2010</Link>
			            <Link to="/victoria/falls/zimbabwe" className="dropdown-item">Victoria Falls Zimbabwe</Link>
			          </div>
			        </li>
			        <li className="nav-item"><Link to="/photo/gallery" className="nav-link">Photo Gallery</Link></li>
			        
			        <li className="nav-item dropdown">
			          <Link className="nav-link dropdown-toggle" to="/sisters/daughters/usa" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More...</Link>
			          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			            <Link to="/sisters/daughters/usa" className="dropdown-item">Sisters & Daughters in USA</Link>
			            <Link to="/death/note" className="dropdown-item">Death Note</Link>
			            <Link to="/special/announcements" className="dropdown-item">Special Announcements</Link>
			          </div>
			        </li>

			        <li className="nav-item"><Link to="/contact" className="nav-link"><span className="glyphicon glyphicon-log-in"></span> Contact US</Link></li>
			        
			      </ul>
			    </div>
			</nav>
			</div>
		);
	}
}