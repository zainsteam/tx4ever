import Layout from "../../layouts/layout";
import style from "./Category.module.scss";
import { DrinkData } from "../../data/drink";
import { useEffect } from "react";

export const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const drinkData = DrinkData;
  return (
    <>
      <Layout>
        <div className={`${style["menu"]}`}>
          <div className={`${style["menu_pg1"]}`}>
            <div className={`${style["main"]}`}>
              <h1>Drinks</h1>
              <p>Texas Food, The Texan Way</p>
            </div>
          </div>
          <div className={`${style["menu_pg2"]}`}>
            <h1>Drinks</h1>
            <div id={`${style["menu_card"]}`}>
              {drinkData.map((data, index) => (
                <div key={index} className={`${style["menu_card"]}`}>
                  <div className={`${style["drink_height"]}`}>
                    <img src={data.img} alt="" />
                  </div>
                  <h2>{data.head}</h2>
                  <p>{data.para}</p>
                  <h3>{data.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
// export default Menu;
