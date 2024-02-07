import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../layouts/layout";
import { FirstSec } from "./FirstSec/FirstSec";
import SecondSec from "./SecondSec/SecondSec";
import ThirdSec from "./ThirdSec/ThirdSec";
import FourthSec from "./FourthSec/FourthSec";

export const Home = () => {
  return (
    <>
      <Layout>
        <FirstSec />
        <SecondSec />
        <ThirdSec />
        <FourthSec />
      </Layout>
    </>
  );
};
