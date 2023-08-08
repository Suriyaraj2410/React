import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="header__logo"
        alt="amazon_logo"
      ></img>
      <div className="header__search">
        <input type="text" className="header_search" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionline1">Hello Guest</span>{" "}
          <span className="header__optionline2">Signin</span>{" "}
        </div>
        <div className="header__option">
          <span className="header__optionline1">Returns </span>{" "}
          <span className="header__optionline2">&Orders</span>{" "}
        </div>
        <div className="header__option">
          <span className="header__optionline1">Your</span>{" "}
          <span className="header__optionline2">Prime</span>{" "}
        </div>
        <div className="header__option">
          <span className="header__optionline1"></span>{" "}
          <span className="header__optionline2"></span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
