import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from "../images/contact-image.jpg";

export default function() {
  return (
    <div className="content">
      <div
        className="left-column"
        style={{
          background: "url(" + contactImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-points">
          <div className="points-group">
            <div className="text">Contact Us At</div>
          </div>

          <div className="points-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">555-555-5555</div>
          </div>

          <div className="points-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">munozfamilym4@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
