import React from "react";
import skill from "../../assets/data/skill.js";
import logoAbout from "../../assets/logo/logo-about.png"; 
import image1 from "../../assets/images/page-images/image-3.png"; 
import image2 from "../../assets/images/page-images/image-2.png";  
import image3 from "../../assets/images/page-images/image-4.png"; 

import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">  
    <img src={image1} alt="bg-image" className="bg-image-1" /> 
     <img src={image2} alt="bg-image" className="bg-image-2" /> 
      <img src={image3} alt="bg-image" className="bg-image-3" />
    <div className="about-content">
      <div className="about-area">
        <div className="about-header-content">
          <div className="about-intro">
            <div className="about-intro-letter">
              <span>H</span>
            </div>
            <div className="about-intro-text">
              <p>
                ello. I’m Banu. I’m a UI/UX designer and frontend developer
                based in Ankara, Turkey. I work at the intersection of design
                and technology, creating digital experiences where visual
                language, interaction, and code come together.
              </p>
            </div>
          </div>

          <div className="about-description">
            <p>
              I’m interested in the relationship between how a product looks,
              how it behaves, and how it is built. From shaping an interface to
              bringing it to life in code, I enjoy being involved in the process
              from concept to final experience.
            </p>
          </div>
        </div>
        <div className="about-logo">
          <img src={logoAbout} alt="Banu Ağgün logo" />
        </div>
      </div>

      <div className="about-sub">
        <div className="about-sub-title">
          <h2>
            Where ideas
            <br />
            take form
          </h2>
        </div>

        <div className="about-sub-text">
          <p>
             From the first stroke of a concept to the final line of logic, I trace an idea until it becomes second nature to the user.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="about-grid">
        {skill.map((item, index) => (
          <div className="about-card" key={item.id}>
            <div className="about-number">
              {item.number || ["i.", "ii.", "iii.", "iv."][index]}
            </div>

            <div className="about-name">
              <h3>{item.name}</h3>

              <div className="about-line"></div>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div> 
      </div>
    </section>
  );
};

export default About;
