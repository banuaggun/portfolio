import React from 'react';
import '../assets/style/about.css';
import skill from '../assets/data/skill.js';



const About = () => {
  return (
    <section className='page__about'>
      <div className="page__about__content">
        
        <div className="page__about__content__header">
          <div className="page__about__content__header__title">
            <span>About Me</span>
          </div>
          <div className='page__about__content__header__text'>
            <span><i>
            I'm interested in creating stunning and accessible user interfaces that adapt to different devices and browsers. I constantly update my knowledge and skills to keep up with the latest trends and technologies in frontend development. <b>Here are some of the skills that I have learned and excelled at.</b>
            </i></span>
          </div>
        </div>
        
          <div className='page__about__content__card'>
          {skill.map(({icon, name, percantage, description}, index) => (
            
             <div className='page__about__content__card__item' key={`skill-${index}`}>
                <div className="page__about__content__card__title">
                  <div className='page__about__content__card__title__name'>{icon} {name}</div>
                  <span className='page__about__content__card__title__number'>
                    {percantage} <span>%</span>
                  </span>
                </div>

                <div className="page__about__content__card__item__bar">
                  <span className='page__about__content__card__item__percantage' style={{width:`${percantage}%`}}>
                    <span></span>
                  </span>
                </div>
                <span className='page__about__content__card__item__description'>
                  {description}
                </span>
               
              </div>
          
          ))}
         </div>
      </div>
            
          
        
    
    
    </section>
   
  )
}

export default About