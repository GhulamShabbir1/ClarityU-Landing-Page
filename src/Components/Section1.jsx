import React from "react";
import Icon from "../assets/Icon.png";
import Logo1 from "../assets/cocelogo.png";
import Logo2 from "../assets/L2.png";
import Logo3 from "../assets/L3.png";
import Logo4 from "../assets/L4.png";
import Logo6 from "../assets/L6.png";
import Logo7 from "../assets/marriot.png";
import Check from "../assets/check.png";
import Video from "../assets/s1t.png";

import "boxicons";

function Section1() {
  return (
    <>
      <div className="heroSection-cont">
        <h2>Create hight-Converting funnels in just 60 Minutes</h2>

        <p>
          Generates a Steady flow customers or a talent with lightening-fat and
          easy-build <br /> Prospective funnels, No designing and programming
          skills required
        </p>
        <div className="heroSection-btn">
          <button className="start">Start my free 14 days Trail</button>
          <button className="join">
            <img src={Icon} alt="play" />
            Join the Crash Course
          </button>
        </div>
        <div className="check-list">
          <ul>
            <li className="points">
              <img src={Check} alt="check" />
              Cancel anytime
            </li>
            <li className="points">
              <img src={Check} alt="check" />
              Access all the content
            </li>
            <li className="points">
              <img src={Check} alt="check" />
              Expert support
            </li>
          </ul>
        </div>
      </div>
      <div className="colours">
        <div className="slide left"></div>
        <div className="center">
          <div className="video">
            <img src={Video} alt="raw" />
          </div>
        </div>
        <div className="slide right"></div>
      </div>
      <div className="business">
        <p>use daily by more then 5000 small and large businesses</p>
      </div>
      <div className="logo-slider">
        <div className="logo-track">
          <img src={Logo1} className="logo" alt="logo" />
          <img src={Logo6} className="logo" alt="logo" />
          <img src={Logo4} className="logo" alt="logo" />
          <img src={Logo2} className="logo" alt="logo" />
          <img src={Logo3} className="logo" alt="logo" />
          <img src={Logo7} className="logo" alt="logo" />

        </div>
      </div>
    </>
  );
}

export default Section1;
