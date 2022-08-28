import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Experience</h5>
      <h2>تجربه کاری</h2>

      <div className='containre experience__container'>
        <div className="experience__frontend">
        <h3>توسعه دهنده ی فرانت اند</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>HTML</h4>
            <small className='text-light'>مسلط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>CSS</h4>
            <small className='text-light'>متوسط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>JavaScript</h4>
            <small className='text-light'>مسلط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>Bootstrap</h4>
            <small className='text-light'>مسلط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>Tailwind</h4>
            <small className='text-light'>مسلط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>React.js</h4>
            <small className='text-light'>آشنا </small>
          </article>
        </div>
        </div>
        <div className="experience__backend">

        <h3>توسعه دهنده ی بک اند</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>Node.js</h4>
            <small className='text-light'>مسلط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>MongoDB</h4>
            <small className='text-light'>متوسط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>PHP</h4>
            <small className='text-light'>مسلط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>MySQL</h4>
            <small className='text-light'>مسلط </small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>Python</h4>
            <small className='text-light'>مسلط </small>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience