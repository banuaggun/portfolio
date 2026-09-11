import React from "react";
import "./hero.css";

const HeroBadge = ({ text, className }) => {
  return <span className={`hero-badge ${className}`}>{text}</span>;
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-top-line-group">
          <hr className="hero-line" />
          <HeroBadge text="UI & UX Designer" className="badge-right" />
        </div>

        <div className="hero-name-group">
          <div className="hero-titles-left">
            <h1 className="hero-title name-first">BANU</h1>
            <h1 className="hero-title name-last">AĞGÜN</h1>
          </div>

          <div className="hero-mini-bio glass-effect">
            <p>
              Sculpting digital experiences through intentional design and
              refined code. I shape the future of human-technology interaction
              by turning sophisticated logic into seamless user journeys.
            </p>
          </div>
        </div>

        <div className="hero-bottom-line-group">
          <HeroBadge text="Frontend Developer" className="badge-left" />
          <hr className="hero-line" />
        </div>
      </div>
    </section>
  );
}
