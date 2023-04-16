import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


function Contact() {
  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            {/* <h5>rabiakahya22@gmail.com</h5> */}
            <a href="mailto:rabiakahya22@gmail.com" target='_blank'> <h5>Send a message</h5></a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            {/* <h5>Reach out to me through linkedin</h5> */}
            <a href="https://github.com/ladycodeer" target='_blank'> <h5>Reach out to me through linkedin</h5></a>
          </article>



        </div>
        {/* {End of contact Options} */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>

    </section>
  )
}

export default Contact