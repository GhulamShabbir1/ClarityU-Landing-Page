import React from "react";
import { useState } from "react";
import S2 from "../assets/s2.png";

const features = [
  {
    title: "Fast editing",
    description:
      "Create stunning mobile funnels quickly and easily. Now you can build in minutes, not hours.",
  },
  {
    title: "Proven templates",
    description:
      "Choose from a library of proven high-converting templates to get started fast.",
  },
  {
    title: "Unique design",
    description:
      "Customize every detail with a design system built for conversion.",
  },
  {
    title: "Personalized approach",
    description:
      "Tailor your content for each audience with dynamic personalization.",
  },
];
function Section2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="createFunel-cont">
        <h2>Create your first funnels in 60 minutes. Headache-free.</h2>
      </div>
      
      <div className="createFunel-main">
        <div className="disc">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`list-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="heading">{feature.title}</div>
              {index === activeIndex && (
                <div className="description">{feature.description}</div>
              )}
            </div>
          ))}
        </div>
        <div className="disc-img">
          <img src={S2} alt="section 2" />
        </div>
      </div>

  
    </>
  );
}

export default Section2;
