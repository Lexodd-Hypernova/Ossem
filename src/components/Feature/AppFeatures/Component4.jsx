import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const Component4 = () => {
    return (
        <div className="component">
            <div className='prod__Comp_wrap'>
                <div className='prod-comp-img'>
                    <img src="assets/img/img4.png" alt="" />
                </div>
                <div className='prod-comp-txt'>
                    <p>
                        The faculty management module streamlines
                        faculty tasks that happen in a university.
                        They simplify all aspects in a systematic fashion.
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
                                <span>LMS</span>
                                <span>Department</span>
                                <span>Circular</span>
                                <span>Transport</span>


                            </li>
                            <li>
                                <span>Attendance</span>
                                <span>Student group</span>
                                <span>Leave Management</span>
                                <span>Class Room/Lab</span>

                            </li>
                            <li>
                                <span>Examination portal</span>
                                <span>My class Schedule</span>
                                <span>Subject</span>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component4;