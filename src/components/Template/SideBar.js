import React from 'react';
import { Link } from 'react-router-dom';
import meImage from '../../me.png';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={meImage} alt="Profile" />
      </Link>
      <header>
        <h2>Hemanth Kumar B</h2>
        <p>
          <a href="mailto:hemanthkumarhk019@gmail.com">hemanthkumarhk019@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Hemanth, currently perceiving my B E degree in the field of Civil Engineering
        from Malnad College of Engineering, Hassan.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Hemanth Kumar B 2024
      </p>
    </section>
  </section>
);

export default SideBar;
