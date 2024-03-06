import React from "react";
import "./Features.css";
import FeatureCard from "./FeatureCard";
// import Addmission from "../../../assets/AdmissionFeature.svg";
// import Account from "../../../assets/AccountFeature.svg";
// import Student from "../../../assets/StudentFeature.svg";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <div className="Features-container">
      <div className="feat__Ttl">
        <Fade direction="up" triggerOnce>
          <h2>
            Fostering Seamless<br></br>Management Integration in a<br></br>Unified Hub
          </h2>
        </Fade>

        <p>
          <Fade direction="up" triggerOnce>
            With Ossem, make your organization Awesome!
            Your organization can easily access what they need from our handy mobile app exclusively designed for students, faculty, and management.
          </Fade>

        </p>
      </div>
      <div className="Features-card container">

        <FeatureCard
          // img={Addmission}
          title="Admission"
          para="Get the insights like employee information, department information, and hostel facilities and more in instant by using our EMS or ERP systems."
        />
        <FeatureCard
          // img={Student}
          title="Student Portal"
          para="Track your academic progress, check your campus events, keep an eye on your attendance and leaves, and know about circulars."
        />
        <FeatureCard
          // img={Account}
          title="Accounts"
          para="Managing students accounts and updating their profile details are now made easy with Ossem."
        />


      </div>
      <div className="ft__Wh-kn">
        <div class="wh_kn">
          <div id="btn_container">
            <Link to="/features" className="learn-more-btn">
              <span className="circle-btn" aria-hidden="true">
                <span className="icon-btn arrow-btn"></span>
              </span>
              <span class="button-text">Know more</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Features;
