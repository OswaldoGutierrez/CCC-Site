import React from "react";
import { Link } from "react-router-dom";

import ImageOne from "../images/image-one.jpg";
import ImageTwo from "../images/image-two.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="services">
          <h2>Services We Provide</h2>
          <p>
            Office Cleaning <br />
            Floor Cleaning: <br />
            (Strip & Wax, Rewax, Buff) <br />
            Carpet Cleaning <br />
            Spot-Cleaning <br />
          </p>

          <div className="images">
            <div className="image-one">
              <img src={ImageOne} alt="first" />
            </div>

            <div className="image-two">
              <img src={ImageTwo} alt="second" />
            </div>
          </div>
        </div>

        <div className="make-request">
          <p>Contact Us And Receive A Free</p>
          <Link to="/service-form">Estimate</Link>
        </div>
      </div>
    );
  }
}

export default Home;
