import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';

export default class VictoriaFalls extends Component {
	render() {
		const VictoriaFallsImages = [
		{
			original: '/staticContent/img/victoriafall/1126846_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_1126846_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/1296405_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_1296405_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/1635804_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_1635804_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/1835829_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_1835829_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/196107_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_196107_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/2531373_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_2531373_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/3454300_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_3454300_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/3834756_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_3834756_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/4426685_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_4426685_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/4437813_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_4437813_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/4587839_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_4587839_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/538241_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_538241_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/5439782_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_5439782_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/5510296_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_5510296_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/5950831_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_5950831_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/6027980_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_6027980_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/6249457_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_6249457_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/6588417_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_6588417_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/708462_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_708462_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/7644723_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_7644723_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/765447_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_765447_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/8253441_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_8253441_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/9173912_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_9173912_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/9756830_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_9756830_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/9823963_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_9823963_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/9845594_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_9845594_orig.jpg'
		},
		{
			original: '/staticContent/img/victoriafall/9940127_orig.jpg',
			thumbnail: '/staticContent/img/victoriafall/thumbs/thumbs_9940127_orig.jpg'
		}
		];
		return(
			<div className="content">
			<Helmet>
				<title>Gada Picnic Victoria Falls | Gada Gaam</title>
			</Helmet>
			<ImageGallery
			        items={VictoriaFallsImages}
			        slideInterval={2000}/>
			</div>
		);
	}
}