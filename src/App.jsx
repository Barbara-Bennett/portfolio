import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Skill from './components/skill/Skill';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
