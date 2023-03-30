import React from 'react'
import './about.css'
import Rabia from '../../assets/Rabia.png'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Rabia} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default about