import React from "react";
import "./header.css";

const Header = ({ title }) => {
  return (
    <div className="header-area">
      <div className="header">{title}</div>
    </div>
  );
};

export default Header;
