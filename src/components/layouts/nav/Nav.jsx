import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import React from "react";
import { useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [isContainerActive, setIsContainerActive] = React.useState(false);

  const navbar_event = () => {
    setIsContainerActive(true);
    console.log("run", isContainerActive);
  };
  const navbar_close = () => {
    setIsContainerActive(false);
    console.log("run2", isContainerActive);
  };

  // nav_bar.addEventListener("click", () => {
  //   navbar.classList.add("nav_mobile");
  //   nav_bar.style.display = "none";
  // });
  // nav_close.addEventListener("click", () => {
  //   navbar.classList.remove("nav_mobile");
  //   nav_bar.style.display = "block";
  // });

  return (
    <>
      <header>
        <nav>
          <div className={`${style["main"]}`}>
            <div className={`${style["left"]}`}>
              <Link to="/Home">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div
              className={`${style["right"]} ${
                isContainerActive ? `${style["nav_mobile"]}` : ""
              }`}
              id={`${style["right"]}`}
            >
              <ul>
                <Link to="home " className={`${style["resImgNav"]}`}>
                  <img src={logo} alt="" />
                </Link>
                <li>
                  <Link
                    id={`${style["navHome"]}`}
                    to="/"
                    className={
                      splitLocation[1] === "" ? `${style["active"]}` : ""
                    }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    id="navMenu"
                    to="/menu"
                    className={
                      splitLocation[1] === "menu" ? `${style["active"]}` : ""
                    }
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    id="navDrinks"
                    to="/category"
                    className={
                      splitLocation[1] === "category"
                        ? `${style["active"]}`
                        : ""
                    }
                  >
                    Drinks
                  </Link>
                </li>
                <li>
                  <Link
                    id="navAbout"
                    to="/about"
                    className={
                      splitLocation[1] === "about" ? `${style["active"]}` : ""
                    }
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    id="navContact"
                    to="/contact"
                    className={
                      splitLocation[1] === "contact" ? `${style["active"]}` : ""
                    }
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    id="navNews"
                    to="/news"
                    className={
                      splitLocation[1] === "news" ? `${style["active"]}` : ""
                    }
                  >
                    News
                  </Link>
                </li>
              </ul>
              <div id={`${style["nav_close"]}`} onClick={navbar_close}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.75 5.25L5.25 18.75M18.75 18.75L5.25 5.25"
                    stroke="#272727"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              {/* <i id={`${style["nav_close"]}`} className="fa-solid fa-xmark"></i> */}
            </div>
            <div
              id={`${style["nav_bar"]}`}
              onClick={navbar_event}
              className={`${
                isContainerActive ? `${style["hidden_force"]}` : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.75 5.25H20.25M3.75 9.75H20.25M3.75 14.25H20.25M3.75 18.75H20.25"
                  stroke="#272727"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
