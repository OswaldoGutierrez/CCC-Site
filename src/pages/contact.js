import React from "react";

import contactImage from "../images/contact-image.jpg";

export default function() {
  return (
    <div className="Contact">
      <div className="left-column">
        <img src={contactImage} alt="pic" />
      </div>

      <div className="right-column">
        <div className="contact-points">
          <div className="points-group">
            <div className="text">555-555-5555</div>
          </div>

          <div className="points-group">
            <div className="text">example@sample.com</div>
          </div>

          <div className="points-group">
            <div className="text">Talyorsville, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
