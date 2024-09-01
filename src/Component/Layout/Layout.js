import React from "react";
import Header from "./Header";
import { Footer } from "../Footer";

const Layout = ({ children }) => {
  // wrap of container used for children == destrure kiya nahi to props.children likhna padta
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
