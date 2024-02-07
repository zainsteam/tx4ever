import style from "./FourthSec.module.scss";
import left_image from "../../../../assets/home-pg4-1.png";
import right_image from "../../../../assets/home-pg4-2.png";
import { Link } from "react-router-dom";

export const FourthSec = () => {
  return (
    <>
      <div className={`${style["page4"]}`}>
        <div className={`${style["main"]}`}>
          <h1>TEXAS SIZED MOMENTS</h1>
          <div className={`${style["content"]}`}>
            <div className={`${style["main"]}`}>
              <div className={`${style["left"]}`}>
                <img src={left_image} alt="" />
                <h1>GET IT DELIVERED</h1>
                <p>
                  Indulge in the Texas Forever Bar & Grill experience without
                  leaving your doorstep! Enjoy the authentic flavors of
                  Channelview delivered straight to your home. From cozy nights
                  inside to lively family gatherings, our delectable cuisine is
                  just a click away. Elevate your at-home dining with our
                  delivery service partners and savor the true taste of Texas,
                  delivered with warmth and convenience.
                </p>
                <Link to="/menu">Order Now</Link>
              </div>
              <div className={`${style["right"]}`}>
                <img src={right_image} alt="" />
                <h1>GET IT DELIVERED</h1>
                <p>
                  Savor the true taste of Texas at Texas Forever Bar & Grill
                  with our exceptional dine-in experience. Immerse yourself in
                  the inviting ambiance of Channelview, where rich flavors and
                  warm hospitality come together. Whether it's a romantic date
                  or a family celebration, our dine-in service ensures an
                  unforgettable culinary journey. Join us and let the heart of
                  Texas unfold at your table.
                </p>
                <Link to="/contact">FIND US</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FourthSec;
