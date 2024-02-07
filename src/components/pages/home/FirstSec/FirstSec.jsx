import { Slider } from "../../../data/Slider";
import style from "./FirstSec.module.scss";
import { Link } from "react-router-dom";
export const FirstSec = () => {
  return (
    <>
      <div
        id="FirstSectionSlider"
        className={`${style["carousel"]} carousel slide`}
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}
        <div className="carousel-inner">
          {Slider.map((data, index) => (
            <div
              key={index}
              className={`${index == 0 ? "active" : ""} ${
                style["carousel-item"]
              } carousel-item`}
              data-bs-interval="10000"
            >
              <img src={data.src} className="d-block w-100" alt="..." />
              <div className="d-none d-md-block carousel-caption">
                <p>{data.text}</p>
                <div className={`${style["ca_btn"]}`}>
                  <Link to={data.button1_link}>
                    <button className="">{data.button1_text}</button>
                  </Link>
                  <Link to={data.button2_link}>
                    <button className="">{data.button2_text}</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#FirstSectionSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#FirstSectionSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
