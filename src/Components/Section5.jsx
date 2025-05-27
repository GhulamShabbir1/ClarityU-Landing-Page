import React, { useState } from "react";
import R1 from "../assets/Review1.png";
import R2 from "../assets/Review2.png";
import R3 from "../assets/Review3.png";
import Person1 from "../assets/p1.png";
import Person2 from "../assets/p2.png";

const reviews = [
  {
    company: "CONVAIX.",
    text: "Generated over 900 applications in 10 weeks and over 120 new hires.",
    name: "Phillip Weber, CEO",
    image: Person1,
  },
  {
    company: "CONVAIX.",
    text: "Cut hiring time by 70% with smarter matching and automated workflows.",
    name: "Emily Davis, CEO",
    image: Person2,
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
};

function Section5() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  return (
    <>
        <div className="createFunel-cont">
          <h2>
            With Perspective, our customers <br />
            make the impossible possible.
          </h2>
        </div>

        <div className="slider-container">
          <button className="arrow left" onClick={prev}>
            ❮
          </button>

          <div className="review-card">
            <div className="review-left">
              <h3 className="company">{reviews[index].company}</h3>
              <p className="review-text">{reviews[index].text}</p>
              <text className="review-name">{reviews[index].name}</text>
            </div>
            <div className="review-right">
              <img src={reviews[index].image} alt="person" />
            </div>
          </div>

          <button className="arrow right" onClick={next}>
            ❯
          </button>
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
