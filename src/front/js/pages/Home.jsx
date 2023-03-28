import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Navbar from "../components/Navbar.jsx";

// Styles & Assets
import "../../styles/home.css";
import LogoSVG from "../components/LogoSVG.jsx";
import heroImage from "../../assets/car_map.png";

const Home = () => {
  return (
    <>
      <div className="home__container">
        <span className="blob__left"></span>
        <Navbar className="nav__bar" />
        <main className="hero__container">
          <div className="hero__text__container">
            <p className="text__heading">
              Discover Your <span className="text__brand">NextMove</span> Faster
            </p>
            <p className="text__heading text__slogan">
              Explore. Compare. Discover.
            </p>
            <NavLink to="/login" className="cta__button">
              Get Started
            </NavLink>
          </div>
          <div className="hero__bannerImage__container">
            <img src={heroImage} alt="" />
          </div>
        </main>
      </div>

      <div className="about__cta">
        <p>How do we do it?</p>
        <a href="#about" className="animate__bounce arrow__down">
          ⬇
        </a>
      </div>
      <section id="about" className="about__section">
        <div className="about__text__container">
          <p className="text__heading text__about">
            with 3 simple steps, it's just that{" "}
            <span className="text__green">easy!</span>
          </p>
        </div>
        <div className="about__card__container">
          <div className="about__card">
            <p>Step 1</p>
            <p>
              Explore any US based city or state to find exactly where you want
              to end up.
            </p>
          </div>
          <div className="about__card">
            <p>Step 2</p>
            <p>
              Add up to 3 locations to pit them against each other to decide
              what's best for you.
            </p>
          </div>
          <div className="about__card">
            <p>Step 3</p>
            <p>
              Easily discover your best location through tailored search options
              that fit you just right!
            </p>
          </div>
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
