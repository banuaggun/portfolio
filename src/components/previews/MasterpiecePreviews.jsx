import React from "react";
import Header from "../header/Header";
import PreviewCards from "../preview-cards/PreviewCards";
import codingData from "../../assets/data/coding.json";  
import "./previews.css";

export default function MasterpiecePreviews() {
  return (
    <section>
      <div className="masterpiece-preview"> 
        <Header title="Featured Work" />
        <PreviewCards data={codingData} filterBy="masterpiece" /> 
      </div>
    </section>
  );
}
