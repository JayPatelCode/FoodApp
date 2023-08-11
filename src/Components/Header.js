import { useState } from "react";
import imag from "../Images/imag.jpg"
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";



// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={imag}
      alt="Food is life Logo"
      title="Food is life"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const token = localStorage.getItem("token");
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );

  
  const navigate = useNavigate();
  // const cartItems=useSelector((store) => store.cart.items)
  const cartItems = useSelector(
    (store) => store.cart.items
  );


  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>


          <Link to="/cart">
          <li><i className="fa-solid fa-cart-plus"></i>
        
            <FontAwesomeIcon icon={faCartPlus}/>{cartItems.length}
          </li>
       </Link>
         

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          



          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.clear();
                  setIsLoggedin(!isLoggedin);
                }}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;