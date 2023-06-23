import React from "react";
import CV from "../../assets/Resume_KP.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <div>
        <a href={CV} download className="btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default CTA;
