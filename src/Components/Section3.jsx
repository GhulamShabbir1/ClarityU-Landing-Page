import React from "react";
import S3 from '../assets/s3.png'

function Section3() {
  return (
    <>
      <h2>
      Integrate your favorite tools and<br />
      share your funnel with the world.
      </h2>
      <div>
        <img src={S3} alt="section 3" />
      </div>
      <div>
        <div>
          <details>
            <summary>Bueatifull on All devices</summary>
            <p>
              This is the first paragraph. It shows when you click Heading 1.
            </p>
          </details>

          <details>
            <summary>Smart integration</summary>
            <p>
              This is the second paragraph. It shows when you click Heading 2.
            </p>
          </details>

          <details>
            <summary>Own your domain</summary>
            <p>
              This is the third paragraph. It shows when you click Heading 3.
            </p>
          </details>
          <details>
            <summary>GDPR compliance</summary>
            <p>
              This is the third paragraph. It shows when you click Heading 3.
            </p>
          </details>
        </div>
      </div>
      
    </>
  );
}

export default Section3;
