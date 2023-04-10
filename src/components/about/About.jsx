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
              <p>An ambitious Full-Stack web developer looking for a Part-time/İntership role in an IT company with the opportunity to work with the latest technologies.

                Quite curious, detail oriented and a collaborative team player.

                Also, interested in Photography, horse riding, camping, animals and anime.</p>
              <a href="#contact" className='btn btn-primary'>Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about