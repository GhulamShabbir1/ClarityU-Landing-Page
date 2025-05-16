import React,{useState} from "react";
import S4 from '../assets/s4.png'

const features = [
  {
    title: "All plateforms",
    description:
      "Create stunning mobile funnels quickly and easily. Now you can build in minutes, not hours.",
  },
  {
    title: "A/B Testing and Analytics",
    description:
      "Choose from a library of proven high-converting templates to get started fast.",
  },
  {
    title: "Valueables insights",
    description:
      "Customize every detail with a design system built for conversion.",
  },
  {
    title: "Qualified leads",
    description:
      "Tailor your content for each audience with dynamic personalization.",
  },
];

function Section4() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <div className="createFunel-cont">
    <h2>
      Analyze your target audience and<br />
      achieve record results.
      </h2>
    </div>
      
      <div className="createFunel-main targetAudiance-main" >
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
          {/* <details>
            <summary>For all plateforms</summary>
            <p>
              This is the first paragraph. It shows when you click Heading 1.
            </p>
          </details>

          <details>
            <summary>A/B testing & analytics</summary>
            <p>
              This is the second paragraph. It shows when you click Heading 2.
            </p>
          </details>

          <details>
            <summary>Valueables insights</summary>
            <p>
              This is the third paragraph. It shows when you click Heading 3.
            </p>
          </details>
          <details>
            <summary>Qualified leads</summary>
            <p>
              This is the third paragraph. It shows when you click Heading 3.
            </p>
          </details> */}
           
        </div>
        <div className="disc-img">
        <img src={S4} alt="section 4" />
      </div>
      </div>
     
    </>
  );
}

export default Section4;
