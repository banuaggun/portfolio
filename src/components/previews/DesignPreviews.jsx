import React from "react";
import Header from "../header/Header";
import PreviewCards from "../preview-cards/PreviewCards";
import designData from "../../assets/data/design.json"; 
import "./previews.css";
import Button from "../button/Button";

export default function DesignPreview() {
  return (
    <section>
      <div className="design-preview"> 
        <Header title="Design Cases" />
        <PreviewCards data={designData} /> 
        <Button content="Explore More Designs" path="/design"  />
      </div>
    </section>
  );
}
