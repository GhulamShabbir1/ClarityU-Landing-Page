import React from "react";
import Logo2 from '../assets/original2.png';

function Section8() {
  return (
    <>
      <div className="row primary">
        <div className="column about">
          <img src={Logo2} alt="Logo" />
          <p>
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
          </p>
          <div className="footer-menu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
            <a href="">Social</a>
          </div>
        </div>
        <div classNameName="column links">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#faq">Why ClarityU</a>
            </li>
            <li>
              <a href="#cookies-policy">Contact us</a>
            </li>
            <li>
              <a href="#terms-of-services">Blog</a>
            </li>
            <li>
              <a href="#support">FAQ</a>
            </li>
          </ul>
        </div>
        <div classNameName="column links">
          <h3>Solutions</h3>
          <ul>
            <li>
              <a href="#faq">Personal information removal</a>
            </li>
            <li>
              <a href="#cookies-policy">Cloaking alias profiles</a>
            </li>
            <li>
              <a href="#terms-of-services">Cloaking alias profiles</a>
            </li>
          </ul>
        </div>
        <div classNameName="column links">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#faq">Term of Services</a>
            </li>
            <li>
              <a href="#cookies-policy">Privacy Policy / GDPR</a>
            </li>
            <li>
              <a href="#terms-of-services">Cookie Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <p>@ClarityU 2024. All rights reserved </p>
        </div>
      </div>
    </>
  );
}
export default Section8;
