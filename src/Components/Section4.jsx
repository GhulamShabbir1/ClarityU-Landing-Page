import React from "react";
import S4 from '../assets/s4.png'

function Section4() {
  return (
    <>
      <h2>
      Analyze your target audience and<br />
      achieve record results.
      </h2>
      <div>
        <div>
          <details>
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
          </details>
        </div>
      </div>
      <div>
        <img src={S4} alt="section 4" />
      </div>
    </>
  );
}

export default Section4;
