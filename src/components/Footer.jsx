import React from "react";
import { Link } from "react-router-dom";
import { contact } from "../data/projects";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Azmeer Farhan</h3>
            <p>Backend Engineer & Distributed Systems Builder</p>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="footer-section">
            <h4>External</h4>
            <nav className="footer-nav">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={`mailto:${contact.email}`}>Email</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Azmeer Farhan. All rights reserved.</p>
          <p className="footer-built">
            Built with React + Vite. Deployed to static hosting.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
