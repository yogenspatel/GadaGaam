import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';

export default class Picnic2012 extends Component {
	render() {
		const GadaPicnic2012Images = [
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-01-02.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-01-02.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-01-10.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-01-10.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-02-05.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-02-05.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-02-19.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-02-19.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-02-28.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-02-28.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-02-46.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-02-46.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-03-50.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-03-50.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-04-02.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-04-02.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-04-52.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-04-52.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-06-21.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-06-21.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-07-33.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-07-33.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-08-04.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-08-04.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-08-43.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-08-43.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-09-32.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-09-32.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-09-55.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-09-55.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-10-07.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-10-07.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-10-14.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-10-14.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-10-27.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-10-27.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-10-46.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-10-46.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-11-10.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-11-10.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-11-25.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-11-25.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-11-36.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-11-36.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-12-14.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-12-14.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-12-37.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-12-37.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-13-08.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-13-08.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-14-13.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-14-13.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-15-02.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-15-02.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-18-37-46.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-18-37-46.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-19-20-48.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-19-20-48.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-19-20-57.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-19-20-57.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-19-22-19.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-19-22-19.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-025.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-025.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-035.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-035.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-038.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-038.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-039.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-039.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-040.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-040.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-041.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-041.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-042.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-042.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-043.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-043.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-044.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-044.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-045.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-045.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-049.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-049.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-050.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-050.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-051.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-051.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-052.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-052.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-053.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-053.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-054.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-054.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-055.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-055.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-058.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-058.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-059.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-059.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-060.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-060.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-061.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-061.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-063.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-063.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-064.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-064.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-065.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-065.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-066.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-066.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-067.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-067.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-068.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-068.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-069.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-069.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-071.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-071.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-072.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-072.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-073.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-073.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-075.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-075.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-076.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-076.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-077.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-077.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-079.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-079.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-080.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-080.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-081.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-081.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-082.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-082.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-084.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-084.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-085.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-085.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-086.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-086.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-087.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-087.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-088.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-088.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-090.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-090.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-092.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-092.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-093.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-093.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-094.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-094.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-095.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-095.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-096.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-096.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-097.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-097.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-099.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-099.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-100.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-100.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-101.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-101.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-103.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-103.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-108.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-108.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-109.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-109.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-110.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-110.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-111.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-111.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-112.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-112.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-113.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-113.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-115.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-115.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-116.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-116.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-117.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-117.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-118.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-118.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-119.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-119.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-120.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-120.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-121.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-121.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-123.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-123.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-125.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-125.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-126.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-126.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-127.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-127.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-128.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-128.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-129.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-129.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-140.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-140.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-141.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-141.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-143.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-143.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-145.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-145.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-148.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-148.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-149.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-149.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-150.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-150.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-152.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-152.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-153.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-153.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-154.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-154.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-155.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-155.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-156.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-156.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-157.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-157.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-160.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-160.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-161.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-161.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-162.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-162.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-163.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-163.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-164.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-164.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-165.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-165.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-167.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-167.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-169.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-169.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-170.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-170.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-173.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-173.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-174.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-174.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-176.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-176.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-178.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-178.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-180.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-180.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-181.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-181.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-190.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-190.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-192.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-192.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-194.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-194.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-195.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-195.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-196.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-196.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-197.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-197.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-201.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-201.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-206.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-206.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-209.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-209.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-210.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-210.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-220.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-220.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-221.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-221.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-222.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-222.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-223.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-223.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-225.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-225.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-227.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-227.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-228.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-228.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-229.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-229.jpg'
		},
		{
			original: '/staticContent/img/picnic-2012/2012-07-22-gada-picnic-230.jpg',
			thumbnail: '/staticContent/img/picnic-2012/thumbs/thumbs_2012-07-22-gada-picnic-230.jpg'
		}
		];
		return(
			<div className="picnic content">
				<Helmet>
					<title>Gada Picnic 2012 | Gada Gaam</title>
				</Helmet>
				<h2 className="headline-1">Summer Picnic 2012, Holmdale Park, Holmdel, NJ, USA</h2>
				<h3 className="headline-2">Sponsored by Navinchandra Kantibhai-Chotalal Patel and Kinnarbhai Bhupendrabhai-Manibhai Patel</h3>

				<div className="card-columns">
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/picnicSponsors/Kinnerbhai.jpg" alt="Kinnerbhai Patel" />
				    <div className="card-block">
				      <h4 className="card-title">Kinnerbhai Patel</h4>
				    </div>
				  </div>
				  <div className="card">
				    <img className="card-img-top img-fluid" src="/staticContent/img/picnicSponsors/Navinchandra.jpg" alt="Navinchandra Patel" />
				    <div className="card-block">
				      <h4 className="card-title">Navinchandra Patel</h4>
				    </div>
				  </div>
				</div>
				<div className="card">
					  <div className="card-block">
					    <p className="card-text">Thank you Navinchandra Kantibhai-Chotalal Patel and Kinnarbhai Bhupendrabhai-Manibhai Patel. It was a great picnic, everyone was happy with this year’s picnic.</p>
					  </div>
				</div>
				<ImageGallery
			        items={GadaPicnic2012Images}
			        slideInterval={2000}/>
			</div>
		);
	}
}