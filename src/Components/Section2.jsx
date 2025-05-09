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
      <div className="s2-cont">
        <h2>Create your first funnels in 60 minutes. Headache-free.</h2>
      </div>
      
      <div className="s2-main">
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

      {/* <div className="s2-main">
        <div className="disc">
          <details>
            <summary>Fast editing</summary>
            
              <p>This is the first paragraph. It shows when you click Heading 1.</p>

          </details>

          <details>
            <summary>Proven Templetes</summary>
            <p>
              This is the second paragraph. It shows when you click Heading 2.
            </p>
          </details>

          <details>
            <summary>Unique design</summary>
            <p>
              This is the third paragraph. It shows when you click Heading 3.
            </p>
          </details>
          <details>
            <summary>Personalize approach</summary>
            <p>
              This is the third paragraph. It shows when you click Heading 3.
            </p>
          </details>
        </div>
       
      </div> */}
    </>
  );
}

export default Section2;
