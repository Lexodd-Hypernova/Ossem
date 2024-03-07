import React, { useRef } from 'react';
import "./overview.css";

import { useInView } from "framer-motion";

function Feature({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    return (
        <div ref={ref} className='overview'>
            <div
                className={`overview-item ${isInView ? "active" : ""}`}
            >
                {children}
            </div>
        </div>
    );
}


const Overview = () => {
    return (
        <div className='overview__Wrap'>
            <div className='overview__Sec'>
                <div className='ov__Ttl'>
                    <h2>
                        OSSEM Overview
                    </h2>
                </div>
                <div className='ov_Con'>

                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd1'>
                            <div className='ov_crd-box'>

                                <div className='ov_Card ov_Card1'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PROSPECTS</h3>
                                            <p>
                                                A future with endless growth possibilities
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                01
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/prospect.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='ov_Para ov_Para1'>
                                <p>
                                    OSSEM represents a future with
                                    boundless growth opportunities
                                    and the potential for advancement
                                    and expansion.
                                </p>
                            </div>
                        </div>
                    </Feature>
                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd2'>
                            <div className='ov_Para ov_Para2'>
                                <p>
                                    OSSEM is based on technological
                                    evolution and a sense of proprietor
                                    development. A round-the-clock development.
                                </p>
                            </div>
                            <div className='ov_crd-box'>
                                <div className='ov_Card ov_Card2'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>PURELY DIGITAL</h3>
                                            <p>
                                                Access anywhere, anytime
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                02
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/icn2.svg" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ov_Card ov_Card3'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>IN-HOUSE DEVELOPMENT</h3>
                                            <p>
                                                Programmed in-house by the team at Ossem
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                03
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/icn3.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Feature>
                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd3'>
                            <div className='ov_crd-box'>
                                <div className='ov_Card ov_Card4'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>YOU CHOOSE, WE PROVIDE</h3>
                                            <p>
                                                Our expertise delivered to you directly
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                04
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/icn4.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ov_Card ov_Card5'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>EASY TO USE</h3>
                                            <p>
                                                User Friendly Design ensures simplicity
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                05
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/icn5.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ov_Para ov_Para3'>
                                <p>
                                    OSSEM is fantastic, offering a
                                    customisable platform tailored
                                    to your preferences.
                                </p>
                            </div>
                        </div>
                    </Feature>
                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd4'>
                            <div className='ov_Para ov_Para4'>
                                <p>
                                    OSSEM ensures robust data
                                    security and flexible prices
                                    that adapt to your needs.
                                </p>
                            </div>
                            <div className='ov_crd-box'>
                                <div className='ov_Card ov_Card6'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>DATA SECURITY</h3>
                                            <p>
                                                Robust Data Security for Your Peace
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                06
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/icn6.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ov_Card ov_Card7'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>FLEXIBLE COSTS </h3>
                                            <p>
                                                Costs that Adapt to You
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                07
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/icn7.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Feature>
                    <Feature>
                        <div className='ov_Row-crd ov_Row-crd5'>
                            <div className='ov_crd-box'>
                                <div className='ov_Card ov_Card8'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>VISIBILITY TO ALL</h3>
                                            <p>
                                                User Access to Visibility
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                08
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/icn8.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ov_Card ov_Card9'>
                                    <div className='ov_Crd-in'>
                                        <div className='ov-crd-ttl'>
                                            <h3>CLOSE THE GAP</h3>
                                            <p>
                                                Enhances Efficiency
                                            </p>
                                        </div>
                                        <div className='ov_Kn'>
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className='ov_asp'>
                                            <span className='asp_cn'>
                                                Salient Aspect
                                            </span>
                                            <span className='asp_si'>
                                                09
                                            </span>
                                        </div>
                                        <div className='ov_icn'>
                                            <img src="assets/img/icn9.png" alt="" />
                                        </div>
                                        <div className='ov__Rect'>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ov_Para ov_Para5'>
                                <p>
                                    OSSEM enhances efficiency by closing gaps,
                                    granting the varied users access and visibility
                                    across all application aspects.
                                </p>
                            </div>
                        </div>
                    </Feature>
                </div>
            </div>
        </div>
    )
}

export default Overview