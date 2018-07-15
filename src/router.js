import React from 'react';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import PhoneDir from './components/phone-dir';
import News from './components/news';
import NivasiAfrica from './components/nivasi-africa';
import NivasiUSA from './components/nivasi-usa';
import NivasiUK from './components/nivasi-uk';
import ContactUs from './components/contact-us';
import SisDaughtersUSA from './components/sis-daughters-usa';
import SPAnnouncements from './components/special-announcement-page'
import photoGallery from './components/photo-gallery';
import picnic2017 from './components/picnic/2017';
import picnic2016 from './components/picnic/2016';
import picnic2015 from './components/picnic/2015';
import picnic2014 from './components/picnic/2014';
import picnic2013 from './components/picnic/2013';
import picnic2012 from './components/picnic/2012';
import picnic2011 from './components/picnic/2011';
import picnic2010 from './components/picnic/2010';
import victoriaFalls from './components/picnic/victoria-falls';
import deathNote from './components/death-note';
import HighSchoolRenovation from './components/high-school-renovation-2017';
import Diwali2017 from './components/picnic/diwali_2017';

import history from './utilities/history';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default (
	<Router history={history}>
		<div>
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/phone-dir" component={PhoneDir} />
			<Route path="/news" component={News} />
			<Route path="/nivasi/africa" component={NivasiAfrica} />
			<Route path="/nivasi/usa" component={NivasiUSA} />
			<Route path="/nivasi/uk" component={NivasiUK} />
			<Route path="/contact" component={ContactUs} />
			<Route path="/sisters/daughters/usa" component={SisDaughtersUSA} />
			<Route path="/special/announcements" component={SPAnnouncements} />
			<Route path="/photo/gallery" component={photoGallery} />
			<Route path="/picnic/2017" component={picnic2017} />
			<Route path="/picnic/2016" component={picnic2016} />
			<Route path="/picnic/2015" component={picnic2015} />
			<Route path="/picnic/2014" component={picnic2014} />
			<Route path="/picnic/2013" component={picnic2013} />
			<Route path="/picnic/2012" component={picnic2012} />
			<Route path="/picnic/2011" component={picnic2011} />
			<Route path="/picnic/2010" component={picnic2010} />
			<Route path="/victoria/falls/zimbabwe" component={victoriaFalls} />
			<Route path="/death/note" component={deathNote} />
			<Route path="/highschool/renovation/donors" component={HighSchoolRenovation} />
			<Route path="/diwali/2017" component={Diwali2017} />
			<Footer />
		</div>
	</Router>
);