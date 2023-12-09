import React from 'react';
import '../assets/style/design.css';
import Code from '../assets/data/coding.json';

const Coding = () => {

  return (
    <section className='page__coding'>
      <div className='page__coding__content'>
        <div className="page__coding__content__header">
          <div className='page__coding__content__header__title'>
            <span>Coding Projects</span>
          </div>
          <div className="page__design__content__header__text">
            <span>
              <i>
              As a front-end developer, I have a passion for creating web applications that are responsive and user-friendly. I have used HTML, CSS, JavaScript, ReactJS, and VueJS to build various personal projects that showcase my front-end development skills and knowledge. I am always curious and eager to learn new technologies and programming languages that can enhance my skills and knowledge.
              </i>
            </span>
          </div>
        </div>
          
          <div className='page__coding__content__card'>
            {Code.map(({image, title, url1, url2}, index) => (
                <div className='page__coding__content__card__item' key={`Code-${index}`}>
                  <div className="page__coding__content__card__item__image" key={`Code-${index}`}>
                    <img src={image} alt="coding" />
                  </div>
                  <div className="page__coding__content__card__item__title">
                    <span>{title}</span>
                  </div>
                  <div className='page__coding__content__card__button'>
                 
                        <a href={url2}  rel="noreferrer noopenner" target="_blank" className='button link'>
                            <span className="label">
                              <i className='fa fa-github'></i>
                            </span>
                            <span className="area">
                                <span></span>
                            </span>
                          
                        </a>
                 
                  
                        <a href={url1}  rel="noreferrer noopenner" target="_blank" className='button link'>
                            <span className="label">
                                View
                            </span>
                            <span className="area">
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

export default Coding