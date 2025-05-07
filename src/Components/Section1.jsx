import React from "react";
import Icon from "../assets/Icon.png";
import Logo1 from "../assets/L1.webp"
import Logo2 from "../assets/L2.png"
import Logo3 from "../assets/L3.png"
import Logo4 from "../assets/L4.png"
import Logo5 from "../assets/L5.webp"
import Logo6 from "../assets/L6.png"

import "boxicons";

function Section1() {
  return (
    <>
      <h2>
        Create hight-Converting <br />
        funnels in just 60 Minutes
      </h2>
      <p>
        Generates a Steady flow customers or a talent with lightening-fat and
        easy-build <br /> Prospective funnels, No designing and programming
        skills required
      </p>
      <button>Start my free 14 days Trail</button>
      <button>
        <img src={Icon} alt="play" />
        Join the Crash Course
      </button>
      <div>
        <ul>
          <li>
            <i className="bx bx-check" style={{ marginRight: "8px" }}></i>Cancel
            anytime
          </li>
          <li>
            <i className="bx bx-check" style={{ marginRight: "8px" }}></i>Access
            all the content
          </li>
          <li>
            <i className="bx bx-check" style={{ marginRight: "8px" }}></i>Expert
            support
          </li>
        </ul>
      </div>
      <div>
        <div>
            red
        </div>
        <div className="center">
        <video className="video" autoPlay muted loop>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div>
            yellow
        </div>
      </div>
      <div>
        <p>use daily by more then 5000 small and large businesses</p>
      </div>
      <div className="logo-container">
      <img src={Logo1} className="logo floating" alt="logo" />
      <img src={Logo2} className="logo floating" alt="logo" />
      <img src={Logo3} className="logo floating" alt="logo" />
      <img src={Logo4} className="logo floating" alt="logo" />
      <img src={Logo5} className="logo floating" alt="logo" />
      <img src={Logo6} className="logo floating" alt="logo" />
    </div>

    </>
  );
}

export default Section1;
