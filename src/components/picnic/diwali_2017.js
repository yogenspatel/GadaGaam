import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ImageGallery from 'react-image-gallery';

export default class Diwali2017 extends Component {
	render() {
		const Diwali2017Images = [{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000013.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000013_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000014.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000014_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000015.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000015_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000016.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000016_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000012.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000012_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000019.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000019_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000020.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000020_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000022.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000022_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000017.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000017_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000021.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000021_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000023.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000023_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000018.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000018_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000025.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000025_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000026.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000026_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000027.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000027_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000028.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000028_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000029.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000029_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000030.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000030_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000024.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000024_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000034.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000034_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000035.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000035_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000033.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000033_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000032.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000032_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000037.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000037_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000036.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000036_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000038.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000038_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000039.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000039_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000040.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000040_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000048.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000048_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000053.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000053_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000056.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000056_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000042.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000042_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000046.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000046_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000055.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000055_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000047.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000047_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000045.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000045_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000044.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000044_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000043.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000043_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000054.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000054_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000031.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000031_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000049.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000049_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000052.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000052_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000051.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000051_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000050.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000050_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000041.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000041_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000058.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000058_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000062.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000062_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000059.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000059_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000068.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000068_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000063.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000063_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000070.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000070_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000060.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000060_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000065.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000065_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000066.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000066_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000064.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000064_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000067.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000067_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000069.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000069_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000057.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000057_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000071.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000071_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000072.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000072_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000075.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000075_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000061.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000061_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000076.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000076_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000074.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000074_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000077.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000077_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000073.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000073_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000078.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000078_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000079.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000079_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000080.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000080_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000081.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000081_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000082.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000082_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000083.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000083_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000087.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000087_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000086.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000086_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000085.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000085_tn.jpg'
		},
		{
			original: '/staticContent/img/Diwali_nj_USA/2017-11-19-PHOTO-00000084.jpg'
			,thumbnail: '/staticContent/img/Diwali_nj_USA/thumbs/2017-11-19-PHOTO-00000084_tn.jpg'
		}];
		return(
			<div className="picnic content">
				<Helmet>
					<title>Diwali Celebration 2017 | Gada Gaam</title>
				</Helmet>
				<h2 className="headline-1">Diwali Celebration 2017, NJ, USA</h2>
				<h3 className="headline-2">Sponsored by: Vrajeshbhai Jayantibhai Patel, Dharmendra Prajapati, Dipeshbhai Patel</h3>
				<hr />
				<ImageGallery
		        items={Diwali2017Images}
		        slideInterval={2000} />
		        <hr />
				<video src="/staticContent/video/Diwali_nj_2017/Video1.mp4" width="70%" height="450" controls />
				<hr />
				<video src="/staticContent/video/Diwali_nj_2017/Video2.mp4" width="70%" height="450" controls />
				<hr />
				<video src="/staticContent/video/Diwali_nj_2017/Video3.mp4" width="70%" height="450" controls />
				<hr />
				<video src="/staticContent/video/Diwali_nj_2017/Video4.mp4" width="70%" height="450" controls />
				<hr />
				<video src="/staticContent/video/Diwali_nj_2017/Video5.mp4" width="70%" height="450" controls />
				<hr />
				<video src="/staticContent/video/Diwali_nj_2017/Video6.mp4" width="70%" height="450" controls />

			</div>
		);
	}
}