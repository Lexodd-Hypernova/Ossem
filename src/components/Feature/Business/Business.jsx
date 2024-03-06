import React from 'react';
import "./business.css";

const Business = () => {
    return (
        <div className='bnss__Wrap'>
            <div className='bnss__Sec'>
                <div className='bnss__Ttl'>
                    <h2>
                        <span className='bn__Ttl-n'>Need </span><span className='bn_Ttl1'>OSSEM?</span><br></br>
                        Here’s <span className='bn_Ttl2'>How</span>
                    </h2>
                </div>
                <div className='bnss__Card-wrap'>
                    <div className='bnss-card-sec'>
                        <div className='bnss_card-row bnss_card-row1'>
                            <div className='bnss_col'>
                                <div className='bnss_img'>
                                    <img src="assets/img/bns1.png" alt="" />
                                </div>
                            </div>
                            <div className='bnss_col'>
                                <div className='bnss__crd-cnt'>
                                    <h3>
                                        B2B BUSINESS MODEL
                                    </h3>
                                    <p>
                                        OSSEM B2B business model offers
                                        a comprehensive ERP solution tailored
                                        to your enterprise needs. From streamlined
                                        operations to enhanced efficiency, OSSEM
                                        ensures a perfect fit for your organization,
                                        empowering you to manage the entire enterprise
                                        seamlessly and drive growth with confidence.
                                    </p>
                                </div>
                                <div className='bnss__Btn'>
                                    <button className="cta">
                                        <span className="hover-underline-animation">Know more</span>
                                        <svg
                                            id="arrow-horizontal"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="20"
                                            viewBox="0 0 46 16"
                                        >
                                            <path
                                                id="Path_10"
                                                data-name="Path 10"
                                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                transform="translate(30)"
                                            ></path>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className='bnss_card-row bnss_card-row2'>
                            <div className='bnss_col'>
                                <div className='bnss__crd-cnt'>
                                    <h3>
                                        B2C BUSINESS MODEL
                                    </h3>
                                    <p>
                                        OSSEM B2C model offers flexibility
                                        in our ERP system, allowing you to
                                        choose and customize modules that best
                                        suit your needs. Select from a range of
                                        modules such as HR, Accounting, Admission,
                                        Attendance Management etc, tailored to your
                                        specific requirements. Build a personalized
                                        ERP solution that fits your organization perfectly.
                                    </p>
                                </div>
                                <div className='bnss__Btn'>
                                    <button className="cta">
                                        <span className="hover-underline-animation">Know more</span>
                                        <svg
                                            id="arrow-horizontal"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="20"
                                            viewBox="0 0 46 16"
                                        >
                                            <path
                                                id="Path_10"
                                                data-name="Path 10"
                                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                transform="translate(30)"
                                            ></path>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                            <div className='bnss_col'>
                                <div className='bnss_img'>
                                    <img src="assets/img/bns2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business