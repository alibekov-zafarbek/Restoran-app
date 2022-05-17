import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/food.jpeg";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>Indian Food at a Click.</p>
        <Link to="/menu">
          <button>order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
