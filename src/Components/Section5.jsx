import React from 'react'

function Section5() {
  return (
    <>
    <h2>With Perspective, our customers <br />make the impossible possible.</h2>
    <div>
    <div className="slider-wrapper">
      <input type="radio" name="slider" id="slide1" defaultChecked />
      <input type="radio" name="slider" id="slide2" />

      <div className="slides">
        {/* Slide 1 */}
        <div className="slide" id="s1">
          <div className="content">
            <h3>CONVAIX.</h3>
            <p className="main-text">
              Generated over 900 applications in 10 weeks and over 120 new hires.
            </p>
            <p className="author">Phillip Weber, CEO</p>
          </div>
          <div className="image">
            <img src="/assets/person1.jpg" alt="person" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide" id="s2">
          <div className="content">
            <h3>CONVAIX.</h3>
            <p className="main-text">
              Doubled engagement and scaled hiring operations smoothly.
            </p>
            <p className="author">Jessica Lee, COO</p>
          </div>
          <div className="image">
            <img src="/assets/person2.jpg" alt="person" />
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
    </>
  )
}

export default Section5
