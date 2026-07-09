import { useState } from "react";

import Logo from "../../assets/images/logo-bookmark.svg";
import Hambuger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";
import Facebook from "../../assets/images/icon-facebook.svg";
import Twitter from "../../assets/images/icon-twitter.svg";

import "./nav.scss";

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <header aria-labelledby="main-title" className={active ? "active" : ""}>
      <h1 id="main-title">
        <a href="/">
          <img src={Logo} alt="Bookmark Company Logo" />
        </a>
      </h1>
      <nav className={active ? "active nav" : "nav hidden"}>
        <ul className="nav-list">
          <li className="nav-list__item">
            <a href="#!">Features</a>
          </li>
          <li className="nav-list__item">
            <a href="#!">Pricing</a>
          </li>
          <li className="nav-list__item">
            <a href="#!">Contacts</a>
          </li>
          <li className="nav-list__item">
            <a href="#!" className="btn btn-tertiary">
              Login
            </a>
          </li>
        </ul>
        <div className="nav-footer">
          <a href="#!">
            <img src={Facebook} alt="Visit our facebook page" />
          </a>
          <a href="#!">
            <img src={Twitter} alt="Visit our twitter account" />
          </a>
        </div>
      </nav>

      <button onClick={() => setActive(!active)}>
        {!active ? (
          <img src={Hambuger} alt="" aria-hidden="true" />
        ) : (
          <img src={Close} alt="" aria-hidden="true" />
        )}
      </button>
    </header>
  );
};
export default Nav;
