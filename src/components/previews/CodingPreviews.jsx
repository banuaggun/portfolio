import React from "react";
import Header from "../header/Header";
import PreviewCards from "../preview-cards/PreviewCards";
import codingData from "../../assets/data/coding.json"; 
import "./previews.css";
import Button from "../button/Button";

export default function CodingPreview() {
  return (
    <section>
      <div className="coding-preview"> 
        <Header title="Development" />
        <PreviewCards data={codingData} /> 
        <Button content="Explore More Projects" path="/coding" />
      </div>
    </section>
  );
}
