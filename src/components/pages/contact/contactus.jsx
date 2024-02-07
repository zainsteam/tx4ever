import Layout from "../../layouts/layout";
import "./contactus.scss";
import vector from "../../../assets/imgs/vector.png";
import vector1 from "../../../assets/imgs/vector (1).png";
import vector2 from "../../../assets/imgs/vector (2).png";
import social1 from "../../../assets/imgs/Group 222.png";
import social2 from "../../../assets/imgs/Group 221.png";
import social3 from "../../../assets/imgs/Group 220.png";
import social4 from "../../../assets/imgs/Group 219.png";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <div className="px-4 py-5 text-center hero">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead mb-4 col-lg-6 mx-auto">
            We ultimately seek to be a community gathering place, where families
            come to share a great meal.
          </p>
        </div>

        <div className="row mt-5 mb-5 m-2 justify-content-around">
          <form className="col-lg-4 mb-5 col-sm-12">
            <p className="contact">CONTACT US</p>
            <div className="mb-3">
              <input
                type="text"
                className="form-control py-4"
                id="inputEmail"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-4"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control py-4"
                id="inputPhone"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                className="form-control"
                // style="height: 100px"
                id="inputText"
                placeholder="Question/Comment"
              ></textarea>
            </div>
            <button type="submit" className="btn smbt">
              Submit Form
            </button>
          </form>

          <div className="col-lg-4 col-sm-12">
            <p className="dine">DINE WITH US</p>
            <div className="d.flex infoline">
              <img className="" src={vector} />
              <span className="">
                17124 East Freeway, Channelview Tx 77530 Houston, Texas 77530
              </span>
            </div>
            <div className="d.flex infoline">
              <img className="" src={vector1} />
              <span>tx4cafe@gmail.com</span>
            </div>
            <div className="d.flex infoline">
              <img className="" src={vector2} />
              <span className="">956-772-4700</span>
            </div>
            <div className="social-icons">
              <img className="icon" src={social1} />
              <img className="icon" src={social2} />
              <img className="icon" src={social3} />
              <img className="icon" src={social4} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
