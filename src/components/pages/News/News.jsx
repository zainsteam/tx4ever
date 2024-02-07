import Layout from "../../layouts/layout";
import "./News.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { BlogsData } from "../../data/Blogs";

export const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardData = BlogsData;

  return (
    <>
      <Layout>
        <div className="menu">
          <div className="menu_pg1">
            <div className="main">
              <h1>News</h1>
              <p>Texas Food, The Texan Way</p>
            </div>
          </div>

          <div className="menu_pg2">
            {/* <h1>BURGERS</h1> */}
            <div id="menu_card">
              {cardData.map((data, index) => (
                <div key={index} className="menu_card">
                  <Link to={`/news/${index}`}>
                    <img src={data.img} alt="" />
                    <h2>{data.heading}</h2>
                  </Link>
                  <div className="cardAuthor">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU"
                      alt=""
                    />
                    <h5>M Talha</h5>
                  </div>
                  <p>{data.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
