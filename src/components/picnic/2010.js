import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';

export default class Picnic2010 extends Component {
	render() {
		const GadaPicnic2010Images = [
		{
			original: '/staticContent/img/picnic2010/1058411_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1058411_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1129071_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1129071_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1265475_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1265475_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1343601_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1343601_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1537065_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1537065_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1566410_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1566410_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1579369_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1579369_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1664692_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1664692_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1695375_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1695375_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1736298_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1736298_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/1956148_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_1956148_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2024880_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2024880_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2031417_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2031417_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/203829_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_203829_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2123501_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2123501_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2178228_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2178228_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2190375_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2190375_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2311366_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2311366_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2405795_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2405795_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2420527_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2420527_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2455237_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2455237_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2682745_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2682745_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/2722605_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_2722605_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/3016470_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_3016470_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/327389_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_327389_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/3422589_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_3422589_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/3820509_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_3820509_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/3897045_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_3897045_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/3964425_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_3964425_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/403931_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_403931_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/4139755_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_4139755_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/4162594_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_4162594_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/4288668_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_4288668_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/4472199_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_4472199_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/458999_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_458999_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/4738543_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_4738543_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/4905000_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_4905000_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/5024363_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_5024363_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/5119277_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_5119277_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/5145149_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_5145149_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/5168417_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_5168417_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/5235795_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_5235795_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/595572_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_595572_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/5967193_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_5967193_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/6206770_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_6206770_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/6438332_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_6438332_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/658204_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_658204_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/6751765_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_6751765_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/6817904_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_6817904_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/6843011_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_6843011_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/6946052_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_6946052_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/7037560_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_7037560_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/7120057_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_7120057_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/7129987_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_7129987_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/7150921_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_7150921_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/7238351_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_7238351_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/7630284_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_7630284_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/776199_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_776199_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/7955308_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_7955308_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/8234464_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_8234464_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/852728_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_852728_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/8721982_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_8721982_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/885716_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_885716_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/899759_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_899759_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9219574_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9219574_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9327704_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9327704_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9347435_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9347435_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9534923_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9534923_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9710595_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9710595_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9734189_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9734189_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9799902_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9799902_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9881380_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9881380_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9887224_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9887224_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9896845_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9896845_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9908380_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9908380_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9944851_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9944851_orig.jpg'
		},
		{
			original: '/staticContent/img/picnic2010/9953186_orig.jpg',
			thumbnail: '/staticContent/img/picnic2010/thumbs/thumbs_9953186_orig.jpg'
		}
		];
		return(
			<div className="content">
			<Helmet>
				<title>Gada Picnic 2010 | Gada Gaam</title>
			</Helmet>
			<ImageGallery
			        items={GadaPicnic2010Images}
			        slideInterval={2000}/>
			</div>
		);
	}
}