import React from 'react';

const Component2 = () => {
    return (
        <div className="component">
            <div className='prod__Comp_wrap'>
                <div className='prod-comp-img'>
                    <img src="assets/img/img2.png" alt="" />
                </div>
                <div className='prod-comp-txt'>
                    <p>
                        The Employee Management module centralizes
                        HR functionality, offering a comprehensive
                        employee catalog with movement tracking,
                        salary management and official inquiries.
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
                                <span>Employee Information</span>
                                <span>Department</span>
                            </li>
                            <li>
                                <span>Employee Group</span>
                                <span>Promote / Detain</span>
                            </li>
                            <li>
                                <span>Attendance</span>
                                <span>Leave management</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component2;