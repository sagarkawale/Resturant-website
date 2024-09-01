import logo from "./logo.svg";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import PageNoutFound from "./Pages/PageNoutFound";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="*" element={<PageNoutFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
