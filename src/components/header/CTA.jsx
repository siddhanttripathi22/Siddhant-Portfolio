import React from "react";
import CV from "../../assets/kp_resume.pdf";

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
