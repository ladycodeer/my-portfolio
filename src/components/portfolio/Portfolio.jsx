import React from 'react'
import './portfolio.css'
import refubook from '../../assets/refubook.png'
import Madlibs from '../../assets/Madlibs.png'
import cinema from '../../assets/cinema.png'
import portfolio from '../../assets/portfolio.png'
import todo from '../../assets/todo.png'
import foody from '../../assets/foody.png'


const data = [
  {
    id: 1,
    image: refubook,
    title: "The Incredibles / RefuBook",
    githup: 'https://github.com/ladycodeer/The-Incredibles',
    demo: 'https://the-incredibles-refubook.netlify.app/'
  },
  {
    id: 2,
    image: cinema,
    title: "DownTown Cinema",
    githup: 'https://github.com/ladycodeer/movie-project-downtown-cinema',
    demo: 'https://downtowncinema.netlify.app/'
  },
  {
    id: 3,
    image: Madlibs,
    title: "Re:Coded / MadLibs Project",
    githup: 'https://github.com/ladycodeer/mad-libs-runtime-terror',
    demo: 'https://spookymadlibs.netlify.app/'
  },
  {
    id: 4,
    image: portfolio,
    title: "My Portfolio",
    githup: 'https://github.com/ladycodeer/my-portfolio',
    demo: 'https://ladycodeer.netlify.app/'
  },
  {
    id: 5,
    image: todo,
    title: "Todo App",
    githup: 'https://github.com/ladycodeer/my-todo-app',
    demo: 'https://my-todoo-appp.netlify.app/'
  },
  {
    id: 6,
    image: foody,
    title: "Foody/ Food Ordering App",
    githup: '',
    demo: ''

  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, githup, demo }) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={id} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={githup} className='btn' target='_blank' rel="noopener">Github </a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener">Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio