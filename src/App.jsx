import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Header></Header>

      <About></About>
      <Experience></Experience>
      {/* <Services></Services> */}
      <Portfolio></Portfolio>

      {/* <Testimonials></Testimonials> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
