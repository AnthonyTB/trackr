import React, { FunctionComponent } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import "./Landing.css";
import { BrandingB, Chart } from "../../Assets";
import { Section, Hero } from "./Components/";

const Landing: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div className="Landing">
      <Hero />
      <div className="curve" />
      <div className="hero-text">
        <h3>
          Here at{" "}
          <img className="smallLogo" src={BrandingB} alt="trackr logo" /> we
          make that data accessible to you<span className="alt-color">.</span>
        </h3>
      </div>
      <Section
        Heading={"All well known platforms"}
        Text={"We are compatible with all your favorite social media platforms"}
        ClassName={"sources"}
      />
      <Section
        Heading={"Keep up to date"}
        Text={
          "Compare your current stats with your past to see if your accounts are growing"
        }
        ClassName={"data"}
        SVG={<Chart />}
      />
    </div>
  );
};

export default Landing;
