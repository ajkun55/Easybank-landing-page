import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar({ counter }) {
  const [open, setOpen] = useState(false);

  function toggleNav() {
    setOpen(!open);
  }
  const list = (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
    </>
  );

  const openMobileNav = (
    <img
      src="/images/icon-hamburger.svg"
      alt=""
      onClick={toggleNav}
      className="toggle-btn"
    />
  );
  const closeMobileNav = (
    <>
      <img
        src="/images/icon-close.svg"
        alt=""
        onClick={toggleNav}
        className="toggle-btn"
      />
      <ul className="nav-mobile">{list}</ul>
    </>
  );

  return (
    <div className="nav-container container">
      <div className="left-part">
        <img src="/images/logo.svg" alt="" className="logo" />

        <div className="nav-mobile-container">
          {open ? closeMobileNav : openMobileNav}
        </div>

        <div className="nav-desk-container">
          <ul className="nav-desk">{list}</ul>
        </div>
      </div>

      <button className="cta">Request Invite</button>
    </div>
  );
}
