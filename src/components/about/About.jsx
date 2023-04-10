import React from 'react'
import './about.css'
import ME from '../../assets/ME.png'
import { FiAward } from "react-icons/fi"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"


const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__crads">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small> 1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers />
              <h5>Clients</h5>
              <small>0+</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small> 10+ Projects</small>
            </article>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius harum laborum repellat culpa ipsa vero quis illo, repudiandae laudantium quos dignissimos illum voluptates distinctio obcaecati quam error sint recusandae!</p>
              <a href="#contact" className='btn btn-primary'>Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about