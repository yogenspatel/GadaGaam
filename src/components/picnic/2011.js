import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';

export default class Picnic2011 extends Component {
	render() {
		const GadaPicnic2011Images = [
	    {
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01862.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01862.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01863.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01863.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01864.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01864.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01865.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01865.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01866.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01866.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01867.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01867.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01868.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01868.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01869.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01869.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01870.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01870.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01871.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01871.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01872.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01872.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01873.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01873.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01874.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01874.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01875.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01875.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01876.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01876.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01878.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01878.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01879.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01879.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01880.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01880.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01881.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01881.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01882.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01882.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01883.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01883.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01884.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01884.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01886.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01886.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01887.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01887.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01888.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01888.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01889.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01889.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01890.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01890.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01891.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01891.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01892.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01892.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01893.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01893.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01894.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01894.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01895.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01895.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01896.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01896.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01897.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01897.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01898.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01898.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01899.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01899.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01900.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01900.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01901.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01901.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01902.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01902.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01903.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01903.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01904.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01904.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01905.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01905.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01906.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01906.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01907.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01907.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01908.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01908.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01909.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01909.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01910.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01910.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01911.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01911.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01912.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01912.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01913.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01913.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01914.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01914.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01915.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01915.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01916.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01916.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01917.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01917.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01918.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01918.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01919.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01919.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01920.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01920.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01921.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01921.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01922.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01922.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01923.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01923.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01924.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01924.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01925.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01925.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01926.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01926.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01927.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01927.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01928.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01928.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01929.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01929.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01930.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01930.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01931.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01931.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01932.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01932.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01933.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01933.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01934.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01934.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01935.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01935.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01936.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01936.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01937.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01937.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01938.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01938.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01939.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01939.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01940.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01940.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01941.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01941.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01942.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01942.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01943.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01943.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01944.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01944.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01945.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01945.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01946.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01946.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01947.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01947.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01948.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01948.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01949.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01949.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01950.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01950.jpg'
		},
		{
			original: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/dsc01951.jpg',
			thumbnail: '/staticContent/img/gada-picnic-2011-home-dale-park-nj/thumbs/thumbs_dsc01951.jpg'
		}
	    ];
		return(
			<div className="content">
			<Helmet>
				<title>Gada Picnic 2011 | Gada Gaam</title>
			</Helmet>
			<ImageGallery
			        items={GadaPicnic2011Images}
			        slideInterval={2000}/>
			</div>
		);
	}
}