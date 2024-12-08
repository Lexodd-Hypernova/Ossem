import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const Component3 = () => {
    return (
        <div className="component">
            <div className='prod__Comp_wrap'>
                <div className='prod-comp-img'>
                    <img src="assets/img/img3.png" alt="" />
                </div>
                <div className='prod-comp-txt'>
                    <p>
                        The admissions module is a central hub,
                        overseeing the entire process from gathering
                        personal information to filtering eligible applicants.
                    </p>
                </div>
                <div className="sub_Modules">
                    <div className="sb__Md-ttl">
                        <h4>
                            Sub Modules
                        </h4>
                    </div>
                    <div className="sb__List">
                        <ul>
                            <li>
                                <span>Admission</span>
                            </li>
                            <li>
                                <span>Admission Enquiry</span>
                            </li>
                            <li>
                                <span>Course</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component3;