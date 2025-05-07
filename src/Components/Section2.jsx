import React from "react";
import S2 from '../assets/s2.png'

function Section2() {
  return (
    <>
      <h2>
        Create your first funnels in 60 <br />
        minutes. Headache-free.
      </h2>
      <div>
        <div>
          <details>
            <summary>Fast editing</summary>
            <p>
              This is the first paragraph. It shows when you click Heading 1.
            </p>
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
      </div>
      <div>
        <img src={S2} alt="section 2" />
      </div>
    </>
  );
}

export default Section2;
