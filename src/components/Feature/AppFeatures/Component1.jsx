import React from 'react';

const Component1 = () => {
    return (
        <div className="component">
            <div className='prod__Comp_wrap'>
                <div className='prod-comp-img'>
                    <img src="assets/img/img1.png" alt="" />
                </div>
                <div className='prod-comp-txt'>
                    <p>
                        Organisation module details core company
                        structure, including branches and subsets,
                        providing insight into key institutional components.
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
                                <span>Home</span>
                            </li>
                            <li>
                                <span>Branch</span>
                            </li>
                            <li>
                                <span>Organization</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component1;