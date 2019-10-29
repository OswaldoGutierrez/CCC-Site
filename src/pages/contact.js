import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from "../images/cleaningedit.jpg";

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
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">555-555-5555</div>
          </div>

          <div className="points-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">example@sample.com</div>
          </div>

          <div className="points-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Talyorsville, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
