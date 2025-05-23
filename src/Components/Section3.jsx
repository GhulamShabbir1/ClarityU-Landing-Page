import React, { useState } from "react";
import S3 from "../assets/s3.svg";

const features = [
  {
    title: "Bueatifull on All devices",
    description:
      "Create stunning mobile funnels quickly and easily. Now you can build in minutes, not hours.",
  },
  {
    title: "Smart integration",
    description:
      "Choose from a library of proven high-converting templates to get started fast.",
  },
  {
    title: "Own your domain",
    description:
      "Customize every detail with a design system built for conversion.",
  },
  {
    title: "GDPR compliance",
    description:
      "Tailor your content for each audience with dynamic personalization.",
  },
];

function Section3() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="createFunel-cont toolsIntegration-cont all">
        <h2>
          Integrate your favorite tools and share your funnel with the world.
        </h2>
        <div className="createFunel-main toolsIntegration-main">
          <div className="disc-img">
            <img src={S3} alt="section 3" />
          </div>
          <div className="disc toolsIntegration-disc">
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
        </div>
      </div>
    </>
  );
}

export default Section3;
