import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/g-lizzy/bat-mitzvah">Bat Mitzvah</Link>
        </li>
        <li>
          <Link to="/g-lizzy/custom">Custom</Link>
        </li>
        <li>
          <Link to="/g-lizzy/prom">Prom</Link>
        </li>
        <li>
          <Link to="/g-lizzy/services">Services</Link>
        </li>
        <li>
          <Link to="/gabrielle/services">Services</Link>
        </li>
         <li>
          <Link to="/gabrielle/custom">custom</Link>
        </li>
         <li>
          <Link to="/gabrielle/cocktail">Services</Link>
        </li>
         <li>
          <Link to="/gabrielle/gowns">Gowns</Link>
        </li>
        <li>
          <Link to="/appointment">Book Appointents</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
