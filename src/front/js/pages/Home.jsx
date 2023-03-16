import React from "react";
import "../../styles/home.css";

import { Card } from "../components/Card.jsx";

{
  /* 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x=0 y=0 width=100 height=50 />
  <circle class="svg-circle" cx="50" cy="50" r="10"/>
  </svg> 
*/
}

export const Home = () => {
  return (
    <div className="container">
      <nav>
        <img />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>

      <main>
        <div className="col-container">
          <div className="col-left"></div>
          <div className="col-right"></div>
        </div>
        <div>Learn More</div>
      </main>

      <section>{/* <Card /> */}</section>

      <footer></footer>
    </div>
  );
};
