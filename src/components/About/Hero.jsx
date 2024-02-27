import React from 'react';
import "./hero.css";

const Hero = () => {
    return (
        <div className='abt__Hero-wrap'>
            <div className='abt_Hero-sec'>
                <div className='abt_Hero-txt'>
                    <h1>
                        A digital<br></br>
                        platform<br></br>
                        crafted to<br></br>
                        empower our<br></br>
                        educational<br></br>
                        organizations
                    </h1>
                </div>
                <div className='abt__Hero-img'>
                    <img src="assets/img/about.png" alt="about" />
                </div>
            </div>
        </div>
    )
}

export default Hero