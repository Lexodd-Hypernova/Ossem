import React from 'react';
import "./aboutVideo.css";

const AboutVideo = () => {
    return (
        <div className='abt__Video-wrap'>
            <div className='abt__Vd-sec'>
                <div className='abt_Vd-txt'>
                    <h3>Loreum Ipsum</h3>
                </div>
                <div className='abt__Vd-con'>
                    <video loop playsInline autoPlay muted className="d_vd">
                        <source src="assets/videos/OSSEM.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='abt_Vd-para'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et incididunt ut labore
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutVideo