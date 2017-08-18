import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';

export default class photoGallery extends Component {
	render() {
		const photoGalleryImages = [
		{
			original: '/staticContent/img/photo-gallery/1132071_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_1132071_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/1414099_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_1414099_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/1695325_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_1695325_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/2009572_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_2009572_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/2641794_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_2641794_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/2834198_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_2834198_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/2975821_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_2975821_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/3670632_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_3670632_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/3894509_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_3894509_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/4267412_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_4267412_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/4416868_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_4416868_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/4493453_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_4493453_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/4520410_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_4520410_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/5167177_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_5167177_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/5634898_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_5634898_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/6624439_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_6624439_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/6649834_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_6649834_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/6899379_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_6899379_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/7499487_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_7499487_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/7713576_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_7713576_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/7714388_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_7714388_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/8397274_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_8397274_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/8505754_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_8505754_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/8540548_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_8540548_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/8624013_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_8624013_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/9387938_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_9387938_orig.jpg'
		},
		{
			original: '/staticContent/img/photo-gallery/9988935_orig.jpg',
			thumbnail: '/staticContent/img/photo-gallery/thumbs/thumbs_9988935_orig.jpg'
		}
		];
		return(
			<div className="content">
			<Helmet>
					<title>Gada Photo Gallery | Gada Gaam</title>
			</Helmet>
			<img src="/staticContent/img/vatan.jpg" alt="gada Gaam" />
			<ImageGallery
		        items={photoGalleryImages}
		        slideInterval={2000} />
		    </div>
		);
	}
}