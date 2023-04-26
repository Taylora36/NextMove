import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import injectContext from "./store/appContext";
import { Sidebar } from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import { Footer } from "./components/Footer.jsx";
import { Explore } from "./pages/Explore.jsx";
import { Compare } from "./pages/Compare.jsx";
import { Login } from "./pages/Login.jsx";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Sidebar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Explore />} path="/explore" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default injectContext(Layout);
