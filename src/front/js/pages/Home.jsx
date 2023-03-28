import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Navbar from "../components/Navbar.jsx";

// Styles & Assets
import "../../styles/home.css";
import LogoSVG from "../components/LogoSVG.jsx";
import heroImage from "../../assets/car_map.png";

// React Icons
import { FaWpexplorer } from "react-icons/fa";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { TbMapSearch } from "react-icons/tb";

const Home = () => {
  return (
    <>
      <div className="landing__container">
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
        <div className="about__header__container">
          <p className="text__heading text__about">
            with 3 simple steps, it's just that{" "}
            <span className="text__green">easy!</span>
          </p>
        </div>
        <div className="about__card__container">
          <div className="about__card">
            <p className="about__card__header">
              <FaWpexplorer className="about__icon" />
            </p>
            <p className="about__card__text">Explore any U.S. based location</p>
          </div>
          <div className="about__card">
            <p className="about__card__header">
              <HiOutlineSquare3Stack3D className="about__icon" />
            </p>
            <p className="about__card__text">
              Compare up to 3 places to see the best one
            </p>
          </div>
          <div className="about__card">
            <p className="about__card__header">
              <TbMapSearch className="about__icon" />
            </p>
            <p className="about__card__text">
              Tailored search options just for you!
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact__section">
        <div className="contact__header__container">
          <p className="text__heading text__contact">Contact Us</p>
        </div>
        <div className="contact__input__container">
          <input placeholder="Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Phone (optional)"></input>
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="submit__button">
            Submit
          </button>
        </div>
      </section>

      <footer>
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
