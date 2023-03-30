import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Navbar from "../components/Navbar.jsx";

// Styles & Assets
import "../../styles/home.css";
import carMap from "../../assets/car_map_fixed.png";

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
            <img src={carMap} alt="" />
          </div>
        </main>
      </div>

      <div className="about__cta">
        <p>How do we do it?</p>
        <a href="#about" className="animate__bounce arrow__down">
          ⬇
        </a>
      </div>

      <section id="about" className="about__container">
        <div className="about__text__container">
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

      <section id="contact" className="contact__container">
        <div className="contact__text__container">
          <p className="text__heading text__contact">Contact Us</p>
          <p className="text__regular">
            Our team is happy to answer any questions or concerns. Fill out the
            form and we'll be in touch as soon as possible.
          </p>
        </div>
        <div className="contact__input__container">
          <div className="contact__input">
            <label for="name">Name</label>
            <input
              className="input__field"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="contact__input">
            <label for="email">Email</label>
            <input
              className="input__field"
              id="email"
              type="text"
              placeholder="YourEmail@something.com"
              required
            />
          </div>
          <div className="contact__input">
            <label for="tel">Phone #</label>
            <input
              className="input__field"
              id="phone"
              type="phone"
              placeholder="(123)456-7890 (optional)"
            />
          </div>
          <div className="contact__input">
            <label for="message">Anything else?</label>
            <textarea
              className="input__field"
              name="message"
              id="message"
              cols="22"
              rows="5"
              placeholder="Your Message to us!"
            ></textarea>
          </div>
          <div className="contact__button">
            <button type="submit" className="submit__button">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
