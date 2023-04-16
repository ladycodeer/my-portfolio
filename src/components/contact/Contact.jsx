import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'


function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>rabiakahya22@gmail.com</h5>
            <a href="mailto:rabiakahya22@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Linkedin</h4>
            <h5>rabiakahya22@gmail.com</h5>
            <a href="https://github.com/ladycodeer">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>GitHup</h4>
            <h5>rabiakahya22@gmail.com</h5>
            <a href="https://www.linkedin.com/in/rabia-kahya/">Send a message</a>
          </article>


        </div>
        {/* {End of contact Options} */}
      </div>

    </section>
  )
}

export default Contact