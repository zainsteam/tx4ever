import Layout from "../../layouts/layout";
import style from "./menu.module.scss";
import { MenuData } from "../../data/Menu";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuData = MenuData;
  return (
    <>
      <Layout>
        <div className={`${style["menu"]}`}>
          <div className={`${style["menu_pg1"]}`}>
            <div className={`${style["main"]}`}>
              <h1>MENU</h1>
              <p>Texas Food, The Texan Way</p>
            </div>
          </div>
          <div className={`${style["menu_pg2"]}`}>
            <h1>Texas Forever Menu</h1>
            <div id={`${style["menu_card"]}`}>
              {menuData.map((data, index) => (
                // <Link key={index} to={`/menu/${data.head}`}>
                <Link key={index} to="/menu">
                  <div className={`${style["menu_card"]}`}>
                    <img src={data.img} alt="" />
                    <h2>{data.head}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
// export default Menu;
