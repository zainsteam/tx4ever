import style from "./ThirdSec.module.scss";
import { Link } from "react-router-dom";
export const SecondSec = () => {
  return (
    <>
      <div className={`${style["page3"]}`}>
        <div className={`${style["pg3_btn"]}`}>
          <Link to="/menu">
            {" "}
            <button>Order Now</button>
          </Link>
          <Link to="/contact">
            {" "}
            <button>Contact Us</button>
          </Link>
          <Link to="/contact">
            {" "}
            <button>Find Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default SecondSec;
