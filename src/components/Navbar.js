import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import svgIcon from "../icons/Icons.svg";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [activeNav, setActiveNav] = useState(true);
  const location = useLocation();
  useEffect(() => {
setActiveNav(location.pathname);
  }, [location]);
  const hamburger = (value) => {
    setMobileNavbar(value);
  };
  const other=()=>{
    setMobileNavbar(false);
  }
 
  return (
    <div>
      <header>
        <nav>
          <div className="navbar">
            <div className="desktop-nav">
              <ul>
                {
                  activeNav==="/"?
                  ""
                  :
                  <li className="desktop">
                  <Link to={"/"}>Home</Link>
                </li>
                }
                {
                  activeNav==="/About_me"?
                  ""
                  :
                  <li className="desktop">
                  <Link to="/About_me">About_me</Link>
                </li>
                }
                {
                  activeNav==="/Skills"?
                  ""
                  :
                  <li className="desktop">
                  <Link to="/Skills">Skills</Link>
                </li>
                }
                {
                  activeNav==="/Contact"?
                  ""
                  :
                  <li className="desktop">
                  <Link to="/Contact">Contact</Link>
                </li>
                }
              </ul>
            </div>

            <div className="hamburger">
              <span
                classname="icon"
                style={{ display: mobileNavbar ? "none" : "block" }}
              ></span>
              <img
                src={svgIcon}
                onClick={() => hamburger(true)}
                alt="hamburger icon"
              />
            </div>
            {mobileNavbar ? (
              <div className="mobile-nav">
                <div className="sidebar">
                  <span className="clsbtn" onClick={() => hamburger(false)}>
                    &times;
                  </span>
                </div>
                <div className="mobile-sidebar" >
                  <ul  onClick={other}>
                    {
                      activeNav==="/"?
                      ""
                      :
                      <li type="none">
                      <Link to={"/"}>Home</Link>
                    </li>
                    }
                    {
                      activeNav==="/About_me"?
                      ""
                      :
                      <li type="none">
                      <Link to="/About_me">About_me</Link>
                    </li>
                    }
                    {
                      activeNav==="/Skills"?
                      ""
                      :
                      <li type="none">
                      <Link to="/Skills">Skills</Link>
                    </li>
                    }
                    {
                      activeNav==="/Contact"?
                      ""
                      :
                      <li type="none">
                      <Link to="/Contact">Contact</Link>
                    </li>
                    }
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
