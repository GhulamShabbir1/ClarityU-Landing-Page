import React from "react";
import Link1 from "../assets/s6.1.png";
import Link2 from "../assets/s6.2.png";
import Link3 from "../assets/s6.3.1.png";
import Link4 from "../assets/s6.3.2.png";
import Link5 from "../assets/Vector.png";
import Link6 from "../assets/Vector2.png";
import "boxicons";

function Section6() {
  return (
    <>
      <div className="s2-cont s6-cont">
        <h2>
          Learn easily and free. Take <br />
          your online marketing into <br />
          your own hands.
        </h2>
      </div>
      <div className="features">
        <div className="components">
          <div className="feature1">
            <div className="learn">
              <h3>
                Prospective <br />
                Community
              </h3>
              <text>
                Where marketers and recruiters exchange <br />
                insights on a daily basis
              </text>

              <a href="#">
                <img src={Link5} alt="arrow" />
                Learn more
              </a>
            </div>
            <img src={Link1} alt="advertise" />
          </div>
          <div className="feature2">
            <div className="learn">
              <h3>
                Mobile Funnel <br />
                Crash Course
              </h3>
              <text>
                The popular 60-minute mobile funnel crash course, moderated live
              </text>
              <a href="#">
                <img src={Link5} alt="arrow" />
                Learn more
              </a>
            </div>
            <img src={Link2} alt="advertise" />
          </div>
        </div>
        <div className="feature3">
          <div className="learn  more">
            <h3>
              Mobile Funnel <br />
              Marketing Acedemy
            </h3>
            <text>
              Our Head of Content, Leni, guides you through <br />
              your first successful funnel
            </text>
            <a href="#"><img src={Link6} alt="arrow" />Learn more</a>
          </div>
          <div className="advertise">
            <img className="img1" src={Link3} alt="advertise" />
            <img className="img2" src={Link4} alt="advertise" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
