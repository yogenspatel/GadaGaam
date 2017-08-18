import React, {Component} from 'react';
import Announcements from './announcements';
import { Helmet } from 'react-helmet';
import ImageGallery from 'react-image-gallery';

export default class Home extends Component {
	render() {
		const VireshwarMandirImages = [
		{
			original: '/staticContent/img/vireshwar_mandir/1.jpg',
			thumbnail: '/staticContent/img/vireshwar_mandir/thumbs/1_tn.jpg'
		},
		{
			original: '/staticContent/img/vireshwar_mandir/2.jpg',
			thumbnail: '/staticContent/img/vireshwar_mandir/thumbs/2_tn.jpg'
		},
		{
			original: '/staticContent/img/vireshwar_mandir/3.jpg',
			thumbnail: '/staticContent/img/vireshwar_mandir/thumbs/3_tn.jpg'
		},
		{
			original: '/staticContent/img/vireshwar_mandir/4.jpg',
			thumbnail: '/staticContent/img/vireshwar_mandir/thumbs/4_tn.jpg'
		},
		{
			original: '/staticContent/img/vireshwar_mandir/5.jpg',
			thumbnail: '/staticContent/img/vireshwar_mandir/thumbs/5_tn.jpg'
		}];

		return(
			<div className="home content">
				<Helmet>
					<title>Home | Gada Gaam</title>
				</Helmet>
				<Announcements />
				<h3 className="headline-3">About J M. Patel high-school, Gada</h3>
				<p className="headline-4">
				If anyone would like to donate for making two classrooms and fixing roof, Please contact <strong>Vrajeshbhai (413-275-4503)</strong>. We need approximately 25 to 35 lakh rupees.</p>
				<p className="headline-4">We are going to update soon for our Gada gaam samaj USA Bank account and figuring out ACH transfer in the USA bank account.</p>
				<h3>Vireshwar Mandir, Gada</h3>
				<ImageGallery
		        items={VireshwarMandirImages}
		        slideInterval={2000} />

			</div>
		);
	}
}