import "./submenu.scss";
import { useParams } from "react-router-dom";

import Layout from "../../layouts/layout";

export const Submenu = () => {
  const { submenu } = useParams();

  return (
    <>
      <Layout>{submenu}</Layout>
    </>
  );
};
