
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import food from "../Images/burger-image.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="about-profile-container">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
          <Link to={"/about"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(false)}
            >
              Hide My Profile
            </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
              "Better you will feel if you eat a <strong> <b><i>Food<sup><sub>is</sub></sup>life</i></b></strong> healthy meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;







//process

/*Parent Constructor
Parent reneder 
first Child Constructor
first Child render
second Child Constructor
second Child Render

Dom updated for children

first Child componentDidMount
second Child componentDidMount
paren componentDidMount*/
