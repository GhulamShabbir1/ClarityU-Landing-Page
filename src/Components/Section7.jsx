import React from 'react'
import "boxicons"
import Bg1 from "../assets/bg1.png"
import Bg2 from "../assets/bg2.png"

function Section7() {
  return (
    <>
    <h2>Start advertising more <br />effectively in the mobile age.</h2>
    <span><img src={Bg1} alt="bg" /></span>
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
     
      <button>Start my free 14 days Trail</button>
      <span><img src={Bg2} alt="bg" /></span>

    </>
  )
}

export default Section7
