import React from 'react';
import '../assets/style/design.css';

import { Link } from 'react-router-dom';

import DesignInterface from '../assets/data/design.json';

const Design = () => {
  return (
    <section className='page__design'>
      <div className='page__design__content'>

        <div className="page__design__content__header">
          <div className='page__design__content__header__title'>
            <span>Design Projects</span>  
          </div>
          <div className="page__design__content__header__text">
            <span>
              <i>
              I enjoy designing various projects where I can showcase my talents and creativity in different fields. While paying attention to aesthetics in my designs, I also take care to ensure that they are functional, usable and accessible. I always strive to produce high-quality and user-friendly solutions that meet the needs and expectations of the users.
              </i>
            </span>
          </div>
        </div>
          

          <div className="page__design__content__card">
            {DesignInterface.map(({image, title, url}, index) =>(
              <div className='page__design__content__card__item' key={`DesignInterface-${index}`}>
                <div className="page__design__content__card__item__image" key={`DesignInterface-${index}`}>
                  <img src={image} alt="design" />
                </div>
                <div className='page__design__content__card__item__title'>
                  <span>{title}</span>
                </div>
                <div className='page__design__content__card__button'>
                  <a href={url} rel="noreferrer noopenner" target="_blank" className='card__button__design button link'>
                    <span className='label'>
                      VIEW
                    </span>
                    <span className='area'>
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
            )).reverse()}
          </div>
         
      
      </div>
    </section>
  )
}

export default Design