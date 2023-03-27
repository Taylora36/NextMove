import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Navbar from "../components/Navbar.jsx";

// Styles & Assets
import "../../styles/home.css";
import LogoSVG from "../components/LogoSVG.jsx";
import background from "../../assets/bg-image.png";
import brandImage from "../../assets/man-searching-tp.png";

const Home = () => {
  return (
    <>
      <div
        className="home__container"
        // style={{ height: "inherit", backgroundImage: `url(${background})` }}
      >
        <span className="blob__left"></span>
        <Navbar className="nav__bar" />
        <section className="layout__grid">
          <div className="left__col">
            <p>Discover Your</p>
            <p>NextMove</p>
            <p>Explore. Compare. Discover.</p>
            <NavLink to="/login" className="cta__button">
              Get Started
            </NavLink>
          </div>
          <div className="right__col">
            <img src={brandImage} alt="" />
          </div>
        </section>
      </div>
      <section className="content__layout">
        <div className="content__header">
          <p>
            3 steps to find your <span className="cta__text">NextMove</span>,
            it's just that easy!
          </p>
          <span className="animate__bounce">⬇</span>
        </div>
        <div className="content__card">
          <div>Carousel</div>
        </div>
      </section>
      <footer className="layout__grid__footer">
        <div className="two__column">
          <div className="contact__container__left">
            <p>Contact Us</p>
          </div>
          <div className="contact__container__right">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Phone"></input>
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="submit__button">
              Submit
            </button>
          </div>
        </div>
        <div className="nav__footer">
          <nav>
            <ul className="nav__links">
              <li>
                <NavLink to="/" className="no__effect">
                  <LogoSVG />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/login" className="login__button no__effect">
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Home;
