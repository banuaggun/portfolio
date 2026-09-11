import React from "react";
import {
  BehanceIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
} from "../icons/Icons"; 
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
       <p className="footer-credits">
        &copy; {currentYear} Design & Code by <span>Banu Ağgün</span>. All rights reserved.
      </p>

      <div className="mobile-social-icons">
        <a href="https://www.linkedin.com/in/banuaggun/?locale=en-US" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon size={32} color="#000" />
        </a> 
        <a href="https://github.com/banuaggun" target="_blank" rel="noopener noreferrer">
          <GithubIcon size={32} color="#000" />
        </a>
        <a href="https://www.behance.net/banuaggun?locale=tr_TR&" target="_blank" rel="noopener noreferrer">
          <BehanceIcon size={32} color="#000" />
        </a>
        <a href="https://dribbble.com/banuaggun" target="_blank" rel="noopener noreferrer">
          <DribbbleIcon size={32} color="#000" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
