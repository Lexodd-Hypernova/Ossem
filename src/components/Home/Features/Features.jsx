import React from "react";
import "./Features.css";
import FeatureCard from "./FeatureCard";
import Addmission from "../../../assets/AdmissionFeature.svg";
import Account from "../../../assets/AccountFeature.svg";
import Student from "../../../assets/StudentFeature.svg";
const Features = () => {
  return (
    <div className="Features-container">
      <div className="feat__Ttl">
        <h2>
          Easily customizable<br />
          extension templates
        </h2>
        <p>
          Quickly set up your first Private Extension and speed up 
          common workflows that best suit your team’s needs.
        </p>
      </div>
      <div className="Features-card">
        <FeatureCard
          img={Addmission}
          title="Admission"
          para="Let your team share actionable feedback about features in development,to speed up shipping."
        />
        <FeatureCard
          img={Student}
          title="Student Portal"
          para="Make your design system available to everybody in your company with quick access to colors, icons, and more."
        />
        <FeatureCard
          img={Account}
          title="Accounts"
          para="Build an index to search and get to know your teammates better. And make it easy for new joiners to discover your organization. "
        />
      </div>
    </div>
  );
};

export default Features;
