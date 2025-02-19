/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import PhotoSlides from './components/PhotoSlides';
import Footer from './components/Footer';
import PopUp from './components/Popup';
import Stats from './components/Stats'
import Services from './components/Services'
import Improvement from './components/Improvement';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQAccordion from './components/Faq';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
const App = () => {
  return (
    <div className='bg-[#121212] min-h-screen'>

      {/* <section id="popup">
        <PopUp />
      </section> */}

      <section id="navbar">
        <Navbar />
      </section>

      <section id="hero">
        <HeroSection />
      </section>


      {/* <section id="stats">
        <Stats />
      </section> */}

      <section id="services">
        <Services />
      </section>

      {/* <section id="improvement">
    <Improvement />
  </section> */}


      <section id="why-us">
        <About />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>



      <section id="faq">
        <FAQAccordion />
      </section>

      {/* <section id="contact">
        <Contact />
      </section> */}


      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default App
