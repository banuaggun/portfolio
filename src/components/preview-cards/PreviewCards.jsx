import React from "react";
import { BehanceIcon, GithubIcon } from "../icons/Icons"; 
import "./preview-cards.css";

const PreviewCards = ({ data = [], filterBy = "featured" }) => {

  const filteredCards = data.filter((card) => card[filterBy]);

  const reversedCards = [...filteredCards].reverse();

  return (
    <div className="card-area">
      {reversedCards.map((card) => {
        const links = [
          {
            url: card.links?.behance || card.url1, 
            label: <BehanceIcon />,
            accessibleName: `${card.title} Behance Project Page`,
          },
          {
            url: card.links?.github || card.url2,
            label: <GithubIcon />,
            accessibleName: `${card.title} GitHub Source Code`,
          },
          { 
            url: card.links?.live || card.url3, 
            label: "Live", 
            accessibleName: `${card.title} Live Site` 
          },
        ].filter((link) => link.url);

        return (
          <div className="card" key={`preview-card-${card.id}`}>
            <div className="card-top">
              <div className="title"></div>
              <div className="head"><span></span></div>
            </div>
            
            <div
              className="image"
              style={{ backgroundImage: `url(${card.image})` }}  
              role="img"
              aria-label={card.imageText || `${card.title} Appearance of Project`}
            ></div>

            <div className="info">
              <p className="name">{card.title}</p>
              <div className="deets">{card.subtitle} <br /></div>
            </div>

            <div className="button-area">
              {links.map((link, i) => (
                <a
                  key={`link-${card.id}-${i}`} 
                  className="button"
                  href={link.url}
                  rel="noreferrer noopener"
                  target="_blank"
                  aria-label={link.accessibleName}
                >
                  <span className="label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewCards;
