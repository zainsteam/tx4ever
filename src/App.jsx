import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home.jsx";
import { Menu } from "./components/pages/menu/menu.jsx";
import { Category } from "./components/pages/category/Category.jsx";
import { About } from "./components/pages/about/aboutus.jsx";
import { Contact } from "./components/pages/contact/contactus.jsx";
import { News } from "./components/pages/News/News.jsx";
import { Blog } from "./components/pages/blog/blog.jsx";
import { Submenu } from "./components/pages/submenu/submenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:title" element={<Blog />} />
        <Route path="/menu/:submenu" element={<Submenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
