import React from "react";
import R1 from "../assets/Review1.png";
import R2 from "../assets/Review2.png";
import R3 from "../assets/Review3.png";
import Clogo from "../assets/testlogo.png";
import Person1 from "../assets/p1.png";
import Person2 from "../assets/p2.png";

function Section5() {
  return (
    <>
      <div className="createFunel-cont">
        <h2>
          With Perspective, our customers <br />
          make the impossible possible.
        </h2>
      </div>

      <div className="customerReview-cont">
        <div className="customerReview-main">
          <img src={Clogo} className="company" alt="" />
          <text className="review">
            Generated over 900 applications in 10 weeks and over 120 new hires.
          </text>
          <text className="tname">Phillip Weber, CEO</text>
        </div>
        <div className="customerReview-image">
          <img src={Person1} alt="person" />
        </div>
      </div>

      <div className="test">
        <text>The top rated Conservation Optimization tools</text>
        <div className="testification">
          <img src={R1} alt="Review 1" />
          <img src={R2} alt="Review 2" />
          <img src={R3} alt="Review 3" />
        </div>
      </div>
    </>
  );
}

export default Section5;
