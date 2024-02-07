import "./blog.scss";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/layout.jsx";
import { BlogsData } from "../../data/Blogs";
import parse from "html-react-parser";
import { useEffect } from "react";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { title } = useParams();

  const body = parse(BlogsData[title].body);

  console.log(title);

  return (
    <>
      <Layout>
        <div className="blog">
          <div className="blog_pg1">
            <div className="main">
              <h1>Blog</h1>
            </div>
          </div>
          <div className="blog_pg2">
            <div className="main">
              <h1>{BlogsData[title].heading}</h1>
              <div>{body}</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
