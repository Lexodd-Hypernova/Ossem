import React from "react";
import "./founder.css";

const Founder = () => {
  return (
    <>
      <div className="d__Og-s">
        <h3 className="d_mn-ttl">The Team Of OSSEM</h3>
        <div className="d_Card-wrap">
          <div className="d_card d_card-1">
            <img src="assets/img/fnd1.png" alt="founder" />
            <div className="d_crd-cnt">
              <h3 className="">Karteek Routh</h3>
              <p className="">Co Founder</p>
              {/* <div className="">Marketing & Sales</div> */}
            </div>
          </div>
          <div className="d_card d_card-2">
            <div className="logo_fnd">
              <img src="assets/img/logo-abt.png" alt="founder" />
            </div>

            {/* <div className="d_crd-cnt">
                            <h3 className="">Karteek Routh</h3>
                            <p className="">Co Founder</p>
                            <div className="">Digital Marketing</div>
                        </div> */}
          </div>
          <div className="d_card d_card-3">
            <img src="assets/img/fnd2.png" alt="founder" />
            <div className="d_crd-cnt">
              <h3 className="">Varun Ramani</h3>
              <p className="">Sales and Operations Head</p>
              {/* <div className="">Digital Marketing</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="fnd__ext-para">
        <h3>
          Pioneering the pathways to,<br></br>“An Inventive Future”.
        </h3>
        {/* <p>
                    Quickly set up your first Private Extension and speed up common workflows that best suit your team’s needs.
                </p> */}
      </div>
    </>
  );
};

export default Founder;
