import Layout from "../../layouts/layout";
import "./about.scss";
import imgbox1 from "../../../assets/imgs/imagebox1.png";
import img1 from "../../../assets/imgs/2.png";
import location from "../../../assets/location.png";
import embed from "../../../assets/embed.mp4";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <div className="px-4 py-5 text-center hero ">
          <h1 className="display-5 fw-bold">About Us</h1>
          <p className="lead mb-4 col-lg-6 mx-auto">
            Texas Food, The Texan Way
          </p>
        </div>

        <div className="container">
          <div className="row mt-5 mb-lg-5 m-2 pr-5 pb-lg-5 justify-content-around">
            <div className="col-lg-5 col-sm-12 ">
              <div className="imagebox1" id="imagebox1">
                <img src={imgbox1} alt="" />
                <h3>"A SENSATIONAL EXPERIENCE."</h3>
                <div></div>
              </div>
            </div>

            <div className="col-lg-5 mt-5 col-sm-12 textzone">
              <h3>About Us</h3>
              <p className="pt-3">
                At Texas Forever Bar & Grill, the heart of our mission is a deep
                commitment to celebrating the rich tapestry of Texan flavors. We
                aspire to honor the culinary traditions of Texas, ensuring that
                every dish we serve reflects the authentic taste and spirit of
                this remarkable state. In particular, we extend this dedication
                to the truckers and travelers traversing Interstate 10. Our goal
                is to create a culinary oasis, a welcoming haven where those on
                the road can savor the essence of Texas in every bite. From the
                bold and savory to the comforting and familiar, we craft each
                dish with precision and passion, inviting all who pass through
                to experience the true flavors of the Lone Star State.
              </p>
            </div>
          </div>
          <div className="row mt-lg-5 mb-5 m-2 pl-5 pt-lg-5 justify-content-around">
            <div className="col-lg-5 col-sm-12 my-5 textzone">
              <h3>Our Menu</h3>
              <p className="pt-3 pb-3">
                Our menu pays homage to Channelview's history and the bold
                flavors of Texas. From locally sourced ingredients, our
                farm-to-table approach ensures freshness in every bite. Start
                your day with a complimentary coffee paired with our breakfast
                delights, available until 10 a.m. As the day unfolds, indulge in
                starters, snacks, and Southern-style entrees served with two
                sides. For a classNameic taste, our burgers and sandwiches offer
                a perfect blend of tradition and flavor. Join us for a dining
                experience that captures the heart of Texas, where each dish
                tells a story and every meal is a celebration”
              </p>
              <Link to="/menu" className="btn smbt">
                Menu
              </Link>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="imagebox1" id="imageBox2">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="video">
          <video control="true" autoPlay muted loop>
            <source src={embed} type="video/mp4" />
          </video>
        </div>

        <div className="container">
          <div className="row mt-5 mb-5 m-2 pl-5 justify-content-between">
            <div className="col-lg-5 col-sm-12 my-5 locations">
              <h3>Our Locations</h3>
              <p className="pt-3 pb-3">
                We ultimately seek to be a community gathering place, where
                families come to share a great meal.
              </p>
              <Link to="/contact" className="btn smbt">
                Locations
              </Link>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="locationimg">
                <img src={location} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
