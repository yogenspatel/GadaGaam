import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Picnic2017 extends Component {
    render() {
        return (
            <div className="picnic content">
                <Helmet>
                    <title>Gada Picnic 2017 | Gada Gaam</title>
                </Helmet>
                <h2 className="headline-1">Summer Picnic 2018, Holmdale Park, Holmdel, NJ, USA</h2>
                <h3 className="headline-2">Sponsored by: Atul Bade Family from Jersey City, NJ, USA</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <img className="card-img-top" src="/staticContent/img/picnicSponsors/Atul_Bade_Famiily_gents.jpg" title="Thank you everyone - Pramodbhai, Rajubhai Purshotambhai, Mehulbhai, Yogen Suryakantbhai, Dharmendra Prajapati, Uttam R, Dipesh D, Harnish R, Sachin V, Rakesh, Lala bhai, Kaminiben, Ritaben, Hema, Anjuben" alt="Thank you everyone - Pramodbhai, Rajubhai Purshotambhai, Mehulbhai, Yogen Suryakantbhai, Dharmendra Prajapati, Uttam R, Dipesh D, Harnish R, Sachin V, Rakesh, Lala bhai, Kaminiben, Ritaben, Hema, Anjuben" />

                        </div>
                        <div className="card">
                            <img className="card-img-top" src="/staticContent/img/picnicSponsors/Atul_Bade_Famiily_ladies.jpg" title="Thank you everyone - Pramodbhai, Rajubhai Purshotambhai, Mehulbhai, Yogen Suryakantbhai, Dharmendra Prajapati, Uttam R, Dipesh D, Harnish R, Sachin V, Rakesh, Lala bhai, Kaminiben, Ritaben, Hema, Anjuben" alt="Thank you everyone - Pramodbhai, Rajubhai Purshotambhai, Mehulbhai, Yogen Suryakantbhai, Dharmendra Prajapati, Uttam R, Dipesh D, Harnish R, Sachin V, Rakesh, Lala bhai, Kaminiben, Ritaben, Hema, Anjuben" />
                            <div className="card-block">
                                <h3 className="card-title">Thank you everyone - Pramodbhai, Rajubhai Purshotambhai, Mehulbhai, Yogen Suryakantbhai, Dharmendra Prajapati, Uttam R, Dipesh D, Harnish R, Sachin V, Rakesh, Lala bhai, Kaminiben, Ritaben, Hema, Anjuben</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">Thank you Atul Bade Family. It was a great picnic, everyone had a great time and happy with this year’s picnic.</p>
                                <a href="https://www.facebook.com/media/set/?set=a.2010771445663696.1073741836.816609235079929&type=1&l=a93f1357da" className="btn btn-primary" target="_blank" rel="noopener">Click here for Picnic Photos</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <video src="/staticContent/video/Picnic_2018/Video1.mp4" width="70%" height="450" controls />
                    <hr />
                    <video src="/staticContent/video/Picnic_2018/Video2.mp4" width="70%" height="450" controls />
                    <hr />
                    <video src="/staticContent/video/Picnic_2018/Video3.mp4" width="70%" height="450" controls />
                    <hr />
                    <video src="/staticContent/video/Picnic_2018/Video4.mp4" width="70%" height="450" controls />
                </div>

            </div>
        );
    }
}