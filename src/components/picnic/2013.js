import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';

export default class Picnic2013 extends Component {
	render() {
		const GadaPicnic2013Images = [
		{
			original: '/staticContent/img/picnic-2013/img_0512.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0512.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0514.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0514.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0516.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0516.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0518.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0518.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0519.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0519.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0520.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0520.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0521.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0521.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0524.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0524.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0526.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0526.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0528.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0528.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0531.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0531.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0537.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0537.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0538.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0538.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0549.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0549.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0551.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0551.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0564.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0564.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0565.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0565.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0571.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0571.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0572.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0572.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0577.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0577.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0578.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0578.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0580.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0580.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0582.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0582.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0587.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0587.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0591.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0591.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0592.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0592.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0594.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0594.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0596.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0596.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0597.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0597.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0598.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0598.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0600.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0600.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0605.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0605.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0607.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0607.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0609.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0609.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0610.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0610.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0611.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0611.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0612.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0612.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0614.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0614.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0615.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0615.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0617.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0617.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0618.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0618.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0621.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0621.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0624.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0624.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0627.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0627.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0629.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0629.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0631.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0631.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0636.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0636.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0637.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0637.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0640.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0640.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0642.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0642.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0645.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0645.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0648.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0648.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0649.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0649.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0651.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0651.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0654.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0654.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0655.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0655.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0658.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0658.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0659.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0659.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0660.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0660.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0661.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0661.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0662.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0662.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0663.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0663.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0665.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0665.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0667.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0667.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0669.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0669.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0670.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0670.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0672.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0672.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0674.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0674.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0675.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0675.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0676.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0676.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0681.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0681.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0682.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0682.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0683.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0683.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0684.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0684.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0686.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0686.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0687.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0687.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0690.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0690.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0692.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0692.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0694.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0694.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0696.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0696.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0700.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0700.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0703.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0703.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0704.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0704.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0707.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0707.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0708.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0708.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0709.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0709.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0713.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0713.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0715.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0715.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0717.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0717.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0718.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0718.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0723.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0723.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0724.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0724.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0727.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0727.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0728.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0728.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0729.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0729.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0731.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0731.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0735.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0735.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0744.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0744.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0747.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0747.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0751.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0751.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0755.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0755.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0756.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0756.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0758.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0758.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0760.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0760.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0761.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0761.jpg'
		},
		{
			original: '/staticContent/img/picnic-2013/img_0762.jpg',
			thumbnail: '/staticContent/img/picnic-2013/thumbs/thumbs_img_0762.jpg'
		},
		];

		return(
			<div className="picnic content">
				<Helmet>
					<title>Gada Picnic 2013 | Gada Gaam</title>
				</Helmet>
				<h2 className="headline-1">Summer Picnic 2013, Holmdale Park, Holmdel, NJ, USA</h2>
				<h3 className="headline-2">Sponsored by: </h3>
				<h3 className="headline-2">Atulbhai (Bade) Patel and Anjanaben Patel</h3>
				<h3 className="headline-2">Rajubhai (Bade) Patel and Kaminiben Patel</h3>
				<h3 className="headline-2">Rajubhai Patel and Ritaben Patel</h3>

				<div className="card-columns">
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/picnicSponsors/Atulbhai_Anjanaben.jpg" alt="Atulbhai and Anjanaben Patel" />
				    <div className="card-block">
				      <h4 className="card-title">Atulbhai & Anjanaben Patel</h4>
				    </div>
				  </div>
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/picnicSponsors/Rajubhai_Kaminiben.jpg" alt="Rajubhai and Kaminiben Patel" />
				    <div className="card-block">
				      <h4 className="card-title">Rajubhai & Kaminiben Patel</h4>
				    </div>
				  </div>
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/picnicSponsors/Rajubhai_Ritaben.jpg" alt="Rajubhai and Ritaben" />
				    <div className="card-block">
				      <h4 className="card-title">Rajubhai & Ritaben Patel</h4>
				    </div>
				  </div>
				  <div className="card">
					  <div className="card-block">
					    <p className="card-text">Thank you Atulbhai (Bade) Patel, Rajubhai (Bade) Patel and Rajubhai Patel. It was a great picnic, everyone was happy with this year’s picnic.</p>
					  </div>
				  </div>
				</div>
				<ImageGallery
			        items={GadaPicnic2013Images}
			        slideInterval={2000}/>
			</div>
		);
	}
}