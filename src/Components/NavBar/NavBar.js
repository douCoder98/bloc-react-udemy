import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NarBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const changeWidth = () => {
    setLargeur(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items"><Link to="/">Accueil</Link></li>
          <li className="items"><Link to="/ecrire">Ecrire</Link></li>
          <li className="items"><Link to="/contact">Contacts</Link></li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  );
}

export default NarBar;
