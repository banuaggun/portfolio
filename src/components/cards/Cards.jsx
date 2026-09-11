import React from "react";
import { BehanceIcon, GithubIcon } from "../icons/Icons";
import "./cards.css";

const Cards = ({ image, imageText, title, subtitle, url1, url2, url3 }) => {
  const links = [
    {
      url: url1,
      label: <BehanceIcon />,
      accessibleName: `${title} Behance Project Page`,
    },
    {
      url: url2,
      label: <GithubIcon />,
      accessibleName: `${title} GitHub Source Code`,
    },
    { url: url3, label: "Live", accessibleName: `${title} Live Site` },
  ].filter((link) => link.url);
  return (
    <div className="cards">
      <div className="cards-content">
        <div className="cards-content-top">
          <div className="cards-empty title"></div>

          <div className="cards-subtitle head">
            <span></span>
          </div>
        </div>
      </div>
      <div
        className="cards-image"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={imageText || `${title} Appearance of Project`}></div>

      <div className="cards-info">
        <h1 className="name">{title}</h1>
        <p className="cards-info-detail">{subtitle}</p>
      </div>

      <div className="buttons">
        {links.map((link, i) => (
          <a
            key={i}
            className="button"
            href={link.url}
            rel="noreferrer noopener"
            target="_blank"
            aria-label={link.accessibleName}>
            <span className="label">{link.label} </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
