import React from "react";
import "boxicons";
import Bg1 from "../assets/bg1.png";
import Bg2 from "../assets/bg2.png";
import Check from "../assets/check.png";

function Section7() {
  return (
    <>
      <div className="advertising-cont">
        <div className="bg1">
          <img src={Bg1} alt="bg" />
        </div>

        <div className=" advertising-center">
          <h2>
            Start advertising more <br />
            effectively in the mobile age.
          </h2>
          <div className="check-list cl">
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

          <button className="start">Start my free 14 days Trail</button>
        </div>
        <div className="bg2">
          <img src={Bg2} alt="bg" />
        </div>
      </div>
    </>
  );
}

export default Section7;
