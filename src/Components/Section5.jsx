import React from 'react'
import R1 from '../assets/Review1.png'
import R2 from '../assets/Review2.png'
import R3 from '../assets/Review3.png'
import Person1 from '../assets/p1.png'
import Person2 from '../assets/p2.png'

function Section5() {
  return (
    <>
    <h2>With Perspective, our customers <br />make the impossible possible.</h2>
    <div>
    <div className="slider-wrapper">
      <input type="radio" name="slider" id="slide1" defaultChecked />
      <input type="radio" name="slider" id="slide2" />

      <div className="slides">
        <div className="slide" id="s1">
          <div className="content">
            <h3>CONVAIX.</h3>
            <p className="main-text">
              Generated over 900 applications in 10 weeks and over 120 new hires.
            </p>
            <p className="author">Phillip Weber, CEO</p>
          </div>
          <div className="image">
            <img src={Person1} alt="person" />
          </div>
        </div>

        
        <div className="slide" id="s2">
          <div className="content">
            <h3>CONVAIX.</h3>
            <p className="main-text">
              Doubled engagement and scaled hiring operations smoothly.
            </p>
            <p className="author">Jessica Lee, COO</p>
          </div>
          <div className="image">
            <img src={Person2} alt="person" />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="nav">
        <label htmlFor="slide1" className="arrow left">&#10094;</label>
        <label htmlFor="slide2" className="arrow right">&#10095;</label>
      </div>
    </div>
    </div>
    <div>
      <h2>The top rated Conservation Optimization tools</h2>
      <div>
        <img src={R1} alt="Review 1" />
        <img src={R2} alt="Review 2" />
        <img src={R3} alt="Review 3" />
      </div>
    </div>
    </>
  )
}

export default Section5
