import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  const ren = "assets/renmoney.svg";
  return (
    <nav className="Navbar">
      <div className="navbar_main">
      <div className="rightNav">
        <div className="logo">
          <img src={ren} alt="logo" />
        </div>
        <a href="#!">Loans</a>
        <a href="#!">Investment</a>
      </div>
      <div className="leftNav">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
