import React from 'react';
import "./hero.css";

const Hero = () => {
    return (
        <div className='ft_Hero-wrap'>
            <div className='ft_Hero-sec'>
                <div className='ft_Hr-ttl'>
                    <h1>
                        A digital<br></br>
                        platform<br></br>
                        crafted to<br></br>
                        empower our<br></br>
                        educational<br></br>
                        organizations
                    </h1>
                </div>
                <div className='ft_Hr-img'>
                    <img src="assets/img/hr-img.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero