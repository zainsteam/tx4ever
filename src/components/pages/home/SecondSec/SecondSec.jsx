import style from "./SecondSec.module.scss";
import logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";

export const SecondSec = () => {
  return (
    <>
      <div className={`${style["page2"]}`}>
        <div className={`${style["main"]}`}>
          <img src={logo} alt="" />
          <div className={`${style["pg2_btn"]}`}>
            <Link to="contact">
              {" "}
              <button>Find Us</button>
            </Link>
            <Link to="/menu">
              {" "}
              <button>Menu</button>
            </Link>
            <Link to="/menu">
              {" "}
              <button>Order Now</button>
            </Link>
            <Link to="/contact">
              {" "}
              <button>Contact Us</button>
            </Link>
          </div>
          <p>
            Welcome to Texas Forever Bar & Grill, where the heart of
            Channelview's history meets the rich flavors of Texas. Whether it's
            a romantic date night or a joyous family gathering, we're your
            destination for memorable experiences. Discover the charm of our
            uniquely Texan dining experience, where warmth, community, and
            delicious cuisine come together.
          </p>
        </div>
      </div>
    </>
  );
};
export default SecondSec;
