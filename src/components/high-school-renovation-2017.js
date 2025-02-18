import React, {Component} from 'react';
import Announcements from './announcements';
import { Helmet } from 'react-helmet';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';

export default class HighSchoolRenovation extends Component {
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

		return(
			<div className="renovation content">
				<Helmet>
					<title>Gada High School Renovation Fund | Gada Gaam</title>
				</Helmet>
				<strong className="h3">Gada High School Renovation Fund Donors</strong>
				<table className="table table-striped">
					<thead>
					<tr>
						<th>Name</th>
						<th>Amount</th>
					</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<h4>Jayshreeben Narendrabhai R. Patel</h4>
								<p className="card-text">Daughter of Kanubhai Motibhai Patel(Mastar)</p>
							</td>
							<td>$500</td>
						</tr>
						<tr>
							<td>
								<h4>Varshaben Subhash J. Patel</h4>
								<p className="card-text">Daughter of Fulabhai Motibhai Patel</p>
							</td>
							<td>$500</td>
						</tr>
						<tr>
							<td>
								<h4>Vikas Navinchandra Kantibhai Patel</h4>
							</td>
							<td>$500</td>
						</tr>
						<tr>
							<td>
								<h4>Umeshbhai Vitthalbhai Patel</h4>
							</td>
							<td>$1000</td>
						</tr>
						<tr>
							<td>
								<h4>Dr. Chirag & Dr. Punal</h4>
								<p className="card-text">Son of Bharatbhai & Pritiben (Manibhai Ishvarbhai)</p>
							</td>
							<td>$1001</td>
						</tr>
						<tr>
							<td>
								<h4>Pradipbhai & Dharmishta (Vitthalbhai Nathabhai)</h4>
								<p className="card-text">Banglawari Khadki</p>
							</td>
							<td>$500</td>
						</tr>
						<tr>
							<td>
								<h4>Kanubhai Manibhai Vaghjibhai</h4>
							</td>
							<td>$251</td>
						</tr>
						<tr>
							<td>
								<h4>Anitaben daughter of Hasmukhbhai Fulabhai Patel</h4>
								Binaben daughter of Ambalal Isvarbhai Patel
								Chayaben daughter of Ganshyambhai Kuberbhai Patel
								Latikaben daughter of Chandubhai Maganbhai Patel
							</td>
							<td>$500</td>
						</tr>
						<tr>
							<td>
								<h4>Hemantbhai & Pannaben (Florida, USA)</h4>
							</td>
							<td>$1001</td>
						</tr>
						<tr>
							<td>
								<h4>Mehulkumar Rameshbhai Dhurabhai</h4>
							</td>
							<td>$500</td>
						</tr>
						<tr>
							<td>
								<h4>Sangitaben Amrish Patel</h4>
								<p className="card-text">Daughter of Chandubhai Maganbhai , Banglawari khadki</p>
							</td>
							<td>$1000</td>
						</tr>

						<tr>
							<td>
								<h4>Total</h4>
							</td>
							<td>$7253</td>
						</tr>
					</tbody>
				</table>
				<hr />

				<strong className="h3">J M. Patel high-school, Gada</strong>
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
			</div>
		);
	}
}