import React from 'react';
import { Link } from 'react-router-dom';

const Services4 = () => {

    const serviceContent = [
        {img:'/assets/images/pages/service/card-img1.jpg', title:'Development', subTitle:'Web Development', content:'We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.'},
        {img:'/assets/images/pages/service/card-img2.jpg', title:'UI/UX Design', subTitle:'Mobile Apps Design', content:'We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.'},
        {img:'/assets/images/pages/service/card-img3.jpg', title:'Graphics', subTitle:'Bradning Design', content:'We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.'},
        {img:'/assets/images/pages/service/card-img4.jpg', title:'Marketing', subTitle:'SEO Marketing', content:'We innovative development solutions, combining technology and creativity to build efficient and scalable, and user-friendly digital platforms.'},
      ]; 

    return (
        <section class="agk-services">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        
                        <div class="section-title mb-60 text-center pf_zoomIn">
                            <span class="sub-title">Our Service</span>
                            <h2>Top Services We Offer</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                    {serviceContent.map((item, i) => (
                        <div key={i} class="agenko-card-item style-two mb-10 pf_fadeup">
                            <div class="thumbnail">
                                <img src={item.img} alt="Card Image" />
                            </div>
                            <div class="card-title">
                                <h2><Link to="/service/service-details">{item.title}</Link></h2>
                                <h4>{item.subTitle}</h4>
                            </div>
                            <div class="content">
                                <p>{item.content}</p>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services4;