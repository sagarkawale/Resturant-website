import React from "react";
import Layout from "../Component/Layout/Layout";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../Images/banner.jpeg";
import "../style/HomeStyle.css";

export const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headercontainer">
          <h1>Food Website</h1>
          <p>Best Food In Nashik</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
