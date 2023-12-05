import React from 'react'
import './skill.css'
import { FaRegCircleCheck } from 'react-icons/fa6'

const Skill = () => {
  return (
    <section id='skill'>
      <h2>My skills</h2>
      <div className="container skill__container">
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>Flask</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skill__frontend">
          <h3>Frontend Development</h3>  
          <div className="skill__content">
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skill__other">
          <h3>Others</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='skill__details'>
              <FaRegCircleCheck className='skill__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skill