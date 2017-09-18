import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default class News extends Component {
	render() {
		const gadaSchoolImages = [{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0024.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0024_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0020.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0020_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0017.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0017_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0010.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0010_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0025.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0025_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0002.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0002_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0005.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0005_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0015.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0015_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0022.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0022_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0011.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0011_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0028.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0028_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0023.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0023_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0007.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0007_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0019.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0019_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0006.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0006_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0009.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0009_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0004.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0004_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0027.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0027_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0013.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0013_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0016.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0016_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0008.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0008_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0021.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0021_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0003.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0003_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0001.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0001_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0000.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0000_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0012.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0012_tn.jpg'
		},
		{
			original: '/staticContent/img/gada_school_2017/IMG-20170912-WA0026.jpg'
			,thumbnail: '/staticContent/img/gada_school_2017/thumbs/IMG-20170912-WA0026_tn.jpg'
		}];

		const gadaNews1Images = [
	    {
	        original: '/staticContent/img/gadanews1/970825_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_970825_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/1014698_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_1014698_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/2085927_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_2085927_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/4036771_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_4036771_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/4740062_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_4740062_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/5670966_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_5670966_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/6507962_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_6507962_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/6882495_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_6882495_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/7074706_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_7074706_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/7729388_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_7729388_orig.jpg'
	    },
	    {
	        original: '/staticContent/img/gadanews1/9252035_orig.jpg',
	        thumbnail: '/staticContent/img/gadanews1/thumbs/thumbs_9252035_orig.jpg'
	    }];

	    const gadaNews2Images = [
		{
			original: '/staticContent/img/gadanews2/1138502_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_1138502_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/1324462_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_1324462_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/1571730_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_1571730_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/2531298_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_2531298_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/4040753_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_4040753_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/5139346_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_5139346_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/549857_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_549857_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/5563026_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_5563026_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/7381610_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_7381610_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/7628177_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_7628177_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/8611501_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_8611501_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/9096319_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_9096319_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews2/953693_orig.jpg',
			thumbnail: '/staticContent/img/gadanews2/thumbs/thumbs_953693_orig.jpg'
		}
	    ];

	    const gadaNews3Images = [
		{
			original: '/staticContent/img/gadanews3/1529796_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_1529796_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews3/3171156_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_3171156_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews3/5883843_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_5883843_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews3/5994458_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_5994458_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews3/6084627_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_6084627_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews3/6294531_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_6294531_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews3/7897983_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_7897983_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews3/9138971_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_9138971_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews3/9812835_orig.jpg',
			thumbnail: '/staticContent/img/gadanews3/thumbs/thumbs_9812835_orig.jpg'
		}
	    ];

	    const gadaNews4Images = [
		{
			original: '/staticContent/img/gadanews4/1906774_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_1906774_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/2135158_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_2135158_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/2188785_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_2188785_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/3125915_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_3125915_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/3299109_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_3299109_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/3985412_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_3985412_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/4279279_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_4279279_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/4391589_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_4391589_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/5089760_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_5089760_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/5626378_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_5626378_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/6234707_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_6234707_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/6274813_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_6274813_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/7444465_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_7444465_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/765943_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_765943_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/8151526_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_8151526_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/8971948_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_8971948_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews4/9729907_orig.jpg',
			thumbnail: '/staticContent/img/gadanews4/thumbs/thumbs_9729907_orig.jpg'
		}
	    ];

	    const gadaNews5Images = [
		{
			original: '/staticContent/img/gadanews5/1347403_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_1347403_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews5/1364629_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_1364629_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews5/1599159_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_1599159_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews5/2909181_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_2909181_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews5/4201586_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_4201586_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews5/5405613_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_5405613_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews5/6816486_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_6816486_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews5/8204895_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_8204895_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews5/8286814_orig.jpg',
			thumbnail: '/staticContent/img/gadanews5/thumbs/thumbs_8286814_orig.jpg'
		}
	    ];

	    const gadaNews6Images = [
		{
			original: '/staticContent/img/gadanews6/1566679_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_1566679_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/1586721_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_1586721_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/1780254_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_1780254_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/1858299_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_1858299_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/2174659_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_2174659_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/2584753_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_2584753_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/2725405_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_2725405_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/2933977_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_2933977_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/2969823_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_2969823_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/3010081_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_3010081_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/3221035_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_3221035_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/3943414_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_3943414_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/4303667_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_4303667_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/4362271_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_4362271_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/4868070_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_4868070_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/5129402_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_5129402_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/5172228_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_5172228_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/5819856_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_5819856_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/6268599_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_6268599_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/6852351_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_6852351_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/7086515_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_7086515_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/7691087_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_7691087_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/8334058_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_8334058_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/8375047_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_8375047_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/9389536_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_9389536_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/9552023_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_9552023_orig.jpg'
		}
	    ];

	    const gadaNews8Images = [
		{
			original: '/staticContent/img/gadanews6/2904007_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_2904007_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/6307174_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_6307174_orig.jpg'
		},
		{
			original: '/staticContent/img/gadanews6/4569875_orig.jpg',
			thumbnail: '/staticContent/img/gadanews6/thumbs/thumbs_4569875_orig.jpg'
		}
	    ];

		const gadaNews9Images = [
	    {
	        original: '/staticContent/img/gada-news9/gada-jan-2012-015.jpg',
	        thumbnail: '/staticContent/img/gada-news9/thumbs/thumbs_gada-jan-2012-015.jpg'
	    },
	    {
	        original: '/staticContent/img/gada-news9/gada-jan-2012-016.jpg',
	        thumbnail: '/staticContent/img/gada-news9/thumbs/thumbs_gada-jan-2012-016.jpg'
	    },
	    {
	        original: '/staticContent/img/gada-news9/gada-jan-2012-018.jpg',
	        thumbnail: '/staticContent/img/gada-news9/thumbs/thumbs_gada-jan-2012-018.jpg'
	    },
	    {
	        original: '/staticContent/img/gada-news9/gada-jan-2012-021.jpg',
	        thumbnail: '/staticContent/img/gada-news9/thumbs/thumbs_gada-jan-2012-021.jpg'
	    }];

		return(
			<div className="news content">
				<Helmet>
					<title>Gada News | Gada Gaam</title>
				</Helmet>
				<h3>"ગુજરાતી ગૌરવ ગાથા"</h3>
				<p>વધેલા શરીરવાળા ગુજરાતીઓ માટે કસરત એટલે જમ્યા પછી પાનના ગલ્લા સુધી ચાલતાં જવું તે. મોઢામાં પાન કે મસાલો દબાવી કલાકો સુધી વિષયવિહીન ચર્ચાઓ કરવામાં ગુજરાતીઓની માસ્ટરી છે. પાનના ગલ્લા અને ચાની કીટલીઓ એ ગુજરાતીઓ માટે વૈચારિક આદાન-પ્રદાન માટેના આદર્શ સ્થાનકો છે. સાચો સમાજવાદ આ બે જગ્યાઓએ જ જોવા મળે છે. અહીંયા ગાડી, સ્કૂટરવાળા સાથે જ મજૂર પણ ઊભો રહી ચા પીતો હોય છે. (આ વાત પર બે કટિંગ ચા થઈ જાય, હોં ભઈ!)</p>
				<p>દરેક ગુજરાતી મા-બાપને તેમના સંતાનોને ડોક્ટર, એન્જિનિયર કે સી.એ. બનાવવામાં જ રસ હોય છે. સંતાનોની કરિયર મા-બાપ જ નક્કી કરે છે. કોઈ ગુજરાતી મા-બાપને એવું કહેતા સાંભળ્યા નથી કે &#8216;મારે મારા દીકરાને કલાકાર બનાવવો છે, મારે મારી દીકરીને ચિત્રકાર બનાવવી છે, મારો દીકરો ફોજમાં જશે, મારી દીકરીને એથ્લિટ બનાવવી છે, મારા દીકરાને ફેલ્પ્સ જેવો તરવૈયો બનાવવો છે.&#8217; (નાટક-ચેટક, કવિતા, સાહિત્ય-લેખનના રવાડે ચઢેલા છોકરાંવને તો આઉટલાઈનના કહેવાય છે, હોં ભઈ !)<br />
				રૂપિયા કમાવા સિવાય બીજો કોઈ પણ શોખ ન ધરાવતા ગુજરાતીઓનો એક શોખ ખૂબ જાણીતો છે રજાઓમાં ફરવા જવાનો અને તે પણ સાથે ખૂબ બધા નાસ્તા લઈને. જ્યારે અને જ્યાં પણ ફરવા જઈએ ત્યારે ડબ્બાઓના ડબ્બા ભરીને સેવમમરા, ઢેબરાં,ગાંઠિયાં, પૂરીઓ, અથાણાં સાથે લઈને નીકળીએ છીએ. ઘર બદલ્યું હોય એટલો બધો સામાન લઈ ટ્રેનમાં ખડકાઈએ છીએ અને ટ્રેન ઉપડે કે પંદર જ મિનિટમાં રાડારાડી કરતાં નાસ્તાઓ ઝાપટવા મંડીએ છીએ અને ઢોળવા મંડીએ છીએ. ગુજરાતીઓના ફરવાના શોખના કારણે પરદેશની ટૂરમાં ગુજરાતી થાળી મળતી થઈ ગઈ છે. જો ગુજરાતીઓ ફરવાનું બંધ કરી દે તો બધી જ ટ્રાવેલ્સ એજન્સીઓ અને પેકેજ ટૂર, કપલ ટૂરવાળાઓનું ઉઠમણું થઈ જાય. (આપણે ફરવાની સાથે ફરવાની સલાહ આપવાના પણ શોખીન છીએ. નવસારી સુધી પણ નહીં ગયેલો માણસ નૈનિતાલ કેવી રીતે જવું તેની સલાહ આપી શકે, હોં ભઈ!)</p>
				<p>ગુજરાતીઓના લેટેસ્ટ બે શોખ. એક &#8211; ટુ વ્હીલર અને બીજો &#8211; મોબાઈલ. જગતમાં સૌથી વધારે ટુ વ્હીલર ગુજરાતમાં ફરે છે. આપણું ચાલે એક રૂમમાંથી બીજા રૂમમાં જવા માટે પણ ટુ-વ્હીલર વાપરીએ. પહેલાના જમાનામાં એવું કહેવાતું તું કે &#8216;દેવું કરીને પણ ઘી પીવું.&#8217; હવે એવું કહેવાય છે કે &#8216;દેવું કરીને પણ બાઈક લેવું.&#8217; ગુજરાતીઓના &#8216;દિલની સૌથી નજીક&#8217; જો કોઈ હોય તો તે છે મોબાઈલ (કેમકે આપણે મોબાઈલને હંમેશાં શર્ટના ઉપલાં ખિસ્સામાં જ રાખીએ છીએ.) જાત-જાતના મોબાઈલ, ભાતભાતની રિંગટોનનો આપણને જબરજસ્ત ક્રેઝ છે. મોબાઈલની સૌથી વધુ સ્કિમ આપણા ગુજરાતમાં જ છે અને તેનો સૌથી વધુ લાભ પણ ગુજરાતીઓ ઉઠાવે છે. જો સ્કિમમાં &#8216;ફ્રી&#8217; લખ્યું તો તો &#8216;ખ…લ્લા…સ&#8217;. રાત્રે દસથી સવારે છ, &#8216;મોબાઈલથી મોબાઈલ ફ્રી&#8217; એવી સ્કિમ જાહેર થાય એટલે ગુજરાતીઓ મચી જ પડે.. બાજુ-બાજુમાં બેઠા હોય તો પણ મોબાઈલથી મોબાઈલ વાતો કરે ! (હે…લો…, અને જ્યારે બિલ આવે ત્યારે કંપનીવાળા જોડે સૌથી વધુ બબાલ પણ આપણે જ કરીએ છીએ, હોં ભઈ !)</p>
				<p>ગુજરાતીઓની સ્વભાવગત ખાસિયત પણ અનોખી છે. આપણે એવર ઓપ્ટિમિસ્ટ એટલે કે સદાય આશાવાદી માણસો છીએ. શેરબજાર ક…ડ…ડ…ડ…ભૂ&#8230;સ…કરતું તૂટે તો પણ આપણે આશા રાખીએ છીએ કે &#8216;કશો વાંધો નહીં, કાલે બજાર ઉપર આવી જ જશે.&#8217; આ સાથે આપણે ગુજરાતીઓ એટલા જ ખમીરવંતા પણ છીએ. ભૂકંપ આવે, પૂર આવે કે બોમ્બ બ્લાસ્ટ થાય, આપણે ત્યાં બીજા દિવસથી તો બધું રાબેતા મુજબ….</p>
				<p>ગુજરાતીઓની એક સૌથી મોટી ખાસિયત, ખૂબી, વિશેષતા, વિલક્ષણતા એ છે કે આપણે ગુજરાતીઓ ક્યારેય પણ કોઈનાથી ઈમ્પ્રેસ થતા નથી. સાદા શબ્દોમાં કહીએ તો આપણે ક્યારેય કોઈથી ઘીસ ખાતા નથી. ગમે તેવો મોટો ચમરબંધી હોય પણ આપણે તેનાથી અંજાઈ જતા થી. &#8216;એ લાટસા&#8217;બ હોય તો એના ઘેર, મારે શું ?&#8217; આવી તાસીર જ આપણને &#8216;જીદ કરી દુનિયા બદલવાની&#8217; શક્તિ આપે છે અને તેના લીધે જ ગુજરાતની ધરતી પર ગાંધીજી, સરદાર અને ધીરુભાઈ જેવી હસ્તીઓ પાકી છે. (શું કહો છો, બરાબરને ભઈ?)<br />
				હાચુ કઉં તો મને તો ઍક ગુજરાતી હોવાનો બહું ગર્વ છે, તમને છે?<br />
				જો હા તો, ઍક સાચા ગુજરાતી તરીકે તમે પણ આપણી આ &#8216;ગુજરાતી ગૌરવ ગાથા&#8217; ને આગળ ધપાવો.</p>
				
				<strong className="h3">About J M. Patel high-school, Gada</strong>
				<blockquote className="blockquote">
				Please take a moment and look these all pictures above. 
		        This is the condition of our school in Gada. It's very very poor conditions.
		        As we know what a great facility have provided in our kids in here USA, from this we don't have even have 5% facility in our Born land Gada. 
		        We know that it's painful for all of you, please come forward and let's help our school our kids, our brothers, our Mother Land.
		        </blockquote>
				<ImageGallery
		        items={gadaSchoolImages}
		        slideInterval={2000} />

		        <hr />

				<ol>

					<li>

					જે.એમ.પટેલ હાઇસ્કુલ વિશે, ગાડા
					જો કોઈ બે વર્ગખંડો બનાવવા અને છત સુધારવા માટે દાન કરવા માંગતા હોય, તો કૃપા કરીને અમોને સંયર્ક કરો
					કારણ કે અમે પ્રમાણભૂત 11 અને 12 કક્ષા ઉમેર્યા છે, જેથી કરીને વિર્ધાથીઓ ની સંખ્યામાં વધારો થયેલ છે.તેથી બે વર્ગખંડ વધારવાની ખુબજ આવયસક છે. અને છત ની હાલત ખુબ જ ખરાબછે તેથી જો આપણે બીજા માળ પર બે વર્ગખંડ બનાવીએ જેથી વર્ગખંડ  બનાવવા સાથે છતને પણ ઠીક કરી શકીએ, તેથી કૃપા કરીને આ બાબતે ધ્યાન આપવા સર્વે ભાઈબંધુ તથા સખા સખીને નમ્રવીનંતી કે આ ખૂબ અગત્યનું કામ છે.આ આપણી સર્વેની ફર્જ છે.સ્કૂલને મદદ કરવાની તક છે. આ કામ માટે આશરે ૨પ લાખ રૂપીયા ની જરૂરીયાત છે.

					</li>
					<li>
					ગાડાગામ સમાજ (યુએસએ) આ આપણા ગામની સંસ્થા છે જે અહીંયા (USA માં આપણે NoN profit org . રજીસટેડ કરાવેલ છે. જેના અંતર મળેલી રકમ 760000 રૂપીયા ગાડા બેન્કમાં ફીક્ષ ડીપોજીટમાં રાખેલ છે. જેનુ વ્યાજ વર્ષ દરમીયાન 56ooo આવે છે. આ રકમ ગાડા ગામ ના દવાખાના ના વાર્ષીક ખચમાં ઉપીયોગ થાય છે. હવે આ ફીક્ષ ડીપોજીટમાં આપણે વધારે રકમ ઉમેરી શકીયે તો વ્યાજ ની રકમ વધી શકે જેથી આ વ્યાજ ની રકમ આપણે જરૂરત પ્રમાણે વ્યકતીને તેમ ના મેડિકલ ઇમર્જન્સી માં મદદ કરી શકીયે (દાખલા તરીકે હાલમાં કિરીટ ભાઈ રામભાઇ ના દિકરા ને રોડ અકસ્માત માં બહુ જ ખરાબ પરીસ્થીતી, સર્જાઇ) તો આવા સમયે આ વ્યાજ ની રકમમાંથી જરૂરિયાત મુજબ મદદ કરી શકીયે તો ભાઈઓ સંપર્ક કરો, વ્રજેશ કુમાર જે.પટેલ
					</li>

					<li>
					સ્કૂલ માટે ના ફંડ માં ૨૫ લાખથી વધારે રકમ આવ શે તો તે રકમ ગાડા બૅન્ક ની જે ફીક્ષ ડિપોજીટ છે.તેમા ઉમેરણ કરવામાં આવ શે.
						<ul>
							<li>
							ખાસ નોધ આપની સંસ્થા NoNprofit છે.જેથી દાન માટે ની રકમ  વાર્ષિક ટેક્ષ જમાં કરવામાં છૂટ મણી શકે છે.  
							</li>
							<li>
							આ સંસ્થા દરીમીયાન ફક્ત ફક્ત અને ફક્ત દવા અને દવાખાના તથા સ્કુલ શાળા માટે નીજ મદદ કરવામાં આવ શે. આ બૅ માધ્યમ ખુબજ જરૂરી અને આવશ્યક છે. જેને જેટ લી બને તેટલી મજબૂત અને સહુલતપૂર્ણ બનાવીયે 
							</li>
						</ul>
					</li>
				</ol>

ખૂબ ખૂબ આભાર, ધન્યવાદ, પ્રણામ

We all people are responsible for this all important organization, we have registered in IRS non profit organization Gada gaam samaj USA ( Handling from USA).
Please <strong><Link to="/contact">contact US</Link></strong> if you any questions/concerns.

<hr />
				<h2>BHAJAN SANDHYA GADA 2010-11</h2>
				<ImageGallery
			        items={gadaNews2Images}
			        slideInterval={2000}
			        onImageLoad={this.handleImageLoad}/>			    

				<h2>J.M.PATEL SCHOOL GADA NOTBOOK VITRAN 21/6/2011</h2>
				<ImageGallery
			        items={gadaNews3Images}
			        slideInterval={2000}
			        onImageLoad={this.handleImageLoad}/>
				
				<h2>GADA HIGH SCHOOL MAY31, 2011</h2>
				<ImageGallery
			        items={gadaNews4Images}
			        slideInterval={2000}
			        onImageLoad={this.handleImageLoad}/>

				<h2>J.M.PATEL SCHOOL GADA COMPOUND WALL KHATMURAT-8/4/11</h2>
				<ImageGallery
			        items={gadaNews5Images}
			        slideInterval={2000}
			        onImageLoad={this.handleImageLoad}/>
				<h2>Van Bhojan Khodiyar Mata Gada @ J.M High School, 2nd Feb 2011</h2>
				<ImageGallery
			        items={gadaNews6Images}
			        slideInterval={2000}
			        onImageLoad={this.handleImageLoad}/>
			    <ImageGallery
			        items={gadaNews9Images}
			        slideInterval={2000}
			        onImageLoad={this.handleImageLoad}/>
				<h2>NAVARATRI IN GADA 2011</h2>
				<iframe src="http://www.youtube.com/embed/4M9wcxaeWPE" width="560" height="315"></iframe>
				<iframe src="http://www.youtube.com/embed/EVx8WpvYLbw" width="560" height="315"></iframe>
			</div>		
		);
	}
}