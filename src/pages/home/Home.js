import React from "react"; 
import Hero from '../../components/hero/Hero'; 
import DesignPreviews from '../../components/previews/DesignPreviews'; 
import CodingPreviews from '../../components/previews/CodingPreviews'; 
import './style.css';
import MasterpiecePreviews from "../../components/previews/MasterpiecePreviews";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />  
      <MasterpiecePreviews />
      <DesignPreviews /> 
      <CodingPreviews />
    </div>
  );
};

export default Home;
