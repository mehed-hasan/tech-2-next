import React, { useState } from "react";
import "../styles/pt.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "../styles/media.css";
import "../styles/main.css";
import "../styles/about.css";
import "../styles/casestudy.css";
import "../styles/portfolio.css";
import "../styles/contact.css";
import NavBar from "../components/Common/NavBar";
import SearchModal from "../components/Common/SearchModal";
import Footer from "../components/Common/Footer";

function MyApp({ Component, pageProps }) {

  const [active, setActive] = useState(false);

  const isClicked = () => {
    setActive(!active);
  };



  return (
    <main id="main">
      <NavBar isClicked={isClicked} />
      <SearchModal isClicked={isClicked} isActive={active}   />
     <Component {...pageProps} />
       <Footer /> 
    </main>
  );
}

export default MyApp;
