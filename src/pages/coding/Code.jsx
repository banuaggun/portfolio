import React from "react";
import Codes from "../../assets/data/coding.json";
import "./main-coding.css";
import Cards from "../../components/cards/Cards";
import flowerBgTop from "../../assets/images/page-images/image-1.png";
import abstractBgMiddle from "../../assets/images/page-images/image-5.png";
import decorationBgBottom from "../../assets/images/page-images/image-4.png";

const Code = () => {
  return (
    <section className="coding" aria-label="My Coding Projects">
      <div className="coding-bg-area" aria-hidden="true">
        <img src={flowerBgTop} alt="" className="coding-bg" />
        <img src={abstractBgMiddle} alt="" className="coding-bg-2" />
        <img src={decorationBgBottom} alt="" className="coding-bg-3" />
      </div>

<div className="coding-content-area">
 <div className="coding-header-area">
        <h1>Blueprints</h1>
        <p>
          Interfaces demand technical integrity; code is where visual precision
          meets functionality. From structured frontend architecture to seamless
          responsive layouts, I transform complex logic into high-performance
          web experiences built for stability and speed.
        </p>
      </div>
      <div className="coding-card-area">
        {Codes.map((code, index) => (
          <Cards key={`Codes-${index}`} {...code} />
        )).reverse()}
      </div>
</div>
     
    </section>
  );
};

export default Code;
