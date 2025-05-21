import React from "react";
import Logo2 from "../assets/original2.png";
import Youtube from "../assets/yt.png";
import Linkedin from "../assets/linkedin.png";
import X from "../assets/x.png";

function Section8() {
  return (
    <>
      <div className="footer all">
        <div className="footersection">
          <div className="about">
            <img src={Logo2} alt="Logo" />
            <text>
              Make your data invisible by generating unlimited identities. The
              next-level in privacy protection for online and travel.
            </text>
            <div className="social">
              <img src={Youtube} alt="" />
              <img src={Linkedin} alt="" />
              <img src={X} alt="" />
            </div>
          </div>
          <div className="contact">
            <h3>Company</h3>

            <a href="#faq">Why ClarityU</a>

            <a href="#cookies-policy">Contact us</a>

            <a href="#terms-of-services">Blog</a>
            <a href="#support">FAQ</a>
          </div>
          <div className="links">
            <h3>Solutions</h3>
            <a href="#faq">Personal information removal</a>
            <a href="#cookies-policy">Cloaking alias profiles</a>
            <a href="#terms-of-services">Cloaking alias profiles</a>
            <a href=""></a>
          </div>
          <div className="polices">
            <h3>Legal</h3>

            <a href="#faq">Term of Services</a>
            <a href="#cookies-policy">Privacy Policy / GDPR</a>
            <a href="#terms-of-services">Cookie Policy</a>
            <a href=""></a>
          </div>
        </div>

        <div className="rights">
          <text>@ClarityU 2024. All rights reserved </text>
        </div>
      </div>
    </>
  );
}
export default Section8;
