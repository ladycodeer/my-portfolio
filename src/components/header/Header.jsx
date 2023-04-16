import React from 'react'
import CTA from './CTA'
import './header.css'
import Rabia from '../../assets/Rabia.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rabia Kahya</h1>

        <div className="text-light">" Developer,
          3th year CSE student at Cukurova University"</div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Rabia} alt="Rabia Kahya" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header