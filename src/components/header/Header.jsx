import React from 'react';
import './header.css';
import CTA from './CTA'
import About from './About'

const Header = () => {
  return (
    <header>
      <section id='header' className="container header__container">
        <h1>Barbara Bennett</h1>
        <h5 className='header__subtitle'>Fullstack Developer</h5>
        <CTA />
        <About />
      </section>
    </header>
  )
}

export default Header