import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import { Home } from "./pages/Home.jsx";
import injectContext from "./store/appContext";

import { Sidebar } from "./components/Sidebar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Locations } from "./pages/Locations.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Sidebar />
          <Locations />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Home />} path="/test" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default injectContext(Layout);
