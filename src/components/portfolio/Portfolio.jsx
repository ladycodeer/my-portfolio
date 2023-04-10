import React from 'react'
import './portfolio.css'
import refubook from '../../assets/refubook.png'
import Madlibs from '../../assets/Madlibs.png'
import cinema from '../../assets/cinema.png'


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={refubook} alt="RefuBook project" />
          </div>
          <h3>RefuBook project</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/ladycodeer/The-Incredibles" className='btn' target='_blank' rel="noopener">Github </a>
            <a href="https://the-incredibles-refubook.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={cinema} alt="RefuBook project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'><a href="https://github.com/ladycodeer/The-Incredibles" className='btn' target='_blank' rel="noopener">Github</a>
            <a href="https://the-incredibles-refubook.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Madlibs} alt="RefuBook project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'><a href="https://github.com/ladycodeer/The-Incredibles" className='btn' target='_blank' rel="noopener">Github</a>
            <a href="https://the-incredibles-refubook.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Madlibs} alt="RefuBook project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'><a href="https://github.com/ladycodeer/The-Incredibles" className='btn' target='_blank' rel="noopener">Github</a>
            <a href="https://the-incredibles-refubook.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Madlibs} alt="RefuBook project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'><a href="https://github.com/ladycodeer/The-Incredibles" className='btn' target='_blank' rel="noopener">Github</a>
            <a href="https://the-incredibles-refubook.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Madlibs} alt="RefuBook project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'><a href="https://github.com/ladycodeer/The-Incredibles" className='btn' target='_blank' rel="noopener">Github</a>
            <a href="https://the-incredibles-refubook.netlify.app/" className='btn btn-primary' target='_blank' rel="noopener">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio