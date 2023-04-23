import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LadyCodeer</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        {/* <li> <a href="#">Home</a></li> */}
        <li> <a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rabia-kahya/" target="_blank" rel="noopener noreferrer"> <BsLinkedin /> </a>
        <a href="https://github.com/ladycodeer?tab=overview&from=2023-02-01&to=2023-02-28" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
        <a href="https://medium.com/" target="_blank" rel="noopener noreferrer"> <SiMedium /> </a>

      </div>
      <div className="footer__copyright">
        <small>&copy; LadyCodeer. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer