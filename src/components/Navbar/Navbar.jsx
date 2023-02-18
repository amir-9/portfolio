import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { navLinks, images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <img className="navbar__logo-image" src={images.logo} alt="logo" />
      </div>
      <ul className="navbar__links">
        {navLinks.map((navLink, index) => (
          <li
            className="navbar__links__link-container p-text"
            key={navLink + index}
          >
            <div />
            <a className="navbar__links__link-link" href={`#${navLink}`}>
              {navLink}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((navLink, index) => (
                <li key={navLink + index}>
                  <a href={`#${navLink}`}>{navLink}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
