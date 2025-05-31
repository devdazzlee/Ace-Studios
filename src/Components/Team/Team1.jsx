import React from 'react';
import { Link } from 'react-router-dom';

const Team1 = () => {

    const teamContent = [
        {img:'/assets/images/creative-agency/team/team1.jpg', name:'Developer', content:'Mr. David Liam'},
        {img:'/assets/images/creative-agency/team/team2.jpg', name:'Web Designer', content:'Jessica Sherlock Dina'},
        {img:'/assets/images/creative-agency/team/team3.jpg', name:'Video Editor', content:'Mr. Adam Smith Roy'},
        {img:'/assets/images/creative-agency/team/team4.jpg', name:'Marketer', content:'Miss Alex Mika'},
      ];

    return (
            <section className="agk-team pt-130 pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="section-title mb-50 text-center text-lg-start pf_fadeup">
                                <span className="sub-title">Our Team</span>
                                <h2>Meet Our Talented <br/>
                                    Skillful Team</h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            {/* <div className="agk-button mb-60 float-lg-end text-lg-end text-center pf_fadeup">
                                <Link to="/team" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">View Teams</span>
                                        <span className="text">View Teams</span>
                                    </span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                    {teamContent.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                            <div className="agenko-team-item style-one mb-40 pf_fadeup">
                                <div className="member-image">
                                    <img src={item.img} alt="Team Image" />
                                    {/* <div className="icon-btn"><Link to="/team/team-details"><i className="bi bi-plus-lg"></i></Link></div> */}
                                </div>
                                <div className="member-info">
                                    <span className="position">{item.name}</span>
                                    <h5 className="title">{item.content}</h5>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default Team1;