import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="services">
          <h2>Services We Provide</h2>
          <p>
            Office Cleaning <br />
            Floor Cleaning: <br />
            (Strip & Wax, Wax, Rewax, Buff) <br />
            Carpet Cleaning
          </p>
        </div>

        <div className="make-request">
          <p>Something Something</p>
          <Link to="/service-form">Estimate</Link>
        </div>
      </div>
    );
  }
}

export default Home;
