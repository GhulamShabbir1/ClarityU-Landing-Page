import React , {useState} from "react";
import S3 from "../assets/s3.png";

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
      <div className="s2-cont s3-cont">
        <h2>
          Integrate your favorite tools and
          share your funnel with the world.
        </h2>
        <div className="s2-main s3-main">
          <div className="disc-img">
            <img src={S3} alt="section 3" />
          </div>
          <div className="disc s3-disc">
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
            {/* <div>
              <details>
                <summary>Bueatifull on All devices</summary>
                <p>
                  This is the first paragraph. It shows when you click Heading
                  1.
                </p>
              </details>

              <details>
                <summary>Smart integration</summary>
                <p>
                  This is the second paragraph. It shows when you click Heading
                  2.
                </p>
              </details>

              <details>
                <summary>Own your domain</summary>
                <p>
                  This is the third paragraph. It shows when you click Heading
                  3.
                </p>
              </details>
              <details>
                <summary>GDPR compliance</summary>
                <p>
                  This is the third paragraph. It shows when you click Heading
                  3.
                </p>
              </details>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
