import React from "react";
import Designs from "../../assets/data/design.json";
import "./main-design.css";
import Cards from "../../components/cards/Cards";
import flowerBgLeft from "../../assets/images/page-images/image-2.png";
import abstractBgRight from "../../assets/images/page-images/image-3.png";
import decorationBgBottom from "../../assets/images/page-images/image-4.png";

const Design = () => {
  return (
    <section className="design" aria-label="My Design Projects">
      <div className="design-bg-area" aria-hidden="true">
        <img src={flowerBgLeft} alt="" className="design-bg" />
        <img src={abstractBgRight} alt="" className="design-bg-2" />
        <img src={decorationBgBottom} alt="" className="design-bg-3" />
      </div>

      <div className="design-content-area">
        <div className="design-header-area">
          <h1>Artifacts </h1>
          <p>
            Design is more than aesthetics; it’s about clarity, intuition, and
            seamless interaction. From conceptual layouts to pixel-perfect
            interfaces, I bridge user needs with clean, modern aesthetics to
            create high-fidelity digital solutions.
          </p>
        </div>
        <div className="design-card-area">
          {Designs.map((design, index) => (
            <Cards key={`Designs-${index}`} {...design} />
          )).reverse()}
        </div>
      </div>
    </section>
  );
};

export default Design;
